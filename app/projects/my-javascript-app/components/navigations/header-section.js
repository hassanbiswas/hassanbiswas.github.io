import * as App from '/index.js';

// Destructure array, function, and variables directly
const { VERSION, author, header, brandLogo, seoA, locationPrimary, urlMessenger } = App;

class HeaderSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML
        template.innerHTML = `
            <header ${header()} class="" id="header" data-version="${VERSION}">
                <div class="container-md">
                    <nav style="padding-block: 0.4em; gap: .8em;" class="flex j-between">

            <div aria-label="Primary service location" class="flex" style="gap: 4px; flex-wrap: nowrap;">
    ${locationPrimary}
            </div>

            <a ${seoA()} aria-label="Messenger" href="${urlMessenger}" style="">@${author.siteUrl}</a>
        </nav>
       </div>
      </header>
    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('header-section')) {
    customElements.define('header-section', HeaderSection);
}
