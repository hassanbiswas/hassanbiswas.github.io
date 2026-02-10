const fs = require('fs');
const path = require('path');

// Logic Automation: Using your VERSION style for the lastmod date
const VERSION_DATE = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://hassanbiswas.github.io';

// 1. Your manual priority configuration
const MANUAL_CONFIG = {
    '/': 1.0,
    '/about/': 0.8,
    '/services/': 0.8,
    '/contact/': 0.7
};

// 2. Automated File Discovery
const getHtmlFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        // Skip node_modules and hidden git folders
        if (file === 'node_modules' || file === '.git') return;

        if (fs.statSync(filePath).isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && file !== '404.html') {
            // Normalize path: Remove index.html and handle Windows/Linux slashes
            let urlPath = filePath
                .replace(__dirname, '')
                .replace(/\\/g, '/')
                .replace(/index\.html$/, '');
            
            // Ensure path starts and ends with / for consistency
            if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
            if (!urlPath.endsWith('/')) urlPath = urlPath + '/';
            
            fileList.push(urlPath);
        }
    });
    return [...new Set(fileList)]; // Remove duplicates
};

const allPages = getHtmlFiles(__dirname);

// 3. Generate XML entries
const sitemapEntries = allPages.map(page => {
    // Use manual priority if defined, otherwise default to 0.5 for new subpages
    const priority = MANUAL_CONFIG[page] || 0.5;
    
    return `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${VERSION_DATE}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

// 4. File Write Logic
try {
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
    console.log(`🚀 Sitemap generated with ${allPages.length} pages.`);
} catch (error) {
    console.error('❌ Failed to generate sitemap:', error);
    process.exit(1);
}
