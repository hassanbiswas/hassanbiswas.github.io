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
    stories,
    thisYear,
    txtFill,
    txtStroke,
    componentSkipSection,
} = App;

class AboutSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        const svgMarginBlock = 'auto'; // -30px auto

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
<section ${seoSection(`about`)} class="bg-primary" style="" id="about" data-version="${VERSION}">

        <div style="gap: 0em; position: relative; position: fixed; inset: 0; max-inline-size: 102.4rem; margin-inline: auto;" class="layer row content-center screenHeight">
        <p class="h6 storyImageOne">
            <span class="txt-tertiary">${author.name}</span> <i>2001 - ${thisYear}</i>
        </p>
        <div style="padding-block: 0em; gap: .8em;" class="col ">
            <h2 ${seoH(`about`)} class="h3 splitWord storyImageOne" style="padding-block-start: .4em;">
            Driven by Quality,<br> Precision & Modern Aesthetics
            </h2>
            <div class="row " style="gap: var(--space-xs); ">
                <p class="splitWord storyImageOne">Having earned a <b>Diploma in Computer Science & Technology</b> and received specialized certification from <b>Utshob Technology Ltd</b> at Sheikh Hasina Software Technology Park, I help clients around the globe establish strong digital identities.</p>
            </div>
        </div>
        </div>

 ${stories
     .map(
         (story, index) => `
    <div class="scene screenHeight" style="position: relative;">

        <div id="story-${index + 1}" class="layer row content-center screenHeight" style="padding-block: 0em; overflow: clip; position: relative; position: fixed; inset: 0; max-inline-size: 102.4rem; margin-inline: auto;opacity: 1;">

            <span inert aria-hidden="true" class="storyImageOne" style="opacity: 1; scale: 1.2; filter: brightness(.7) contrast(.7); position: fixed; inset: 0; "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="bobject-fit: cover; height: 100%;"/></span>

            <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible; user-select: none;"  class="storyImageOne">
                ${txtFill(story.date, 'var(--txt-tertiary)', '2.3')}
            </svg>

            <span inert aria-hidden="true" class="storyImageTwo" style="position: absolute; inset: 30%; margin: auto; block-size: clamp(30rem, 100%, 64rem); aspect-ratio: 9/16; opacity: 1"><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="object-fit: cover; height: 100%;"/></span>

            <svg fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible;" class="storyImageOne">
                ${txtStroke(story.date, 'var(--txt-tertiary)', '2.3')}
            </svg>

            <div class="toCenterContents " >
                <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                    <div class="storyImageOne">
                    <b class="h5 txt-gra" ><span class="txt-primary h2">0${index + 1}</span>/${stories.length}</b> <h3  style="padding-block: 0em; mix-blend-mode: difference; display: inline;" class="h1 splitWord">${story.title}</h3>
                    </div>

                    <div class="emptyCol"></div>
                </div>

                <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                    <div class="emptyCol"></div>

                    <b class="h4 lineClamp splitWord storyImageOne" style="mix-blend-mode: difference; ">${story.desc}</b>
                </div>
            </div>
        </div>

    </div>
 `
     )
     .join('')}

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
