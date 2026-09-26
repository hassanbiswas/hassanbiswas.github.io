// Reusable Version Manager & Cache-Buster Module
(() => {
    // Generate date version in YY.MM.DD format
    const getDynamicVersion = (isFallback = false) => {
        const parts = new Date().toLocaleDateString('en-GB').split('/').reverse();
        if (isFallback) {
            parts[2] = '01'; // Force day to '01' when offline/fallback
        }
        return parts.join('.');
    };

    // Determine initial version based on current network status
    const isOnline = navigator.onLine;
    const VERSION = getDynamicVersion(!isOnline);

    // Set document level language, direction, and version data attribute
    Object.assign(document.documentElement, { lang: 'en', dir: 'ltr' }).dataset.version = VERSION;

    // Listen for reconnection to refresh and sync current dynamic version
    window.addEventListener('online', () => {
        if (navigator.onLine) {
            window.location.reload();
        }
    });

    // Log version lifecycle for debugging/verification
    console.log(
        `[App] Initialized | Status: ${isOnline ? 'Online' : 'Offline'} | Version: ${VERSION}`
    );
})();

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
    thisDate = new Date().toLocaleDateString('en-GB');

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
        decoding="async"`;
};

// Font <link>
const linkFont = (url = `#`) => {
    return `href="${url}"
        rel="preconnect"
        as="font"
        type="font/ttf"
        crossorigin`;
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
        decoding="async"`;
};

/*
<picture>
<source type="image/avif" srcset="img.avif"/>
<source type="image/webp" srcset="img.webp"/>
<img src="img.jpg" />
</picture>
*/
const seoPicture = (url, type = `png`) => {
    // <picture ${seoPicture('url')}> // .avif | .webp
    return `<source srcset="
        <!-- url without @2x.png -->
                ${url}@1x.${type},
                ${url}@2x.${type} 2x,
                ${url}@3x.${type} 3x
            "/>
            <img src="${url}@2x.${type}"/>`;
    // </picture>
};

// a
const seoA = () => {
    return `loading="lazy"
        rel="noopener noreferrer"
        target="_blank"`;
};

// const seoAudio = () => { };
// const seoVideo = () => {};
// const seoSvg = () => {};
// const seoIframe = () => {};

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
    return `id="header" role="banner"`;
};
const navPrimary = () => {
    return `aria-label="Primary Navigation"`;
};
const aSection = sectionId => {
    return `href="/#${sectionId}" class="skip-section"`;
};
const main = () => {
    // return `id="main" role="main"`;
    document.querySelector('main').setAttribute('id', 'main');
    document.querySelector('main').setAttribute('role', 'main');
};
main();
const seoSection = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `aria-labelledby="${sectionName}Heading"`;
};
const seoH = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `id="${sectionName}Heading"`;
};
const footer = () => {
    return `id="footer" role="contentinfo"`;
};

const svgAnimateX = (values = ['300%', '-300%'], duration = '20s') => {
    return `
        <animate
            attributeName="x"
            values="${values[0]}; ${values[1]}"
            dur="${duration}"
            repeatCount="indefinite"
        />
    `;
};

// absolute path for components
// header > location cta
// nav fixed floating
// main >
// hero > h1 img skill tools reviews + scroll (logo/clients)
// about > story > birth/school/college/proffession
// services > scroll-left
// testimonials - contact(map) - faqs
// cta
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
    logoOutlineSvg: `<svg data-visible class="logo brand-logo spin3DInfinite" fill="none" height="192" viewbox="0 0 192 192" width="192" xmlns="http://www.w3.org/2000/svg">

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

const worldwide = `<a ${seoA()} aria-label="Asia" href="${asia}">Asia</a>, <a ${seoA()} aria-label="Africa" href="${africa}">Africa</a>, <a ${seoA()} aria-label="North America" href="${northAmerica}">North America</a>, <a ${seoA()} aria-label="South America" href="${southAmerica}">South America</a>, <a ${seoA()} aria-label="Europe" href="${europe}">Europe</a>, <a ${seoA()} aria-label="Oceania" href="${oceania}">Oceania</a>`;

const locationPrimary = `
<a ${seoA()} aria-label="Jashore" href="${jashore}">Jashore</a> <a ${seoA()} aria-label="Khulna" href="${khulna}">Khulna</a> <a ${seoA()} aria-label="Bangladesh" href="${bangladesh}">Bangladesh</a>
`,
    locationSecondary = `
    <a ${seoA()} aria-label="Dhaka" href="${dhaka}">Dhaka</a>,
    <a ${seoA()} aria-label="Bangladesh" href="${bangladesh}">Bangladesh</a> &amp; Worldwide<span class="d-non" style="visibility: visible; position: absolute; inline-size: 1px; block-size: 1px; padding: 0; margin: -1px; overflow: clip; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; aria-hidden="true"">(${worldwide})</span>`;

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) || 0;
};

const html = document.documentElement,
    head = document.head || document.getElementsByTagName('head')[0],
    body = document.body || document.getElementsByTagName('body')[0];
const hues = [8, 14, 240, 256, 270, 334].sort();
const maxHues = hues.length;
let brandPrimary = `hsl(240, 80%, 50%)`;
let brandH = hues[random(0, maxHues)] || null;
if (brandH) {
    html.style.setProperty('--brand-h', brandH);
}

// 2. Get the computed style of the html
const styleSheet = getComputedStyle(html);

// <a ${seoA()} href=""></a>
// review
const urlReviews = `https://g.page/r/CbEdPSgyd93iEBI/review`;
const urlCoreWebVitals = 'https://pagespeed.web.dev/?lfhs=2';

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

const experience = new Date().getFullYear() - 2023;
const successProjects = 22 + (new Date().getFullYear() - 2023);
const coreWebVitals = random(95, 99);
const clientSatisfaction = random(95, 99);
const totalReviews = 12 + (new Date().getFullYear() - 2023);

// get percentage
const getPercentage = (part = 30, total = 100) => {
    if (total !== 0) {
        (part / total) * 100;
    }
};

const progressAnimate = (startValue = 0, endValue = 100, loaderColor = 'currentColor') => {
    let progress = setInterval(() => {
        startValue++;
        backGround?.animate(
            {
                background: `conic-gradient(var(${loaderColor}) ${startValue * 3.6}deg, transparent 0deg)`,
            },
            { duration: 'auto', fill: 'forwards', delay: 0 }
        );
        startValue == endValue ? clearInterval(progress) && body.removeChild(loader) : null;
    }, 1000);
};

//  Constractor for listing
const list = (name, link = '#', favicon = null) => {
    return `<li>${a(name, link)}</li>`;
};
export function List(name, link = '#', favicon = null) {
    this.name = name;
    this.link = link;
    this.favicon = favicon;
}

export const txtFill = (text = 'Text_Color_Scale', color = 'currentColor', scale = '1') => {
    return `
        <text data-animate="svgDrawFil" x="50%" y="50%" text-anchor="middle"
        style="stroke: ${color}; stroke-width: .5; fill: ${color}; font-size: calc(var(--p) * ${scale});
        font-weight: 800; stroke-dasharry: 100; stroke-dashoffset: 0;"
        >${text}</text>
    `;
};

export const txtStroke = (text = 'Text_Color_Scale', color = 'currentColor', scale = '1') => {
    return `
        <text data-animate="svgDrawStroke" x="50%" y="50%" text-anchor="middle"
        style="stroke: ${color}; stroke-width: .5; fill: transparent; font-size: calc(var(--p) * ${scale});
        font-weight: 800; stroke-dasharry: 100; stroke-dashoffset: 0;"
        >${text}</text>
    `;
};

export const greetings = [
        'Hello',
        'لسلام ليكم',
        'Olá!',
        'еHola!',
        'Ciao!',
        'Привет!',
        'Hallo!',
        'Bonjour!',
        'は好',
        '녕んにちは',
        'á녕하세요',
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

export function ServicesPrimaryItem(name, price, description, star, image) {
    this.name = name;
    this.price = money(price);
    this.description = description;
    this.star = star;
    this.image = image;

    this.getImage = (index = 0, image = this.image) => {
        return image ?? `/assets/img/service/${index + 1}.jpg?v=${VERSION}`;
    };
}
const servicesPrimary = [
    new ServicesPrimaryItem(
        `UI/UX design`,
        80,
        `Custom wireframes, modern color schemes, interactive prototypes in Figma optimized for conversion.`,
        `★★★★★`,
        `/assets/og-images/og-main.png?v=${VERSION}`
    ),
    new ServicesPrimaryItem(
        `Design or Re-Design website`,
        160,
        `Upgrading slow, outdated websites into sleek, modern, Awwwards-inspired web applications.`,
        `★★★★★`
    ),
    new ServicesPrimaryItem(
        `Front-End development`,
        100,
        `Transforming Figma/Framer designs into clean, responsive, latest HTML, CSS, and JavaScript code.`,
        `★★★★★`
    ),
    new ServicesPrimaryItem(
        `Figma/Framer/Webflow to website`,
        80,
        `Complete corporate, agency, or personal portfolio websites with custom interactive JS features.`,
        `★★★★★`
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

const preferedLanguages = [
    `English<span class="txt-tertiary">(Native)</span>`,
    `Bangla<span class="txt-tertiary">(Advanced)</span>`,
    `Hindi<span class="txt-tertiary">(Speaking)</span>`,
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

const stripedCurrency = val => {
    const str = String(val).trim();
    // Matches the integer portion between symbol/space and optional decimals (.00)
    const match = str.match(/(?:[^\d]|^)(\d{1,3}(?:[,\s]\d{3})*|\d+)(?=\.\d{2}|$)/);

    return match ? match[1].replace(/[,\s]/g, '') : '0';
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
<div class="flex items-center componentReviews" style="gap: 1.2em; ">

    <ul class="" style="list-style: none; display: flex; flex-wrap: wrap; gap: 0em;">
        ${personQuotes
            .map(
                person => `
        <li class="bg-secondary pill" style="padding: .3em; margin-inline: -0.4em;">
            <img class=" pill" ${seoImg(person.photo, `Client`)} style="inline-size: 1.5em;"/>
        </li>
        `
            )
            .join('')}
            <li class="bg-secondary pill txt-center" style="padding: .3em; margin-inline: -0.4em;">${totalReviews - personQuotes?.length}+</li>
        </ul>
        <div class="row items-start " style="gap: .4em; ">
            <b class="txt-primary">★★★★★ • 4.9/5</b>
            <p>${successProjects}+ <a ${seoA()} aria-label="Projects" href="/#projects">Projects</a> &amp; ${totalReviews}+ <a ${seoA()} aria-label="Reviews" href="${urlReviews}">Reviews</a></p>
        </div>

</div>
            `;
};

const componentProjectProgress = () => {
    return `
          <div class="flex a-start componentProjectProgress" style="gap: 1.6em; padding-inline: 1.6em;">

                <div class="row" style="gap: .4em;">
                    <b class="h1 txt-center">
                        <span class="txtStroke">${experience}</span>
                        <span class="txt-tertiary">+</span>
                    </b>
                    <p class="txt-center">Experience</p>
                </div>
                <div class="row" style="gap: .4em;">
                    <b class="h1 txt-center">
                        <span class="txtStroke">${successProjects}</span>
                        <span class="txt-tertiary">+</span>
                    </b>
                    <a href="/#projects" class="p txt-center">Success projects</a>
                </div>
                <div class="row" style="gap: .4em;">
                    <b class="h1 txt-center">
                        <span class="txtStroke">${coreWebVitals}</span>
                        <span class="txt-tertiary">%</span>
                    </b>
                    <a ${seoA()} href="${urlCoreWebVitals}" class="p txt-center">Core web vitals</a>
                </div>
                <div class="row" style="gap: .4em;">
                    <b class="h1 txt-center">
                        <span class="txtStroke">${clientSatisfaction}</span>
                        <span class="txt-tertiary">%</span>
                    </b>
                    <p class="txt-center">Client satisfaction</p>
                </div>

        </div>
            `;
};

const componentSkipSection = () => {
    const style = `
        padding: .8em 1.6em;
        border-radius: 100dvw;
        cursor: pointer;
        display: grid;
        place-items: center;
        border: 1px solid transparent;
    `,
        styleA = `
        background: transparent;
        color: var(--txt-primary);`,
        styleB = `
        aspect-ratio: 1;
        background: --alpha(var(--brand-primary), .2);
        color: var(--brand-primary);
        font-weight: bold;
    `;

    return `
        <div style="padding-block: 0em; overflow: clip;" class="row fade-in-top-containe">

            <div style="gap: .5em;" class="flex  screenHeight items-center content-center">
                <button onclick="scrollPrev()" class="scrollPrevBtn fade-in-to" aria-label="skip to previous" style="${style} ${styleA}">❮——</button>
                <button onclick="scrollNext()" class="scrollNextBtn fade-in-to" aria-label="skip to next" style="${style} ${styleB}">❯</button>
            </div>

        </div>
    `;
};

// ---------------- Custom Elements -----------------

// ### offline.html | Loading component ###
class LoaderSection extends HTMLElement {
    connectedCallback() {
        document.getElementsByTagName('body')[0].setAttribute('inert', '');

        const template = document.createElement('template');
        template.innerHTML = `
        <section id="loader" class="">
            <div class="container-md content-center">
                <div class="col items-center" style="align-items: center;">
                    <h3 class="greeting txt-center flex items-center" style="block-size: 100%; flex-wrap: nowrap;">
                        <svg data-visible viewBox="0 0 100 100" height="100%" width="100%" sizes="any" style="display: inline;">
                            <text x="50" y="50" text-anchor="middle" id="say-hello" class="loaderSvgDraw" stroke="currentColor" stroke-width=".5" fill="transparent" stroke-dasharry="100" style="font-weight: 800; font-size: --font(2rem, 3.2rem); stroke-dashoffset: 100;"></text>
                        </svg>
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
                // clearInterval(greetingInterval);

                // Smooth Exit Animation
                loader.style.transition =
                    'clip-path --duration() --ease(), opacity --duration() --ease(), visibility --duration()';
                // Animation

                setTimeout(() => {
                    clearInterval(greetingInterval);
                    loader.style.clipPath = 'circle(0% at center center)';
                    loader.style.opacity = 0;
                    loader.style.visibility = 'hidden';
                    loader.remove();
                    document.getElementsByTagName('body')[0].removeAttribute('inert');
                }, 2000); // 400
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
        }, 1000); // 200
    }
}
// Define the custom element
if (!customElements.get('loader-section')) {
    customElements.define('loader-section', LoaderSection);
}

// document.querySelector('#say-hello').textContent = 'JS';

class NotchSection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        // collapse
        template.innerHTML = `
  <section class="container-sm collapse" id="notch">
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
  <section class="container-sm collapse" id="toast">
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
            <header ${header()} class="" id="header">
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
    const parent = this.parentElement || document.querySelector('main')[0];
    const index = parent ? Array.from(parent.children).indexOf(this) : 0;
    const h = index === 0 ? 0 : 1;

    // 2. Safely clamp tag level between 1 and 6
    const tagLevel = Math.min(h + 1, 6);
}

// Configuration for easy updates
const devLanguages = [new List(`HTML`), new List(`CSS`), new List(`JavaScript`)];
const devLibraries = [new List(`Bootstrap`), new List(`GSAP`)];
const designTools = [new List(`Figma`), new List(`Webflow`), new List(`Frammer`)];
const devIdes = [new List(`VScode`), new List(`Antigravity`), new List(`Claude`)];
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
];

const brandLogo = () => {
    let j = 0;
    const brandLogoInterval = setInterval(() => {
        j++;
        console.log(j);
        if (j === 10) clearInterval(brandLogoInterval);
    }, 500);

    const inertSpan = `<span class="logo-wrapper brand-logo-wrapper" inert aria-hidden="true">${author.logoOutlineSvg}</span>`;

    return `
        <div style="padding: 0em; " class="brand-logo-container">
            <div style="padding: 0em; aspect-ratio: 1;" class="brand-wrapper-container brand-logo-wrapper-container stacking-container ">
                <span class="logo-wrapper brand-logo-wrapper">${author.logoOutlineSvg}</span>
                ${inertSpan.repeat(19)}
            </div>
        </div>
    `;
};

// ### 404.html | Hero component ###
// updated hero section
class HeroSection extends HTMLElement {
    connectedCallback() {
        // Configuration for easy updates
        const scrollerGroup = (style = '', values = '', childVal = '') => {
            return `
                <div ${values} class="scrollerGroup flex nowrap" style="${style};">

                ${skills
                    .map(
                        skill => `
                        <a ${seoA()} href="${skill.link}" aria-label="${skill.name}" ${childVal}>
                            <!-- <img ${seoImg(skill.favicon, skill.name)} style="border-radius: var(--pill); overflow: clip; inline-size: 1.5em;" class=”pill squar rounded monochrome"/> -->
                            ${skill.name}
                        </a>
                    `
                    )
                    .join('')}

                ${tools
                    .map(
                        tool => `
                        <a ${seoA()} href="${tool.link}" aria-label="${tool.name}" ${childVal}>
                            <!-- <img ${seoImg(tool.favicon, tool.name)} style="border-radius: var(--pill); overflow: clip; inline-size: 1.5em;" class=”pill squar rounded monochrome"/> -->
                            ${tool.name}
                        </a>
                    `
                    )
                    .join('')}

                </div>
            `;
        };

        // Instantiate Section for current element
        const section = new Section(this);
        // section.heading = author.title;
        // section.description = author.description;
        const color = `var(--txt-primary)`,
            fontSize = `--font(1.2rem, 1.8rem)`,
            text = section.heading;
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section ${seoSection(`hero`)} id="hero" class=" dark">
        <div class="container-md row items-center custom-containe" style="position: relative; gap: 0; ">

        ${brandLogo()}

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


        <div class="row items-center text-items gradient-mask">
            <span style="padding: .4em .8em; gap: .4em" class="flex badge txt-bg-inverse pill a-center"><i class="pill " style="background: #14db14; padding: .4em; "></i> <!-- Last seen ${random(1, 3)}H ago --> Available for projects</span>
            <h1 data-animate="scaleI" ${seoH(`hero`)}
                class="h1 txt-center splitWord"
                id="brand-title">
                    ${section.heading}
            </h1>
            <p class="txt-center txt-primary lineClamp splitText">${section.description}</p>
            <div class="flex content-center" style="gap: 1.6em; padding-block-start: 1.6em;">
                <a ${seoA()} style="text-decoration: none;" href="/resume">
                    <buttton style="border: 0px solid var(--bg-primary); padding: 1.2em 1.6em; " class="btn btn-primary txt-primary bg-primary pill splitText">Resume</button>
                </a>
                <a class="h6 txt-primary pill splitText" href="/#contact" style="border: 0px solid currentColor; ">Contact</a>
            </div>
            ${componentReviews()}

            <div class="scrollerWrapper">
                <div data-visible class="infiniteScroller flex nowrap" style="padding-block: .8em; gap: 0;">
                    ${scrollerGroup(`gap: 2.4em; padding-inline-end: 2.4em;`)}
                    ${scrollerGroup(`gap: 2.4em;`, `aria-hidden="true"`, `aria-hidden="true" tabindex="-1"`)}
                </div>
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
            new YouTuber(
                `Arnau Ros`,
                `cBrnJmahf00Q8p38dnx4Rvdl-TBekL5MFaFOicB5DPxzVGWmtUqaGXHHuhIoxQZH7YL_mPpydw`
            ),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)
        // HTML
        template.innerHTML = `
<section ${seoSection(`youtubers`)} class=" bg-primary" id="youtubers" style="display: none; ">
    <div class="container-lg row infinite-scroller mask" data-direction="left" data-speed="slow">
        <h2 ${seoH(`youtubers`)} class="h4 d-none">Subscriptioned by ${author.name} on YouTube </h2>

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
        function StoriesItem(date, title, desc, link, linkText, ariaLabel, image) {
            this.date = date;
            this.title = title;
            this.desc = desc;
            this.link = link;
            this.linkText = linkText;
            this.ariaLabel = ariaLabel;
            this.image = image ?? `/assets/img/story/${this.date}/${random(1, 4)}.jpg?v=${VERSION}`;
        }

        const stories = [
            new StoriesItem(
                '2001',
                'Roots & Passion for Technology',
                `I born with core values of discipline, continuous learning, and creative problem-solving.`,
                `${author.location}`,
                'View Place',
                `map`
            ),
            new StoriesItem(
                '2019',
                'Secondary School Certificate',
                `I got SSC of Vocational Education Board, Dhaka on top of Electrical Engineering Fundamentals from <b>Jashore Technical School &amp; College</b>.`,
                'https://maps.app.goo.gl/Gh1SmtsbHAHBxtCfA',
                'View College',
                `map`
            ),
            new StoriesItem(
                '2022',
                'Web Design & UI Architecture',
                'Deep-dived into self-directed UI/UX design, mastering Figma wireframing and frontend logic.',
                `${urlYoutube}`,
                'View Channels',
                `youtube`
            ),
            new StoriesItem(
                '2024',
                'Diploma in CS and Technology.',
                'Formalized technical foundation in software logic, database structures, and system engineering.',
                'https://maps.app.goo.gl/ZqrnSyByZTL95pMJ8',
                'View Institute',
                `map`
            ),
            new StoriesItem(
                '2025',
                'Utshob Tech Certified & Freelance',
                `Building high-performing client sites at Sheikh Hasina Software Technology Park and serving international contracts.`,
                'https://maps.app.goo.gl/sLyE5QY5UDVfkTcS7',
                'View Place',
                `map`
            ),
            new StoriesItem(
                // FIXED: Used backticks to allow double quotes in the HTML string
                `${thisYear - 1}`,
                'Designing and developing website.',
                `${author.description}`,
                `/projects`,
                'View projects',
                `project`,
                `/assets/img/story/2024/${random(1, 4)}.jpg?v=${VERSION}`
            ),
            new StoriesItem(
                `${thisYear}`,
                'Junior Front-End Developer',
                'Actively seeking roles where I can apply my focus on performance and SEO-friendly architecture.',
                `/resume`,
                'Download Resume',
                `resume`,
                `/assets/img/story/2025/${random(1, 4)}.jpg?v=${VERSION}`
            ),
        ];

        const svgMarginBlock = 'auto auto'; // -30px auto

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

<section ${seoSection(`about`)} class=" bg-primary  screenHeight snappyContainer " style="--snapType: mandatory;" id="about">
    <div style="gap: 0em;" class="row content-center screenHeight">
      <p data-animate="scaleIn" class="h6">
        <span class="txt-tertiary">${author.name}</span> <i>2001 - ${thisYear}</i>
      </p>
      <div style="padding-block: 0em; gap: .8em;" class="col ">
        <h2 ${seoH(`about`)} data-animate="scaleIn" class="h3 splitWord" style="padding-block-start: .4em;">
        Driven by Quality,<br> Precision & Modern Aesthetics
        </h2>
        <div class="row " style="gap: var(--space-xs); ">
            <p data-animate="scaleIn" class="splitWord">Having earned a <b>Diploma in Computer Science & Technology</b> and received specialized certification from <b>Utshob Technology Ltd</b> at Sheikh Hasina Software Technology Park, I help clients around the globe establish strong digital identities.</p>
            <a data-visible class="p splitText" href="/#story-1">
                ❯ View Story
            </a>
        </div>
      </div>
    </div>

 ${stories
     .map(
         (story, index) => `
    <div data-pin="true" id="story-${index + 1}" class="row content-center screenHeight" style="padding-block: 0em; overflow: clip; position: relative; ">

        <span inert aria-hidden="true" data-animate="scaleIn" class="story-image mas" style="filter: blur(3px) opacity(.3); position: absolute; inset: 0; "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="bobject-fit: cover; height: 100%;"/></span>

        <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible; user-select: none; " >
            ${txtFill(story.date, 'var(--txt-tertiary)', '2.3')}
        </svg>

        <span inert aria-hidden="true" data-animate="clipIn" class="story-imageCliped " style="clip-path: inset(30%); opacity: 1; position: absolute; inset: 0; filter: brightness(.7); "><img ${seoImg(`${story.image}`, `Story Image`, `100%`)} style="object-fit: cover; height: 100%;"/></span>

        <svg fill="none" viewBox="0 0 100 100" style="position: absolute; inset: 0; margin: auto; margin-block: ${svgMarginBlock}; overflow: visible; " >
            ${txtStroke(story.date, 'var(--txt-tertiary)', '2.3')}
        </svg>

        <div class="toCenterContents " >
            <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                <div><p class="h6 txt-gra"><span class="txt-primary h2">0${index + 1}</span>/${stories.length}</p> <h3  data-animate="scaleIn" style="padding-block: 0em; mix-blend-mode: difference; display: inline;" class="h1 splitWord">${story.title}</h3></div>

                <div class="emptyCol"></div>
            </div>

            <div class="col" style="--col-size: 20rem; gap: 0;  padding-block: 0; ">
                <div class="emptyCol"></div>

                <div data-animate="fadeI" style="gap: .4em;" class="row">
                    <p class="fade-in-to h6 lineClamp splitWord" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: clip; mix-blend-mode: difference; ">${story.desc}</p>
                    <a data-visible ${seoA()} aria-label="${story.ariaLabel}" class="splitText" href="${story.link}">${story.linkText} ↗</a>
                </div>
            </div>
        </div>
      </div>

 `
     )
     .join('')}

     ${componentSkipSection()}


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
        const clipedSection = (
            value = 1,
            direction = null,
            wrap = null,
            style = null,
            attribute = null,
            clipPath = null
        ) => {
            return `
<div class="servicesCarousel container-xl" ${attribute} style="--direction: ${direction}; --value: ${value}; --wrap: ${wrap}; position: absolute; inset: 0; user-select: non; --clip-pat: polygon(${clipPath}); clip-path: var(--clip-path); ${style}">

    <div class="grid  fade-in-top-containe items-center content-center ">
        <div class="row screenHeight content-center itemCard" style="gap: .8em;">

            <p class="h6 fade-in-to">
            Services <span class="txt-tertiary">by ${author.name}</span>
            </p>
            <h2 data-animate="scaleI" ${seoH(`services`)} class="">
            Services available in <br> ${locationSecondary}.
            </h2>
            <p class="splitWord">High-performance static web development starting from affordable rates (<b>${money(random(75, 80))}</b> – <b>${money(300)}+</b>). Clear pricing, zero hidden fees, and guaranteed <b>${clientSatisfaction}%</b> satisfaction.</p>

        </div>
    </div>


    ${servicesPrimary
        .map(
            (service, index) => `
    <div id="service-${index + 1}_${direction}" class="service-${index + 1} grid  fade-in-top-containe screenHeight items-center content-center  serviceCard">
        <div class="stacking-container itemCard screenHeight" style="gap: .8em; position: relative;">

            <svg inert aria-hidden="true" fill="none" viewBox="0 0 100 100" style="overflow: visible; user-select: none;" >
                ${txtStroke(stripedCurrency(service.price), 'var(--txt-primary)', '2.8')}
            </svg>

            <div class="row even-row items-center content-center" style="gap: 0.8em;">
                <div class="empty "></div>
                <div class="empty "></div>

                <span data-animate="clipOu" class="service-image"><img ${seoImg(
                    `${service.getImage(index)}`,
                    `Service Image`,
                    `100%`
                )} style="height: 100%;"/></span>

                <div class="flex items-center content-center " style="flex-direction: column; gap: .8em;">
                    <h3 class="h5 txt-center splitText">${service.name}</h3>
                    <h4 class="txt-center">
                        <span class="p txt-tertiary splitWord">Starting from</span>
                        <b>${service.price}</b>
                    </h4>
                    <b class="txt-center txt-primary">${service.star} • 4.9/5</b>
                    <p class="txt-center splitWord">${service.description}</p>

                    <ul class="fle items-center content-center d-none" style="column-gap: 2.4em;">
                        <li class="done">Responsive Layout</li>
                        <li class="done">Pixel-perfect accuracy</li>
                        <li class="done">Lighthouse score ${coreWebVitals}+ (<b class="txt-primary">Pro</b>)</li>
                        <li class="done">Modern dark/light theme</li>
                        <li class="done">Multi-page architecture (<b class="txt-primary">Pro</b>)</li>
                    </ul>

                </div>
            </div>


        </div>

    </div>
    `
        )
        .join('')}

        ${componentSkipSection()}


</div>
        `;
        };

        //  CallBack

        template.innerHTML = `

<section ${seoSection(`services`)} class="" id="services" style="--snapType: mandatory; position: relative;">


        <!-- //Right Part ; original, base & main -->
        ${clipedSection(1, `column`, `wrap`, `background: --alpha(#00ff00, 0);`, `data-type="original" `, `50% 0, 100% 0, 100% 100%, 50% 100%`)}
        <!-- Left Part// -->


        <!-- //Left Part ; duplicate & clip -->
        <!-- ${clipedSection(-1, `column-reverse`, `wrap-reverse`, `z-index: -2;`, `aria-hidden="true" data-type="duplicate"`, `0 0, 50% 0, 50% 100%, 0 100%`)} -->
        <!-- Right Part// -->


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

            this.getImage = (index = 0, image = this.image) => {
                return image ?? `/assets/img/project/${index + 1}.jpg?v=${VERSION}`;
            };
        }

        const projects = [
            new ProjectsItem(
                `01-Jan-${thisYear}`,
                'Portfolio website',
                `${author.title}`,
                `/`,
                `/assets/og-images/og-main.png?v=${VERSION}`
            ),
            new ProjectsItem(
                `24-Nov-${thisYear - 1}`,
                'Design Agency website',
                'DEVAEC | Website Design & Front-End Development',
                `${urlYoutube}`
            ),
            new ProjectsItem(
                '13-May-2024',
                'E-commerce website',
                'TANUVL | Fashion & Clothing',
                `https://youtu.be/HTCgsgdRELg?t=17&si=MawSODh4e3nBabPJ`
            ),
            new ProjectsItem(
                '09-Jul-2023',
                'Landing Page',
                'Md Ezazul Hassan',
                `https://youtu.be/NcC0lgGDCHc?t=23&si=1ToXGc7JTbbEo3f0`
            ),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

      <section ${seoSection(`projects`)} class=" bg-primary snappyContainer" style="--snapType: mandatory;" id="projects">

      <div class="container-md row  screenHeight" style="padding-block: 1em; overflow: clip; gap: .8em;">
 <p class="fade-in-to txt-tertiary">Selected <span class="txt-secondary">Projects</span> <i>2023 - ${thisYear}</i></p>
 <div>
    <h2 data-animate="scaleIn" ${seoH(`projects`)} class="h2 splitWord" style="display: inline;">I am providing the best value at a reasonable price with a focus on performance and SEO-friendly architecture.
</h2>
 <p data-animate="scaleIn" class="h2 txt-tertiary" style="font-weight: bold; display: inline;">
<span class="text-revel-onscrol">
With ${experience}+ years of experience, I'm Designing & developing websites in ${locationSecondary}.
</span>
</p>
</div>
 </div>

 <div style="gap: 0em;" class=" row content-center projects-list screenHeight fluidHovere">
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


     ${componentSkipSection()}


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
<section ${seoSection(`testimonials`)} class="" id="testimonials">
    <div class="container-md row items-center" style="gap: .8em;">

        <div class="row txt-center">
            <p class="txt-center">Testimonials</p>
            <h2 data-animate="scaleIn" ${seoH(`testimonials`)} class="text-revel-onscrol">
            <span class="txt-tertiary splitWord">Real People,</span> <br/><span class="splitWord">Real Results Feedback<span>
            </h2>
            <p class="txt-center">
                <span data-animate="textReveal" class="splitWor" style="">
        What clients and colleagues say about my front-end architecture and design work. See what my users are truly accomplishing with honest, and project-based reviews
                </span>
            </p>
        </div>

        ${componentProjectProgress()}

        ${componentReviews()}

        <ul class="carousel bg-raise" style="list-style: none; gap: 0em; border-radius: 2em; inline-size: min(100%, 64rem); " >
            ${personQuotes
                .map(
                    (person, index) => `
                <li data-skeleton data-visible class="flex carousel-item " style="max-inline-size: 100%; ">
            <blockquote id="quote-${index + 1}" class="row items-center" style="flex: 1; gap: .8em; padding: 1.6em;">

                <b>
                    <span class="star txt-primary splitWord" style="inline-size: .8em;">${person?.star} • 4.9/5</span>
                </b>

                <q class="h6 quote txt-center splitWord">${person?.quote}</q>

                <div class="flex j-center txt-left">
                            <img ${seoImg(person?.photo, 'Client')} style="inline-size: 1.5em;" class="photo"/>

                            <div class="row" style="margin-inline-end: 1em; gap: .4em;">
                                <a ${seoA()} href="${person?.link}" class="link"><b class="name txt-primary splitWord">${person?.name}</b></a>
                                <p class="title splitWord">${person?.title}</p>
                            </div>

                            <b class="platform txt-primary splitWord" style="border-inline-start: 1px solid var(--txt-tertiary); padding-inline-start: 1.6em;">${person?.platform}</b>
                </div>

            </blockquote>
            </li>
                `
                )
                .join('')}
        </ul>

        <div class="flex j-center" style="padding-block: 1.6em; ">
            <a ${seoA()} href="${urlReviews}"><button ${seoButton()} style="inline-size: fit-content;"  class="btn-primary splitWord">
            Add Review ↗
            </button></a>
        </div>


    </div>
   </section>

    `;

        // 3. Swap the live component
        this.replaceWith(template.content);
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
                `What do I do?`,
                `I usually <b> design </b> &amp; <b>develop</b> website<sup class="txt-tertiary" style="">Front-End</sup> using latest <b>HTML</b>, <b>CSS</b> &amp; <b>JavaScript</b>.`
            ),
            new FaqsItem(
                `What is my design process?`,
                `I use <b>Figma</b> for initial wireframing, followed by <b>Framer</b> or <b>Webflow</b> for high-fidelity development. My goal is to bridge the gap between design and logic.`
            ),
            new FaqsItem(
                `Do I provide custom JavaScript functions?`,
                `Yes, I specialize in latest <b>JavaScript</b> to create custom logic, API integrations, and functional <b>UI components</b>. Also providing CSS functions.`
            ),
            new FaqsItem(
                `What is the price range?`,
                `Not to worry! Price range will be based on budget &amp; then the website's difficulty.`
            ),
            new FaqsItem(
                `Am I available for projects or <b>hire</b>?`,
                `Yes, you can hire me throw discussion on <a ${seoA()} href="${urlMessenger}"><b>Messenger</b></a> <sup class="txt-tertiary"> 24/7</sup> or look at <a ${seoA()} class="txt-primary" href="/#contact">contact</a> method.
`
            ),
        ];

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
            new ButtonsItem(`Add Reviews ↘`, `${urlReviews}`, `d-none`),
        ];

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `
    <section ${seoSection(`contact`)} id="contact" class=" py-5">
    <div class="container-md">

     <div class="row">

     <div class="row background-map" style="object-fit: cover; overflow: clip;">
       <iframe class="monochrome" src=" ${author.iframeHome}" aria-label="Business Location" title="Business Location" style="border:0; aspect-ratio: 16/6; border-radius: 2em 2em 0 0; background: var(--bg-secondary)" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
       </iframe>
     </div>

<div class="ph-wrapper">
        <h2 data-animate="scaleIn" ${seoH(`contact`)} style="display: inline;" class="h2 txt-primary"><span class="splitWord">I help ambitious brands stand out through</span> <a ${seoA()} aria-label="Hassan Biswas Home Page" href="/"><img ${seoImg(faviconAuthor, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> <span class="splitWord">bold design and digital strategies.</span>
       </h2>
       <p data-animate="scaleIn" style="display: inline; font-weight: bold;" class="h2 txt-tertiary">
        <span class="splitWord">Ready to scale your brand with</span> <a ${seoA()} aria-label="Business Profile" href="${begaritola}"><img ${seoImg(author.photo, author.name)} style="display: inline; inline-size: 1em;" class="square rounded"/></a> <span class="splitWord">${author.name}?</span>
        </p>
</div>

       <div class="flex no-wrap items-start">
<div class="row">

        </div>
        <div style="flex: 1; flex-basis: 23rem; gap: var(--space-xs);" class="row">

 <h3 class="p txt-tertiary">Languages:</h3>
 <ul style="list-style: none;" class="flex">
   ${preferedLanguages
       .map(
           (language, index) => `
     <li><span class="p txt-tertiary">[0${index + 1}]</span> ${language}</li>
  `
       )
       .join('')}
 </ul>
      <div style="flex: 1; gap: .6em" class="row ">
 <h3 class="p txt-tertiary">Links:</h3>
 <div class="col" style="gap: .6em; ">
       ${linksData
           .map(
               data => `
       <div class="flex col-md-2 gap-1 no-wrap no-grow items-start">
        <img ${seoImg(data.favicon, data.title)} style="inline-size: 1.5em;" class="squar"/>
        <a ${seoA()} aria-label="${data.title}" href="${data.link}"><p>${data.name}</p></a>
       </div>
       `
           )
           .join('')}
</div>
      </div>
        </div>
       </div>
     </div>

      <div class="flex j-center">
 <a ${seoA()} href="/vcf" style="text-decoration: none; color: var(--brand-primary);">❯ <b class="splitText">Download VCF</b></a>
<p class="txt-tertiary">or connect</p>
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

class CtaSection extends HTMLElement {
    connectedCallback() {
        // data array for easy updates

        // Instantiate Section for current element
        const section = new Section(this);
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML (Top-level element is now your grid section)

        // HTML
        template.innerHTML = `

    <section ${seoSection(`cta`)} class="cta-section  bg-primary" id="cta">
        <div class="container-md bg-primary row " style="border-radius: 3.2em; gap: .8em; border: 1px solid var(--bg-secondary); position: relative; ">

            <span inert class=" dots" style=""></span>

            <h2 data-animate="scaleIn" ${seoH(`cta`)} class="h1 ">
                <span class="splitWord">Have project? Need website</span> <span class="txt-tertiary splitWord">or</span> <span class="splitWord">looking for Developer? I'm here!</span>
            </h2>

            <div class="flex" style="gap: .8em; " >
                ${componentReviews()}
                <a ${seoA()} href="${urlMobile}"><input class="btn-primary splitWord" type="submit" value="Wanna Call" style=""/></a>
            </div>

        </div>
    </section>


    `;

        // 4. THE MAGIC: Synchronous swap
        // Replaces with the contents of the template immediately.
        this.replaceWith(template.content);
    }
}
// Define the custom element
if (!customElements.get('cta-section')) {
    customElements.define('cta-section', CtaSection);
}

class FooterSection extends HTMLElement {
    connectedCallback() {
        // Constructor Function
        function NavItem(name, link) {
            this.name = name;
            this.link = link;
        }

        // Clean & readable initialization
        const pages = [
            new NavItem(`Home`, `/`),
            new NavItem(`About`, `/about`),
            new NavItem(`Services`, `/services`),
            new NavItem(`Projects`, `/projects`),
            new NavItem(`Contact`, `/contact`),
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
                '/#hero'
            ),
            new NavItem('About', '/#about'),
            new NavItem('Services', '/#services'),
            new NavItem('Projects', '/#projects'),
        ];

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

class PrivacyPolicySection extends HTMLElement {
    connectedCallback() {
        // 2. Create an off-screen Template
        const template = document.createElement('template');

        // 3. Define the HTML

        template.innerHTML = `

<section ${seoSection(`privacyPolicy`)} style="background: var(--bg-primary); color: (--txt-secondary);" class=" info-section">
<div class="container-md">
<div class="row">

<div class="row">
<h1 ${seoH(`privacyPolicy`)}>
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

<section ${seoSection(`termsOfService`)} style="background: var(--bg-primary); color: (--txt-secondary);" class=" info-section">
<div class="container-md">
<div class="row">

<div class="row">
<h1 ${seoH(`termsOfService`)}>
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

<section ${seoSection(`refundAndCancelationPolicy`)} style="background: var(--bg-primary); color: (--txt-secondary);" class=" info-section">
 <div class="container-md">
<div class="row">

<div class="row">
 <h1 ${seoH(`refundAndCancelationPolicy`)}>
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

    metaTheme.content = brandPrimary;
};

// 5. Run it after the DOM is fully loaded to ensure CSS variables are ready
// 4. Execution Logic: Run immediately or wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectMetaTheme);
} else {
    injectMetaTheme();
}
// 3. Fallback logic: Ensure the value exists and isn't just an empty string
brandPrimary = styleSheet.getPropertyValue('--brand-primary').trim() || 'hsl(240, 80%, 50%)';

// detect if a user is running your web app as an installed PWA (standalone mode)
window.matchMedia('(display-mode: standalone)').addEventListener('change', evt => {
    if (evt.matches) {
        // console.log("Switched to Standalone Mode");
        // Run your VERSION logic or reset UI
        document.getElementsByTagName('body')[0].dataMode = 'standalone';
    }
});

const scrollPrevBtns = document.querySelectorAll('.scrollPrevBtn');
scrollPrevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollPrev();
    });
});
const scrollPrev = (value = window.innerHeight) => {
    window.scrollBy({
        top: -value,
        behavior: 'smooth',
    });
};

const scrollNextBtns = document.querySelectorAll('.scrollNextBtn');
scrollNextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollNext();
    });
});
const scrollNext = (value = window.innerHeight) => {
    window.scrollBy({
        top: value,
        behavior: 'smooth',
    });
};

// scroll to top/to
export const scrollTop = (value = 0) => {
    window.scrollTo({
        top: value,
        behavior: 'smooth',
    });
};

// !*** before animation, init custom Elements ***
// #######################
// \\\\\ Animations \\\\\\\
// #######################

// scroll up? down?
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        console.log('Page scroll DOWN');
    } else if (currentScrollY < lastScrollY) {
        console.log('Page scroll UP');
    }

    // Update the last position for the next event
    lastScrollY = currentScrollY;
});

// #######################
// \\\\\ ResizeObserver \\\\\\\
// #######################

// ResizeObserver on Root Element (:root / <html>)
const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const html = entry.target;
        html.style.setProperty('--inline-size', `${window.innerWidth}px`);
        html.style.setProperty('--block-size', `${window.innerHeight}px`);
    }
});

resizeObserver.observe(document.documentElement);

// #######################
// \\\\\ IntersectionObserver \\\\\\\
// #######################
const visibilityObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                // Optional: stop observing once it has appeared
                // observer.unobserve(entry.target);
            } else {
                entry.target.setAttribute('data-visible', '');
            }
        });
    },
    {
        //     threshold: 0.4,
        rootMargin: `${window.innerHeight / 3}px`,
    }
);
// Select all elements you want to animate
document.querySelectorAll('[data-visible]').forEach(el => visibilityObserver.observe(el));

const skeletonObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('dataLoading');
            } else {
                entry.target.classList.add('dataLoading');
            }
        });
    },
    {
        // rootMargin: `${window.innerHeight / 3}px 0px -${window.innerHeight / 3}px 0px`,
        threshold: 0.6,
    }
);
// Select all elements you want to animate
document.querySelectorAll('[data-skeleton] .splitWord').forEach(el => skeletonObserver.observe(el));

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
    { threshold: 0.4 }
); // Trigger when section is 60% visible, avoid 1
document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));

// remove lazy loading in screen medias
const lazyLoading = document.querySelectorAll('img, picture, svg, iframe, audio, video');
lazyLoading?.forEach(el => {
    el.setAttribute('loading', 'lazy');
});

const lazyObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.removeAttribute('loading');
                // observer.unobserve(entry.target);
            } else {
                entry.target.setAttribute('loading', 'lazy');
            }
        });
    },
    { rootMargin: `${window.innerHeight / 3}px` }
); // Trigger when section is 200px away to visible, avoid (-)

// document.querySelectorAll('[loading', 'lazy]')
lazyLoading?.forEach(el => lazyObserver.observe(el));

const scrollSnapItems = document.querySelectorAll(
    '#about, #services :is([data-type="original"], [data-type="duplicate"]), #projects'
);
const scrollSnapObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const parentEl = document.documentElement;
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                entry.target.scrollTo(0, 0, 'smooth');
                parentEl.style.scrollSnapType = `both mandatory`;
                entry.target.parentElement.style.scrollSnapType = `proximity`;
                // observer.unobserve(entry.target);
            } else {
                entry.target.removeAttribute('data-visible');
                parentEl.style.scrollSnapType = `both proximity`;
            }
        });
    },
    { threshold: 0.15 }
);
scrollSnapItems?.forEach(el => scrollSnapObserver.observe(el));

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
});

// Logic to hide button if already installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    installBtn.style.display = 'none';
});

// - 1. inject HTML element above ##############
// - 2. get HTML element ###############
// - 3. create functions/animations ###############

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

// const imageContainers = document.querySelectorAll('*:has(img, picture, video, iframe)');
// color from image
// imageContainers?.forEach(container => {
//     let image = container.querySelector('img'),
//         width = image.innerWidth,
//         height = image.innerHeight,
//         canvas = document.createElement('canvas'),
//         ctx = canvas.getContext('2d');

//     canvas.innerWidth = width;
//     canvas.innerHeight = height;
// ctx.drawImage(image, 0, 0, width, height);

// let imageData = ctx.getImageData(x, y, 1, 1).data,
//     r = imageData[0],
//     g = imageData[1],
//     b = imageData[2];

// convrt rgb to hex
//     let imageColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
//     container.style.setProperty(`--brand-primary`, imageColor);
// });

// #######################
// \\\\\ Animations \\\\\\\
// #######################

// Methodes in use of paragraph!
// let text = "Hello World! I'm Hassan. \n it's awesome!";
// let chars = [...text]; // to chars
// let words = text.split(/\s+/); // to words
// let wordsStrippedPuntuation = text.match(/\b[\w'-]+\b/g) || []; // to words (striped puntuation)
// let sentences = text.split(/(?<=[.!?])\s+/); // to sentences
// let centencesLineBreak = text.split(/\r?\n/).map(line.trim()).filter(Boolean); // to sentences (lineBreak)

document.addEventListener('DOMContentLoaded', () => {
    const splitText = (selector = '.splitText') => {
        const selectors = document.querySelectorAll(selector);
        if (!selectors.length) return;

        selectors.forEach(el => {
            const text = el.textContent.trim();
            el.innerHTML = [...text]
                .map(char => {
                    const displayChar = char === ' ' ? '&nbsp;' : char;
                    return `<span class="char split" style="display: inline-block; white-space: pre; will-change: transform, opacity;">${displayChar}</span>`;
                })
                .join('');
        });
    };

    splitText();

    const splitWord = (selector = '.splitWord') => {
        const selectors = document.querySelectorAll(selector);
        if (!selectors.length) return;

        selectors.forEach(el => {
            const text = el.textContent.trim();
            el.innerHTML = text
                .split(/\s+/)
                .map(word => {
                    const displayWord = word === ' ' ? '&nbsp;' : word;
                    return `<span class="word split" style="display: inline-block; white-space: pre; will-change: transform, opacity;">${displayWord}</span>`;
                })
                .join(' ');
        });
    };

    splitWord();
});

// const x = this.lerp(20, 0, t);
// const y = this.lerp(-50, 0, t);
// const opacity = this.lerp(0, 1, t);

// const attachTiltEffect = () => {
//     const tiltCard = document.getElementById('logoTiltCard');
//     const wrapper = this.container.querySelector('.svg-logo-perspective');
//     if (!tiltCard || !wrapper) return;

// const handleMove = (clientX, clientY) => {
//     const rect = wrapper.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const y = clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
// Calculate tilt angles based on pointer distance from center
//     const rotateX = ((y - centerY) / centerY) * -30;
//     const rotateY = ((x - centerX) / centerX) * 30;
//     tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
// };
// const handleReset = () => {
//     tiltCard.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
// };
// Mouse events
// wrapper.addEventListener('mousemove', e => handleMove(e.clientX, e.clientY));
// wrapper.addEventListener('mouseleave', handleReset);
// Touch events for mobile responsiveness
//     wrapper.addEventListener(
//         'touchmove',
//         e => {
//             if (e.touches.length > 0) {
//                 handleMove(e.touches[0].clientX, e.touches[0].clientY);
//             }
//         },
//         { passive: true }
//     );
//     wrapper.addEventListener('touchend', handleReset);
// };

// ###### function calls bellow ######

// ###################
// inits & event listners
// ###################

// Services Splite Sections synchronized scroll
// document.addEventListener('DOMContentLoaded', () => {
//     const servicesSection = document.querySelector('#services');
//     if (!servicesSection) return;

//     const original = servicesSection.querySelector('[data-type="original"]');
//     const duplicate = servicesSection.querySelector('[data-type="duplicate"]');

//     if (!original || !duplicate) return;

// let isSyncing = false;

// original.addEventListener('scroll', () => {
//     if (isSyncing) {
//         isSyncing = false;
//         return;
//     }
//     isSyncing = true;
//     duplicate.scrollTop = -original.scrollTop;
//     // duplicate.scrollTop = Math.floor(-1 * original.scrollTop);
//     console.log(duplicate.scrollTop);
// });

//     duplicate.addEventListener('scroll', () => {
//         if (isSyncing) {
//             isSyncing = false;
//             return;
//         }
//         isSyncing = true;
//         original.scrollTop = -duplicate.scrollTop;
//         // original.scrollTop = Math.floor(-1 * duplicate.scrollTop);
//         console.log(original.scrollTop);
//     });
// });
// window.addEventListener('scroll', () => {
//     console.log('Scrolled!');
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const servicesSection =
//         document.querySelector('main > #services') || document.querySelector('#services');
//     if (!servicesSection) return;

//     const original = servicesSection.querySelector('[data-type="original"]');
//     const duplicate = servicesSection.querySelector('[data-type="duplicate"]');

//     if (!original || !duplicate) return;

// let isSyncing = false;

// const getScrollableHeight = el => el.scrollHeight - el.clientHeight;

// original.addEventListener('scroll', () => {
//     if (isSyncing) {
//         isSyncing = false;
//         return;
//     }
//     isSyncing = true;

//     // Invert relative to maximum scrollable distance
//     const maxDuplicate = getScrollableHeight(duplicate);
//     const maxOriginal = getScrollableHeight(original);

//     if (maxOriginal > 0) {
//         const scrollRatio = original.scrollTop / maxOriginal;
//         duplicate.scrollTop = maxDuplicate - scrollRatio * maxDuplicate;
//     }
// });

// duplicate.addEventListener('scroll', () => {
//     if (isSyncing) {
//         isSyncing = false;
//         return;
//     }
//     isSyncing = true;

//         const maxDuplicate = getScrollableHeight(duplicate);
//         const maxOriginal = getScrollableHeight(original);

//         if (maxDuplicate > 0) {
//             const scrollRatio = duplicate.scrollTop / maxDuplicate;
//             original.scrollTop = maxOriginal - scrollRatio * maxOriginal;
//         }
//     });

//     console.log(`Services split sync running. Version: ${VERSION}`);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const servicesSection = document.querySelector('body > main > #services');
//     if (!servicesSection) return;

//     const original = servicesSection.querySelector('[data-type="original"]');
//     const duplicate = servicesSection.querySelector('[data-type="duplicate"]');

// document.querySelector('#services [data-type="original"]').addEventListener('scroll', () => {
//     document.querySelector('#services [data-type="duplicate"]').scrollTop = Math.floor(
//         -1 * document.querySelector('#services [data-type="original"]').scrollTop
//     );
//     console.log('original is scrolled!');
// });
// document.querySelector('#services [data-type="duplicate"]').addEventListener('scroll', () => {
//     document.querySelector('#services [data-type="original"]').scrollTop = Math.floor(
//         -1 * document.querySelector('#services [data-type="duplicate"]').scrollTop
//     );
//     console.log('duplicate is scrolled!');
// });
// });

// ######### Don't Go Bellow ⚠️ ##########
// ========= Handle Window Change ========

// document.addEventListener('DOMContentLoaded', function () {
// console.log("HTML DOM is loaded, but images might not be!");
// SEO script for hight performance & ranking
// });

// Ends of Script
// CUSTOM SECTION
// class CSection extends HTMLElement {
//     connectedCallback() {
//         const selector = this.getAttribute('selector');
//         const heading = this.getAttribute('heading');
//         const details = this.getAttribute('details');
//         const link = this.getAttribute('link');
//         const linkText = this.getAttribute('linkText');
//         const img = this.getAttribute('img');
//         this.innerHTML = `
//             <section class="${selector}">
//                 <div class="primary">
//                     <h2>${heading}</h2>
//                     <p>${details}</p>
//                     <a class="btn" href="${link}">${linkText}</a>
//                 </div>
//                 <img src="${img}" />
//             </section>
//         `;
//     }
// }
// customElements.define('c-section', CSection);

/*
injectAsset('js', 'components/loader-section.js');
injectAsset('js', 'components/design-system-section.js');
injectAsset('js', 'components/notch-section.js');
injectAsset('js', 'components/header-section.js');
injectAsset('js', 'components/hero-section.js');
injectAsset('js', 'components/about-section.js');
injectAsset('js', 'components/clients-section.js');
injectAsset('js', 'components/services-section.js');
injectAsset('js', 'components/projects-section.js');
injectAsset('js', 'components/testimonials-section.js');
injectAsset('js', 'components/faqs-section.js');
injectAsset('js', 'components/contact-section.js');
injectAsset('js', 'components/cta-section.js');
injectAsset('js', 'components/footer-section.js');
injectAsset('js', 'components/navigation-section.js');
injectAsset('js', 'components/toast-section.js');
*/
