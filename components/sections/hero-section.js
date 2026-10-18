// import BrandLogo from '../ui/brandLogo';
// import Reviews from '../ui/reviews';
import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    Section,
    seoSection,
    seoH,
    seoA,
    seoImg,
    txtFill,
    txtStroke,
    brandLogo,
    componentReviews,
    skills,
    tools,
} = App;

// ### 404.html | Hero component ###
class HeroSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        const heading =
            this.getAttribute('heading') ||
            'Crafting digital experiences that inspire, connect, and grow brands worldwide';
        const description =
            this.getAttribute('description') || '✼ Elevating Modern Digital Experiences.';

        const color = `var(--txt-primary)`,
            fontSize = `--font(1.2rem, 1.8rem)`,
            text = heading;

        const scrollerGroup = (style = '', values = '', childVal = '') => {
            return `
                <div ${values} class="scrollerGroup flex nowrap" style="${style};">

                ${skills
                    .map(
                        skill => `
                        <a ${seoA()} href="${skill.link}" aria-label="${skill.name}" ${childVal}>
                            ${skill.name}
                        </a>
                    `
                    )
                    .join('')}

                ${tools
                    .map(
                        tool => `
                        <a ${seoA()} href="${tool.link}" aria-label="${tool.name}" ${childVal}>
                            ${tool.name}
                        </a>
                    `
                    )
                    .join('')}

                </div>
            `;
        };

        // 2. Create an off-screen Template
        const template = document.createElement('template');
        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
        <section ${seoSection(`hero`)} id="hero" class="dark" data-version="${VERSION}">
        <!-- <span class="container-fluid mesh-gradien gradientShif"></span> -->
        <div class="container-md row items-center custom-containe" style="position: relative; gap: 0; ">
        ${brandLogo()}

        <!-- <svg width="0" height="0">
        <clipPath id="myClip"
        clipPathUnits="objectBoundingBox">
        <path d="
            M .1 0
            L .45 0
            Q .5 0 .5 .05
            Q .5 .1 .55 .1
            L .9 .1
            Q 1 .1 1 .2
            L 1 .9
            Q 1 1 .9 1
            L .55 1
            Q .5 1 .5 .95
            Q .5 .9 .45 .9
            L .1 .9
            Q 0 .9 0 .8
            L 0 .1
            Q 0 0 .1 0
        "/>
        </clipPath>
        </svg> -->


        <div class="row items-center text-items gradient-mask">
            <span style="padding: .4em .8em; gap: .4em" class="flex badge txt-bg-inverse pill a-center"><i class="pill " style="background: #14db14; padding: .4em; "></i> Available for projects</span>
            <h1 data-animate="scaleI" ${seoH(`hero`)}
                class="h1 txt-center splitWord"
                id="brand-title">
                    ${heading}
            </h1>
            <p class="txt-center txt-primary lineClamp splitText">${description}</p>
            <div class="flex content-center" style="gap: 1.6em; padding-block-start: 1.6em;">
                <a ${seoA()} style="text-decoration: none;" href="/resume">
                <buttton style="position: static; border: 0px solid var(--bg-primary); padding: 1.2em 1.6em; " class="btn btn-primary txt-primary bg-primary pill splitText">
                    Resume
                    </button>
                </a>
                <a class="h6 txt-primary pill splitText" href="/#contact" style="border: 0px solid currentColor; ">Contact</a>
            </div>
            ${componentReviews()}

            <div class="scrollerWrapper">
                <div data-visible class="infiniteScroller flex nowrap" style="padding-block: .8em; gap: 0;">
                    ${scrollerGroup(`gap: 2.4em; padding-inline-end: 2.4em;`)}
                    ${scrollerGroup(`gap: 2.4em;`, `aria-hidden="true"`, `aria-hidden="true" tabindex="-1"`)}
                </div>
            </div>

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
if (!customElements.get('hero-section')) {
    customElements.define('hero-section', HeroSection);
}
