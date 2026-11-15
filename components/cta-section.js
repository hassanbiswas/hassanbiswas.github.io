import {
    VERSION,
    Section,
    seoSection,
    seoH,
    seoA,
    seoImg,
    seoButton,
    brandLogo,
    componentReviews,
    urlMobile,
    urlWhatsapp,
} from '/index.js';

class CtaSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
    <section ${seoSection(`cta`)} class="cta-section  bg-primary" id="cta" data-version="${VERSION}">
        <div class="container-md bg-primary row " style="border-radius: 3.2em; gap: .8em; border: 1px solid var(--bg-secondary); position: relative; ">

            <span inert class=" dots" style=""></span>

            <h2 data-animate="scaleIn" ${seoH(`cta`)} class="splitWord">
                Let's work together!
            </h2>

            <div class="flex" style="gap: .8em; " >
                ${componentReviews()}
                <a ${seoA()} href="${urlWhatsapp}"><input class="btn-primary splitWord" type="submit" value="Wanna Call" style=""/></a>
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
