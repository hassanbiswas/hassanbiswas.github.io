const fs = require('fs');
const path = require('path');

const PAGES = [
  { rel: '', priority: '1.0' },
  { rel: 'about/', priority: '0.8' },
  { rel: 'services/', priority: '0.7' },
  { rel: 'projects/', priority: '0.6' },
  { rel: 'contact/', priority: '0.5' }
];

const BASE_URL = 'https://hassanbiswas.github.io/';
// Using your preferred date logic style
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

try {
  const outputPath = path.join(process.cwd(), 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapContent.trim());
  console.log(`✅ sitemap.xml updated successfully for: ${TODAY}`);
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error);
  process.exit(1); // Ensures GitHub Actions marks it as a failure
}
