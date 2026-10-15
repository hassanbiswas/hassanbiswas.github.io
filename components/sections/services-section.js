import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    author,
    getFavicon,
    faviconAuthor,
    seoSection,
    seoH,
    seoA,
    seoImg,
    seoButton,
    brandLogo,
    locationSecondary,
    money,
    random,
    clientSatisfaction,
    servicesPrimary,
    txtStroke,
    stripedCurrency,
    coreWebVitals,
    componentSkipSection,
} = App;

class ServicesSection extends HTMLElement {
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
<section ${seoSection(`services`)} class="" id="services" style="--snapType: mandatory; position: relative;" data-version="${VERSION}">
    <div class="container-lg">

        <div class="grid  fade-in-top-containe items-center content-center ">
            <div class="row screenHeight content-center itemCard" style="gap: .8em;">
                <p class="h6 fade-in-to">
                Services <span class="txt-tertiary">by ${author.name}</span>
                </p>
                <h2 data-animate="scaleI" ${seoH(`services`)} class="">
                Services available in <br> ${locationSecondary}.
                </h2>
                <p class="splitWord">High-performance static web development starting from affordable rates (<b>${money(random(75, 80))}</b> – <b>${money(300)}+</b>). Clear pricing, zero hidden fees, and guaranteed <b>${clientSatisfaction}%</b> satisfaction.</p>
            </div>
        </div>

        ${servicesPrimary
            .map(
                (service, index) => `
        <div id="service-${index + 1}" class="service-${index + 1} grid  fade-in-top-containe screenHeight items-center content-center  serviceCard">
            <div class="stacking-container itemCard screenHeight" style="gap: .8em; position: relative;">

                <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="overflow: visible; user-select: none;" >
                    ${txtStroke(stripedCurrency(service.price), 'var(--txt-primary)', '2.8')}
                </svg>

                <div class="row even-row items-center content-center" style="gap: 0.8em;">
                    <div class="empty "></div>
                    <div class="empty "></div>

                    <span data-animate="clipOu" class="service-image"><img ${seoImg(
                        `${service.getImage(index)}`,
                        `Service Image`,
                        `100%`
                    )} style="height: 100%;"/></span>

                    <div class="flex items-center content-center " style="flex-direction: column; gap: .8em;">
                        <h3 class="h5 txt-center splitText">${service.name}</h3>
                        <h4 class="txt-center">
                            <span class="p txt-tertiary splitWord">Starting from</span>
                            <b>${service.price}</b>
                        </h4>
                        <b class="txt-center txt-primary">${service.star} • 4.9/5</b>
                        <p class="txt-center splitWord">${service.description}</p>

                        <ul class="fle items-center content-center d-none" style="column-gap: 2.4em;">
                            <li class="done">Responsive Layout</li>
                            <li class="done">Pixel-perfect accuracy</li>
                            <li class="done">Lighthouse score ${coreWebVitals}+ (<b class="txt-primary">Pro</b>)</li>
                            <li class="done">Modern dark/light theme</li>
                            <li class="done">Multi-page architecture (<b class="txt-primary">Pro</b>)</li>
                        </ul>

                    </div>
                </div>


            </div>

        </div>
        `
            )
            .join('')}

        <!-- ${componentSkipSection()} -->

    </div>
</section>
    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('services-section')) {
    customElements.define('services-section', ServicesSection);
}
