import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    author,
    header,
    brandLogo,
    navPrimary,
    seoH,
    seoA,
    seoImg,
    seoButton,
    navigations,
} = App;

class HeaderSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML
        template.innerHTML = `
            <header ${header()} id="header" class="" data-version="${VERSION}">
                <nav ${navPrimary()} class="nav-list items-center txt-center" id="header-nav-list" style="transition: all 0s;">
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
