const fs = require('fs');
const path = require('path');

// Automation: Logic-based versioning (Zero Maintenance)
const VERSION = new Date().getDate();
const VERSION_DATE = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://hassanbiswas.github.io';
const BRAND_COLOR = 'hsl(240, 80%, 50%)'; // Your brand color

// --- 1. SITEMAP LOGIC ---
const CONFIG = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/about/': { priority: 0.8, changefreq: 'monthly' },
  '/services/': { priority: 0.8, changefreq: 'monthly' },
  '/contact/': { priority: 0.7, changefreq: 'monthly' }
};

const EXCLUSIONS = {
  folders: ['dist', 'node_modules', '.git', '.github', 'assets', 'components', 'draft', 'error', 'freefire', 'nid', 'trash'],
  files: ['README.md', 'generate-assets.js', 'googledb2beed158567cde.html', 'heartbeat.json', 'lighthouserc.json', 'manifest.webmanifest', 'package.json', 'sw.js', '404.html', 'favicon.ico', 'favicon.svg', 'offline.html', '8886230f8ec14aecb0ba333e57bc135a.txt']
};

const getHtmlFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (isDirectory && EXCLUSIONS.folders.includes(file)) return;
    if (!isDirectory && EXCLUSIONS.files.includes(file)) return;

    if (isDirectory) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      let urlPath = filePath.replace(process.cwd(), '').replace(/\\/g, '/').replace(/index\.html$/, '');
      if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
      if (!urlPath.endsWith('/')) urlPath = urlPath + '/';
      fileList.push(urlPath);
    }
  });
  return [...new Set(fileList)];
};

const allPages = getHtmlFiles(process.cwd());
const sitemapEntries = allPages.map(page => {
  const settings = CONFIG[page] || { priority: 0.5, changefreq: 'monthly' };
  return `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${VERSION_DATE}</lastmod>
    <changefreq>${settings.changefreq}</changefreq>
    <priority>${settings.priority.toFixed(1)}</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
fs.writeFileSync('sitemap.xml', sitemap);

// --- 2. ROBOTS.TXT LOGIC ---
const robots = `# User-agent: * applies to all search engine bots
User-agent: *
Allow: /
Disallow: /private/
Disallow: /drafts/
Disallow: /node_modules/
Sitemap: ${BASE_URL}/sitemap.xml

# Updated: ${VERSION_DATE} (v${VERSION})`.replace(/^\s+/gm, '');
fs.writeFileSync('robots.txt', robots);

// --- 3. MANIFEST LOGIC ---
const manifest = {
  "short_name": "Web Developer",
  "name": "Web Developer : Hassan Biswas",
  "description": "Freelance Front-End Developer & Website Designer specializing in transforming Figma designs into high-performance, SEO-friendly digital experiences.",
  "start_url": "/",
  "display": "standalone",
  "theme_color": BRAND_COLOR,
  "background_color": BRAND_COLOR,
  "orientation": "portrait",
  "icons": [
    { 
      "src": "https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s400-c-no", 
      "type": "image/png", 
      "sizes": "400x400", 
      "purpose": "any" 
    },
    { 
      "src": "favicon.svg", 
      "type": "image/svg+xml", 
      "sizes": "any", 
      "purpose": "maskable" 
    }
  ],
  "shortcuts": [
    { "name": "Messenger", "url": "https://m.me/hassanbiswas.github.io", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=messenger.com&sz=96", "sizes": "96x96" }] },
    { "name": "Call", "url": "tel:+8801602873384", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=voice.google.com&sz=96", "sizes": "96x96" }] },
    { "name": "G-mail", "url": "mailto:hassanbiswas.github.io@gmail.com", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=mail.google.com&sz=96", "sizes": "96x96" }] }
  ],
  "screenshots": [
    { "src": "images/screen-1.svg", "type": "image/svg+xml", "sizes": "any" },
    { "src": "images/screen-2.svg", "type": "image/svg+xml", "sizes": "any" },
    { "src": "images/screen-3.svg", "type": "image/svg+xml", "sizes": "any" }
  ]
};

fs.writeFileSync('manifest.webmanifest', JSON.stringify(manifest, null, 2));
console.log(`Sitemap, Robots, and Manifest updated successfully (Version Day: ${VERSION}).`);
