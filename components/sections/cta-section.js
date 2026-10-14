import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    seoSection,
    seoH,
    seoA,
    seoImg,
    seoButton,
    brandLogo,
    componentReviews,
    urlMobile,
} = App;

class CtaSection extends HTMLElement {
    connectedCallback() {
        const heading = this.getAttribute('heading') || 'attribute: heading';
        const description = this.getAttribute('description') || 'attribute: description';

        // 1. Calculate 'h' directly based on DOM position
        const parent = this.parentElement || document.querySelector('main')[0];
        const index = parent ? Array.from(parent.children).indexOf(this) : 0;
        const h = index === 0 ? 0 : 1;

        // 2. Safely clamp tag level between 1 and 6
        const tagLevel = Math.min(h + 1, 6);

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
    <section ${seoSection(`cta`)} class="cta-section  bg-primary" id="cta" data-version="${VERSION}">
        <div class="container-md bg-primary row " style="border-radius: 3.2em; gap: .8em; border: 1px solid var(--bg-secondary); position: relative; ">

            <span inert class=" dots" style=""></span>

            <h2 data-animate="scaleIn" ${seoH(`cta`)} class="h1 ">
                <span class="splitWord">Have project? Need website</span> <span class="txt-tertiary splitWord">or</span> <span class="splitWord">looking for Developer? I'm here!</span>
            </h2>

            <div class="flex" style="gap: .8em; " >
                ${componentReviews()}
                <a ${seoA()} href="${urlMobile}"><input class="btn-primary splitWord" type="submit" value="Wanna Call" style=""/></a>
            </div>

        </div>
    </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('cta-section')) {
    customElements.define('cta-section', CtaSection);
}
