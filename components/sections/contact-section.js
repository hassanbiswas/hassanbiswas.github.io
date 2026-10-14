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
    begaritola,
    preferedLanguages,
    linksData,
    urlMessenger,
} = App;

class ContactSection extends HTMLElement {
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
    <section ${seoSection(`contact`)} id="contact" class=" py-5" data-version="${VERSION}">
    <div class="container-md">

     <div class="row">

     <div class="row background-map" style="object-fit: cover; overflow: clip;">
       <iframe class="monochrome" src=" ${author.iframeHome}" aria-label="Business Location" title="Business Location" style="border:0; aspect-ratio: 16/6; border-radius: 2em 2em 0 0; background: var(--bg-secondary)" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
       </iframe>
     </div>

<div class="ph-wrapper">
        <h2 data-animate="scaleIn" ${seoH(`contact`)} style="display: inline;" class="h2 txt-primary"><span class="splitWord">I help ambitious brands stand out through</span> <a ${seoA()} aria-label="Hassan Biswas Home Page" href="/"><img ${seoImg(faviconAuthor, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> <span class="splitWord">bold design and digital strategies.</span>
       </h2>
       <p data-animate="scaleIn" style="display: inline; font-weight: bold;" class="h2 txt-tertiary">
        <span class="splitWord">Ready to scale your brand with</span> <a ${seoA()} aria-label="Business Profile" href="${begaritola}"><img ${seoImg(author.photo, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> <span class="splitWord">${author.name}?</span>
        </p>
</div>

       <div class="flex no-wrap items-start">
<div class="row">

        </div>
        <div style="flex: 1; flex-basis: 23rem; gap: var(--space-xs);" class="row">

 <h3 class="p txt-tertiary">Languages:</h3>
 <ul style="list-style: none;" class="flex">
   ${preferedLanguages
       .map(
           (language, index) => `
     <li><span class="p txt-tertiary">[0${index + 1}]</span> ${language}</li>
  `
       )
       .join('')}
 </ul>
      <div style="flex: 1; gap: .6em" class="row ">
 <h3 class="p txt-tertiary">Links:</h3>
 <div class="col" style="gap: .6em; ">
       ${linksData
           .map(
               data => `
       <div class="flex col-md-2 gap-1 no-wrap no-grow items-start">
        <img ${seoImg(data.favicon, data.title)} style="inline-size: 1.5em;" class="squar"/>
        <a ${seoA()} aria-label="${data.title}" href="${data.link}"><p>${data.name}</p></a>
       </div>
       `
           )
           .join('')}
</div>
      </div>
        </div>
       </div>
     </div>

      <div class="flex j-center">
 <a ${seoA()} href="/vcf" style="text-decoration: none; color: var(--brand-primary);">❯ <b class="splitText">Download VCF</b></a>
<p class="txt-tertiary">or connect</p>
        <a ${seoA()} aria-label="messenger" style="inline-size: 4em;" class=”pill squar rounded" href="${urlMessenger}">
 <img ${seoImg(getFavicon(`m.me`, 50), `Messenger`)} class=”pill squar rounded"/>
        </a>
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
if (!customElements.get('contact-section')) {
    customElements.define('contact-section', ContactSection);
}
