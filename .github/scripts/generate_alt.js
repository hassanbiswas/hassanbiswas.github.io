const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Versioning logic as per your preference
const VERSION = new Date().getDate();

async function processFiles(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await processFiles(filePath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf8');
            const dom = new JSDOM(content);
            const document = dom.window.document;
            const images = document.querySelectorAll('img');
            let modified = false;

            images.forEach(img => {
                // Logic: check if alt is missing OR if it is an empty string
                if (!img.hasAttribute('alt') || img.getAttribute('alt') === "") {
                    console.log(`Fixing image in ${file}: ${img.src}`);
                    
                    // Replace with your AI API call logic
                    img.setAttribute('alt', "Descriptive UI element for Hassan Biswas portfolio");
                    modified = true;
                }
            });

            if (modified) {
                fs.writeFileSync(filePath, dom.serialize());
            }
        }
    }
}

processFiles('./').catch(err => console.error(err));
                    
