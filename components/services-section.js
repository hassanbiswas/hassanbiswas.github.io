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
    locationSecondary,
    money,
    random,
    clientSatisfaction,
    servicesPrimary,
    txtFill,
    txtStroke,
    stripedCurrency,
    coreWebVitals,
    componentSkipSection,
} = App;

class ServicesSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
<section ${seoSection(`services`)} id="services" class="screenHeight" data-version="${VERSION}">
    <div class="container-xl screenHeight mask" style="display: grid; align-items: center; justify-content: start; overflow-x: auto;">
        <div class="servicesCarousel" style="view-timeline: --serviceImage inline;">

            ${servicesPrimary
                .map(
                    (service, index) => `
            <div id="service-${index + 1}" class="stacking-container service-${index + 1}" style="view-timeline: --serviceCarousel inline; overflow: clip; flex: 1; aspect-ratio: 1/1; padding: 1.6em;">

                    <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="overflow: visible; user-select: none;" >
                        ${txtStroke(stripedCurrency(service.price), 'var(--txt-primary)', '3')}
                    </svg>

                    <div class="row even-row items-center content-center" style="place-items: center; gap: .8em;">
                        <div class="empty "></div>
                        <div class="empty "></div>
                        <div class="empty "></div>

                        <span class="service-image">
                            <img ${seoImg(`${service.getImage(index)}`, `Service Image`, `100%`)} class="serviceImage"/>
                        </span>

                        <div class="flex items-center content-center" style="flex-direction: column; gap: .8em;">
                            <h3 class="h5 txt-center splitText">${service.name}</h3>
                            <h4 class="txt-center">
                                <span class="p txt-tertiary splitWord">Starting from</span>
                                <b>${service.price}</b>
                            </h4>
                            <b class="txt-center txt-primary">${service.star} • 4.9/5</b>
                            <p class="txt-center splitWord">${service.description}</p>
                        </div>
                    </div>

            </div>
            `
                )
                .join('')}

        </div>
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
