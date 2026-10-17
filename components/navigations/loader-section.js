// ### offline.html | Loading component ###
import * as App from '/index.js';

// Destructure array, function, and variables directly
const { VERSION, author, getFavicon, faviconAuthor, seoImg, brandLogo } = App;

class LoaderSection extends HTMLElement {
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section id="loader" data-version="${VERSION}">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
    `;

        const content = template.content.cloneNode(true);
        const loader = content.querySelector('#loader');

        // 1. Initial State Checks
        let isPageLoaded = document.readyState === 'complete',
            end = 6,
            delay = 600;

        let start = 0,
            duration = Math.ceil(delay * 3);
        // DOMContentLoaded | load
        if (!isPageLoaded) {
            window.addEventListener(
                'load',
                () => {
                    isPageLoaded = true;
                },
                { once: true }
            );
        }

        // 2. Insert into DOM
        this.replaceWith(content);

        // 3. Animation Logic with Connectivity Check
        const greetingInterval = setInterval(() => {
            start++;

            // Reset loop if we hit the end of the array
            if (start >= end) {
                if (isPageLoaded) {
                    clearInterval(greetingInterval);
                    // Animation
                    loader.style = '--playState: running';
                    setTimeout(
                        () => {
                            loader.remove();
                        }, // wait for clipEnd
                        duration
                    );
                } else if (start >= end) {
                    start = 0;
                } else {
                    // Keep looping if offline or still loading
                    start = 0;
                }
            }
        }, delay);
    }
}
// Define the custom element
if (!customElements.get('loader-section')) {
    customElements.define('loader-section', LoaderSection);
}
