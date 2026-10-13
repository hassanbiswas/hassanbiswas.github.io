class FooterSection extends HTMLElement {
    connectedCallback() {
        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
<footer ${footer()} ${seoSection(`footer`)} class="" id="footer">
   <div class="container-lg row gap-4 py-5">
    <div class="flex j-center">
      <form class="flex">
        <label style="opacity: 1;" class="d-non txt-tertiary" for="system-theme">Choose Theme:</label>
        <select id="system-theme" name="system-theme" class="pill btn-primary" style="cursor: pointer;">
 <option value="default">Default</option>
 <option value="light">Light</option>
 <option value="dark">Dark</option>
        </select>
      </form>
    </div>
    <div class="col">
     <div class="row" style="position: relative; overflow: clip; border-radius: 1em;">
<h2 ${seoH(`footer`)} class ="p txt-tertiary">I craft marketing strategies that elevate brands, <span class="txt-primary"><a ${seoA()} aria-label="Business Profile" href="${begaritola}"><img ${seoImg(author.photo, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> attract audiences, and drive measurable business growth.</span>
</h2>
<div>
      <h3 class ="p">
       Providing high-quality web design and front-end development services to clients in ${locationSecondary}.
      </h3>
</div>

      <div class="row">
      <div style="align-content: stretch;" class="flex a-center j-start">
         <a ${seoA()} href="/resume" style="flex: 0; block-size: stretch; align-self: stretch;"><button ${seoButton()} class="btn-primary pill items-center txt-center splitText nowrap" style="display: flex; flex-direction: row; gap: 0;">
Resume
        </button></a>

       <button ${seoButton()} class="btn-primary" style="--brand-primary: rgb(0, 256, 0); flex: 0; block-size: stretch; align-self: stretch; display: flex; place-items: center; flex-wrap: nowrap; gap: .4em; background: rgba(0, 256, 0, .3); display: none; border: 0; color: var(--txt-primary);" id="installApp">
        <img ${seoImg(faviconAndroid, `App`)} style="inline-size: 1.5em; display: inline;" class="squar"/>
        <span style="line-height: 100%" class="d-non splitWord">Install App</span>
       </button>

      </div>
      </div>


     </div>

     <div style="" class="flex items-start">
      <nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-tertiary">
        Pages
       </h4>
       <div class="flex navigation-links">

       ${pages
           .map(
               (page, index) => `
<a class="h6" ${seoA()} style="text-decoration: none; flex: 1; flex-basis: 10ch;" href="${page.link}"><span class="p txt-tertiary">[0${index + 1}]</span> <span class="splitText">${page.name}</span> <span class="txt-tertiary">↗</span>
</a>
       `
           )
           .join('')}

       </div>
      </nav>

      <nav style="flex: 1; flex-basis: 15ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-tertiary" style="/* white-space: no-wrap; */">
        Conference &amp; Payment
       </h4>
       <div class="flex methode-links">

       ${methods
           .map(
               (method, index) => `
        <a class="h6" ${seoA()} aria-label="${method.name}" style="flex: 1; flex-basis: 10ch; text-decoration: none;" href="${method.link}">
<span class="txt-tertiary">[0${index + 1}]</span> <span class="splitText">${method.name}</span> <span class="txt-tertiary">↗</span>
        </a>
       `
           )
           .join('')}

       </div>
      </nav>

<nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-tertiary">
        Socials
       </h4>
      <div class="flex a-start social-links" style="gap: 0.8em;">

                ${socials
                    .map(
                        social => `
    <a ${seoA()} aria-label="${social.name}" href="${social.link}">
    <img ${seoImg(social.favicon, social.name)} style="border-radius: var(--pill); overflow: clip; inline-size: 1.5em;" class=”pill squar rounded monochrome"/>
    </a>
    `
                    )
                    .join('')}

       </div>
      </nav>

        <a ${seoA()} aria-label="messenger" id="chat-bubble" style="inline-size: 4em;" class=”pill squar rounded" href="${urlMessenger}">
 <img ${seoImg(getFavicon(`m.me`, 50), `Messenger`)} class=”pill squar rounded"/>
        </a>

</div>
    </div>

        <nav class="row" style="gap: var(--space-xs);">
        <h4 class="p txt-tertiary">
            Legals
        </h4>
        <div class="flex a-start j-start legal-links">
        ${legals
            .map(
                (legal, index) => `
            <a class="h6" ${seoA()} style="text-decoration: none;" href="${legal.link}">
    <span class="txt-tertiary">[0${index + 1}]</span> <span class="splitWord">${legal.name}</span> <span class="txt-tertiary">↗</span>
            </a>
        `
            )
            .join('')}
        </div>
        </nav>


        <!-- Subscription of YouTube -->
        <div class="col items-center">
        <div class="flex  input-group items-center">
        <input style="padding: var(--space-s); border: 1px solid var(--brand-primary); color: var(--brand-primary); background: color-mix(in hsl, var(--bg), transparent 30%); font-weight: bold;" class="pill" placeholder="@hassanbiswas.github.io" readonly type="text"/>
        <a ${seoA()} style="text-decoration: none; block-size: stretch; align-self: stretch;" href="${urlYoutube}">
        <button ${seoButton()} class="btn-primary splitWord" style="border: 1px solid var(--brand-primary);">Subscribe</button>
        </a>
        </div>
        </div>
    </div>

    <div class="container-lg mask marquee_outer" id="footer-marquee">
        <div class="svg-wrapper marquee_inner">
            <svg fill="none" viewBox="0 0 100 100" style="color-scheme: dark; overflow: visible;" >
                ${txtFill(`&copy; ${new Date().getFullYear()} ${author.title}`, 'var(--txt-primary)', '2.8')}
            </svg>
        </div>
    </div>

</footer>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('footer-section')) {
    customElements.define('footer-section', FooterSection);
}
