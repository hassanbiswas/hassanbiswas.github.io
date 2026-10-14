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
    urlMessenger,
    faqs,
} = App;

class FaqsSection extends HTMLElement {
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
<section ${seoSection(`faqs`)} class="" id="faqs" data-version="${VERSION}">
<div class="container-sm">
    <div class="row">

<div class="row items-start">
       <p class="txt-primar">
        FAQ's
       </p>
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


       <div class="row fluidHovere" style=" ">
 ${faqs
     .map(
         (faq, index) => `
        <details class="" name="question">
<summary class="flex nowrap j-between">
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


<div class="row items-end d-none">
   <div class="flex">
    <input name="agreement" id="agreement" class="pill" checked="" type="radio"/>
    <label for="agreement">
     I agree to the
     <a ${seoA()} href="/privacy-policy">
      Privacy Policy
     </a>
    </label>
   </div>
   <button ${seoButton()} class="pill btn-primary">
    <a ${seoA()} href="${urlMessenger}">Ask on Messenger
    </a>
   </button>

      </div>

     </div>
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
