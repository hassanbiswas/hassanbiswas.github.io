// observe => observing (h, p. section, img, etc...)
// variable
// function
// component
// execute

// ###################
// variables
// ###################

// dates functions
const thisYear = new Date().getFullYear(),
    thisMonth = new Date().getMonth() + 1, // january = 0
    thisDay = new Date().getDate(),
    // Cache-busting & Logic automation for versioning
    VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');
// Results in YY.MM.DD format (e.g., xxxx.xx.xx)

// absolute path for components

// Object
const author = {
    name: `Hassan Biswas`,
    siteUrl: `hassanbiswas.github.io`,
    photo: `https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s96-c-no?v=${VERSION}`,
    mainFaviconSvg: `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="none" viewBox="66 66 52 52"%3E%3Cpath d="M66 66h50v50H66z" fill="transparent"/%3E%3Cpath d="M80.23 79.274h-.185l-.117-.119.091.036.062-.014c-.035.001-12.08-11.502-12.08-11.502h23.071v-.059c12.979 0 23.5 10.521 23.5 23.5s-10.521 23.5-23.5 23.5v-.266l-11.091-11.284c-.624-.518-3.277-3.216-5.879-5.848-2.959-2.997-5.902-6.006-5.902-6.006V79.274h11.845l11.027 11.205v1.116c-3.035-.101-11.147-.41-11.147-.41-.068-.066.162 10.558.19 11.84h10.957v-.158c6.49 0 11.75-5.26 11.75-11.75s-5.26-11.75-11.75-11.75v-.171H80.03ZM92.2 91.625c0 .005-.43-.007-1.128-.031v-1.116Z" fill="%231a1ae6" stroke="%231a1ae6"/%3E%3C/svg%3E`,
    description: `<b>Freelance</b> <b>Front-End Developer</b> & Website Designer specializing in transforming Figma designs into <b>high-performance</b>, <b>SEO-friendly</b> digital experiences. Leveraging a modern stack of <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, I build <b>responsive</b>, <b>pixel-perfect</b> websites with a focus on clean logic and award-winning aesthetics inspired by <b>Awwwards</b>.`,
    faviconBase64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiBmaWxsPSJub25lIiB2aWV3Qm94PSI2NiA2NiA1MiA1MiI+PHBhdGggZD0iTTY2IDY2aDUwdjUwSDY2eiIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNODAuMjMgNzkuMjc0aC0uMTg1bC0uMTE3LS4xMTkuMDkxLjAzNi4wNjItLjAxNGMtLjAzNS4wMDEtMTIuMDgtMTEuNTAyLTEyLjA4LTExLjUwMmgyMy4wNzF2LS4wNTljMTIuOTc5IDAgMjMuNSAxMC41MjEgMjMuNSAyMy41cy0xMC41MjEgMjMuNS0yMy41IDIzLjV2LS4yNjZsLTExLjA5MS0xMS4yODRjLS42MjQtLjUxOC0zLjI3Ny0zLjIxNi01Ljg3OS01Ljg0OC0yLjk1OS0yLjk5Ny01LjkwMi02LjAwNi01LjkwMi02LjAwNlY3OS4yNzRoMTEuODQ1bDExLjAyNyAxMS4yMDV2MS4xMTZjLTMuMDM1LS4xMDEtMTEuMTQ3LS40MTAtMTEuMTQ3LS40MTAtLjA2OC0uMDY2LjE2MiAxMC41NTguMTkgMTEuODRoMTAuOTU3di0uMTU4YzYuNDkgMCAxMS43NS01LjI2IDExLjc1LTExLjc1cy01LjI2LTExLjc1LTExLjc1LTExLjc1di0uMTcxSDgwLjAzWk05Mi4yIDkxLjYyNWMwIC4wMDUtLjQzLS4wMDctMS4xMjgtLjAzMXYtMS4xMTZaIiBmaWxsPSIjMTkxOWU2IiBzdHJva2U9IiMxOTE5ZTYiLz48L3N2Zz4=`,
    logoBase64v2: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzaXplcz0iYW55IiBsb2FkaW5nPSJsYXp5IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9Ikhhc3NhbiBCaXN3YXMgTG9nbyIgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGRpc3BsYXk6IGJsb2NrOyI+PHBhdGggZmlsbD0iaHNsKDI0MCwgODAlLCA1MCUpIiBkPSJNMCAwaDE5MnYxOTJIMHoiIHN0eWxlPSJwb2ludGVyLWV2ZW50czpub25lIi8+PHBhdGggZmlsbD0iaHNsKDI0MCwgODAlLCA1MCUpIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTY2LjQ4MSA2NC41MTloLS40OTNsLS4zMDgtLjMxOS4yNDQuMDkzLjE1NC0uMDQ2Yy0uMDkgMC0zMi4zNTItMzAuNTk5LTMyLjM1Mi0zMC41OTloNjEuODE1VjMzLjVjMzQuNzY5IDAgNjIuOTU5IDI3Ljk4OSA2Mi45NTkgNjIuNDk5IDAgMzQuNTE2LTI4LjE5IDYyLjUwMS02Mi45NTkgNjIuNTAxdi0uNzFsLTMwLjA4NC0zMC42NjJjLTEuNjkzLTEuNDA5LTguODktOC43NDAtMTUuOTQ3LTE1Ljg5MS04LjAyNy04LjE0NS0xNi4wMS0xNi4zMi0xNi4wMS0xNi4zMlY2NC41MTloMzIuMTNsMjkuOTExIDMwLjQ0OXYzLjAzMWMtOC4yMzMtLjI3NS0zMC4yMzYtMS4xMTUtMzAuMjM2LTEuMTE1LS4xODYtLjE3OC40MzkgMjguNjkwLjUxNSAzMi4xNzVoMjkuNzIxdi0uNDI4YzE3LjYwNSAwIDMxLjg3Mi0xNC4yOTQgMzEuODcyLTMxLjkzcy0xNC4yNjctMzEuOTI5LTMxLjg3Mi0zMS45Mjl2LS40NjVINTYuOTQ1ek05OC41NjYgOTcuMzVjMCAuMDI3LTEuMTU4LS4wMjEtMy4wMjUtLjA3di0yLjk3OHoiIHN0eWxlPSJwb2ludGVyLWV2ZW50czpub25lIi8+PC9zdmc+`,
    logoOutlineSvg: `<svg class="logo brand-logo" fill="none" height="192" viewbox="0 0 192 192" width="192" xmlns="http://www.w3.org/2000/svg">

 <path d="M0 0h192v192H0z" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path>
 <path d="M65.417 63.247h-.512l-.323-.33.252.099.173-.04c-.098.004-33.414-31.814-33.414-31.814h63.814V31c35.9 0 65 29.101 65 65s-29.1 65-65 65v-.735l-30.68-31.213c-1.723-1.43-9.063-8.893-16.258-16.173-8.185-8.29-16.325-16.612-16.325-16.612v-33.02h32.761l30.502 30.991v3.086c-8.395-.277-30.833-1.134-30.833-1.134-.189-.181.448 29.206.526 32.749h30.307v-.435c17.949 0 32.5-14.548 32.5-32.5s-14.551-32.5-32.5-32.5v-.475H64.865zm33.11 34.162c0 .013-1.19-.021-3.12-.088v-3.085z" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>

</svg>`,

    countryCode: `+880`,
    phone: `8801602873384`,
    phoneText: `1602-873384`,
};

// Cleaning the domain string for the display text (e.g., "example.com" instead of "example.com")
author.domain = author.siteUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');

// Now safely add the dynamic title
author.title = `Web Developer | ${author.name} — UI/UX & Front-End Architecture`;
author.subTitle = `Website Designer`;
// maps.app.goo.gl/LPouGF9mtLHFjcDJ7
// maps.app.goo.gl/ibD4URe7LHMcNtPaA
author.location = `/location`;

// Replaces both literal " and URL-encoded %22 with '
author.faviconSvg = author.mainFaviconSvg.replace(/"|%22/g, '');
// same as above
/*
  author.faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='none' viewBox='66 66 52 52'%3E%3Cpath d='M66 66h50v50H66z' fill='transparent'/%3E%3Cpath d='M80.23 79.274h-.185l-.117-.119.091.036.062-.014c-.035.001-12.08-11.502-12.08-11.502h23.071v-.059c12.979 0 23.5 10.521 23.5 23.5s-10.521 23.5-23.5 23.5v-.266l-11.091-11.284c-.624-.518-3.277-3.216-5.879-5.848-2.959-2.997-5.902-6.006-5.902-6.006V79.274h11.845l11.027 11.205v1.116c-3.035-.101-11.147-.41-11.147-.41-.068-.066.162 10.558.19 11.84h10.957v-.158c6.49 0 11.75-5.26 11.75-11.75s-5.26-11.75-11.75-11.75v-.171H80.03ZM92.2 91.625c0 .005-.43-.007-1.128-.031v-1.116Z' fill='%231a1ae6' stroke='%231a1ae6'/%3E%3C/svg%3E`;
      */

author.iframeHome = `https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7452527536307!2d89.23107137772256!3d23.06979927914087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff134bb81a3bb7%3A0xe2dd7732283d1db1!2sWeb%20Developer%20%7C%20Responsive%20Website%20Design%20%26%20Front-End%20Development!5e0!3m2!1sen!2sbd!4v1770707284182!5m2!1sen!2sbd`;
author.iframeVillage = `https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7452527536307!2d89.23107137772256!3d23.06979927914087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff13bb28c63d57%3A0x266a14a438c0bb8f!2zQmVnYXJpdG9sYSBCYXphciB8IOCmrOCnh-Cml-CmvuCmsOCmv-CmpOCmsuCmviDgpqzgpr7gppzgpr7gprA!5e0!3m2!1sen!2sbd!4v1770707187851!5m2!1sen!2sbd`;

// author.subscriptions = `https://youtube.com/`;
// authore.subscrib = `https://youtube.com/`;

// Village *****
const begaritola = `https://maps.app.goo.gl/Q3pP1HzDSEdKv1Zr8`,
    // Sub-District *****
    monirampur = `https://maps.app.goo.gl/hNNSLwWyrDv4WgfbA`,
    // District *****
    jashore = `https://maps.app.goo.gl/ZGs1U2sq8Rs4NVfz9`,
    // Divition *****
    khulna = `https://maps.app.goo.gl/FM6vxDsAPLaQErnd6`,
    dhaka = `https://maps.app.goo.gl/epey14ek8i1j2dyv5`,
    // Country *****
    bangladesh = `https://maps.app.goo.gl/uJNBv8L6a6zFTrgi9`,
    india = `https://maps.app.goo.gl/pMs2qXFPBE9mSnRP6`,
    pakistan = `https://maps.app.goo.gl/Jni2cwJ5fni58ACg9`,
    china = `https://maps.app.goo.gl/qG5xJbk1CwURQ8uZ9`,
    japan = `https://maps.app.goo.gl/yoYtyEydmeEZP7Sp6`,
    // States *****
    uae = `https://maps.app.goo.gl/VwchnJgZWWYs8KHR9`,
    uk = `https://maps.app.goo.gl/NVBYjcfqJ2w6tkAe8`,
    us = `https://maps.app.goo.gl/p3BBmD8JYCpqPt3i9`,
    // Continent *****
    asia = `https://maps.app.goo.gl/eMssXoAjXHkpfcry8`,
    africa = `https://maps.app.goo.gl/tenD5kgxxPRemmHy9`,
    northAmerica = `https://maps.app.goo.gl/Z7oSTNzY7TETsesz7`,
    southAmerica = `https://maps.app.goo.gl/pmqqPp2w7RF2ve9KA`,
    antarctica = `https://maps.app.goo.gl/3gspcf93bA8qZRD69`,
    europe = `https://maps.app.goo.gl/qCo2TTNbzsi6x4rM9`,
    oceania = `https://maps.app.goo.gl/DjizYXiH4QhbKRTu7`;

const worldwide = `<a href="${asia}">Asia</a>, <a href="${africa}">Africa</a>, <a href="${northAmerica}">North America</a>, <a href="${southAmerica}">South America</a>, <a href="${europe}">Europe</a>, <a href="${oceania}">Oceania</a>`;

const locationPrimary = `
<a href="${jashore}">Jashore</a>
<a href="${khulna}">Khulna</a>
<a href="${bangladesh}">Bangladesh</a>`,
    locationSecondary = `
    <a href="${dhaka}">Dhaka</a>,
    <a href="${bangladesh}">Bangladesh</a> &amp; Worldwide<span class="d-none"> (${worldwide})<span>`;

const root = document.documentElement,
    head = document.head || document.getElementsByTagName('head')[0],
    body = document.body || document.getElementsByTagName('body')[0],
    // 2. Get the computed style of the root
    styleSheet = getComputedStyle(document.documentElement);

let primaryColor = `hsl(240, 80%, 50%)`;

// <a href=""></a>
// review
const urlFeedback = `https://g.page/r/CbEdPSgyd93iEBI/review`;

author.direction = `https://maps.google.com/maps?ll=23.070916,89.234141&z=15&t=m&hl=en&gl=BD&mapclient=embed&cid=16347353279731932593`;

export const urlGithub = `https://github.com/hassanbiswas`,
    urlFacebook = `https://facebook.com/hassanbiswas.github.io`,
    urlMessenger = `https://m.me/hassanbiswas.github.io`,
    urlWhatsapp = `https://wa.me/8801602873384`,
    urlMobile = `tel:+8801602873384`,
    urlGmail = `mailto:hassanbiswas.github.io@gmail.com`,
    urlMeet = `https://meet.google.com/qjc-bvdp-azd`,
    urlBkash = `/bkash`,
    urlInstagram = `https://instagram.com/hassanbiswas.github.io`,
    urlThreads = `https://threads.com/hassanbiswas.github.io`,
    urlX = `https://x.com/o1602873384`,
    urlYoutube = `https://youtube.com/@hassanbiswas-github-io`,
    urlPinterest = `https://pinterest.com/hassanbiswas_github_io`,
    urlTiktok = `https://tiktok.com/@hassanbiswas.github.io`,
    urlLinkedin = `https://linkedin.com/in/hassanbiswas-github-io`;

// dribble, behance, etc.

export const greetings = [
        'Hello',
        'السَّلَامُ عَلَيْكُمْ',
        'হ্যালো',
        '你好',
        '안녕하세요',
        'こんにちは',
        'हेलो',
    ],
    money = value => {
        return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // undefined
        // return value?.toLocaleString(undefined);
    },
    heroStatus = [
        { name: `Available for projects`, value: `#` },
        { name: `Developed by OPPO A53`, value: `#` },
    ];

// key specializations & skills:
export function SpecializingItem(name, value) {
    this.name = name;
    this.value = value;
}
const specializing = [
    new SpecializingItem(
        `Front-End Architecture`,
        `Designing scalable and efficient user interfaces.`
    ),
    new SpecializingItem(`UI/UX Design`, `Creating intuitive and engaging user experiences.`),
    new SpecializingItem(
        `Web Technologies`,
        `Expertise in modern web development standards and performance optimization.`
    ),
    new SpecializingItem(
        `Performance Focus`,
        `Specializes in optimizing Core Web Vitals for speed.`
    ),
];

export function ServicesPrimaryItem(name, price) {
    this.name = name;
    this.price = money(price);
}
const servicesPrimary = [
    new ServicesPrimaryItem(`UI/UX design`, 80),
    new ServicesPrimaryItem(`Web design`, 100),
    new ServicesPrimaryItem(`Re-Design website`, 80),
    new ServicesPrimaryItem(`Front-End development`, 100),
    new ServicesPrimaryItem(`Static Websit (Reasonable price!)`, 80),
    new ServicesPrimaryItem(`Photo/image to website`, 180),
    new ServicesPrimaryItem(`Figma/Framer/Webflow to website`, 80),
];

export function ServicesSeconderyItem(name, price) {
    this.name = name;
    this.price = money(price);
}
const servicesSecondery = [
    new ServicesSeconderyItem(`Custom QR code`, 0.6),
    new ServicesSeconderyItem(`YouTube Channel ownership transfer`, 1.6),
];

// get essential favicon by domain name
let getFavicon = (domain = `hassanbiswas.github.io`, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}&v=${VERSION}`;

// Uses
const faviconAuthor = getFavicon(`hassanbiswas.github.io`),
    faviconMessenger = getFavicon(`m.me`),
    faviconYoutube = getFavicon(`youtube.com`),
    // wa.me
    faviconMobile = getFavicon(`voice.google.com/regain`),
    faviconWhatsapp = getFavicon(`whatsapp.com`),
    // mail.google.com/mail/u/0/#inbox
    faviconGmail = getFavicon(`chat.google.com`),
    faviconMap = getFavicon(`maps.google.com`),
    faviconMeet = getFavicon(`meet.google.com`),
    faviconBkash = getFavicon(`bka.sh`),
    faviconFacebook = getFavicon(`facebook.com`),
    faviconInstagram = getFavicon(`instagram.com`),
    faviconThreads = getFavicon(`threads.com`),
    faviconX = getFavicon(`x.com`),
    faviconAndroid = getFavicon(`developer.android.com`),
    // skills
    faviconHtml = getFavicon(`developer.mozilla.org`),
    faviconCss = getFavicon(`w3.org`),
    faviconJs = getFavicon(`javascript.info`),
    // tools
    faviconVscode = getFavicon(`code.visualstudio.com`),
    faviconBootstrap = getFavicon(`getbootstrap.com`),
    faviconFigma = getFavicon(`figma.com`),
    faviconWebflow = getFavicon(`webflow.com`),
    faviconFramer = getFavicon(`framer.com`),
    faviconGithub = getFavicon(`github.com`);

const preferedLanguages = [`English(Native)`, `Bangla (Advanced)`, `Hindi(Conversation)`];

/*
  const metaKey = document.querySelector('meta[name="keywords"]');
  if (metaKey) {
    // console.log(metaKey.getAttribute('content'));
  }
  */

let metaViewport = () => {
    const VIEWPORT_CONTENT = 'width=device-width, initial-scale=1';

    // Attempt to find existing viewport meta tag
    let viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
        // Update existing tag
        viewport.setAttribute('content', VIEWPORT_CONTENT);
        viewport.setAttribute('data-version', VERSION);
    } else {
        // Create and inject new tag if missing
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = VIEWPORT_CONTENT;
        viewport.setAttribute('data-version', VERSION);
        document.head.appendChild(viewport);
    }
};
metaViewport();

// ###### JavaScript variables declear golobally above ######

// ###################
// methods & functions
// ###################

/**
 * Automated Asset Loader
 * Features: Base64 Injection, Cache-Busting, Logic Preservation
 *//**
 * Injects SVG Favicons with automated versioning and responsive attributes.
 */
/*
  const injectIcons = () => {
    // Define icon configurations
    const icons = [
      { rel: "icon" },
      { rel: "apple-touch-icon" },
      { rel: "alternate icon" },
    ];

    icons.forEach((iconData) => {
      // Search for existing link with the specific rel
      let link = document.querySelector(`link[rel='${iconData.rel}']`);

      if (!link) {
        link = document.createElement("link");
        link.rel = iconData.rel;
        head.appendChild(link);
      }

      // Apply high-performance & SEO attributes
      link.type = "image/svg+xml";
      link.href = `${author.faviconSvg}?v=${VERSION}`; // Cache-busting using date
      link.setAttribute("sizes", "any");
      link.setAttribute("loading", "lazy"); // Performance optimization
      link.dataset.version = VERSION;
    });
  };

  injectIcons();
  */

const ogImg = document.querySelector('meta[property="og:image"]');
// Remove everything after .png and append ?v=${VERSION}
if (ogImg) ogImg.content = ogImg.content.replace(/\.png.*/i, `.png?v=${VERSION}`);

// index.html only
//document.title = `${author.title}`;

/** class="done"
 *  * Logic Automation: Auto-refresh on network restoration
 * Integrated with your versioning constant
 */

const handleConnectionChange = () => {
    if (navigator.onLine) {
        // console.log(`Connection restored. Reloading version: ${VERSION}`);
        window.location.reload();
    }
};

// Listen for the 'online' event
window.addEventListener('online', handleConnectionChange);

//  Constractor for listing
export function LinkList(name, link = '#', favicon = null) {
    this.name = name;
    this.class = name.toLowercase();
    this.link = link;
    this.favicon = favicon;
}

// Corrected function with default 't' value of 3m
const timeout = (el, t = 3000) => {
    if (!el) return; // Guard clause if element is missing

    // Outer delay before removing the 'show' class
    setTimeout(
        () => {
            el.classList.remove('show');

            // Inner delay to add it back after 't' milliseconds
            setTimeout(() => {
                el.classList.add('show');
            }, t);
        },
        Math.floor(t + 3000)
    );
};

// Example usage:
// timeout(document.querySelector('.my-element'));

// ### offline.html | Loading component ###
// updated loader section
/**
 * LoaderSection Component
 * Focus: Performance, SEO, and Clean Logic
 */

class LoaderSection extends HTMLElement {
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
      <section id="loader" aria-hidden="true" class="fluid-grid-system" data-version="${VERSION}">
       <section class="container-md content-center">
        <div class="col items-center">
 <h3 class="greeting txt-center flex">
   &lt;<span id="say-hello">Hello</span>/&gt;
 </h3>
        </div>
       </section>
      </section>
    `;

        const content = template.content.cloneNode(true);
        const sayHello = content.querySelector('#say-hello');
        const loader = content.querySelector('#loader');

        // 1. Initial State Checks
        let i = 0;
        let isPageLoaded = document.readyState === 'complete';

        // DOMContentLoaded | load
        if (!isPageLoaded) {
            window.addEventListener(
                'load',
                () => {
                    isPageLoaded = true;
                },
                { once: true }
            );
        }

        // 2. Insert into DOM
        this.replaceWith(content);

        // 3. Animation Logic with Connectivity Check
        const greetingInterval = setInterval(() => {
            sayHello.textContent = greetings[i];
            i++;

            // Reset loop if we hit the end of the array
            // if (i >= greetings.length) {

            /**
             * The Exit Condition:
             * - Page must be fully loaded (isPageLoaded)
             * - Browser must be online (navigator.onLine)
             */
            if (isPageLoaded) {
                clearInterval(greetingInterval);

                // Smooth Exit Animation
                loader.style.transition = 'opacity 0.4s ease, visibility 0.4s';
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';

                setTimeout(() => {
                    loader.remove();
                }, 400); // 400
            } else if (i >= greetings.length) {
                i = 0;
            }
            /*
 else {
   // Keep looping if offline or still loading
   i = 0;
 }
 */
            // }
        }, 200);
    }
}

// updated notch section
/**
 * NotchSection Component
 * Focus: Performance, SEO, and Clean Logic
 */
class NotchSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        // collapse
        template.innerHTML = `
  <section class="container-sm" id="notch" data-version="${VERSION}">
    <div class="col dialog" id="notchDialog">
     <p class="notification">
      Developing in "OPPO A53" handset!
     </p>
     <button onclick="notch.classList.toggle('collapse')">
      ×
     </button>
    </div>
  </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}

// updated toast section
/**
 * ToastSection Component
 * Focus: Performance, SEO, and Clean Logic
 */
class ToastSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `
  <section class="container-sm collapse" id="toast" data-version="${VERSION}">
    <div class="col dialog" id="toastDialog">
     <p class="notification">
      This is a toast dialog!
     </p>
     <button onclick="toast.classList.toggle('collapse')">
      ×
     </button>
    </div>
  </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}

// updated header section
/**
 * HeaderSection Component
 * Focus: Performance, SEO, and Clean Logic
 */
class HeaderSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `
      <header class="fluid-grid-system" id="header" data-version="${VERSION}">
       <section class="container-md">
        <nav style="padding-block: .5em" class="col">
<span title="address">
 <a href="https://maps.app.goo.gl/ZGs1U2sq8Rs4NVfz9">Jashore</a>
 <a href="https://maps.app.goo.gl/FM6vxDsAPLaQErnd6">Khulna</a>
 <a href="https://maps.app.goo.gl/uJNBv8L6a6zFTrgi9">Bangladesh</a>
</span>
<a title="messenger" href="${urlMessenger}" target="_blank">
 @hassanbiswas.github.io
</a>
        </nav>
       </section>
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

/*
 * Components
 * Focus: Performance, SEO, and Clean Logic
 */
export class HeadingTag extends HTMLElement {
    connectedCallback() {
        const id = this.getAttribute('id') || 'id',
            classes = this.getAttribute('class') || 'class',
            style = this.getAttribute('style') || 'style',
            text = this.innerText || this.textContent || 'insert text';

        const parentOne = this.parentElement,
            parentTwo = parentOne.parentElement,
            target = parentTwo.parentElement,
            parent = document.querySelector('main') || target.parentElement,
            index = grandParent ? Array.from(parent.children).indexOf(target) : 0,
            h = index === 0 ? 0 : 1,
            // 2. Safely clamp tag level between 1 and 6
            tagLevel = Math.min(h + 1, 6);

        // 2. Create an off-screen Template
        const template = document.createElement('template');
        template.innerHTML = `

            <h${h + 1} ${id} ${classes} ${style}>${text}</h${h + 1}>

                    `;
        this.replaceWith(template.content);
    }
}
if (!customElements.get('heading-tag')) {
    customElements.define('heading-tag', HeadingTag);
}
// <heading onload="lavel(1)">This is a heading!</heading>

// Global Constructor Function for Section Data
export function SectionData(element) {
    this.heading = element.getAttribute('heading') || 'attribute: heading';
    this.description = element.getAttribute('description') || 'attribute: description';
    this.link = element.getAttribute('link') || 'attribute: link';
    this.linkText = element.getAttribute('linkText') || 'attribute: linkText';
    this.img = element.getAttribute('img') || 'attribute: img';
}

// updated design-system-section
/**
 * DesignSystemSection Component
 * Focus: Performance, SEO, and Clean Logic
 */
class DesignSystemSection extends HTMLElement {
    connectedCallback() {
        function UiItem(property) {
            this.property = property;
        }
        const colors = [
            new UiItem(`txt-1`),
            new UiItem(`txt-2`),
            new UiItem(`txt-3`),
            new UiItem(`txt-primary`),
        ];
        const backgrounds = [
            new UiItem(`bg-1`),
            new UiItem(`bg-2`),
            new UiItem(`bg-3`),
            new UiItem(`primary-40`),
            new UiItem(`primary-50`),
            new UiItem(`primary-60`),
        ];
        const headings = [
            new UiItem(`h1`),
            new UiItem(`h2`),
            new UiItem(`h3`),
            new UiItem(`h4`),
            new UiItem(`h5`),
            new UiItem(`h6`),
        ];
        const paragraphs = [new UiItem(`p`), new UiItem(`p-sm`), new UiItem(`p-xsm`)];
        const buttons = [
            new UiItem(`button`),
            new UiItem(`btn-primary`),
            new UiItem(`btn-secondary`),
        ];

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section class="fluid-grid-system" id="design-system" data-version="${VERSION}">
    <section class="container-lg">
       <div style="gap: var(--space-l);" class="col">

        <div style="gap: var(--space-xs);" class="flex items-start">
${colors
    .map(
        color => `
  <p style="flex: 1 1 23rem;" class=" ${color.property} ">
    ${color.property}: Started the journey into UI/UX and Front-End architecture through self-directed learning.
  </p>
`
    )
    .join('')}
        </div>

        <div style="gap: var(--space-xs);" class="flex items-start">
${backgrounds
    .map(
        background => `
  <div style="flex: 1 1 23rem;" class=" ${background.property} ">
    ${background.property}
  </div>
`
    )
    .join('')}
        </div>

        <div style="gap: var(--space-xs);" class="flex items-start">
${headings
    .map(
        heading => `
  <${heading.property} style="flex: 1 1 23rem;" class=" ${heading.property} ">
    ${heading.property}: Web Development.
  </${heading.property}>
`
    )
    .join('')}
        </div>

        <div style="gap: var(--space-xs);" class="flex items-start">
${paragraphs
    .map(
        pragraph => `
  <p style="flex: 1 1 23rem;" class=" ${pragraph.property} ">
    ${pragraph.property}: Started the journey into UI/UX and Front-End architecture through self-directed learning.
  </p>
`
    )
    .join('')}
        </div>

        <div style="gap: var(--space-xs);" class="flex items-start">
${buttons
    .map(
        button => `
  <button style="flex: 1 1 23rem;" class=" ${button.property} ">
    ${button.property}
  </button>
`
    )
    .join('')}
        </div>

       </div>
    </section>
   </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

/**
 * Component
 * Focus: Performance, SEO, and Clean Logic
 */

// example Section Web Component
class CustomSection extends HTMLElement {
    connectedCallback() {
        // Configuration for easy updates
        /* const devLanguages = [
            new LinkList(`HTML`),
            new LinkList(`CSS`),
            new LinkList(`JavaScript`),
        ];
        const devLibraries = [new LinkList(`Bootstrap`), new LinkList(`GSAP`)];
        const designTools = [
            new LinkList(`Figma`),
            new LinkList(`Webflow`),
            new LinkList(`Frammer`),
        ];
        const devIdes = [
            new LinkList(`VScode`),
            new LinkList(`Antigravity`),
            new LinkList(`Claude`),
        ];
        const aiModels = [new LinkList(`Gemini`), new LinkList(`Gemma`)];
        const versionControlls = [new LinkList(`GitHub`)];

        export function DevSkill(name, favicon, link = '#') {
            this.name = name;
            this.favicon = favicon;
            this.link = link;
        }
        const skills = [
            new DevSkill(`HTML`, `${faviconHtml}`),
            new DevSkill(`CSS`, `${faviconCss}`),
            new DevSkill(`JavaScript`, `${faviconJs}`),
        ];

        export function DevTool(name, favicon, link = '#') {
            this.name = name;
            this.favixon = favicon;
            this.link = link;
        }
        const tools = [
            new DevTool(`VScode`, `${faviconVscode}`),
            new DevTool(`Bootstrap`, `${faviconBootstrap}`),
            new DevTool(`Figma`, `${faviconFigma}`),
            new DevTool(`Webflow`, `${faviconWebflow}`),
            new DevTool(`Framer`, `${faviconFramer}`),
            new DevTool(`GitHub`, `${faviconGithub}`),
        ]; */

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // Create an off-screen Template
        const template = document.createElement('template');

        // Render Markup
        template.innerHTML = `
       <section class="fluid-grid-system bg-1" id="youtubers" data-version="${VERSION}">
    <section class="container-lg row infinite-scroller mask" data-direction="right" data-speed="fast">
    <h2>${sectionData.heading}</h2>
    <p>${sectionData.description}</p>
   </section>
    </section>
    `;
        // Synchronous Swap
        this.replaceWith(template.content);
    }
}

// Register Custom Element
if (!customElements.get('custom-section')) {
    customElements.define('custom-section', CustomSection);
}

// ### 404.html | Hero component ###
// updated hero section
class HeroSection extends HTMLElement {
    connectedCallback() {
        // Configuration for easy updates
        const brandLogo = () => {
            for (i = 0; i <= 10; i++) {
                console.log(`Brand Logo of ${i}`);
            }
        };

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // sectionData.heading = author.title;
        // sectionData.description = author.description;

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section id="hero" class="fluid-grid-system dark" data-version="${VERSION}">
        <section class="container-md row">

 <section style="padding: 0em; transform: scale(.7); max-block-size: 30rem;" class="logo-marquee-wrapper stacking-container mask">
   <section style="padding: 0em" class="brand-logo-container">
     <section style="padding: 0em" id="brand-wrapper" class="brand-logo-wrapper">

${author.logoOutlineSvg}

     </section>
   </section>

   <div aria-hidden="true" class="gradient-mask d-none infinite-scroller" data-direction="right/left" data-speed="fast/slow" id="brand-title">
     <svg class="infinite-scroller_inner" fill="none" height="192" viewBox="0 0 2000 192" width="2000">
       <text fill="var(--txt-1)" font-family="var(--ffb)" font-size="50" font-weight="600" x="0" y="116">
${sectionData.heading}
       </text>
     </svg>
   </div>
 </section>

 <section class="row items-center">
   <span style="padding: .5em 1em;" class="badge txt-bg-inverse pill">Available for Projects</span>
   <h1 id="heading" class="h3 txt-center d-non">${sectionData.heading}</h1>
   <p class="txt-center">${sectionData.description}</p>
   <div class="button-group flex">
     <a style="text-decoration: none;" href="/resume"><buttton style="border: 2px solid var(--bg-1); padding: 1em;" class="btn btn-primary pill txt-1 bg-1">Resume ↘</button></a>
     <a class="btn btn-cta" href="#contact">Contact Me ↘</a>
   </div>
 </section>

        </section>
      </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated ClientsSection Component
class ClientsSection extends HTMLElement {
    connectedCallback() {
        const ytLogoBaseUrl = `https://yt3.googleusercontent.com/`;
        const ytLogoSize = `=s48-c-k-c0x00ffffff-no-rj`;

        function YouTuber(name, photo, link = `${urlYoutube}/featured`) {
            this.name = name;
            this.photo = photo;
            this.link = link;
        }
        const youtubers = [
            new YouTuber(
                `Kevin Powell`,
                `gABekKWtQFmLIjVuhKwoPfd9nIRxAPPhyymO3XaOCc9wko28S9R_8CO125NFjZToZuLlSyfdrak`
            ),
            new YouTuber(
                `DesignCourse`,
                `ieTt1p2twEf4cz0vhOtB-0UXPN4vk9-8HM8OqxcX8sRU3nm5Di8sohyFOvxR3M-pN_bo4rnL`
            ),
            new YouTuber(
                `Flux Academy`,
                `D-wuZT2I_1Y_DKzP6pg-jZIJwfiBanfX1YN7iIvk_u6thQT2bH7jO7tQor6PvoFMp_q7MeW4vg`
            ),
            new YouTuber(
                `Web Dev Simplified`,
                `ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw`
            ),
            new YouTuber(
                `Codex Community`,
                `ZsCDzP6-efEF5FoaHuNd_i2VpUBJk3ONZtrc6OrKgWAKIF1hLli-9ZEHvuHbbVZDEn2fwG2eAQ`
            ),
            new YouTuber(
                `Jesse Showalter`,
                `cVPZMhEZR_Zqoa6M1R7TzMBnckcKdA-phCZcFhpaHy6Tu3YqkfDLpIw5c3EIQ6Xkruv55D_Vxg`
            ),
            new YouTuber(
                `Olivier Larose`,
                `rN8CVAXHTUIWco0HHnWA2XbVYynYOIZg1lvIibcIhglASOFyczyUFRIy2HGeaFeUulzDObvZXw`
            ),
            new YouTuber(`Bro Code`, `ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg`),
            new YouTuber(
                `Arnau Ros`,
                `cBrnJmahf00Q8p38dnx4Rvdl-TBekL5MFaFOicB5DPxzVGWmtUqaGXHHuhIoxQZH7YL_mPpydw`
            ),
            new YouTuber(
                `True Coder`,
                `qZmPS2Kq4TLISM7z0NPZRlA2umZVbW2qfRK4P87YZJbkcCw4vkUHhMtee4LaHuhzi1jUF_n6`
            ),
            new YouTuber(
                `Lukas | Web Dev`,
                `dr8aIhorUkiEw381t158v3AWNgB7nhQbW4g68MjZDkPdq21L6lbE7AA-gl9DACGwE4HhWopIeA`
            ),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        // HTML
        template.innerHTML = `
<section class="fluid-grid-system bg-1" id="youtubers" data-version="${VERSION}">
    <section class="container-lg row infinite-scroller mask" data-direction="right/left" data-speed="fast/slow">
        <h2 class="h4 d-none">Subscription by ${author.name} on YouTube </h2>
      <ul style="gap: var(--space-m);" class="flex no-wrap infinite-scroller_inner">
       ${youtubers
           .map(
               youtuber => `
<li class="items-center" style="display: flex; gap: var(--space-2xs); flex-grow: 1;">
  <img class="rounded-circle rounded square pill" style="max-width: 3rem; height: auto;" src="${ytLogoBaseUrl}${youtuber.photo}${ytLogoSize}" alt="YouTube: ${youtuber.name}"/>
  <a href="${youtuber.link}">${youtuber.name}
  </a>
</li>
       `
           )
           .join('')}
      </ul>

    </section>
   </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <*-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated  AboutSection Component
class AboutSection extends HTMLElement {
    connectedCallback() {
        // Story data array for easy updates
        function StoriesItem(date, title, heading, desc, link, linkText, dateClass) {
            this.date = date;
            this.title = title;
            this.heading = heading;
            this.desc = desc;
            this.link = link;
            this.linkText = linkText;
            this.dateClass = dateClass;
        }
        const stories = [
            new StoriesItem(
                '2001',
                'Birth of mine',
                'Having mom, dad & small family.',
                `I'm ${new Date().getFullYear() - 2001} years old & growing up with core values that shape my professional work ethic today.`,
                `${author.location}`,
                'View place'
            ),
            new StoriesItem(
                '2022',
                'Learning web design',
                'YouTube platform for design and development.',
                'Started the journey into UI/UX and Front-End architecture through self-directed learning.',
                `${urlYoutube}`,
                'View channels'
            ),
            new StoriesItem(
                '2024',
                'Graduated at',
                'Diploma in Computer Science and Technology.',
                'Formalized my technical foundation in software logic and system design.',
                'https://maps.app.goo.gl/ZqrnSyByZTL95pMJ8',
                'View institute'
            ),
            new StoriesItem(
                '',
                'Certified from',
                'Utshob Technology Ltd.',
                `<span class="d-none">Ajoy Dutta </br> Managing Director </br></span> Sheikh Hasina Software Technology Park </br> Level-10, Shankarpur, Jashore, Bangladesh. </br> Cell: <a target="_blank" href="tel:1715-488288">1715-488288</a> </br> Cell: <a target="_blank" href="tel:1881-039755">1881-039755</a> </br> <span class="d-none">E-mail: <a target="_blank" href="mailto:ajoydutta@utshabtech.com">ajoydutta@utshabtech.com</a> </br> E-mail: <a target="_blank" href="mailto:ajoydutta@gmail.com">ajoydutta@gmail.com</a> </br></span> <a target="_blank" href="https://utshabtech.com.bd">utshabtech.com.bd</a>`,
                'https://maps.app.goo.gl/sLyE5QY5UDVfkTcS7',
                'View place',
                `d-none`
            ),
            new StoriesItem(
                // FIXED: Used backticks to allow double quotes in the HTML string
                `2025 - ${thisYear}`,
                'Being a developer',
                'Designing and developing website.',
                `${author.description}`,
                `/projects`,
                'View projects'
            ),
            new StoriesItem(
                `${thisYear}`,
                'Looking for opportunities',
                'Junior Front-End Developer',
                'Actively seeking roles where I can apply my focus on performance and SEO-friendly architecture.',
                `/resume`,
                'Download Resume'
            ),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section class="fluid-grid-system bg-2" id="about" data-version="${VERSION}">
    <section style="gap: 0em;" class="container-xl row">
     <h2 class="h6 fade-in-to">
      About ${author.name}
     </h2>
     <div style="padding-block: 0em; row-gap: 0em;" class="col">
      <heading-tag class="h3 text-revel-onscrol row">
       At a galance
       2001 - ${thisYear}
      <heading-tag>
      <div class="row" style="gap: var(--space-xs);">
       <p>${author.description}</p>
       <a class="p fade-in-to" href="#about">
        View on fullscreen ↘
       </a>
      </div>
     </div>

     <section style="gap: calc(var(--padding-inline) * 2);" class="row">

 ${stories
     .map(
         story => `

      <section style="padding-block: 0em; row-gap: 0em; border: 0px solid currentColor;" class="col fade-in-top-containe bg-1">
       <div style="gap: .5em;" class="row">
        <h6 class="fade-in-to ${story.dateClass}">${story.date}</h6>
        <h5 style="padding-block: 0em;" class="fade-in-to">${story.title}</h5>
       </div>
       <h4 class="fade-in-to row">${story.heading}</h4>
       <div style="gap: var(--space-xs);" class="row">
        <p class="fade-in-to">${story.desc}</p>
        <a target="_blank" class="fade-in-to" href="${story.link}" loading="lazy">${story.linkText} ↘</a>
       </div>
      </section>

 `
     )
     .join('')}

     </section>

    </section>
   </section>


    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated ServicesSection Component
class ServicesSection extends HTMLElement {
    connectedCallback() {
        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section class="fluid-grid-system" id="services" data-version="${VERSION}">
    <section class="container-lg row">
     <h2>
      Services available in ${locationSecondary}.
     </h2>
     <p>[Years 2026] Static website development in Bangladesh typically costs between ${money(75)} and ${money(300)}+, depending on the complexity, design quality, and features. Basic personal or small business static sites often start around ${money(100)}–${money(150)}, while professional, customized static websites with advanced layouts can exceed ${money(300)}.
      </br>
      <p class="h6">Key Price Factors for Static Websites:</p>
        <ul style="list-style: none;">
 <li>Design Customization: Tailored HTML/CSS layouts are costlier than template-based ones.</li>
        <li>Number of Pages: Simple websites (5–10 pages) are cheaper than larger ones.</li>
        <li>Features: Inclusion of premium sliders, image galleries, or contact forms.</li>
        <li>Domain/Hosting: Most packages include a .com domain and 2GB+ hosting space, with annual renewal fees usually starting from ${money(300)}.</li>
        </ul>
      </p>
      <p>
       <p class="h6">Average Price Ranges (Approximate):</p>
       </br>
       <ul style="list-style: none;">
       <li>Basic/Simple Site: ${money(75)} – ${money(150)} (Portfolio, Personal)</li>
       <li>Business Website: ${money(150)} – ${money(300)} (Corporate, Small Business)</li>
       <li>Customized Site: ${money(300)}+ </li>
      </ul>
      </p>
      <p class="p-sm"><span class="txt-primary">Note:</span> Prices are estimates and vary based on the web design company in Bangladesh.</p>
     <section class="col">
      <div style="gap: var(--space-xs);" class="row">
       <h5>
        My primary Services:
       </h5>
       <p class="p">** Discounted prices are showing **</p>
       <ul>
${servicesPrimary
    .map(
        service => `
  <li class="done">${service.name} (<b>${service.price}</b>)</li>
`
    )
    .join('')}
       </ul>
      </div>
      <div style="gap: var(--space-xs);" class="row">
       <h6>More services:</h6>
       <ul>
${servicesSecondery
    .map(
        service => `
  <li class="done">${service.name} (<b>${service.price}</b>)</li>
        `
    )
    .join('')}
       </ul>
       </div>
     </section>
      <div class="flex j-end">
<a href="/vcf">Download VCF</a>
<button style="inline-size: fit-content;"  class="btn-primary">
  <a href="#contact">Contact</a>
</button>
      </div>
    </section>
   </section>


    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated ProjectsSection Component
class ProjectsSection extends HTMLElement {
    connectedCallback() {
        // Project data array for easy updates
        function ProjectsItem(date, category, title, desc, link) {
            this.date = date;
            this.category = category;
            this.title = title;
            this.desc = desc;
            this.link = link;
        }

        const projects = [
            new ProjectsItem(
                `01-Jan-${thisYear}`,
                'Portfolio website',
                `${author.title}`,
                `${author.description}`,
                `https://hassanbiswas.github.io`
            ),
            new ProjectsItem(
                '24-Nov-2025',
                'Design Agency website',
                'DEVAEC | Website Design & Front-End Development.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia aliquam voluptatem aut, veritatis libero cumque quas debitis alias quod.',
                `/projects`
            ),
            new ProjectsItem(
                '13-May-2025',
                'E-commerce website',
                'TANUVL | Fashion & Clothing.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia aliquam voluptatem aut, veritatis libero cumque quas debitis alias quod.',
                `/projects`
            ),
            new ProjectsItem(
                '09-Jul-2024',
                'Portfolio website',
                'Shamin Ahmed Choudhuri.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia aliquam voluptatem aut, veritatis libero cumque quas debitis alias quod.',
                `/projects`
            ),
            new ProjectsItem(
                '21-Fev-2023',
                'Practical Design (Desktop View)',
                'Powered by Claudeflare.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia aliquam voluptatem aut, veritatis libero cumque quas debitis alias quod.',
                `https://mdezazulhassan2023.pages.dev`
            ),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section class="fluid-grid-system bg-2" id="projects" data-version="${VERSION}">
        <section style="gap: 0em;" class="container-xl row">
 <h6 class="fade-in-to">Projects</h6>

 <div style="padding-block: 0em; row-gap: 0em;" class="col">
   <h3 class="text-revel-onscrol row">
     Projects have done since 2023 - ${thisYear}
   </h3>
   <div class="row" style="gap: var(--space-xs);">
     <p>
       <span class="text-revel-onscrol">
With ${new Date().getFullYear() - 2023}+ years of experience, I'm Designing & developing websites worldwide. I am providing the best value at a reasonable price with a focus on performance and SEO-friendly architecture.
       </span>
     </p>
     <a class="fade-in-to" href="#projects">View on fullscreen ↘</a>
   </div>
 </div>


 <section style="gap: calc(var(--padding-inline) * 2);" class="row">

 ${projects
     .map(
         project => `
   <section style="padding-block: 0em; row-gap: 0em; border: 0px solid currentColor;" class="col fade-in-top-containe bg-1">
     <div style="gap: .5em;" class="row">
       <h6 class="fade-in-to">${project.date}</h6>
       <h5 style="padding-block: 0em;" class="fade-in-to">${project.category}</h5>
     </div>
     <h4 class="fade-in-to row">${project.title}</h4>
     <div style="gap: var(--space-xs);" class="row">
       <p class="fade-in-to">${project.desc}</p>
       <a target="_blank" class="fade-in-to" href="${project.link}" loading="lazy">View site ↘</a>
     </div>
   </section>
 `
     )
     .join('')}

</section>


        </section>
      </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated TestimonialsSection Component
class TestimonialsSection extends HTMLElement {
    connectedCallback() {
        function QuotesItem(name, title, quote, link, photo) {
            this.name = name;
            this.title = title;
            this.quote = quote;
            this.link = link;
            this.photo = photo;
        }
        const personQuotes = [
            new QuotesItem(
                `${author.name}`,
                `Web Developer`,
                `I always try to provide the best.`,
                `/`,
                `${faviconAuthor}`
            ),
            new QuotesItem(
                `Mariam`,
                `Student`,
                `Hi ${author.name}, thank's a lot!`,
                `#`,
                `${faviconFacebook}`
            ),
            new QuotesItem(
                `Shamin`,
                `Businessman`,
                `My website is faster than ever.`,
                `#`,
                `${faviconFacebook}`
            ),
            new QuotesItem(
                `Tanveer`,
                `Freelancer`,
                `Hey! this is a great design, ${author.name}.`,
                `#`,
                `${faviconFacebook}`
            ),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section class="fluid-grid-system" id="testimonials" data-version="${VERSION}">
    <section class="container-lg row">
     <div class="row">
      <h2 class="text-revel-onscrol">
       Quotes from my clients
      </h2>
      <p>
        <span class="text-revel-onscrol">
 What clients and colleagues say about my front-end architecture and design work.
        </span>
      </p>
     </div>
      <ul class="row">
        ${personQuotes
            .map(
                person => `
 <li class="items-center" style="display: flex; gap: var(--space-2xs);">
   <img src="${person.photo}"/>

   <span>
     <a href="${person.link}"><b>${person.name}</b> (${person.title})
     </a></br>
     <i class="h6">"${person.quote}"</i>
   </span>
 </li>
        `
            )
            .join('')}
      </ul>

      <div class="flex j-end">
<p class="h6">
  Your's coming soon!
</p>
<button style="inline-size: fit-content;"  class="btn-primary">
  <a href="${urlFeedback}" title="Send Review" target="_blank">Add your review ↘</a>
</button>
      </div>

    </section>
   </section>

    `;
        /*

   let quote = document.querySelector('.quote'),
     quotePerson = document.querySelector('.quote-person'),
     quoteButtons = document.querySelectorAll('.quote-button'),

   // quotes
   quoteButtons?.forEach(button => {
     let random = Math.flore(Math.random() * personQuotes.lenth);

     button.addEventListener('click', () => {
       quote?.innerText = personQuotes[random].quote;
       quotePerson?.innerText = personQuotes[random].name
     });
   });

      */

        // 4. THE MAGIC: Synchronous swap
        // Replaces <section> with the contents of the template immediately.
        this.replaceWith(template.content);
        // Replace the custom element with the content
    }
}

// updated FaqsSection Component
class FaqsSection extends HTMLElement {
    connectedCallback() {
        // faqs data array for easy updates
        function FaqsItem(question, answer) {
            this.question = question;
            this.answer = answer;
        }
        const faqs = [
            new FaqsItem(
                `Who am I?`,
                `I'm web developer | <a href="#about"><b>${author.name}</b></a>.`
            ),
            new FaqsItem(
                `What do I do?`,
                `I usually <b> design </b> &amp; <b>develop</b> website<sup class="p-sm">Front-End</sup> using <b>HTML</b>, <b>CSS</b> &amp; <b>JavaScript</b>.`
            ),
            new FaqsItem(
                `What is my design process?`,
                `I use <b>Figma</b> for initial wireframing, followed by <b>Framer</b> or <b>Webflow</b> for high-fidelity development. My goal is to bridge the gap between design and logic.`
            ),
            new FaqsItem(
                `Do I provide custom JS functions?`,
                `Yes, I specialize in latest <b>JavaScript</b> to create custom logic, API integrations, and functional UI components.`
            ),
            new FaqsItem(
                `Am I available for hire?`,
                `Yes, you can hire me throw discussion on <a href="${urlMessenger}" target="_blank"><b>Messenger</b></a>. <sup class="p-sm"> 24/7
 </sup>`
            ),
            new FaqsItem(
                `What is my contact number?`,
                `Mobile: (+880)
  <a href="${urlMobile}"><b>1602-873384</b></a>
  <sup class="p-sm">24/7</sup>
  </br></br>
  Whatsapp: (+880)
  <a href="${urlWhatsapp}"><b>1602-873384</b></a>`
            ),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section class="fluid-grid-system" id="faqs" data-version="${VERSION}">
<section class="container-md">
    <div class="row">
       <h3 class="p">
        FAQ's
       </h3>
    </div>
    <section class="col">

<div class="row items-start">
  <h2>
    Frequently Asked Questions
  </h2>
  <p class="d-none">
    <span class="text-revel-onscrol">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
Adipisci rem magnam molestiae!
    </span>
  </p>
   <div class="flex">
    <input name="agreement" id="agreement" class="pill" checked="" type="radio"/>
    <label for="agreement">
     I agree to the
     <a href="/privacy-policy" target="_blank">
      Privacy Policy
     </a>
    </label>
   </div>
   <button class="pill btn-primary">
    <a href="${urlMessenger}" target="_blank">Ask on Messenger
    </a>
   </button>

      </div>


       <div class="row">
 ${faqs
     .map(
         faq => `
        <details class="py-0 bg-1" name="question">
<summary>
 <h6 class="p py-1">
  ${faq.question}
 </h6>
</summary>
<p style="padding: 1em;" class="h6">
 ${faq.answer}
</p>
        </details>
 `
     )
     .join('')}
       </div>

     </section>
    </section>
   </section>
</section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <section> with the contents of the template immediately.
        this.replaceWith(template.content);
        // Replace the custom element with the content
    }
}

// updated privacy-policy-section component
class PrivacyPolicySection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section style="background: var(--bg-1); color: (--txt-2);" class="fluid-grid-system info-section" data-version="${VERSION}">
<div class="container-md">
<div class="row">

<div class="row">
<h1>
Privacy Policy <span class="d-none"> | Hassan Biswas — UI/UX &amp; Front-End Architecture </span>
</h1>
<p>
<b>Last Updated</b>:  <mark>Jan 01, ${new Date().getFullYear()}</mark>
</p>

<p>
As a Web Developer, I value your privacy and am committed to protecting any personal information you share with me.
</p>
</div>


<ol class="row">
<li>
<h2>
Information I Collect
</h2>
<p>
I may collect the following types of information:
</p>
<ul>
<li>
<strong>
Contact Data:
</strong>
Name, email and phone number.
</li>
<li>
<strong>
Technical Data:
</strong>
IP address, browser type, and usage patterns collected via cookies or analytics tools.
</li>
<li>
<strong>
Project Data:
</strong>
Information regarding your website requirements and design preferences.
 </li>
 </ul>
 </li>


<li>
 <h2>
How I Use Your Information
 </h2>
<p>
The information collected is used to:
 </p>
<ul>
 <li>
Provide and improve services.
</li>
<li>
 Communicate with regarding project inquiries or updates.
 </li>
 <li>
Analyze website performance to enhance user experience.
</li>
 </ul>
</li>


<li>
<h2>
Third-Party Services
</h2>
<p>
 I do not sell or trade your personal information. However, if website is hosted on GitHub Pages, which may collect server logs. Also use tools like Google Analytics to monitor traffic.
</p>
    </li>


    <li>
      <h2>
        Your Rights
      </h2>
      <p>
        You have the right to request access to the personal data I hold about you, or to request that I delete any personal information by contacting me directly.
      </p>
    </li>


    <li>
      <h2>
        Contact Me
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please contact me.
      </p>
    </li>

  </ol>

</div>
</div>
      </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}

// refund-and-cancelation-policy-section component
class RefundAndCancelationPolicySection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section style="background: var(--bg-1); color: (--txt-2);" class="fluid-grid-system info-section" data-version="${VERSION}">
 <div class="container-md">
<div class="row">

<div class="row">
 <h1>
Refund &amp; Cancelation Policy <span class="d-none"> | Hassan Biswas — UI/UX &amp; Front-End Architecture </span>
 </h1>
<p>
<b>Last Updated</b>:  <mark>Jan 01, ${new Date().getFullYear()}</mark>
 </p>

<p>
Thank you for choosing my services
. I provide custom digital services, I want to ensure we have a clear understanding of our financial commitment before a project begins.
 </p>
 </div>


 <ol class="row">
 <li>
 <h2>
 Project Deposits
 </h2>
 <p>
 Most projects require an initial deposit (typically
 <b>
30% to 50%
</b>
) before work commences. This deposit secures your spot in my workflow and covers the initial research and architecture phase.
<strong>
 Deposits are non-refundable
 </strong>
 once work has started.
 </p>
 </li>


 <li>
 <h2>
 Cancellation During Development
 </h2>
 <p>
 If a project is cancelled after development has begun but before completion, the client is responsible for payment for all work completed up to the date of cancellation.

  <ul>
 <li>
 If the work completed exceeds the deposit, an additional invoice will be issued.
</li>
 <li>
 If the work completed is less than the deposit, no refund of the deposit will be issued.
</li>
</ul>
</p>
</li>


<li>
<h2>
Final Delivery &amp; Acceptance
</h2>
<p>
Once the final files are delivered and the "Final Approval" is signed off by the client,
<strong>
 no refunds will be issued
 </strong>
 . Digital products cannot be "returned" in the traditional sense once the source code is in the client's possession.
 </p>
 </li>


 <li>
 <h2>
 Revisions
 </h2>
<p>
To ensure satisfaction, I include a specific number of revision rounds (as stated in our initial contract). This allows us to fine-tune the design and functionality before final delivery.
</p>
</li>


<li>
<h2>
Questions &amp; Disputes | Contact Me
</h2>
<p>
I strive for 100% client satisfaction. If you are unhappy with the progress of your project, please contact me immediately so we can find a solution.
</p>
</li>

</ol>

</div>
</div>
</section>

`;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}

// updated terms-of-service-section
class TermsOfServiceSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section style="background: var(--bg-1); color: (--txt-2);" class="fluid-grid-system info-section" data-version="${VERSION}">
<div class="container-md">
<div class="row">

<div class="row">
<h1>
Terms of Service <span class="d-none"> | Hassan Biswas — UI/UX &amp; Front-End Architecture </span>
</h1>
<p>
<b>Last Updated</b>:  <mark>Jan 01, ${new Date().getFullYear()}</mark>
</p>

<p>
These terms govern the web design and front-end development services provided by
<strong>
Hassan Biswas
</strong>
through the website
.
</p>
</div>


<ol class="row">
<li>
<h2>
Acceptance of Terms
</h2>
<p>
By engaging in a project or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use my services.
</p>
</li>


<li>
<h2>
Scope of Work
</h2>
<p>
I provide front-end development and web design services. The specific deliverables, timelines, and costs will be outlined in a separate project proposal or email agreement for each individual client.
</p>
</li>


<li>
<h2>
Intellectual Property &amp; Ownership
</h2>
<p>
Upon final payment, the ownership of the final front-end code (<b>HTML, CSS, JS</b>) and design <b>assets</b> is transferred to the client. However, I reserve the right to:
<ul>
<li>
Display the completed work in my professional portfolio.
</li>
<li>
Reuse generic code snippets or libraries developed during the project.
</li>
</ul>
</p>
</li>


<li>
<h2>
Payment Terms
</h2>
<p>
Invoices are sent via the agreed-upon <a href="/payment">method</a>. A deposit is required to start work. Final files will be delivered or deployed only after the full remaining balance is cleared.
</p>
</li>


<li>
<h2>
Client Responsibilities
</h2>
<p>
The client is responsible for providing all necessary content (<b>text, images, branding</b>) in a timely manner. Delays in providing content will result in a shift in the project deadline.
</p>
</li>


<li>
<h2>
Limitation of Liability
</h2>
<p>
I strive for perfection, but I am not liable for any lost profits, data loss, or service interruptions caused by third-party hosting, browser updates, or client-side modifications after the project is handed over.
</p>
</li>


<li>
<h2>
Governing Law
</h2>
<p>
These terms are governed by the laws of
<mark>
Bangladesh
</mark>
. Any disputes shall be resolved through mutual discussion or within the jurisdiction of local courts.
</p>
</li>



<li>
<h2>
Contact Me
</h2>
<p>
For any legal inquiries regarding these terms, please reach out.
</p>
</li>


</ol>


</div>
</div>
</section>

`;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}

// updated ContactSection Component
class ContactSection extends HTMLElement {
    connectedCallback() {
        // 1. Data Source (Scalable: could be moved to a global config)
        function LinksDataItem(name, link, title, favicon) {
            this.name = name;
            this.link = link;
            this.title = title;
            this.favicon = favicon;
        }
        const linksData = [
            new LinksDataItem(`(+880) 1602-873384`, `${urlMobile}`, `Mobile`, `${faviconMobile}`),
            new LinksDataItem(
                `@hassanbiswas.github.io`,
                `${urlMessenger}`,
                `Messenger`,
                `${faviconMessenger}`
            ),
            new LinksDataItem(
                `hassanbiswas.github.io@gmail.com`,
                `${urlGmail}`,
                `Gmail`,
                `${faviconGmail}`
            ),
            new LinksDataItem(`${locationPrimary}`, `${begaritola}`, `Location`, `${faviconMap}`),
        ];

        function ButtonsItem(name, link, classes) {
            this.name = name;
            this.link = link;
            this.classes = classes;
        }
        const buttons = [
            new ButtonsItem(`Open Map ↘`, `${author.direction}`, `btn-primary`),
            new ButtonsItem(`View Reviews ↘`, `${urlFeedback}`, `d-none`),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

    <section id="contact" class="fluid-grid-system py-5" data-version="${VERSION}">
    <section class="container">

     <div class="row">
       <h2 class="h4">
        Contact with ${author.name}
       </h2>
       <div class="flex no-wrap items-start">
<div class="row">
  <a href="${begaritola}">
    <img class="square rounded" alt="${author.title}" src="${author.photo}"/>
  </a>
        </div>
        <div style="flex: 1; flex-basis: 23rem; gap: var(--space-xs);" class="row">
 <p class="p">${author.description}</p>
 <h6 class="p-sm">Prefered Languages:</h6>
 <ul style="list-style: none;" class="flex">
   ${preferedLanguages
       .map(
           language => `
     <li>${language}</li>
  `
       )
       .join('')}
 </ul>
      <div style="flex: 1; gap: var(--space-xs)" class="row even-row">
       ${linksData
           .map(
               data => `
       <div class="flex col-md-2 gap-1 no-wrap no-grow items-start">
        <img class="squar" alt="${data.title}" src="${data.favicon}"/>
        <a href="${data.link}" title="${data.title}">
<p>${data.name}</p>
        </a>
       </div>
       `
           )
           .join('')}
      </div>
        </div>
       </div>
     </div>

      <div class="flex j-end">
        <a target="_blank" href="${urlMessenger}">Start Chat ↘</a>

        <button style="" class="btn-primary">
 <a href="/vcf">Download VCF</a>
        </button>
      </div>

     <div class="row items-end">
       <iframe class="inverse" title="Location" src=" ${author.iframeHome}" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
       </iframe>

       <div class="flex">
${buttons
    .map(
        button => `
  <button class=" ${button.classes} ">
    <a href="${button.link}">${button.name}
    </a>
  </button>
`
    )
    .join('')}
      </div>
     </div>


    </section>
    </section>


    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// updated FooterSection Component
class FooterSection extends HTMLElement {
    connectedCallback() {
        // Constructor Function
        function NavItem(name, link) {
            this.name = name;
            this.link = link;
        }

        // Clean & readable initialization
        const navigations = [
            new NavItem(`Home ↘`, `/`),
            new NavItem(`About ↘`, `/#about`),
            new NavItem(`Services ↘`, `/#services`),
            new NavItem(`Projects ↘`, `/#projects`),
            new NavItem(`Contact ↘`, `/#contact`),
            new NavItem(`Case Studies`, `/github`),
            new NavItem(`Templates`, `/github`),
        ];

        function MethodsItem(name, link, title, alt, favicon) {
            this.name = name;
            this.link = link;
            this.title = title;
            this.alt = alt;
            this.favicon = favicon;
        }
        const methods = [
            new MethodsItem(
                `Meet`,
                `${urlMeet}`,
                `Video Conference`,
                `Google Meet`,
                `${faviconMeet}`
            ),
            new MethodsItem(`bKash`, `${urlBkash}`, `Payment by bKash`, `bKash`, `${faviconBkash}`),
        ];

        function LegalsItem(name, link) {
            this.name = name;
            this.link = link;
        }
        const legals = [
            new LegalsItem(`Privacy Policy`, `/privacy-policy`),
            new LegalsItem(`Terms of Service`, `/terms-of-service`),
            new LegalsItem(`Refund &amp; Cancelation Policy`, `/refund_and_cancelation-policy`),
        ];

        function SocialsItem(name, link, favicon) {
            this.name = name;
            this.link = link;
            this.favicon = favicon;
        }
        const socials = [
            new SocialsItem(`Facebook`, `${urlFacebook}`, `${faviconFacebook}`),
            new SocialsItem(`Instagram`, `${urlInstagram}`, `${faviconInstagram}`),
            new SocialsItem(`Threads`, `${urlThreads}`, `${faviconThreads}`),
            new SocialsItem(`X (Twitter)`, `${urlX}`, `${faviconX}`),
        ];

        // Instantiate SectionData for current element
        const sectionData = new SectionData(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<footer class="fluid-grid-system" id="footer" data-version="${VERSION}">
   <section class="container-xl row gap-4 py-5">
    <section class="flex j-center">
      <form class="flex">
        <label style="opacity: 1;" class="d-non" for="system-theme">Choose Theme:</label>
        <select id="system-theme" name="system-theme" class="pill btn-primary">
 <option value="default">Default</option>
 <option value="light">Light</option>
 <option value="dark">Dark</option>
        </select>
      </form>
    </section>
    <section class="col">
     <section class="row">
      <h5>${author.title}</h5>
      <p>${author.description}</p>
      <p>
       Providing high-quality web design and front-end development services to clients in ${locationSecondary}.
      </p>

      <div class="row">
      <div style="align-content: stretch;" class="flex grow a-center">
        <button style="display: flex; align-items: center; justify-content: center; text-align: center; flex: 1; block-size: stretch; align-self: stretch;" class="btn-primary pill flex items-center txt-center">
 <a class"txt-center flex items-center txt-center" href="/resume">
   Resume ↘
 </a>
        </button>

       <button class="btn-primary no-wrap flex items-center txt-center" style="--primary-50: rgb(0, 256, 0); flex: 1; display: flex; align-items: center; justify-content: center; align-content: center; background: rgba(0, 256, 0, .3); display: none; color: var(--txt-1);" id="installApp">
        <img style="display: inline;" class="squar" alt="Android" src="${faviconAndroid}"/>
        <span style="line-height: 100%" class="d-non">Install ↘</span>
       </button>

      </div>
      </div>

     </section>

     <section style="" class="flex items-start">
      <nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h6 class="">
        Navigation
       </h6>
       <div class="flex navigation-links">

       ${navigations
           .map(
               navigation => `
<a style="flex: 1; flex-basis: 10ch;" href="${navigation.link}">${navigation.name}
</a>
       `
           )
           .join('')}

       </div>
      </nav>

      <nav style="flex: 1; flex-basis: 15ch; gap: var(--space-xs);" class="row">
       <h6 class="">
        Method
       </h6>
       <div class="flex methode-links">

       ${methods
           .map(
               method => `
        <a style="flex: 1; flex-basis: 10ch; display: flex; align-items: center; gap: 0.5em;" href="${method.link}" target="_blank" title="${method.title}">
<img class="squar" alt="${method.alt}" loading="lazy" src="${method.favicon}"/> ${method.name}
        </a>
       `
           )
           .join('')}

       </div>
      </nav>

      <nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h6 class="">
        Legal
       </h6>
       <div class="flex legal-links">

       ${legals
           .map(
               legal => `
        <a style="flex: 1; flex-basis: 10ch;" href="${legal.link}">
${legal.name}
        </a>
       `
           )
           .join('')}

       </div>
      </nav>
      <nav style="flex: 1; flex-basis: 10ch; gap: var(--space-xs);" class="row">
       <h6 class="">
        Social
       </h6>
       <div class="flex social-links">
        <!-- class = icon -->

       ${socials
           .map(
               social => `
        <a style="flex: 1; flex-basis: 10ch; z-index: 789; display: flex; align-items: center; gap: 0.5em;" href="${social.link}" target="_blank" title="${social.name}">
<img style="border-radius: var(--pill); overflow: clip;" class=”pill squar rounded" alt="${social.name}" loading="lazy" src="${social.favicon}"/> ${social.name}
        </a>
       `
           )
           .join('')}


        <a id="chat-bubble" style="flex: 1; flex-basis: 5ch;" class=”pill squar rounded" href="${urlMessenger}" target="_blank" title="Messenger">
 <img class=”pill squar rounded" alt="Chat on Messenger" loading="lazy" src="${getFavicon(`m.me`, 50)}"/>
        </a>


       </div>
      </nav>
     </section>
    </section>
    <section class="col items-center">
     <div class="flex grow input-group items-center">
      <input style="padding: var(--space-s); border: 1px solid var(--primary-50); color: var(--primary-50); background: color-mix(in hsl, var(--bg), transparent 30%); font-weight: bold;" class="pill" placeholder="@hassanbiswas.github.io" readonly type="text"/>
      <a style="text-decoration: none;" href="${urlYoutube}">
       <button class="btn-primary">Subscribe</button>
      </a>
     </div>
    </section>
   </section>
   <!-- footer with links & logo -->
   <p style="display: none;" class="container-md">
    &copy; ${new Date().getFullYear()} ${author.title}
   </p>

   <div class="container-lg mask infinite-scroller" data-direction="right/left" data-speed="fast/slow" id="footer-marquee">
    <section class="svg-wrapper infinite-scroller_inner">
     <svg>
      <text class="copyright" y="95">
       &copy;
      </text>
     </svg>
     <svg>
      <text class="txt-stroke" y="95">
        ${new Date().getFullYear()}
      </text>
     </svg>
     <svg>
      <text y="95">
        ${author.title}
      </text>
     </svg>
    </section>
   </div>

  </footer>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.

        // Cache elements from fragment before swapping
        const content = template.content;

        /*
    const installBtn = content.querySelector('#installApp');
    const themeSelect = content.querySelector('#theme-selector');

    // Handle PWA install logic (placeholder)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      installBtn.style.display = 'flex';
    });
    */

        this.replaceWith(content);
    }
}

// updated NavigationSection Component
class NavigationSection extends HTMLElement {
    connectedCallback() {
        // Navigation Constructor Function
        function NavItem(name, link) {
            this.name = name;
            this.link = link;
        }

        // Clean & readable initialization
        const navigations = [
            new NavItem(
                `<span class="items-center" style="display: flex; gap: var(--space-xs); padding-inline-end: var(--space-m);"><img src="${faviconAuthor}" alt="Home"/>Home</span>`,
                '#hero'
            ),
            new NavItem('About', '#about'),
            new NavItem('Services', '#services'),
            new NavItem('Projects', '#projects'),
        ];

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

  <section class="fluid-grid-system" id="bottom-navigation" data-version="${VERSION}">
   <section style="overflow: visible;" class="container-sm row">
    <nav class="nav-list items-center txt-center" id="header-nav-list">

       ${navigations
           .map(
               navigation => `
        <a style="block-size: stretch; ${navigator.style || ''}" class="list-item flex items-center txt-center ${navigation.class || ''}" href="/${navigation.link}" t>
${navigation.name}
        </a>
       `
           )
           .join('')}

        <a class="list-item active-bg" inert=""></a>

    </nav>
   </section>
  </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <contact-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}

// ###################
// inits custom elements
// ###################

// ***** defining custom elements *****

if (!customElements.get('loader-section')) {
    customElements.define('loader-section', LoaderSection);
}

// Define the custom element
if (!customElements.get('notch-section')) {
    customElements.define('notch-section', NotchSection);
}

// Define the custom element
if (!customElements.get('toast-section')) {
    customElements.define('toast-section', ToastSection);
}

// Define the custom element
if (!customElements.get('design-system-section')) {
    customElements.define('design-system-section', DesignSystemSection);
}

// Define the custom element
if (!customElements.get('hero-section')) {
    customElements.define('hero-section', HeroSection);
}

// Define the custom element
if (!customElements.get('clients-section')) {
    customElements.define('clients-section', ClientsSection);
}

// Define the custom element
if (!customElements.get('about-section')) {
    customElements.define('about-section', AboutSection);
}

// Define the custom element
if (!customElements.get('services-section')) {
    customElements.define('services-section', ServicesSection);
}

// Define the custom element
if (!customElements.get('projects-section')) {
    customElements.define('projects-section', ProjectsSection);
}

// Define the custom element
if (!customElements.get('testimonials-section')) {
    customElements.define('testimonials-section', TestimonialsSection);
}

// Define the custom element
if (!customElements.get('faqs-section')) {
    customElements.define('faqs-section', FaqsSection);
}

// Define the custom element
if (!customElements.get('privacy-policy-section')) {
    customElements.define('privacy-policy-section', PrivacyPolicySection);
}

// Define the custom element
if (!customElements.get('terms-of-service-section')) {
    customElements.define('terms-of-service-section', TermsOfServiceSection);
}

// Define the custom element
if (!customElements.get('refund-and-cancelation-policy-section')) {
    customElements.define(
        'refund-and-cancelation-policy-section',
        RefundAndCancelationPolicySection
    );
}

// Define the custom element
if (!customElements.get('contact-section')) {
    customElements.define('contact-section', ContactSection);
}

// Define the custom element
if (!customElements.get('footer-section')) {
    customElements.define('footer-section', FooterSection);
}

// Define the custom element
if (!customElements.get('navigation-section')) {
    customElements.define('navigation-section', NavigationSection);
}

// ***** defining custom elements ends *****

const injectMetaTheme = () => {
    let metaTheme = document.querySelector('meta[name="theme-color"]');

    if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.setAttribute('name', 'theme-color');
        head.appendChild(metaTheme);
    }

    metaTheme.content = primaryColor;
    metaTheme.setAttribute('data-version', VERSION);
};

// 5. Run it after the DOM is fully loaded to ensure CSS variables are ready
// 4. Execution Logic: Run immediately or wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectMetaTheme);
} else {
    injectMetaTheme();
}
// 3. Fallback logic: Ensure the value exists and isn't just an empty string
primaryColor = styleSheet.getPropertyValue('--primary-50').trim() || 'hsl(240, 80%, 50%)';

// detect if a user is running your web app as an installed PWA (standalone mode)
window.matchMedia('(display-mode: standalone)').addEventListener('change', evt => {
    if (evt.matches) {
        // console.log("Switched to Standalone Mode");
        // Run your VERSION logic or reset UI
        document.getElementsByTagName('body')[0].dataMode = 'standalone';
    }
});

// scroll to top
export function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// *** before animation, init custom el ***

// #######################
// \\\\\ animation \\\\\\\
// #######################

// view transition
document.querySelectorAll('animate')?.forEach(el => {
    // get screen position
    el.classList.add('animation');

    // in html animate.animation { css animation: ; }
});

// ======== Functions =========

// for revel animation
const observerOptions = {
    root: null, // use the viewport
    // avoid 1
    threshold: 0.15, // trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px', // trigger slightly before it enters the view
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            // Optional: stop observing once it has appeared
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements you want to animate
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// for navigation
const navObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav#header-nav-list a[href="/#${id}"]`);

            if (entry.isIntersecting) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    },
    { threshold: 0.06 }
); // Trigger when section is 60% visible, avoid 1

document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));

// ------ install app --------
let deferredPrompt;
const installBtn = document.getElementById('installApp');

window.addEventListener('beforeinstallprompt', e => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', () => {
        // Hide our custom install button
        installBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                // console.log('User accepted the install prompt');
            } else {
                // console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
}); // may be extra!

// Logic to hide button if already installed
window.addEventListener('appinstalled', () => {
    // console.log('PWA was installed');
    installBtn.style.display = 'none';
});

/*

class TSection extends HTMLElement {
  connectedCallback() {
    // Destructuring attributes for cleaner code
    const props = {
      selector: this.getAttribute("selector") || "fluid-grid-system",
      heading: this.getAttribute("heading") || "New Project",
      details: this.getAttribute("details") || "details",
      link: this.getAttribute("link") || "#",
      linkText: this.getAttribute("linkText") || "View Case Study",
      img: this.getAttribute("img") || ""
    };

    this.render(props);
  }

  render(props) {
    this.innerHTML = `
      <section class="${props.selector}" data-version="${VERSION}">
        <div class="primary">
 <h2>${props.heading}</h2>
 <p>${props.details}</p>
 <a class="btn" href="${props.link}">${props.linkText}</a>
        </div>
        <div class="media-wrapper">
 <img src="${props.img}" alt="${props.heading}" loading="lazy" />
        </div>
      </section>

      <style>
        .${props.selector} .btn {
 background-color: hsl(240, 80%, 50%);
 color: white;
 padding: 12px 24px;
 text-decoration: none;
 display: inline-block;
 transition: filter 0.3s ease;
        }
        .${props.selector} .btn:hover {
 filter: brightness(1.2);
        }
      </style>
    `;
  }
}

customElements.define("t-section", TSection);

*/
// >> removed

// - 1. inject HTML element ##############
// - 2. get HTML element ###############

// ###### HTML dom goes above ######

// define custom elements before get dom element || seoMedia || function || call

// ###### JavaScript function goes bellow ######

/**
 *  * Concise Path Extractor & Dynamic Heading
 */
/* (() => {
    // 1. Extract path keyword and set heading tag
    const path = window.location.pathname.split('/').filter(Boolean)[0]?.toLowerCase() || '';
    const headingTag = path ? 'h1' : 'h2';

    // 2. Create heading element
    const heading = document.createElement(headingTag);
    // 3. Find leaf elements or attributes matching the path string
    const matchedElements = path
        ? [...document.querySelectorAll('body *:not(script):not(style)')].filter(
     el =>
(!el.children.length && el.textContent.toLowerCase().includes(path)) ||
[...el.attributes].some(a => a.value.toLowerCase().includes(path))
 )
        : [];

    console.log(`Tag: <${headingTag}>, Path: "${path}"`, matchedElements);
})(); */

const seoMedia = () => {
    let height = window.innerHeight,
        width = window.innerWidth,
        aspectRatio = width >= height ? `16/9` : `9/16`;

    const medias = document.querySelectorAll('a, img, picture, svg, video, iframe');
    const links = document.querySelectorAll('a');
    const photos = document.querySelectorAll('img, picture');
    const videos = document.querySelectorAll('video');
    const iframes = document.querySelectorAll('iframe');
    const svgs = document.querySelectorAll('svg');

    // medias a, img, picture, video, iframe, svg
    medias?.forEach(el => {
        el.setAttribute('loading', 'lazy');
        el.setAttribute('draggable', 'false');
    });

    // a
    /*
      links?.forEach(el => {
        el.setAttribute('target', '_blank');
      });
      */
    // photo
    // photos?.forEach((el) => {
    // el.style.aspectRatio = aspectRatio;
    // el.setAttribute("alt", `Visual content`);
    // el.style.height = `100%`;
    // el.style.width = `100%`;
    // });
    // video
    videos?.forEach(el => {
        el.setAttribute('muted');
        el.setAttribute('loop');
        el.setAttribute('autoplay');
        el.setAttribute('playsinline');
        // el.style.objectFit = `scale-down`;
    });
    // svg
    svgs?.forEach(el => {
        el.setAttribute('sizes', 'any');
        el.style.objectFit = `scale-down`;
    });
};
seoMedia();

//  Simple Accessibility Audit Helper

const auditAccessibility = () => {
    const images = document.querySelectorAll('img:not([alt])');
    const buttons = document.querySelectorAll('button:not([aria-label])');

    /*
    if (images.length || buttons.length) {
      console.warn(`[A11Y Audit] Found ${images.length} images missing alt and ${buttons.length} buttons missing labels.`);
    }
    */

    images?.forEach(el => {
        el.setAttribute('alt', `Visual content`);
    });
    buttons?.forEach(el => {
        el.setAttribute('aria-label', `button`);
    });
};

auditAccessibility();

const imageContainers = document.querySelectorAll('*:has(img, picture, video, iframe)');

// color from image
/* imageContainers?.forEach(container => {
    let image = container.querySelector('img'),
        width = image.innerWidth,
        height = image.innerHeight,
        canvas = container.createElement('canvas'),
        ctx = canvas.getContext('2d');

    canvas.setAttribute('inert');
    canvas.setAttribute('aria-hidden', 'true');

    canvas.innerWidth = width;
    canvas.innerHeight = height;
    ctx.drawImage(image, 0, 0, width, height); // img

    let imageData = ctx.getImageData(x, y, 1, 1).data,
        r = imageData[0],
        g = imageData[1],
        b = imageData[2];

    // convrt rgb to hex
    let imageColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    container.style.setProperty(`--primary-50`, imageColor);
}); */

// v2026.04.25
let animes = document.querySelectorAll('.anime');
// animation
const animeObserver = new IntersectionObserver(entries => {
    entries.forEach(
        entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
            // if (entry.isIntetsecting) animeObserver.unobserve(entry.target)
        },
        {
            threshold: 1, // or rootMargin: "-100px",
        }
    );
});

animes?.forEach(el => {
    animeObserver.observe(el);
});

// v2026.04.25
// remove lazy loading for screen media
const mediaObserver = new IntersectionObserver(entries => {
    entries.forEach(
        entry => {
            entry.target.removeAttribute('loading', entry.isIntersecting);
            if (entry.isIntetsecting) mediaObserver.unobserve(entry.target);
        },
        {
            rootMargin: '100px',
        }
    );
});

medias?.forEach(el => {
    mediaObserver.observe(el);
});

const infiniteScrollers = document.querySelectorAll('.infinite-scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    infiniteScroll();
}

const infiniteScroll = () => {
    infiniteScrollers?.forEach(infiniteScroller => {
        infiniteScroller.setAttribute('data-animation', true);

        const infiniteScrollerInner = infiniteScroller?.querySelector('.infinite-scroller_inner');
        const infiniteScrollerContents = ArrayFrom(infiniteScrollerInner?.children);

        infiniteScrollerContents.forEach(content => {
            const duplicatedContent = content.cloneNode(true);
            duplicatedContent.setAttribute('aria-hidden', true);
            infiniteScrollerInner.appendChild(duplicatedContent);
        });
    });
}; // end

export function fadeInTop() {
    let fadeInTop = document.querySelectorAll('.fade-in-top');

    fadeInTop?.forEach(el => {
        let rect = el.getBoundingClientRect(),
            revelPosition = rect.width / 2 + window.innerWidth,
            revelPosition2 = rect.width / 2;
        rect.right > revelPosition || revelPosition2 > rect.right
            ? (el.style = `transform: translateY(-100%); opacity: 0;`)
            : (el.style = `transform: translateY(0); opacity: 1;`);
    });
}

export function textRevelOnscroll() {
    let textRevelOnscroll = document.querySelectorAll('.text-revel-onscroll');

    textRevelOnscroll?.forEach(revel => {
        let rect = revel.getBoundingClientRect(),
            revelPosition = window.innerHeight - rect.top + rect.height / 2,
            percentage = (revelPosition / rect.top) * 100;
        revelPercentage = Math.min(Math.max(0, percentage), 100);

        revel.animate(
            {
                backgroundSize: `${revelPercentage}% 100%`,
            },
            { duration: 1200, fill: 'forwards' }
        );
    });
}

window.addEventListener('scroll', () => {
    fadeInTop();
    textRevelOnscroll();
});

/**
 *  * UI Engine - Lerp & Logic Preservation
 * Version: 2026.04.25
 */

// const VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');

/*
     const UI = {
       version: VERSION,


        lerp: (a, b, t) => a + (b - a) * t,




splitText(selector) {
    const el = document.querySelector(selector);
        if (!el) return [];
   const text = el.textContent;
       el.innerHTML = "";
  el.style.opacity = "1";

 return text.split("").map(char => {
const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
span.style.display = "inline-block";
       span.style.willChange = "transform, opacity";
el.appendChild(span);
 return span;
     });
},




        animate({ duration, draw, easing = (t) => t }) {
   const start = performance.now();

       requestAnimationFrame(function frame(time) {
    let timeFraction = (time - start) / duration;
 if (timeFraction > 1) timeFraction = 1;

       // Apply easing to the time fraction
    const t = easing(timeFraction);

       draw(t);

if (timeFraction < 1) requestAnimationFrame(frame);
});
 },




reveal(selector) {
const chars = this.splitText(selector);

chars.forEach((char, i) => {
  setTimeout(() => {
 this.animate({
duration: 800,
   // Using a sine-based smoothing for the progress 't'
    easing: (progress) => (Math.sin(progress * Math.PI - Math.PI / 2) + 1) / 2,
     draw: (t) => {
        // LERP from 20px to 0px (X) and -50% to 0% (Y)
  const x = this.lerp(20, 0, t);
     const y = this.lerp(-50, 0, t);
        const opacity = this.lerp(0, 1, t);

  char.style.opacity = opacity;
     char.style.transform = `translate3d(${x}px, ${y}%, 0)`;
}
});
  }, i * 50);
      });
}
};

        // --- Automation & Execution ---

        // Set-and-forget intersection trigger
const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
     if (entry.isIntersecting) {
UI.reveal(entry.target.id ? `#${entry.target.id}` : null);
        observer.unobserve(entry.target);
   }
});
}, { threshold: 0.1 });

     // Initialize for specific heading
const heading = document.querySelector("#heading");
if (heading) observer.observe(heading);

console.log(`UI Engine Active: v${UI.version}`);
   */

const itemObserver = new IntersectionObserver(entries => {
    entries.forEach(
        entry => {
            entry.target.classList.toggle('observing', entry.isIntersecting);
            // if (entry.isIntetsecting) itemObserver.unobserve(entry.target)
        },
        {
            threshold: 1, // or rootMargin: "-100px",
        }
    );
});

const observingItems = document.querySelectorAll('.observing-item');
observingItems?.forEach(item => {
    itemObserver.observe(item);
});

/*

const favicon = document.querySelector('link[rel="icon"]');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');

export function updateFavicon() {
  // Logic to switch the fill color in the Data URI string
  // if (isDark.matches) { ... }
}

isDark.addEventListener('change', updateFavicon);

*/

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// 1. Define the handler
const handleThemeChange = e => {
    const isDark = e.matches;
    syncThemeColor(isDark); // Pass the boolean for cleaner logic
};

// 2. Attach the listener
darkModeMediaQuery.addEventListener('change', handleThemeChange);

// 3. Run once on load to set the initial state
handleThemeChange(darkModeMediaQuery);

// ###### function calls bellow ######

// ###################
// inits & event listners
// ###################

// Identify if in WebView
const isWebView = navigator.userAgent.includes('HassanBiswasApp');
if (isWebView) {
    document.body.classList.add('app-mode');
    // console.log("App Mode Active");
}

// ######### Don't Go Bellow ⚠️ ##########
// ========= Handle Window Change ========
document.addEventListener('scroll', s => {});
document.addEventListener('resize', r => {});
document.body.addEventListener('change', c => {});

document.addEventListener('DOMContentLoaded', function () {
    // console.log("HTML DOM is loaded, but images might not be!");
    // SEO script for hight performance & ranking
});

window.addEventListener('focus', () => {
    window.location.reload();
});
