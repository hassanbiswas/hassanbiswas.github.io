class FaqsSection extends HTMLElement {
    connectedCallback() {
        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section ${seoSection(`faqs`)} class="" id="faqs">
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
