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
        const clipedSection = (
            value = 1,
            direction = null,
            wrap = null,
            style = null,
            attribute = null,
            clipPath = null,
            className = null
        ) => {
            return `
<div class="servicesCarousel screenHeight clipper container-xl" ${attribute} style="--direction: ${direction}; --value: ${value}; --wrap: ${wrap}; user-select: none; --clip-path: polygon(${clipPath}); clip-path: var(--clip-path); ${style}; overflow: clip scroll; grid-area: 1 / 1; view-timeline: --serviceCarousel block;">

    ${servicesPrimary
        .map(
            (service, index) => `
    <div id="service-${index + 1}_${direction}" class="border service-${index + 1} serviceCard" style=" block-size: 100dvh; grid-area: 1 / 1; z-index: calc(-1 * sibling-index());">

        <div class="scene screenHeight" style="position: relative;">
            <div class="${className} serviceCarousel layer itemCard stacking-container screenHeight" style="gap: .8em; position: relative; position: fixed; inset: 0; opacity: 1; max-inline-size: 128rem; margin-inline: auto;">



                <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="overflow: visible; user-select: none;" >
                    ${txtStroke(stripedCurrency(service.price), 'var(--txt-primary)', '2.8')}
                </svg>

                <div class="row even-row items-center content-center" style="gap: 3em;">
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
    </div>
    `
        )
        .join('')}

</div>
        `;
        };

        //  CallBack
        template.innerHTML = `
<section ${seoSection(`services`)} class="stacking-container" id="services" style="--snapType: proximity; position: relative; align-items: start;" data-version="${VERSION}">


        <!-- //Right Part ; original, base & main -->
        ${clipedSection(1, `column`, `wrap`, `background: --alpha(#000, 0);`, `data-type="original" `, `50% 0, 100% 0, 100% 100%, 50% 100%`, `serviceCarouselOne`)}
        <!-- Left Part// -->


        <!-- //Left Part ; duplicate & clip -->
        ${clipedSection(-1, `column-reverse`, `wrap-reverse`, `z-index: -2;`, `aria-hidden="true" data-type="duplicate"`, `0 0, 50% 0, 50% 100%, 0 100%`, `serviceCarouselTwo`)}
        <!-- Right Part// -->


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
