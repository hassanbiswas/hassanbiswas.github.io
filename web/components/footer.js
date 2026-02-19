
// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="container-grid">
        <section class="content-page flex x-between">
            <section class="footer-card">
              <!-- footer card -->
            </section>

            <p>
              &copy;<span class="year">2026</span>
              <img
                class="brand-sm icon"
                src="images/favicon-50-png.png"
                alt="Web Developer | Hassan Biswas"
              />
              <a href="/">Web Developer | Hassan Biswas</a>
            </p>
            <div class="flex x-center">
              <a
                data-name="facebook"
                class="link"
                href="\facebook"
                target="_blank"
                >Facebook
              </a>
              <!-- class = icon -->
              <a
                data-name="instagram"
                class="link"
                href="\instagram"
                target="_blank"
                >Instagram
                              </a>
                                            <a
                                                            data-name="youtube"
                                                                            class="link"
                                                                                            href="\youtube"
                                                                                                            target="_blank"
                                                                                                                            >YouTube
                                                                                                                                          </a>
                                                                                                                                                      </div>
                                                                                                                                                              </section>
                                                                                                                                                                    </footer>
                                                                                                                                                                        `;
                                                                                                                                                                          }
                                                                                                                                                                          }
                                                                                                                                                                          customElements.define("t-footer", TFooter);