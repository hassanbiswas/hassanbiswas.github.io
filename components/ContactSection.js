// Logic automation for versioning
const VERSION = new Date().getDate();

class ContactSection extends HTMLElement {
  connectedCallback() {
    const props = {
      title: this.getAttribute("title") || "Contact",
      profileImg: this.getAttribute("profile-img") || "https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s400-c-no",
      description: this.getAttribute("description") || "Freelance Front-End Developer & Website Designer specializing in transforming Figma designs into high-performance, SEO-friendly digital experiences.",
      phone: "+8801602873384",
      email: "hassanbiswas.github.io@gmail.com",
      messenger: "hassanbiswas.github.io",
      location: "Jashore, Khulna, Bangladesh",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.31976694384!2d89.151121010377!3d23.165725287664875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d0243054d%3A0x96048d0a831518e1!2sJashore!5e0!3m2!1sen!2sbd!4v1707920000000!5m2!1sen!2sbd"
    };

    this.render(props);
  }

  render(props) {
    this.innerHTML = `
      <section class="fluid-grid-system" id="contact" data-version="${VERSION}">
        <section class="container-md row">
          <h2>${props.title}</h2>
          
          <div class="contact-flex-header">
            <img class="profile-avatar" alt="Hassan Biswas" src="${props.profileImg}" loading="lazy" />
            <p class="contact-desc">${props.description}</p>
          </div>

          <div class="contact-grid">
            <div class="info-list">
              <div class="contact-item">
                <img src="https://www.google.com/s2/favicons?domain=voice.google.com&sz=32" alt="Phone" />
                <a href="tel:${props.phone}">${props.phone}</a>
              </div>
              <div class="contact-item highlight">
                <img src="https://www.google.com/s2/favicons?domain=messenger.com&sz=32" alt="Messenger" />
                <a href="https://m.me/${props.messenger}">m.me/${props.messenger}</a>
              </div>
              <div class="contact-item">
                <img src="https://www.google.com/s2/favicons?domain=mail.google.com&sz=32" alt="Email" />
                <a href="mailto:${props.email}">${props.email}</a>
              </div>
              <div class="contact-item">
                <img src="https://www.google.com/s2/favicons?domain=maps.google.com&sz=32" alt="Location" />
                <span>${props.location}</span>
              </div>
            </div>

            <div class="map-wrapper">
              <iframe 
                src="${props.mapUrl}" 
                width="100%" 
                height="250" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </section>
      </section>

      <style>
        :host { --brand-blue: hsl(240, 80%, 50%); }
        
        #contact { padding: 4rem 0; }
        .contact-flex-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .profile-avatar { width: 80px; height: 80px; border-radius: 50%; border: 2px solid var(--brand-blue); }
        
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .contact-item { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
        .contact-item img { width: 24px; height: 24px; }
        
        .contact-item a { 
          color: inherit; 
          text-decoration: none; 
          transition: color 0.3s ease; 
        }
        
        .contact-item.highlight a { 
          color: var(--brand-blue); 
          font-weight: bold; 
        }
        
        .contact-item a:hover { color: var(--brand-blue); text-decoration: underline; }
        
        .map-wrapper { overflow: hidden; border-radius: 12px; border: 1px solid #eee; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-flex-header { flex-direction: column; text-align: center; }
        }
      </style>
    `;
  }
}

customElements.define("contact-section", ContactSection);
  
