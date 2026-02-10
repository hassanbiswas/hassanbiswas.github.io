const fs = require('fs');

const PAGES = [
  { rel: '', priority: '1.0' },
  { rel: 'about/', priority: '0.8' },
  { rel: 'services/', priority: '0.7' },
  { rel: 'projects/', priority: '0.6' },
  { rel: 'contact/', priority: '0.5' },
  { rel: 'testimonials/', priority: '0.4' }
];

const BASE_URL = 'https://hassanbiswas.github.io/';
const TODAY = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(page => `  <url>
    <loc>${BASE_URL}${page.rel}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapContent);
console.log('✅ sitemap.xml updated with date:', TODAY);
