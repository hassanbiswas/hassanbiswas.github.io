import * as App from '/index.js';

// Destructure array, function, and variables directly
const {
    VERSION,
    Section,
    seoSection,
    seoH,
    seoA,
    seoImg,
    brandLogo,
    thisYear,
    experience,
    locationSecondary,
    projects,
    componentSkipSection,
} = App;

class ProjectsSection extends HTMLElement {
    connectedCallback() {
        const section = new Section(this);

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        template.innerHTML = `
    <section ${seoSection(`projects`)} class="bg-primary snappyContaine" id="projects" data-version="${VERSION}">
    <div class="container-lg" style="padding-block: 1em; min-block-size: 100dvh;">

        <div class="col" style="display: flex; flex-direction: row; flex-wrap: wrap; column-gap: 3.2rem; row-gap: .8rem;">
                <p class="fade-in-to txt-tertiary" style="display: block; white-space: nowrap;">Selected <span class="txt-secondary">Projects</span> <i>2023 - ${thisYear}</i>
                </p>
                <div class="" style="flex: 1; flex-basis: 30rem;">
                    <h2 data-animate="scaleIn" ${seoH(`projects`)} class="h2 splitWord" style="display: inline;">I am providing the best value at a reasonable price with a focus on performance and SEO-friendly architecture.
                    </h2>
                    <p data-animate="scaleIn" class="h2 txt-tertiary" style="font-weight: bold; display: inline;">
                    <span class="text-revel-onscrol">
                    With ${experience}+ years of experience, I'm Designing & developing websites in ${locationSecondary}.
                    </span>
                    </p>
                </div>
            </div>


            <div style="gap: 0em;" class="row content-center projects-list  fluidHovere">
                ${projects
                    .map(
                        (project, index) => `
                    <a id="project-${index + 1}" ${seoA()} href="${project.link}" style="text-decoration: none; padding-block: 1em; gap: .8em;" class="flex fade-in-top-containe project-item">

                            <h3 style="padding-block: 0em; flex: 1; z-index: 1;" class="h6 fade-in-to"><span class="p txt-tertiary">[0${index + 1}]</span> <span class="splitWord">${project.category}</span> <span class="txt-tertiary">↗</span></h3>

                            <span inert class="project-image" style="z-index: -20;">
                                <img ${seoImg(`${project.getImage(index)}`, `Project Image`, `100%`)}/>
                            </span>

                        <i class="p fade-in-to" style="z-index: 1;">${project.date}</i>
                    </a>
                `
                    )
                    .join('')}
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
if (!customElements.get('projects-section')) {
    customElements.define('projects-section', ProjectsSection);
}
