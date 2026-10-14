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
    locationSecondary,
    urlReviews,
    personQuotes,
    componentProjectProgress,
    componentReviews,
} = App;

class TestimonialsSection extends HTMLElement {
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
<section ${seoSection(`testimonials`)} class="" id="testimonials" data-version="${VERSION}">
    <div class="container-md row items-center" style="gap: .8em;">

        <div class="row txt-center">
            <p class="txt-center">Testimonials</p>
            <h2 data-animate="scaleIn" ${seoH(`testimonials`)} class="text-revel-onscrol">
            <span class="txt-tertiary splitWord">Real People,</span> <br/><span class="splitWord">Real Results Feedback<span>
            </h2>
            <p class="txt-center">
                <span data-animate="textReveal" class="splitWor" style="">
        What clients and colleagues say about my front-end architecture and design work. See what my users are truly accomplishing with honest, and project-based reviews
                </span>
            </p>
        </div>

        ${componentProjectProgress()}

        ${componentReviews()}

        <ul class="carousel bg-raise" style="list-style: none; gap: 0em; border-radius: 2em; inline-size: min(100%, 64rem); " >
            ${personQuotes
                .map(
                    (person, index) => `
                <li data-skeleton data-visible class="flex carousel-item " style="max-inline-size: 100%; ">
            <blockquote id="quote-${index + 1}" class="row items-center" style="flex: 1; gap: .8em; padding: 1.6em;">

                <b>
                    <span class="star txt-primary splitWord" style="inline-size: .8em;">${person?.star} • 4.9/5</span>
                </b>

                <q class="h6 quote txt-center splitWord">${person?.quote}</q>

                <div class="flex j-center txt-left">
                            <img ${seoImg(person?.photo, 'Client')} style="inline-size: 1.5em;" class="photo"/>

                            <div class="row" style="margin-inline-end: 1em; gap: .4em;">
                                <a ${seoA()} href="${person?.link}" class="link"><b class="name txt-primary splitWord">${person?.name}</b></a>
                                <p class="title splitWord">${person?.title}</p>
                            </div>

                            <b class="platform txt-primary splitWord" style="border-inline-start: 1px solid var(--txt-tertiary); padding-inline-start: 1.6em;">${person?.platform}</b>
                </div>

            </blockquote>
            </li>
                `
                )
                .join('')}
        </ul>

        <div class="flex j-center" style="padding-block: 1.6em; ">
            <a ${seoA()} href="${urlReviews}"><button ${seoButton()} style="inline-size: fit-content;"  class="btn-primary splitWord">
            Add Review ↗
            </button></a>
        </div>


    </div>
   </section>
    `;

        // 3. Swap the live component
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('testimonials-section')) {
    customElements.define('testimonials-section', TestimonialsSection);
}
