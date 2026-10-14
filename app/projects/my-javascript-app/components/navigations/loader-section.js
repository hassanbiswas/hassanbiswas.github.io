// ### offline.html | Loading component ###
import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    author,
    getFavicon,
    faviconAuthor,
    seoA,
    seoImg,
    seoButton,
    brandLogo,
    greetings,
} = App;

class LoaderSection extends HTMLElement {
    connectedCallback() {
        document.getElementsByTagName('body')[0].setAttribute('inert', '');

        const template = document.createElement('template');
        template.innerHTML = `
        <section id="loader" class="" data-version="${VERSION}">
            <div class="container-md content-center">
                <div class="col items-center" style="align-items: center;">
                    <h3 class="greeting txt-center flex items-center" style="block-size: 100%; flex-wrap: nowrap;">
                        <svg data-visible viewBox="0 0 100 100" height="100%" width="100%" sizes="any" style="display: inline;">
                            <text x="50" y="50" text-anchor="middle" id="say-hello" class="loaderSvgDraw" stroke="currentColor" stroke-width=".5" fill="transparent" stroke-dasharry="100" style="font-weight: 800; font-size: --font(2rem, 3.2rem); stroke-dashoffset: 100;"></text>
                        </svg>
                    </h3>
                </div>
            </div>
        </section>
    `;

        const content = template.content.cloneNode(true);
        const sayHello = content.querySelector('#say-hello');
        const loader = content.querySelector('#loader');

        // 1. Initial State Checks
        let i = 0;
        let isPageLoaded = document.readyState === 'complete';

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
            sayHello.textContent = greetings[i];
            i++;

            // Reset loop if we hit the end of the array
            // if (i >= greetings.length) {

            /**
             * The Exit Condition:
             * - Page must be fully loaded (isPageLoaded)
             * - Browser must be online (navigator.onLine)
             */
            if (isPageLoaded) {
                // clearInterval(greetingInterval);

                // Smooth Exit Animation
                loader.style.transition =
                    'clip-path --duration() --ease(), opacity --duration() --ease(), visibility --duration()';
                // Animation

                setTimeout(() => {
                    clearInterval(greetingInterval);
                    loader.style.clipPath = 'circle(0% at center center)';
                    loader.style.opacity = 0;
                    loader.style.visibility = 'hidden';
                    loader.remove();
                    document.getElementsByTagName('body')[0].removeAttribute('inert');
                }, 1000); // 400
            } else if (i >= greetings.length) {
                i = 0;
            }
            /*
 else {
   // Keep looping if offline or still loading
   i = 0;
 }
 */
            // }
        }, 1000); // 200
    }
}
// Define the custom element
if (!customElements.get('loader-section')) {
    customElements.define('loader-section', LoaderSection);
}
