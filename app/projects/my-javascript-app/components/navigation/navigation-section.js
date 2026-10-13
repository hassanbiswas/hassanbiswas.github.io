class NavigationSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
  <section ${navPrimary()} class="" id="bottom-navigation">
   <div style="overflow: visible;" class="container-md">
    <nav class="nav-list items-center txt-center" id="header-nav-list">

       ${navigations
           .map(
               navigation => `
        <a style="block-size: stretch; ${navigator.style || ''}" class="list-item flex items-center txt-center ${navigation.class || ''}" href="${navigation.link}" >
${navigation.name}
        </a>
       `
           )
           .join('')}

        <a class="list-item active-bg" inert="" aria-hidden="true" style="pointer-events: none;"></a>

    </nav>
   </div>
  </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('navigation-section')) {
    customElements.define('navigation-section', NavigationSection);
}
