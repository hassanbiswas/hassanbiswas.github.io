/**
 * Agentic AI Logic - Hassan Biswas
 * Built for: hassanbiswas.github.io
 */

const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

// 1. Signature Version Logic: YY.MM.DD
const VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');

// Initialize Gemini with your secret key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startAgent() {
    console.log(`[Agent] Initializing Build: ${VERSION}`);

    const model = ai.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are Hassan's Agentic AI. Always respect HSL(240, 80%, 50%) branding. Focus on accessibility and SEO."
    });

    // Example: Asking the AI to check a task or generate a release note
    const prompt = "Audit the current repository state and prepare a release summary.";
    const result = await model.generateContent(prompt);
    const report = result.response.text();

    // 2. Automation: Save the version and report
    const buildData = `
/* Automated Build Metadata */
const VERSION = "${VERSION}";
const STATUS = "Stable";
const LAST_REPORT = \`${report}\`;
    `;

    fs.writeFileSync('./assets/version-control.js', buildData);
    console.log(`[Success] Logic preserved and version ${VERSION} deployed.`);
}

startAgent().catch(console.error);
