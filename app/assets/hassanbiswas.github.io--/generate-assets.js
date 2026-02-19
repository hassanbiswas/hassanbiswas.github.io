const VERSION = 19;
const fs = require('fs');
const path = require('path');

const VERSION_DATE = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://hassanbiswas.github.io';
const BRAND_COLOR = '#1a1ae6'; // Equivalent to HSL(240, 80%, 50%)

// --- 1. SITEMAP LOGIC ---
const CONFIG = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/about/': { priority: 0.8, changefreq: 'monthly' },
  '/services/': { priority: 0.8, changefreq: 'monthly' },
  '/contact/': { priority: 0.7, changefreq: 'monthly' }
};

const EXCLUSIONS = {
  folders: ['dist', 'node_modules', '.git', '.github', 'assets', 'components', 'draft', 'error', 'freefire', 'nid', 'trash'],
  files: ['README.md', 'generate-assets.js', 'googledb2beed158567cde.html', 'heartbeat.json', 'lighthouserc.json', 'manifest.webmanifest', 'package.json', 'sw.js', '404.html', 'favicon.ico', 'favicon.svg', 'offline.html']
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
      let urlPath = filePath.replace(process.cwd(), '').replace(/\/g, '/').replace(/index\.html$/, '');
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
}).join('
');

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

# Last updated: ${VERSION_DATE}`.replace(/^\s+/gm, '');
fs.writeFileSync('robots.txt', robots);

// --- 3. MANIFEST LOGIC ---
const manifest = {
  "short_name": "Web Developer",
  "name": "Web Developer : Hassan Biswas",
  "description": "Freelance Front-End Developer & Website Designer specializing in modern, mobile-ready, and SEO-friendly custom website design.",
  "start_url": "/",
  "display": "standalone",
  "theme_color": BRAND_COLOR,
  "background_color": BRAND_COLOR,
  "orientation": "portrait",
  "icons": [
    { "src": "https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s192-c-no", "type": "image/png", "sizes": "192x192", "purpose": "any" },
    { "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+PHBhdGggZmlsbD0iaHNsKDI0MCwgODAlLCA1MCUpIiBkPSJNNCA0aDE4NHYxODRINFoiIHN0eWxlPSJwb2ludGVyLWV2ZW50czpub25lIi8+PHBhdGggZmlsbD0iaHNsKDI0MCwgODAlLCA1MCUpIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTY2LjQ4MSA2NC41MTloLS40OTNsLS4zMDgtLjMxOS4yNDQuMDkzLjE1NC0uMDQ2Yy0uMDkgMC0zMi4zNTItMzAuNTk5LTMyLjM1Mi0zMC41OTloNjEuODE1VjMzLjVjMzQuNzY5IDAgNjIuOTU5IDI3Ljk4OSA2Mi45NTkgNjIuNDk5IDAgMzQuNTE2LTI4LjE5IDYyLjUwMS02Mi45NTkgNjIuNTAxdi0uNzFsLTMwLjA4NC0zMC42NjJjLTEuNjkzLTEuNDA5LTguODktOC43NC0xNS45NDctMTUuODkxLTguMDI3LTguMTQ1LTE2LjAxMC0xNi4zMi0xNi4wMTAtMTYuMzJWNjQuNTE5aDMyLjEzbDI5LjkxMSAzMC40NDl2My4wMzFjLTguMjMzLS4yNzUtMzAuMjM2LTEuMTE1LTMwLjIzNi0xLjExNS0uMTg2LS4xNzguNDM5IDI4LjY5LjUxNSAzMi4xNzVoMjkuNzIxdi0uNDI4YzE3LjYwNSAwIDMxLjg3Mi0xNC4yOTQgMzEuODcyLTMxLjkzcy0xNC4yNjctMzEuOTI5LTMxLjg3Mi0zMS45Mjl2LS40NjVINjUuOTQ1ek05OC41NjYgOTcuMzVjMCAuMDI3LTEuMTU4LS4wMjEtMy4wMjUtLjA3di0yLjk3OHoiIHN0eWxlPSJwb2ludGVyLWV2ZW50czpub25lIi8+PC9zdmc+", "type": "image/svg+xml", "sizes": "any", "purpose": "maskable" }
  ],
  "shortcuts": [
    { "name": "Messenger", "url": "https://m.me/hassanbiswas.github.io", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=messenger.com&sz=96", "sizes": "96x96" }] },
    { "name": "Call", "url": "tel:+8801602873384", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=voice.google.com&sz=96", "sizes": "96x96" }] },
    { "name": "G-mail", "url": "mailto:hassanbiswas.github.io+app@gmail.com", "icons": [{ "src": "https://www.google.com/s2/favicons?domain=mail.google.com&sz=96", "sizes": "96x96" }] }
  ],
  "screenshots": [
    { "src": "images/screen-1.svg", "type": "image/svg+xml", "sizes": "any" },
    { "src": "images/screen-2.svg", "type": "image/svg+xml", "sizes": "any" },
    { "src": "images/screen-3.svg", "type": "image/svg+xml", "sizes": "any" }
  ]
};
fs.writeFileSync('manifest.webmanifest', JSON.stringify(manifest, null, 2));
console.log('Sitemap, Robots, and Manifest updated successfully.');
    
