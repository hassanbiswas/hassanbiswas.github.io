import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    Section,
    author,
    getFavicon,
    faviconAuthor,
    seoSection,
    seoH,
    seoA,
    seoImg,
    seoButton,
    brandLogo,
    urlMessenger,
    faqs,
} = App;

class FaqsSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
<section ${seoSection(`faqs`)} class="" id="faqs" data-version="${VERSION}">
<div class="container-md row">

    <div class="row items-center txt-center">
        <p class="txt-primar">FAQ's</p>
        <h2 data-animate="scaleIn" ${seoH(`faqs`)}>
            <span class="splitWord">Got questions?</span> <br/><span class="txt-tertiary splitText">I’ve got answers</span>
        </h2>
        <p class="">
            <span class="text-revel-onscrol splitWord">
            Everything you need to know about my process, pricing,
        and how I work
            </span>
        </p>
    </div>

    <div class="col fluidHovere" style=" ">
        ${faqs
            .map(
                (faq, index) => `
                <details class="" name="question">
                    <summary class="flex no-wrap j-between">
                        <h3 class="p question">
                        <span class="txt-tertiary">[0${index + 1}]</span> ${faq.question}
                        </h3>
                        <b class="marker">+</b>
                    </summary>

                    <p class="h6 answer">
                    ${faq.answer}
                    </p>
                </details>
        `
            )
            .join('')}
    </div>

</div>
</section>
    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <section> with the contents of the template immediately.
        this.replaceWith(template.content);
        // Replace the custom element with the content
    }
}
// Define the custom element
if (!customElements.get('faqs-section')) {
    customElements.define('faqs-section', FaqsSection);
}
