const fs = require('fs');
const path = require('path');

// Using your preferred date logic for lastmod
const VERSION_DATE = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://hassanbiswas.github.io';

const CONFIG = {
    '/': { priority: 1.0, changefreq: 'weekly' },
    '/about/': { priority: 0.8, changefreq: 'monthly' },
    '/services/': { priority: 0.8, changefreq: 'monthly' },
    '/contact/': { priority: 0.7, changefreq: 'monthly' }
};

const getHtmlFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (file === 'node_modules' || file === '.git' || file === 'dist') return;

        if (fs.statSync(filePath).isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && file !== '404.html') {
            let urlPath = filePath
                .replace(__dirname, '')
                .replace(/\\/g, '/')
                .replace(/index\.html$/, '');
            
            if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
            if (!urlPath.endsWith('/')) urlPath = urlPath + '/';
            fileList.push(urlPath);
        }
    });
    return [...new Set(fileList)];
};

const allPages = getHtmlFiles(__dirname);

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

try {
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
    console.log(`\x1b[32m%s\x1b[0m`, `✨ Success: Sitemap generated with ${allPages.length} URLs.`);
} catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, '❌ Error:', error.message);
    process.exit(1);
                               }
