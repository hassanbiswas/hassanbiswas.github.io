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
    stories,
    thisYear,
    txtFill,
    txtStroke,
    componentSkipSection,
} = App;

class AboutSection extends HTMLElement {
    connectedCallback() {
        const heading = this.getAttribute('heading') || 'attribute: heading';
        const description = this.getAttribute('description') || 'attribute: description';

        // 1. Calculate 'h' directly based on DOM position
        const parent = this.parentElement || document.querySelector('main')[0];
        const index = parent ? Array.from(parent.children).indexOf(this) : 0;
        const h = index === 0 ? 0 : 1;

        // 2. Safely clamp tag level between 1 and 6
        const tagLevel = Math.min(h + 1, 6);

        const svgMarginBlock = 'auto auto'; // -30px auto

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
<section ${seoSection(`about`)} class=" bg-primary  screenHeigh snappyContaine " style="--snapType: mandatory;" id="about" data-version="${VERSION}">
    <div style="gap: 0em;" class="row content-center screenHeight">
      <p data-animate="scaleIn" class="h6">
        <span class="txt-tertiary">${author.name}</span> <i>2001 - ${thisYear}</i>
      </p>
      <div style="padding-block: 0em; gap: .8em;" class="col ">
        <h2 ${seoH(`about`)} data-animate="scaleIn" class="h3 splitWord" style="padding-block-start: .4em;">
        Driven by Quality,<br> Precision & Modern Aesthetics
        </h2>
        <div class="row " style="gap: var(--space-xs); ">
            <p data-animate="scaleIn" class="splitWord">Having earned a <b>Diploma in Computer Science & Technology</b> and received specialized certification from <b>Utshob Technology Ltd</b> at Sheikh Hasina Software Technology Park, I help clients around the globe establish strong digital identities.</p>
            <a data-visible class="p splitText" href="/about#story-1">
                ❯ View Story
            </a>
        </div>
      </div>
    </div>

 ${stories
     .map(
         (story, index) => `
    <div data-pin="true" id="story-${index + 1}" class="row content-center screenHeight" style="padding-block: 0em; overflow: clip; position: relative; ">

        <span inert aria-hidden="true" data-animate="scaleIn" class="story-image mas" style="filter: blur(3px) opacity(.3); position: absolute; inset: 0; "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="bobject-fit: cover; height: 100%;"/></span>

        <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible; user-select: none; " >
            ${txtFill(story.date, 'var(--txt-tertiary)', '2.3')}
        </svg>

        <span inert aria-hidden="true" data-animate="clipIn" class="story-imageCliped " style="clip-path: inset(30%); opacity: 1; position: absolute; inset: 0; filter: brightness(.7); "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="object-fit: cover; height: 100%;"/></span>

        <svg fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible; " >
            ${txtStroke(story.date, 'var(--txt-tertiary)', '2.3')}
        </svg>

        <div class="toCenterContents " >
            <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                <div><p class="h6 txt-gra"><span class="txt-primary h2">0${index + 1}</span>/${stories.length}</p> <h3  data-animate="scaleIn" style="padding-block: 0em; mix-blend-mode: difference; display: inline;" class="h1 splitWord">${story.title}</h3></div>

                <div class="emptyCol"></div>
            </div>

            <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                <div class="emptyCol"></div>

                <div data-animate="fadeI" style="gap: .4em;" class="row">
                    <p class="fade-in-to h6 lineClamp splitWord" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: clip; mix-blend-mode: difference; ">${story.desc}</p>
                    <a data-visible ${seoA()} aria-label="${story.ariaLabel}" class="splitText" href="${story.link}">${story.linkText} ↗</a>
                </div>
            </div>
        </div>
      </div>

 `
     )
     .join('')}

    <!-- ${componentSkipSection()} -->


   </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('about-section')) {
    customElements.define('about-section', AboutSection);
}
