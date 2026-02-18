const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const axios = require('axios');

/** * Logic Automation: Using your date-based versioning preference 
 * to ensure fresh processing every time the script runs.
 */
const VERSION = new Date().getDate();
const API_KEY = process.env.AI_API_KEY;

async function generateAltText(imageSrc) {
  // Return brand-consistent fallback if API Key is missing to avoid script failure
  if (!API_KEY) return "Visual content for hassanbiswas.github.io";

  try {
    // High-performance API call to Gemini 1.5 Flash
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{ 
            text: `Generate a short, SEO-friendly alt text (10 words or less) for this image URL: ${imageSrc}. Focus on UI/UX context for a web developer portfolio.` 
          }]
        }]
      }
    );

    // Clean the response and remove any potential quotes
    const altText = response.data.candidates[0].content.parts[0].text.trim().replace(/"/g, '');
    return altText;
  } catch (error) {
    console.error(`Error fetching alt for ${imageSrc}:`, error.message);
    return "Professional web design element"; // Fail-safe fallback
  }
}

async function processHTMLFiles(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Recursive search while skipping heavy/unnecessary directories
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        await processHTMLFiles(filePath);
      }
    } else if (file.endsWith('.html')) {
      const html = fs.readFileSync(filePath, 'utf8');
      const dom = new JSDOM(html);
      const document = dom.window.document;
      
      // Target only images missing alt text or having empty alt tags
      const images = document.querySelectorAll('img:not([alt]), img[alt=""]');

      if (images.length === 0) continue;

      for (const img of images) {
        const src = img.getAttribute('src');
        if (!src) continue;

        // Convert relative paths to absolute URLs so the AI can access the image
        const fullSrc = src.startsWith('http') 
          ? src 
          : `https://hassanbiswas.github.io/${src.replace(/^\//, '')}`;
        
        const altText = await generateAltText(fullSrc);
        img.setAttribute('alt', altText);
        
        console.log(`[v${VERSION}] Added alt to ${src} in ${file}`);
      }

      // Save the updated HTML back to the file
      fs.writeFileSync(filePath, dom.serialize(), 'utf8');
    }
  }
}

// Start the automation from the root directory
if (!API_KEY) {
  console.warn("Warning: AI_API_KEY is not set. Using brand fallbacks.");
}

processHTMLFiles('./').then(() => {
  console.log(`Automation V${VERSION} complete. No maintenance required.`);
}).catch(err => {
  console.error("Automation failed:", err);
});
                                       
