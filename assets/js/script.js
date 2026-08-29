// variable
// function
// component
// execute

// ###################
// variables
// ###################

// dates functions
export const thisYear = new Date().getFullYear(),
    thisMonth = new Date().getMonth() + 1, // january = 0
    thisDay = new Date().getDate(),
    // Cache-busting & Logic automation for versioning
    VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');
// Results in YY.MM.DD format (e.g., xxxx.xx.xx)
Object.assign(document.documentElement, { lang: 'en', dir: 'ltr' }).dataset.version = VERSION;

// ================== SEO

// Favicon+SVG <link>
const linkSvg = (url = `#`, alt = `alt`, width = `100%`) => {
    return `href="${url}"
        alt="${alt}"
        width="${width}"
        rel="icon"
        aria-hidden="true"
        aspect-ratio="1"
        height="auto"
        size="any"
        type="image/svg+xml"
        loading="lazy"
        draggable="false"
        decoding="async" data-version="${VERSION}"`;
};

// Font <link>
const linkFont = (url = `#`) => {
    return `href="${url}"
        rel="preconnect"
        as="font"
        type="font/ttf"
        crossorigin data-version="${VERSION}"`;
};

// img
const seoImg = (url = `#`, alt = `alt`, width = `100%`, aspectRatio = `1`) => {
    return `src="${url}"
        alt="${alt}"
        width="${width}"
        aspect-ratio="${aspectRatio}"
        aria-hidden="true"
        height="auto"
        size="any"
        loading="lazy"
        draggable="false"
        decoding="async" data-version="${VERSION}"`;
}; /*
<picture>
<source type="image/avif" srcset="img.avif"/>
<source type="image/webp" srcset="img.webp"/>
<img src="img.jpg" />
</picture>*/

// a
const seoA = () => {
    return `loading="lazy"
        rel="noopener noreferrer"
        target="_blank"`;
};

// button
const seoButton = () => {
    return `type="button" aria-expanded="false"`;
};

// Component+JS <script>
const linkComponent = url => {
    return `src="${url}" defer type="module"`;
};

// CSS <link>
const linkCss = (url = `#`) => {
    return `href="${url}" rel="preload" as="style"`;
};

// ================== SEO HTML

const header = () => {
    return `id="header" role="banner" data-version="${VERSION}"`;
};
const navPrimary = () => {
    return `aria-label="Primary Navigation" "data-version="${VERSION}"`;
};
const aSection = sectionId => {
    return `href="#${sectionId}" class="skip-to-content" data-version="${VERSION}"`;
};
const main = () => {
    // return `id="main" role="main" data-version="${VERSION}"`;
    document.querySelector('main').setAttribute('id', 'main');
    document.querySelector('main').setAttribute('role', 'main');
    document.querySelector('main').setAttribute('data-version', `${VERSION}`);
};
main();
const seoSection = () => {
    return `set_aria-labelledby="h-Id" data-version="${VERSION}"`;
};
const footer = () => {
    return `id="footer" role="contentinfo" data-version="${VERSION}"`;
};

// absolute path for components
// header > location cta
// nav fixed floating
// main >
// hero > h1 img skill tools reviews + scroll (logo/clients)
// about > story > birth/school/college/proffession
// services > scroll-left
// testimonials - contact(map) - faqs
// footer

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
// authore.subscribe = `https://youtube.com/`;

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

const worldwide = `<a ${seoA()} href="${asia}">Asia</a>, <a ${seoA()} href="${africa}">Africa</a>, <a ${seoA()} href="${northAmerica}">North America</a>, <a ${seoA()} href="${southAmerica}">South America</a>, <a ${seoA()} href="${europe}">Europe</a>, <a ${seoA()} href="${oceania}">Oceania</a>`;

const locationPrimary = `
<a ${seoA()} href="${jashore}">Jashore</a>
<a ${seoA()} href="${khulna}">Khulna</a>
<a ${seoA()} href="${bangladesh}">Bangladesh</a>`,
    locationSecondary = `
    <a ${seoA()} href="${dhaka}">Dhaka</a>,
    <a ${seoA()} href="${bangladesh}">Bangladesh</a> &amp; Worldwide<span class="d-none"> (${worldwide})<span>`;

const root = document.documentElement,
    head = document.head || document.getElementsByTagName('head')[0],
    body = document.body || document.getElementsByTagName('body')[0],
    // 2. Get the computed style of the root
    styleSheet = getComputedStyle(document.documentElement);

let primaryColor = `hsl(240, 80%, 50%)`;

// <a ${seoA()} href=""></a>
// review
const urlFeedback = `https://g.page/r/CbEdPSgyd93iEBI/review`;

author.direction = `https://maps.google.com/maps?ll=23.070916,89.234141&z=15&t=m&hl=en&gl=BD&mapclient=embed&cid=16347353279731932593`;

export const ssl = ssl => {
    return `https://${ssl}`;
};
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

//  Constractor for listing
const list = (name, link = '#', favicon = null) => {
    return `<li>${a(name, link)}</li>`;
};
export function List(name, link = '#', favicon = null) {
    this.name = name;
    this.link = link;
    this.favicon = favicon;
}

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

export function ServicesPrimaryItem(name, price, description) {
    this.name = name;
    this.price = money(price);
    this.description = description;
}
const servicesPrimary = [
    new ServicesPrimaryItem(
        `UI/UX design`,
        80,
        `Custom wireframes, modern color schemes, interactive prototypes in Figma optimized for conversion.`
    ),
    new ServicesPrimaryItem(
        `Design or Re-Design website`,
        160,
        `Upgrading slow, outdated websites into sleek, modern, Awwwards-inspired web applications.`
    ),
    new ServicesPrimaryItem(
        `Front-End development`,
        100,
        `Transforming Figma/Framer designs into clean, responsive, latest HTML, CSS, and JavaScript code.`
    ),
    new ServicesPrimaryItem(
        `Figma/Framer/Webflow to website`,
        80,
        `Complete corporate, agency, or personal portfolio websites with custom interactive JS features.`
    ),
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
    faviconBkash = getFavicon(`https://bka.sh/`),
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

const preferedLanguages = [`English(Native)`, `Bangla(Advanced)`, `Hindi(Conversation)`];

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

// /index.html only
//document.title = `${author.title}`;

const handleConnectionChange = () => {
    if (navigator.onLine) {
        window.location.reload();
    }
};
// Listen for the 'online' event
window.addEventListener('online', handleConnectionChange);

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) || 0;
};

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

// @@@@@@@@@@@@

function QuotesItem(name, title, quote, link, photo, star, platform) {
    this.name = name;
    this.title = title;
    this.quote = quote;
    this.link = link;
    this.photo = photo;
    this.star = star;
    this.platform = platform;
}
const personQuotes = [
    new QuotesItem(
        `${author.name}`,
        `Web Developer`,
        `I saw incredible results after
launching the campaign. The advertising
approach was effective, data-driven, and
exceeded expectations from the very
beginning.`,
        `/`,
        `${faviconAuthor}`,
        `★★★★★`,
        `CEO`
    ),
    new QuotesItem(
        `Mariam Coudhuri`,
        `Project Collaborator`,
        `Thanks ${author.name} for the quick turnaround on our student platform! The animations and responsive layout exceeded our expectations completely.`,
        `#`,
        `${faviconFacebook}`,
        `★★★★★`,
        `Facebook`
    ),
    new QuotesItem(
        `Shamin Ahmed`,
        `Businessman & Client`,
        `My business website is noticeably faster and looks significantly more professional. ${author.name} translated our complex Figma requirements into pristine code with pixel-perfect accuracy.`,
        `#`,
        `${faviconInstagram}`,
        `★★★★★`,
        `Instagram`
    ),
    new QuotesItem(
        `Tanveer Rahman`,
        `Freelancer & UI Designer`,
        `${author.name} is an exceptional front-end developer! His attention to layout details, mobile responsiveness, and clean CSS code structure is genuinely top-notch.`,
        `#`,
        `${faviconX}`,
        `★★★★★`,
        `X (Twitter)`
    ),
    new QuotesItem(
        `MD Bayezid`,
        `Local Business`,
        `${author.name} is providing the best Web Design services in ${locationPrimary}.`,
        `#`,
        `${faviconThreads}`,
        `★★★★★`,
        `Threads`
    ),
];

/*
 * Components
 * Focus: Performance, SEO, and Clean Logic
 */
// ------------------- Reusable Components ------------------

const componentReviews = () => {
    return `
<div class="row items-center">

    <ul class="wrap" style="list-style: none; display: flex; gap: 0em;">
        ${personQuotes
            .map(
                person => `
        <li class="bg-raised pill" style="padding: .3em; margin-inline: -0.4em;">
            <img class=" pill" ${seoImg(person.photo, `Client`)} style="inline-size: 1.5em;"/>
        </li>
        `
            )
            .join('')}
            <li class="bg-raised pill txt-center" style="padding: .3em; margin-inline: -0.4em;">${12 + (new Date().getFullYear() - 2023) - personQuotes?.length}+</li>
      </ul>

     <p>${32 + (new Date().getFullYear() - 2023)}+ Projects & ${12 + (new Date().getFullYear() - 2023)}+ reviews</p>

</div>
            `;
};

const componentProjectProgress = () => {
    return `
          <div class="flex a-start" style="gap: 1.6em; padding-inline: 1.6em;">

                <div class="row" style="gap: .4em; flex: 1;">
                    <b class="h1 txt-center"><span class="txtStroke">${new Date().getFullYear() - 2023}</span><span class="txt-gray">+</span></b>
                    <p class="txt-center">Experience</p>
                </div>
                <div class="row" style="gap: .4em; flex: 1;">
                    <b class="h1 txt-center"><span class="txtStroke">${32 + (new Date().getFullYear() - 2023)}</span><span class="txt-gray">+</span></b>
                    <p class="txt-center">Success projects</p>
                </div>
                <div class="row" style="gap: .4em; flex: 1;">
                    <b class="h1 txt-center"><span class="txtStroke">${random(95, 99)}</span><span class="txt-gray">%</span></b>
                    <p class="txt-center">Core web vitals</p>
                </div>
                <div class="row" style="gap: .4em; flex: 1;">
                    <b class="h1 txt-center"><span class="txtStroke">${random(95, 99)}</span><span class="txt-gray">%</span></b>
                    <p class="txt-center">Client satisfaction</p>
                </div>

                </div>
            `;
};

// ---------------- Custom Elements -----------------

// ### offline.html | Loading component ###
class LoaderSection extends HTMLElement {
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
      <section id="loader" aria-hidden="true" class="fluid-grid-system" data-version="${VERSION}">
       <div class="container-md content-center">
        <div class="col items-center">
 <h3 class="greeting txt-center flex">
   &lt;<span id="say-hello">Hello</span>/&gt;
 </h3>
        </div>
       </div>
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
// Define the custom element
if (!customElements.get('loader-section')) {
    customElements.define('loader-section', LoaderSection);
}

class NotchSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        // collapse
        template.innerHTML = `
  <section class="container-sm collapse" id="notch" data-version="${VERSION}">
    <div class="col dialog" id="notchDialog">
     <p class="notification">
      Developing in "OPPO A53" handset!
     </p>
     <button ${seoButton()} onclick="notch.classList.toggle('collapse')">
      ×
     </button>
    </div>
  </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('notch-section')) {
    customElements.define('notch-section', NotchSection);
}

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
     <button ${seoButton()} onclick="toast.classList.toggle('collapse')">
      ×
     </button>
    </div>
  </section>
    `;

        // 4. THE MAGIC: Synchronous swap
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('toast-section')) {
    customElements.define('toast-section', ToastSection);
}

class HeaderSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `
            <header ${header()} class="fluid-grid-system" id="header">
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

// Global Constructor Function for Section Data
export function Section(element) {
    this.heading = element.getAttribute('heading') || 'attribute: heading';
    this.description = element.getAttribute('description') || 'attribute: description';
    this.link = element.getAttribute('link') || 'attribute: link';
    this.linkText = element.getAttribute('linkText') || 'attribute: linkText';
    this.img = element.getAttribute('img') || 'attribute: img';

    // 1. Calculate 'h' directly based on DOM position
    const parent = this.parentElement || document.querySelector('main');
    const index = parent ? Array.from(parent.children).indexOf(this) : 0;
    const h = index === 0 ? 0 : 1;

    // 2. Safely clamp tag level between 1 and 6
    const tagLevel = Math.min(h + 1, 6);
}

class DesignSystemSection extends HTMLElement {
    connectedCallback() {
        function UiItem(property) {
            this.property = property;
        }
        const colors = [
            new UiItem(`txt-black`),
            new UiItem(`txt-muted`),
            new UiItem(`txt-gray`),
            new UiItem(`txt-primary`),
        ];
        const backgrounds = [
            new UiItem(`bg-base`),
            new UiItem(`bg-raised`),
            new UiItem(`bg-overlay`),
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
        const paragraphs = [new UiItem(`p`), new UiItem(`p-sm`)];
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
    <div class="container-lg">
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
  <button ${seoButton()} style="flex: 1 1 23rem;" class=" ${button.property} ">
    ${button.property}
  </button>
`
    )
    .join('')}
        </div>

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
if (!customElements.get('design-system-section')) {
    customElements.define('design-system-section', DesignSystemSection);
}

// example Section Web Component
class CustomSection extends HTMLElement {
    connectedCallback() {
        // Configuration for easy updates
        /* const devLanguages = [
            new List(`HTML`),
            new List(`CSS`),
            new List(`JavaScript`),
        ];
        const devLibraries = [new List(`Bootstrap`), new List(`GSAP`)];
        const designTools = [
            new List(`Figma`),
            new List(`Webflow`),
            new List(`Frammer`),
        ];
        const devIdes = [
            new List(`VScode`),
            new List(`Antigravity`),
            new List(`Claude`),
        ];
        const aiModels = [new List(`Gemini`), new List(`Gemma`)];
        const versionControlls = [new List(`GitHub`)];

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

        // Instantiate Section for current element
        const section = new Section(this);
        // Create an off-screen Template
        const template = document.createElement('template');

        // Render Markup
        template.innerHTML = `
       <section ${seoSection()} class="fluid-grid-system bg-base" id="customSection">
    <div class="container-sm row infinite-scroller mask" data-direction="right" data-speed="fast">
    <h2>${section.heading}</h2>
    <p>${section.description}</p>
   </div>
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

        // Instantiate Section for current element
        const section = new Section(this);
        // section.heading = author.title;
        // section.description = author.description;

        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section ${seoSection()} id="hero" class="fluid-grid-system dark">
        <div class="container-md row custom-containe">
<svg width="0" height="0">
        <clipPath id="myClip"
        clipPathUnits="objectBoundingBox">
        <path d="
            M .1 0
            L .45 0
            Q .5 0 .5 .05
            Q .5 .1 .55 .1
            L .9 .1
            Q 1 .1 1 .2
            L 1 .9
            Q 1 1 .9 1
            L .55 1
            Q .5 1 .5 .95
            Q .5 .9 .45 .9
            L .1 .9
            Q 0 .9 0 .8
            L 0 .1
            Q 0 0 .1 0
        "/>
        </clipPath>
</svg>

 <div style="padding: 0em; margin-block: -4em; transform: scale(.7); max-block-size: 30rem;" class="logo-marquee-wrapper stacking-container mask">
   <div style="padding: 0em" class="brand-logo-container">
     <div style="padding: 0em" id="brand-wrapper" class="brand-logo-wrapper">

${author.logoOutlineSvg}

     </div>
   </div>

   <h1 id="heading" class="h1 txt-center gradient-mask infinite-scroller" data-direction="left" data-speed="fast" id="brand-title">
     <svg class="infinite-scroller_inner svgDraw" fill="none" height="100" viewBox="0 0 768 100" width="768">
       <text fill="var(--txt-black)" x="50%" y="50%" text-anchor="middle">
${section.heading}
       </text>
     </svg>
   </h1>
 </div>

 <div class="row items-center">
   <span style="padding: .5em 1em;" class="badge txt-bg-inverse pill">Available for Projects</span>

   <p class="txt-center">${section.description}</p>
   ${componentReviews()}
   <div class="flex content-center ">
     <a ${seoA()} style="text-decoration: none;" href="/resume">
        <buttton style="border: 0px solid var(--bg-base); padding: 1em;" class="btn btn-primary txt-black bg-base pointer-button">Resume</button>
     </a>
   </div>
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
if (!customElements.get('hero-section')) {
    customElements.define('hero-section', HeroSection);
}

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

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        // HTML
        template.innerHTML = `
<section ${seoSection()} class="fluid-grid-system bg-base" id="youtubers">
    <div class="container-lg row infinite-scroller mask" data-direction="right/left" data-speed="fast/slow">
        <h2 class="h4 d-none">Subscriptioned by ${author.name} on YouTube </h2>
      <ul style="gap: var(--space-m);" class="flex no-wrap infinite-scroller_inner">
       ${youtubers
           .map(
               youtuber => `
<li class="items-center" style="display: flex; gap: var(--space-2xs); flex-grow: 1;">
  <img ${seoImg(`${ytLogoBaseUrl}${youtuber.photo}${ytLogoSize}`, `YouTube: ${youtuber.name}`)} class="rounded-circle rounded square pill" style="max-width: 3rem; height: auto; opacity: .8;"/>
  <a ${seoA()} href="${youtuber.link}">${youtuber.name}
  </a>
</li>
       `
           )
           .join('')}
      </ul>

    </div>
   </section>

    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces <*-section> with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('clients-section')) {
    customElements.define('clients-section', ClientsSection);
}

class AboutSection extends HTMLElement {
    connectedCallback() {
        // Story data array for easy updates
        function StoriesItem(date, title, heading, desc, link, linkText, ariaLabel, image) {
            this.date = date;
            this.title = title;
            this.heading = heading;
            this.desc = desc;
            this.link = link;
            this.linkText = linkText;
            this.ariaLabel = ariaLabel;
            this.image = image;
        }
        const stories = [
            new StoriesItem(
                '2001',
                'Birth of mine',
                'Roots & Passion for Technology',
                `it's been  ${new Date().getFullYear() - 2001} years, I born with core values of discipline, continuous learning, and creative problem-solving.`,
                `${author.location}`,
                'View place',
                `map`,
                `/assets/og-images/og-main.png`
            ),
            new StoriesItem(
                '2022',
                'Web Design & UI Architecture',
                'YouTube platform for design and development.',
                'Deep-dived into self-directed UI/UX design, mastering Figma wireframing and frontend logic.',
                `${urlYoutube}`,
                'View channels',
                `youtube`,
                `/assets/og-images/og-main.png`
            ),
            new StoriesItem(
                '2024',
                'Diploma in CS & Technology',
                'Diploma in Computer Science and Technology.',
                'Formalized technical foundation in software logic, database structures, and system engineering.',
                'https://maps.app.goo.gl/ZqrnSyByZTL95pMJ8',
                'View institute',
                `map`,
                `/assets/og-images/og-main.png`
            ),
            new StoriesItem(
                '2024',
                'Utshob Tech Certified & Freelance',
                'Utshob Technology Ltd.',
                `Building high-performing client sites at Sheikh Hasina Software Technology Park and serving international contracts.`,
                'https://maps.app.goo.gl/sLyE5QY5UDVfkTcS7',
                'View place',
                `map`,
                `/assets/og-images/og-main.png`
            ),
            new StoriesItem(
                // FIXED: Used backticks to allow double quotes in the HTML string
                `2025 - ${thisYear}`,
                'Being a developer',
                'Designing and developing website.',
                `${author.description}`,
                `/projects`,
                'View projects',
                `project`,
                `/assets/og-images/og-main.png`
            ),
            new StoriesItem(
                `${thisYear}`,
                'Looking for opportunities',
                'Junior Front-End Developer',
                'Actively seeking roles where I can apply my focus on performance and SEO-friendly architecture.',
                `/resume`,
                'Download Resume',
                `resume`,
                `/assets/og-images/og-main.png`
            ),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section ${seoSection()} class="fluid-grid-system bg-base  screenHeight snappyContainer" style="--snapType: y mandatory;" id="about">
    <article style="gap: 0em;" class="row content-center screenHeight">
      <p class="h6 fade-in-to">
        <span class="txt-gray">${author.name}</span> 2001 - ${thisYear}
      </p>
      <div style="padding-block: 0em; gap: .8em;" class="col ">
        <h2 class="h3 text-revel-onscrol" style="padding-block-start: .4em;">
        Driven by Quality,<br> Precision & Modern Aesthetics
        <h2>
        <div class="row " style="gap: var(--space-xs); ">
            <p>Having earned a <b>Diploma in Computer Science & Technology</b> and received specialized certification from <b>Utshob Technology Ltd</b> at Sheikh Hasina Software Technology Park, I help clients around the globe establish strong digital identities.</p>
            <a class="p fade-in-to " href="#story-1">
                View Story ↘
            </a>
        </div>
      </div>
    </article>

 ${stories
     .map(
         (story, index) => `
    <article id="story-${index + 1}" style="padding-block: 0em; overflow: clip; position: relative;" class="row fade-in-top-containe  screenHeight content-center ">

    <span inert class="story-image" style="opacity: .2; position: absolute; inset: 0; "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="object-fit: cover; height: 100%;"/></span>


       <div style="gap: .5em;" class="row">
        <h3 class="p fade-in-to txt-muted">${story.date}</h3>
        <h4 style="h5 padding-block: 0em;" class="fade-in-to">${story.title}</h4>
       </div>
       <h5 class="h2 fade-in-to txt-center" style="justify-self: center; max-inline-size: 16em;">${story.heading}</h5>
       <div style="gap: var(--space-xs); justify-self: end; max-inline-size: 20em;" class="row">
        <p class="fade-in-to" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: clip;">${story.desc}</p>
        <a ${seoA()} aria-label="${story.ariaLabel}" class="fade-in-to" href="${story.link}">${story.linkText} ↘</a>
       </div>

      </article>

 `
     )
     .join('')}


    <div style="padding-block: 0em; overflow: clip;" class="row fade-in-top-containe  screenHeight items-center ">

       <div style="gap: .5em;" class="row">
        <a aria-label="skip to services" class="fade-in-to" href="#services">View Services ↘</a>
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
if (!customElements.get('about-section')) {
    customElements.define('about-section', AboutSection);
}

class ServicesSection extends HTMLElement {
    connectedCallback() {
        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
<section ${seoSection()} id="services" class="fluid-grid-system  horizontalScroller snappyContainer screenHeight " style="--snapType: x mandatory;">

<div class="grid fade-in-top-containe items-center content-center scrollerItem">
    <div class="row itemCard" style="gap: .8em;">

        <p class="h6 fade-in-to">
        Services by <span class="txt-gray">${author.name}</span>
        </p>
        <h2>
        Services available in <br> ${locationSecondary}.
        </h2>
        <article>High-performance static web development starting from affordable rates (<b>${money(random(75, 80))}</b> – <b>${money(300)}+</b>). Clear pricing, zero hidden fees, and guaranteed <b>${random(95, 100)}%</b> satisfaction.</article>
    <h3 class="h4">
            <a  class="fade-in-to" href="#service-1">My primary Services ↘</a>
        </h3>

    </div>
</div>


${servicesPrimary
    .map(
        (service, index) => `
<article id="service-${index + 1}" class="grid fade-in-top-containe  items-center content-center scrollerItem serviceCard">
    <div class="row itemCard" style="gap: .8em;">

        <h4 class="h5">${service.name}</h4>
        <h5><span class="p txt-gray">Starting from</span> <b>${service.price}</b></h5>
        <p>${service.description}</p>
        <ul>
            <li class="done">Responsive Layout</li>
            <li class="done">Pixel-perfect accuracy</li>
            <li class="done">Lighthouse score ${random(90, 95)}+ (<b>Pro</b>)</li>
            <li class="done">Modern dark/light theme</li>
            <li class="done">Multi-page architecture (<b>Pro</b>)</li>
        </ul>


    </div>
</article>
`
    )
    .join('')}



<div class="grid fade-in-top-containe  items-center content-center scrollerItem">
        <div class="row itemCard" style="gap: .8em;">

        <h3 class="h4">More services:</h3>
        <ul class="row " style="gap: .4em; padding-inline: 2em;">
        ${servicesSecondery
            .map(
                service => `
        <li class="done">${service.name} (<b>${service.price}</b>)</li>
                `
            )
            .join('')}
        </ul>

        <div class="flex j-center">
            <a ${seoA()} href="/vcf">Download VCF</a>
            <button ${seoButton()} style="inline-size: fit-content;"  class="btn-primary">
            <a ${seoA()} href="#contact">Contact</a>
            </button>
        </div>

    </div>
</div>




<div class="grid fade-in-top-containe items-center scrollerItem">
    <div class="row items-center itemCard" style="gap: 1.6em;">

        <a aria-label="skip to projects" class="fade-in-to" style="white-space: nowrap;" href="#projects">View Projects ↘</a>

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
if (!customElements.get('services-section')) {
    customElements.define('services-section', ServicesSection);
}

class ProjectsSection extends HTMLElement {
    connectedCallback() {
        // Project data array for easy updates
        function ProjectsItem(date, category, title, link, image) {
            this.date = date;
            this.category = category;
            this.title = title;
            this.link = link;
            this.image = image;
        }

        const projects = [
            new ProjectsItem(
                `01-Jan-${thisYear}`,
                'Portfolio website',
                `${author.title}`,
                `/`,
                `/assets/og-images/og-main.png`
            ),
            new ProjectsItem(
                '24-Nov-2025',
                'Design Agency website',
                'DEVAEC | Website Design & Front-End Development',
                `#`,
                `/assets/og-images/og-main.png`
            ),
            new ProjectsItem(
                '13-May-2025',
                'E-commerce website',
                'TANUVL | Fashion & Clothing',
                `#`,
                `/assets/og-images/og-main.png`
            ),
            new ProjectsItem(
                '09-Jul-2024',
                'Portfolio website',
                'Shamin Ahmed Choudhuri',
                `#`,
                `/assets/og-images/og-main.png`
            ),
            new ProjectsItem(
                '21-Fev-2023',
                'Personal Website',
                'Md Ezazul Hassan',
                `https://mdezazulhassan2023.pages.dev`,
                `/assets/og-images/og-main.png`
            ),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section ${seoSection()} class="fluid-grid-system bg-base snappyContainer" style="--snapType: y mandatory;" id="projects">

      <article class="container-md row  screenHeight" style="padding-block: 1em; overflow: clip;">
 <p class="fade-in-to"><span class="txt-gray">Selected</span> Projects</p>
 <div><p class="h2 txt-gray" style="font-weight: bold; display: inline;">
     Projects have done since 2023 - ${thisYear}.
<span class="text-revel-onscrol">With ${new Date().getFullYear() - 2023}+ years of experience, I'm Designing & developing websites worldwide.</span></p> <h2 class="h2" style="display: inline;">I am providing the best value at a reasonable price with a focus on performance and SEO-friendly architecture.
</h2></div>
 </article>

 <div style="gap: 0em;" class=" row content-center projects-list screenHeight">
 ${projects
     .map(
         (project, index) => `

   <article id="project-${index + 1}"><a ${seoA()} href="${project.link}" style="text-decoration: none; padding-block: 1em; gap: .8em; border-block-end: 1px solid var(--txt-gray);" class="flex fade-in-top-containe project-item">

        <h3 style="padding-block: 0em; flex: 1;" class="h6 fade-in-to"><span class="p txt-gray">[0${index + 1}]</span> ${project.category}</h3>
       <h4 class="p fade-in-to">${project.date}</h4>
   </a></article>

 <span inert class="project-image" style="">
    <img ${seoImg(`${project.image}`, `Project Image`, `100%`)}/>
 </span>

 `
     )
     .join('')}
</div>


<div style="padding-block: 0em; overflow: clip;" class="row fade-in-top-containe  screenHeight items-center ">

       <div style="gap: .5em;" class="row">
         <a aria-label="skip to testimonials" class="fade-in-to" href="#testimonials">View Testimonials ↘</a>
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

class TestimonialsSection extends HTMLElement {
    connectedCallback() {
        // let randomIndex = random(0, personQuotes?.length);

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
<section ${seoSection()} class="fluid-grid-system" id="testimonials">
    <div class="container-md row content-center" style="gap: .8em;">

        <div class="row txt-center">
            <p class="txt-center">Testimonials</p>
            <h2 class="text-revel-onscrol">
            <span class="txt-gray">Real People,</span> <br/>Real Results Feedback
            </h2>
            <p class="txt-center">
                <span class="text-revel-onscrol">
        What clients and colleagues say about my front-end architecture and design work. See what my users are truly accomplishing with honest, and project-based reviews
                </span>
            </p>
        </div>

        ${componentReviews()}

        ${componentProjectProgress()}

        <ul class="carousel bg-raised" style="list-style: none; margin-inline: 2.4em; border-radius: 2em; inline-size: min(100%, 30em);">
            ${personQuotes
                .map(
                    (person, index) => `
                <li class="flex carousel-item" style="">
            <blockquote id="quote-${index + 1}" class="row items-center" style="flex: 1; display: row; gap: .8em; padding: 2em; inline-size: 100%; block-size: 100%;">

                <b>
                    <span class="star" style="inline-size: .8em;">${person?.star} • 4.9/5</span>
                </b>

                <i class="h6 quote txt-center">"${person?.quote}"</i>

                <div class="flex j-center txt-left">
                            <img ${seoImg(person?.photo, 'Client')} style="inline-size: 1.5em;" class="photo"/>

                            <div class="row" style="margin-inline-end: 1em; gap: .4em;">
                                <a ${seoA()} href="${person?.link}" class="link"><b class="name">${person?.name}</b></a>
                                <p class="title">${person?.title}</p>
                            </div>

                            <b class="platform">${person?.platform}</b>
                </div>

            </blockquote>
            </li>
                `
                )
                .join('')}
        </ul>

        <div class="flex j-center">
            <a ${seoA()} href="${urlFeedback}"><button ${seoButton()} style="inline-size: fit-content;"  class="btn-primary">
            Add Review ↘
            </button></a>
        </div>


    </div>
   </section>

    `;

        const content = template.content.cloneNode(true);
        // 2. Select the existing DOM elements inside 'content'
        // const starEl = content.querySelector('.star');
        // const quoteEl = content.querySelector('.quote');

        // 2. Attach listeners to the cloned nodes
        /* quoteButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (nameEl) nameEl.textContent = newQuote.name;
                if (linkEl) linkEl.href = newQuote.link;
            });
        }); */

        // 3. Swap the live component with 'content' ONLY ONCE
        this.replaceWith(content);
    }
}
// Define the custom element
if (!customElements.get('testimonials-section')) {
    customElements.define('testimonials-section', TestimonialsSection);
}

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
                `I'm a Web Developer | <a ${seoA()} href="#about"><b>${author.name}</b></a>.`
            ),
            new FaqsItem(
                `What do I do?`,
                `I usually <b> design </b> &amp; <b>develop</b> website<sup class="p">Front-End</sup> using <b>HTML</b>, <b>CSS</b> &amp; <b>JavaScript</b>.`
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
                `Yes, you can hire me throw discussion on <a ${seoA()} href="${urlMessenger}"><b>Messenger</b></a>. <sup class="p"> 24/7
 </sup>`
            ),
            new FaqsItem(
                `What is my contact number?`,
                `Mobile: (+880)
  <a ${seoA()} href="${urlMobile}"><b>1602-873384</b></a>
  <sup class="p">24/7</sup>
  </br></br>
  Whatsapp: (+880)
  <a ${seoA()} href="${urlWhatsapp}"><b>1602-873384</b></a>`
            ),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section ${seoSection()} class="fluid-grid-system" id="faqs">
<div class="container-sm">
    <div class="row">

<div class="row items-start">
       <p class="txt-primar">
        FAQ's
       </p>
  <h2>
    Got questions? <br/><span class="txt-gray">I’ve got answers</span>
  </h2>
  <p class="">
    <span class="text-revel-onscrol">
      Everything you need to know about my process, pricing,
and how I work
    </span>
  </p>

      </div>


       <div class="row">
 ${faqs
     .map(
         faq => `
        <details class="py-0 bg-raised" name="question">
<summary>
 <h3 class="p py-1">
  ${faq.question}
 </h3>
</summary>
<p style="padding: 1em;" class="h5">
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
            new ButtonsItem(`View Map ↘`, `${author.direction}`, `btn-primary`),
            new ButtonsItem(`Add Reviews ↘`, `${urlFeedback}`, `d-none`),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
    <section ${seoSection()} id="contact" class="fluid-grid-system py-5">
    <div class="container-md">

     <div class="row">

     <div class="row background-map" style="object-fit: cover; overflow: clip;">
       <iframe class="inverse" src=" ${author.iframeHome}" title="Author Village" style="border:0; aspect-ratio: 16/6; border-radius: 2em 2em 0 0; background: var(--bg-raised)" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
       </iframe>
     </div>

     <div class="ph-wrapper">
       <h2 style="display: inline;" class="h2 txt-gray">
        Ready to scale your brand with ${author.name}?
       </h2>
       <p style="display: inline; font-weight: bold;" class="h2 txt-black"><a ${seoA()} aria-label="Hassan Biswas Home Page" href="/"><img ${seoImg(faviconAuthor, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> I Craft Webflow Template to help ambitious brands stand out through bold design and <a ${seoA()} aria-label="author village" href="${begaritola}"><img ${seoImg(author.photo, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> digital strategies.
</p>
</div>

       <div class="flex no-wrap items-start">
<div class="row">

        </div>
        <div style="flex: 1; flex-basis: 23rem; gap: var(--space-xs);" class="row">

 <h3 class="p txt-gray">Languages:</h3>
 <ul style="list-style: none;" class="flex">
   ${preferedLanguages
       .map(
           (language, index) => `
     <li><span class="p txt-gray">[0${index + 1}]</span> ${language}</li>
  `
       )
       .join('')}
 </ul>
      <div style="flex: 1; gap: var(--space-xs)" class="row even-row">
 <h3 class="p txt-gray">Links:</h3>
       ${linksData
           .map(
               data => `
       <div class="flex col-md-2 gap-1 no-wrap no-grow items-start">
        <img ${seoImg(data.favicon, data.title)} style="inline-size: 1.5em;" class="squar"/>
        <a ${seoA()} href="${data.link}">
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

      <div class="flex j-center">
 <a ${seoA()} href="/vcf">Download VCF ↘</a>
<p class="txt-gray">or connect</p>
        <a ${seoA()} aria-label="messenger" style="inline-size: 4em;" class=”pill squar rounded" href="${urlMessenger}">
 <img ${seoImg(getFavicon(`m.me`, 50), `Messenger`)} class=”pill squar rounded"/>
        </a>
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
if (!customElements.get('contact-section')) {
    customElements.define('contact-section', ContactSection);
}

class FooterSection extends HTMLElement {
    connectedCallback() {
        // Constructor Function
        function NavItem(name, link) {
            this.name = name;
            this.link = link;
        }

        // Clean & readable initialization
        const navigations = [
            new NavItem(`Home`, `/`),
            new NavItem(`About`, `/#about`),
            new NavItem(`Services`, `/#services`),
            new NavItem(`Projects`, `/#projects`),
            new NavItem(`Contact`, `/#contact`),
            new NavItem(`Case Studies`, `/github`),
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

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
<footer ${footer()} class="fluid-grid-system" id="footer">
   <div class="container-xl row gap-4 py-5">
    <div class="flex j-center">
      <form class="flex">
        <label style="opacity: 1;" class="d-non" for="system-theme">Choose Theme:</label>
        <select id="system-theme" name="system-theme" class="pill btn-primary">
 <option value="default">Default</option>
 <option value="light">Light</option>
 <option value="dark">Dark</option>
        </select>
      </form>
    </div>
    <div class="col">
     <div class="row" style="position: relative; overflow: clip; border-radius: 1em;">
     <h2 class ="p">I craft marketing strategies that elevate brands, attract audiences, and drive measurable business growth.
</h2>
      <h3 class ="p">
       Providing high-quality web design and front-end development services to clients in ${locationSecondary}.
      </h3>

      <div class="row">
      <div style="align-content: stretch;" class="flex grow a-center">
        <button ${seoButton()} style="display: flex; align-items: center; justify-content: center; text-align: center; flex: 1; block-size: stretch; align-self: stretch;" class="btn-primary pill flex items-center txt-center">
 <a ${seoA()} class"txt-center flex items-center txt-center" href="/resume">
   Resume
 </a>
        </button>

       <button ${seoButton()} class="btn-primary" style="--primary-50: rgb(0, 256, 0); flex: 1; display: flex; place-items: center; flex-wrap: nowrap; gap: .4em; background: rgba(0, 256, 0, .3); display: none; color: var(--txt-black);" id="installApp">
        <img ${seoImg(faviconAndroid, `Android`)} style="inline-size: 1.5em; display: inline;" class="squar"/>
        <span style="line-height: 100%" class="d-non">Install</span>
       </button>

      </div>
      </div>


     </div>

     <div style="" class="flex items-start">
      <nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-gray">
        Navigation
       </h4>
       <div class="flex navigation-links">

       ${navigations
           .map(
               (navigation, index) => `
<a class="h6" ${seoA()} style="flex: 1; flex-basis: 10ch;" href="${navigation.link}"><span class="p txt-gray">[0${index + 1}]</span> ${navigation.name}
</a>
       `
           )
           .join('')}

       </div>
      </nav>

      <nav style="flex: 1; flex-basis: 15ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-gray">
        Method
       </h4>
       <div class="flex methode-links">

       ${methods
           .map(
               method => `
        <a class="h6" ${seoA()} aria-label="${method.name}" style="flex: 1; flex-basis: 10ch; display: flex; align-items: center; gap: 0.5em;" href="${method.link}">
<img ${seoImg(method.favicon, method.alt)} style="inline-size: 1.5em;" class="squar lightDark"/> ${method.name}
        </a>
       `
           )
           .join('')}

       </div>
      </nav>

<nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-gray">
        Social
       </h4>
      <div class="flex social-links a-center" style="gap: 0.8em;">

                ${socials
                    .map(
                        social => `
    <a ${seoA()} aria-label="${social.name}" href="${social.link}">
    <img ${seoImg(social.favicon, social.name)} style="border-radius: var(--pill); overflow: clip; inline-size: 1.5em;" class=”pill squar rounded lightDark"/>
    </a>
    `
                    )
                    .join('')}

       </div>
      </nav>

      <nav style="flex: 1; flex-basis: 20ch; gap: var(--space-xs);" class="row">
       <h4 class="p txt-gray">
        Legal
       </h4>
       <div class="flex legal-links">

       ${legals
           .map(
               legal => `
        <a class="h6" ${seoA()} style="flex: 1; flex-basis: 10ch;" href="${legal.link}">
${legal.name}
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
    <div class="col items-center">
     <div class="flex grow input-group items-center">
      <input style="padding: var(--space-s); border: 1px solid var(--primary-50); color: var(--primary-50); background: color-mix(in hsl, var(--bg), transparent 30%); font-weight: bold;" class="pill" placeholder="@hassanbiswas.github.io" readonly type="text"/>
      <a ${seoA()} style="text-decoration: none;" href="${urlYoutube}">
       <button ${seoButton()} class="btn-primary">Subscribe</button>
      </a>
     </div>
    </div>
   </div>
   <!-- footer with links & logo -->
   <div class="container-lg mask infinite-scroller" data-direction="left" data-speed="fast" id="footer-marquee">
    <div class="svg-wrapper infinite-scroller_inner">
     <svg fill="none">
      <text fill="var(--txt-black)" x="50%" y="50%" text-anchor="middle">
       &copy; ${new Date().getFullYear()} ${author.title}
      </text>
     </svg>
    </div>
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
// Define the custom element
if (!customElements.get('footer-section')) {
    customElements.define('footer-section', FooterSection);
}

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
                `<span class="items-center" style="display: flex; gap: var(--space-xs); padding-inline-end: var(--space-m);"><img ${seoImg(faviconAuthor, `Home`)} style="inline-size: 1.5em;"/>Home</span>`,
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
  <section ${navPrimary()} class="fluid-grid-system" id="bottom-navigation">
   <div style="overflow: visible;" class="container-sm row">
    <nav class="nav-list items-center txt-center" id="header-nav-list">

       ${navigations
           .map(
               navigation => `
        <a style="block-size: stretch; ${navigator.style || ''}" class="list-item flex items-center txt-center ${navigation.class || ''}" href="/${navigation.link}" >
${navigation.name}
        </a>
       `
           )
           .join('')}

        <a class="list-item active-bg" inert=""></a>

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

class PrivacyPolicySection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section ${seoSection()} style="background: var(--bg-base); color: (--txt-muted);" class="fluid-grid-system info-section">
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
// Define the custom element
if (!customElements.get('privacy-policy-section')) {
    customElements.define('privacy-policy-section', PrivacyPolicySection);
}

class TermsOfServiceSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section ${seoSection()} style="background: var(--bg-base); color: (--txt-muted);" class="fluid-grid-system info-section">
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
Invoices are sent via the agreed-upon <a ${seoA()} href="/payment">method</a>. A deposit is required to start work. Final files will be delivered or deployed only after the full remaining balance is cleared.
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
// Define the custom element
if (!customElements.get('terms-of-service-section')) {
    customElements.define('terms-of-service-section', TermsOfServiceSection);
}

class RefundAndCancelationPolicySection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section ${seoSection()} style="background: var(--bg-base); color: (--txt-muted);" class="fluid-grid-system info-section">
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
// Define the custom element
if (!customElements.get('refund-and-cancelation-policy-section')) {
    customElements.define(
        'refund-and-cancelation-policy-section',
        RefundAndCancelationPolicySection
    );
}
// ###################
// inits custom elements done!
// ###################

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

// ======== Functions =========

// #######################
// \\\\\ IntersectionObserver \\\\\\\
// #######################

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

// observe => observing (section, h, p, img, etc...)
// document.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll('.card');
//     const options = { threshold: 0.1 };
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);
//     cards.forEach(card => observer.observe(card));
// });

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
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
}); // may be extra!

// Logic to hide button if already installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    installBtn.style.display = 'none';
});

// - 1. inject HTML element ##############
// - 2. get HTML element ###############

// ###### HTML dom goes above ######

// define custom elements before get dom element || seoMedia || function || call

// ###### JavaScript function goes bellow ######
// const dynamicElements = document.querySelectorAll('img:not([loading])');
//
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
// links?.forEach(el => {
//     el.setAttribute(``);
// });

// photo
// photos?.forEach(el => {
//     el.setAttribute(``);
// });

// video
videos?.forEach(el => {
    el.setAttribute('muted');
    el.setAttribute('loop');
    el.setAttribute('autoplay');
    el.setAttribute('playsinline');
});
// svg
svgs?.forEach(el => {
    el.setAttribute('sizes', 'any');
    el.style.objectFit = `scale-down`;
});

const imageContainers = document.querySelectorAll('*:has(img, picture, video, iframe)');

// color from image
imageContainers?.forEach(container => {
    let image = container.querySelector('img'),
        width = image.innerWidth,
        height = image.innerHeight,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    // canvas.setAttribute('aria-hidden', 'true');

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
});

// const infiniteScrollers = document.querySelectorAll('.infinite-scroller');

// function infiniteScrollAnimate() {
//     infiniteScrollers?.forEach(scroller => {
//         scroller.setAttribute('data-animation', true);

//         const scrollerInner = scroller?.querySelector('.infinite-scroller_inner');
//         const scrollerContents = ArrayFrom(scrollerInner.children);

//         scrollerContents.forEach(content => {
//             const duplicatedContent = content.cloneNode(true);
//             duplicatedContent.setAttribute('aria-hidden', true);
//             scrollerInner.appendChild(duplicatedContent);
//         });
//     });
// }

// ################## Animations ##################
// infiniteScrollAnimate();

// Observe if into screen
/* const observer = new IntersectionObserver(entries => {
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

const observe = document.querySelectorAll('.observe');
observe?.forEach(el => {
    observer.observe(el);
}); */

let fadeInTop = document.querySelectorAll('.fade-in-top');

fadeInTop?.forEach(el => {
    el.style = `transform: translateY(-100%); opacity: 0;`;

    observer.observe(el);
    el.style = `transform: translateY(0); opacity: 1;`;
});

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

/*
// observe once
// remove lazy loading for screen media
const observerOnce = new IntersectionObserver(entries => {
    entries.forEach(
        entry => {
            entry.target.classList.toggle('observingOnce', entry.isIntersecting);
            if (entry.isIntetsecting) mediaObserver.unobserve(entry.target);
        },
        {
            threshold: 1, // or rootMargin: "-100px", or 100
        }
    );
});

const observingOnce = document.querySelectorAll('.observingOnce');
observingOnce?.forEach(el => {
    observerOnce.observe(el);
}); */

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
