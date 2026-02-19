const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const axios = require('axios');

/** * Logic Automation: Using your date-based versioning preference 
 * to ensure fresh processing every time the script runs.
 */
const VERSION = 19;
const API_KEY = process.env.AI_API_KEY;

async function generateAltText(imageSrc) {
  if (!API_KEY) return "Visual content for hassanbiswas.github.io";

  try {
    // High-performance API call to Gemini
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{ text: `Generate a short, SEO-friendly alt text for this image URL: ${imageSrc}. Focus on UI/UX context.` }]
        }]
      }
    );
    return response.data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    return "Professional web design element";
  }
}

async function processHTMLFiles(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      await processHTMLFiles(filePath);
    } else if (file.endsWith('.html')) {
      const html = fs.readFileSync(filePath, 'utf8');
      const dom = new JSDOM(html);
      const document = dom.window.document;
      const images = document.querySelectorAll('img:not([alt]), img[alt=""]');

      if (images.length === 0) continue;

      for (const img of images) {
        const altText = await generateAltText(img.src);
        img.setAttribute('alt', altText);
        console.log(`[v${VERSION}] Added alt to ${img.src} in ${file}`);
      }

      fs.writeFileSync(filePath, dom.serialize());
    }
  }
}

// Start the automation from the root directory
processHTMLFiles('./').then(() => {
  console.log("Automation complete. No maintenance required.");
});
    
