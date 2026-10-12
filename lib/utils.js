import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Dynamic release versioning (YY.MM.DD)
export const VERSION = new Date()
    .toLocaleDateString('en-GB')
    .split('/')
    .reverse()
    .slice(0, 2)
    .concat('01')
    .join('.');
// Results in YY.MM.DD format (e.g., 2024.12.01)

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
export const seoImg = (url = `#`, alt = `alt`, width = `100%`, aspectRatio = `1`) => {
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
export const seoPicture = (url, type = `png`) => {
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
export const seoA = () => {
    return `loading="lazy"
        rel="noopener noreferrer"
        target="_blank"`;
};

// const seoAudio = () => { };
// const seoVideo = () => {};
// const seoSvg = () => {};
// const seoIframe = () => {};

// button
export const seoButton = () => {
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

export const header = () => {
    return `id="header" role="banner"`;
};
export const navPrimary = () => {
    return `aria-label="Primary Navigation"`;
};
const aSection = sectionId => {
    return `href="/#${sectionId}" class="skip-section"`;
};
const main = () => {
    return `role="main" id="main"`;
};
export const seoSection = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `aria-labelledby="${sectionName}Heading"`;
};
export const seoH = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `id="${sectionName}Heading"`;
};
export const footer = () => {
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
export const author = {
    name: `Hassan Biswas`,
    siteUrl: `hassanbiswas.github.io`,
    photo: `https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s96-c-no?v=${VERSION}`,
    mainFaviconSvg: `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="none" viewBox="66 66 52 52"%3E%3Cpath d="M66 66h50v50H66z" fill="transparent"/%3E%3Cpath d="M80.23 79.274h-.185l-.117-.119.091.036.062-.014c-.035.001-12.08-11.502-12.08-11.502h23.071v-.059c12.979 0 23.5 10.521 23.5 23.5s-10.521 23.5-23.5 23.5v-.266l-11.091-11.284c-.624-.518-3.277-3.216-5.879-5.848-2.959-2.997-5.902-6.006-5.902-6.006V79.274h11.845l11.027 11.205v1.116c-3.035-.101-11.147-.41-11.147-.41-.068-.066.162 10.558.19 11.84h10.957v-.158c6.49 0 11.75-5.26 11.75-11.75s-5.26-11.75-11.75-11.75v-.171H80.03ZM92.2 91.625c0 .005-.43-.007-1.128-.031v-1.116Z" fill="%231a1ae6" stroke="%231a1ae6"/%3E%3C/svg%3E`,
    description: `Freelance Front-End Developer & Website Designer specializing in transforming Figma designs into high-performance, SEO-friendly digital experiences. Leveraging a modern stack of HTML, CSS, and JavaScript, I build responsive, pixel-perfect websites with a focus on clean logic and award-winning aesthetics inspired by Awwwards.`,
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
author.ogImage = `${author.siteUrl}/assets/og-images/og-main.png?v=${VERSION}`;
// Cleaning the domain string for the display text (e.g., "example.com" instead of "example.com")
author.domain = author.siteUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');

// Now safely add the dynamic title
author.title = `Web Developer | ${author.name} — UI/UX & Front-End Architecture`;
author.subTitle = `Front-End Architect`;
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

// Village *****
export const begaritola = `https://maps.app.goo.gl/Q3pP1HzDSEdKv1Zr8`,
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

export const worldwide = `<a  aria-label="Asia" href="${asia}">Asia</a>, <a  aria-label="Africa" href="${africa}">Africa</a>, <a  aria-label="North America" href="${northAmerica}">North America</a>, <a  aria-label="South America" href="${southAmerica}">South America</a>, <a  aria-label="Europe" href="${europe}">Europe</a>, <a  aria-label="Oceania" href="${oceania}">Oceania</a>`;

export const locationPrimary = `Jashore Khulna Bangladesh`,
    locationSecondary = `Dhaka Bangladesh & Worldwide`;

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) || 0;
};

export const urlReviews = `https://g.page/r/CbEdPSgyd93iEBI/review`;
export const urlCoreWebVitals = 'https://pagespeed.web.dev/?lfhs=2';

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
    urlLinkedin = `https://linkedin.com/in/hassanbiswas-github-io`,
    urlContribution = `https://maps.app.goo.gl/FXki2G9XHkEWFuc9A`,
    urlDev = `https://github.dev/hassanbiswas/hassanbiswas.github.io`,
    urlDocs = `https://drive.google.com/drive/folders/1UpXVQ4CNzZTXnyzrmjyu7DbGJ9kbSkIw`,
    urlDrive = `/`,
    urlApp = '/',
    urlFreefire = `https://ffshare.garena.com/?action=qrcode_add_friend&amp;region=BD&amp;lang=en&amp;uid=8083908360&amp;version=OB49`;

// dribble, behance, etc.

export const experience = new Date().getFullYear() - 2023,
    successProjects = 22 + (new Date().getFullYear() - 2023),
    coreWebVitals = random(95, 99),
    clientSatisfaction = random(95, 99),
    totalReviews = 12 + (new Date().getFullYear() - 2023);

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
    ],
    money = value => {
        return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // undefined
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

function ServicesPrimaryItem(name, price, description, star, image) {
    this.name = name;
    this.price = money(price);
    this.description = description;
    this.star = star;
    this.image = image;

    this.getImage = (index = 0, image = this.image) => {
        return image ?? `${author.siteUrl}/assets/img/service/${index + 1}.jpg?v=${VERSION}`;
    };
}
export const servicesPrimary = [
    new ServicesPrimaryItem(
        `UI/UX design`,
        80,
        `Custom wireframes, modern color schemes, interactive prototypes in Figma optimized for conversion.`,
        `★★★★★`,
        `${author.siteUrl}/assets/og-images/og-main.png?v=${VERSION}`
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
export const getFavicon = (domain = `hassanbiswas.github.io`, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}&v=${VERSION}`;

// Uses
export const faviconAuthor = getFavicon(`hassanbiswas.github.io`),
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

export const preferedLanguages = [
    { name: `English`, props: `Native` },
    { name: `Bangla`, props: `Advanced` },
    { name: `Hindi`, props: `Speaking` },
];

function SocialsItem(name, link, favicon) {
    this.name = name;
    this.link = link;
    this.favicon = favicon;
}

export const socials = [
    new SocialsItem(`Facebook`, `${urlFacebook}`, `${faviconFacebook}`),
    new SocialsItem(`Instagram`, `${urlInstagram}`, `${faviconInstagram}`),
    new SocialsItem(`Threads`, `${urlThreads}`, `${faviconThreads}`),
    new SocialsItem(`X(Twitter)`, `${urlX}`, `${faviconX}`),
];

// ###################
// methods & functions
// ###################

export const stripedCurrency = val => {
    const str = String(val).trim();
    // Matches the integer portion between symbol/space and optional decimals (.00)
    const match = str.match(/(?:[^\d]|^)(\d{1,3}(?:[,\s]\d{3})*|\d+)(?=\.\d{2}|$)/);

    return match ? match[1].replace(/[,\s]/g, '') : '0';
};

// Corrected function with default 't' value of 3m
export const timeout = (el, t = 3000) => {
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

function QuotesItem(name, title, quote, link, photo, star, platform) {
    this.name = name;
    this.title = title;
    this.quote = quote;
    this.link = link;
    this.photo = photo;
    this.star = star;
    this.platform = platform;
}
export const personQuotes = [
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
export const skills = [
    new DevSkill(`HTML`, `${faviconHtml}`),
    new DevSkill(`CSS`, `${faviconCss}`),
    new DevSkill(`JavaScript`, `${faviconJs}`),
];

export function DevTool(name, favicon, link = '#') {
    this.name = name;
    this.favixon = favicon;
    this.link = link;
}
export const tools = [
    new DevTool(`VScode`, `${faviconVscode}`),
    new DevTool(`Bootstrap`, `${faviconBootstrap}`),
    new DevTool(`Figma`, `${faviconFigma}`),
    new DevTool(`Webflow`, `${faviconWebflow}`),
    new DevTool(`Framer`, `${faviconFramer}`),
    new DevTool(`GitHub`, `${faviconGithub}`),
];

// Configuration for easy updates
export const scrollerGroup = (style = '', values = '', childVal = '') => {
    return `
                <div ${values} class="scrollerGroup flex nowrap" style="${style};">

                ${skills
                    .map(
                        skill => `
                        <a  href="${skill.link}" aria-label="${skill.name}" ${childVal}>
                            ${skill.name}
                        </a>
                    `
                    )
                    .join('')}

                ${tools
                    .map(
                        tool => `
                        <a  href="${tool.link}" aria-label="${tool.name}" ${childVal}>
                            ${tool.name}
                        </a>
                    `
                    )
                    .join('')}

                </div>
            `;
};

// Story data array for easy updates
function StoriesItem(date, title, desc, link, linkText, ariaLabel, image) {
    this.date = date;
    this.title = title;
    this.desc = desc;
    this.link = link;
    this.linkText = linkText;
    this.ariaLabel = ariaLabel;
    this.image =
        image ?? `${author.siteUrl}/assets/img/story/${this.date}/${random(1, 4)}.jpg?v=${VERSION}`;
}

export const stories = [
    new StoriesItem(
        '2019',
        'Secondary School Certificate',
        `I got SSC of Vocational Education Board, Dhaka on top of Electrical Engineering Fundamentals from Jashore Technical School & College.`,
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
        `${thisYear - 1}`,
        'Designing and developing website.',
        `${author.description}`,
        `/projects`,
        'View projects',
        `project`,
        `${author.siteUrl}/assets/img/story/2024/${random(1, 4)}.jpg?v=${VERSION}`
    ),
];

// Project data array for easy updates
function ProjectsItem(date, category, title, link, image) {
    this.date = date;
    this.category = category;
    this.title = title;
    this.link = link;
    this.image = image;

    this.getImage = (index = 0, image = this.image) => {
        return image ?? `${author.siteUrl}/assets/img/project/${index + 1}.jpg?v=${VERSION}`;
    };
}

export const projects = [
    new ProjectsItem(
        `01-Jan-${thisYear}`,
        'My-Next-App',
        `${author.title}`,
        `${urlGithub}`,
        `${author.siteUrl}/assets/og-images/og-main.png?v=${VERSION}`
    ),
    new ProjectsItem(
        `24-Nov-${thisYear - 1}`,
        'My-JavaScript-App',
        `${author.title}`,
        `${urlGithub}/app/projects/my-javascript-app`,
        `${author.siteUrl}/assets/og-images/og-main.png?v=${VERSION}`
    ),
    new ProjectsItem(
        `01-Jan-2025`,
        'Portfolio Website',
        'DEVAEC | Website Design & Front-End Development',
        `${urlYoutube}`
    ),
    new ProjectsItem(
        '13-May-2024',
        'Landing Page',
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

function FaqsItem(question, answer) {
    this.question = question;
    this.answer = answer;
}
export const faqs = [
    new FaqsItem(
        `What do I do?`,
        `I usually design  & develop website<sup >Front-End</sup> using latest HTML, CSS, JS, TailwindCSS & reactJS.`
    ),
    new FaqsItem(
        `What is my design process?`,
        `I use Figma for initial wireframing, followed by NextJS for high-fidelity development to bridge the gap between design and logic.`
    ),
    new FaqsItem(
        `Do I provide components?`,
        `Yes, I specialize in latest JavaScript to create custom logic, API integrations, and reactJS UI components. Also providing CSS functions.`
    ),
    new FaqsItem(
        `What is the price range?`,
        `Not to worry! Price range will be based on budget & then the website's difficulty.`
    ),
    new FaqsItem(
        `Am I available for projects or hire?`,
        `Yes, you can hire me throw discussion on <a  href="${urlMessenger}">Messenger</a> <sup class="txt-tertiary"> 24/7</sup> or look at <a  class="txt-primary" href="/#contact">contact</a> method.
`
    ),
];

export function LinksDataItem(name, link, title, favicon) {
    this.name = name;
    this.link = link;
    this.title = title;
    this.favicon = favicon;
}
export const linksData = [
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
export const buttons = [
    new ButtonsItem(`View Map ↘`, `${author.direction}`, `btn-primary`),
    new ButtonsItem(`Add Reviews ↘`, `${urlReviews}`, `d-none`),
];

// Constructor Function
function NavItem(name, link, icon = null) {
    this.name = name;
    this.link = link;
    this.icon = icon;
}

export const pages = [
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
export const methods = [
    new MethodsItem(`Meet`, `${urlMeet}`, `Video Conference`, `Google Meet`, `${faviconMeet}`),
    new MethodsItem(`bKash`, `${urlBkash}`, `Payment by bKash`, `bKash`, `${faviconBkash}`),
];

function LegalsItem(name, link) {
    this.name = name;
    this.link = link;
}
export const legals = [
    new LegalsItem(`Privacy Policy`, `/privacy-policy`),
    new LegalsItem(`Terms of Service`, `/terms-of-service`),
    new LegalsItem(`Refund & Cancelation Policy`, `/refund_and_cancelation-policy`),
];

export const navigations = [
    new NavItem('Home', '/#hero', faviconAuthor),
    new NavItem('About', '/#about'),
    new NavItem('Services', '/#services'),
    new NavItem('Projects', '/#projects'),
];
