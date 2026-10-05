import { VERSION } from '@/lib/utils';
// import * as Data from '@/index.js';

const author = {
    name: `Hassan Biswas`,
    siteUrl: `hassanbiswas.github.io`,
    photo: `https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s96-c-no?v=${VERSION}`,
};
const seoA = () => {
    return `loading="lazy"
        rel="noopener noreferrer"
        target="_blank"`;
};
const getFavicon = (domain = `hassanbiswas.github.io`, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}&v=${VERSION}`;
const faviconAuthor = getFavicon(`hassanbiswas.github.io`),
    faviconMessenger = getFavicon(`m.me`);
const footer = () => {
    return `id="footer" role="contentinfo"`;
};
const urlMessenger = `https://m.me/hassanbiswas.github.io`;
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
const jashore = `https://maps.app.goo.gl/ZGs1U2sq8Rs4NVfz9`,
    khulna = `https://maps.app.goo.gl/FM6vxDsAPLaQErnd6`,
    bangladesh = `https://maps.app.goo.gl/uJNBv8L6a6zFTrgi9`;
const locationPrimary = `
<a ${seoA()} aria-label="Jashore" href="${jashore}">Jashore</a> <a ${seoA()} aria-label="Khulna" href="${khulna}">Khulna</a> <a ${seoA()} aria-label="Bangladesh" href="${bangladesh}">Bangladesh</a>
`;
const urlYoutube = `https://youtube.com/@hassanbiswas-github-io`,
    seoButton = () => {
        return `type="button" aria-expanded="false"`;
    };
const seoH = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `id="${sectionName}Heading"`;
};
const begaritola = `https://maps.app.goo.gl/Q3pP1HzDSEdKv1Zr8`,
    dhaka = `https://maps.app.goo.gl/epey14ek8i1j2dyv5`;
const asia = `https://maps.app.goo.gl/eMssXoAjXHkpfcry8`,
    africa = `https://maps.app.goo.gl/tenD5kgxxPRemmHy9`,
    northAmerica = `https://maps.app.goo.gl/Z7oSTNzY7TETsesz7`,
    southAmerica = `https://maps.app.goo.gl/pmqqPp2w7RF2ve9KA`,
    antarctica = `https://maps.app.goo.gl/3gspcf93bA8qZRD69`,
    europe = `https://maps.app.goo.gl/qCo2TTNbzsi6x4rM9`,
    oceania = `https://maps.app.goo.gl/DjizYXiH4QhbKRTu7`;
const worldwide = `<a ${seoA()} aria-label="Asia" href="${asia}">Asia</a>, <a ${seoA()} aria-label="Africa" href="${africa}">Africa</a>, <a ${seoA()} aria-label="North America" href="${northAmerica}">North America</a>, <a ${seoA()} aria-label="South America" href="${southAmerica}">South America</a>, <a ${seoA()} aria-label="Europe" href="${europe}">Europe</a>, <a ${seoA()} aria-label="Oceania" href="${oceania}">Oceania</a>`;
const locationSecondary = `
    <a ${seoA()} aria-label="Dhaka" href="${dhaka}">Dhaka</a>,
    <a ${seoA()} aria-label="Bangladesh" href="${bangladesh}">Bangladesh</a> &amp; Worldwide<span class="d-non" style="visibility: visible; position: absolute; inline-size: 1px; block-size: 1px; padding: 0; margin: -1px; overflow: clip; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; aria-hidden="true"">(${worldwide})</span>`;
const faviconAndroid = getFavicon(`developer.android.com`),
    faviconFacebook = getFavicon(`facebook.com`),
    faviconInstagram = getFavicon(`instagram.com`),
    faviconThreads = getFavicon(`threads.com`),
    faviconX = getFavicon(`x.com`);
const urlMobile = `tel:+8801602873384`,
    urlMeet = `https://meet.google.com/qjc-bvdp-azd`,
    urlBkash = `/bkash`,
    faviconMeet = getFavicon(`meet.google.com`),
    faviconBkash = getFavicon(`https://bka.sh/`),
    urlFacebook = `https://facebook.com/hassanbiswas.github.io`,
    urlInstagram = `https://instagram.com/hassanbiswas.github.io`,
    urlThreads = `https://threads.com/hassanbiswas.github.io`,
    urlX = `https://x.com/o1602873384`;
const seoSection = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `aria-labelledby="${sectionName}Heading"`;
};
// Constructor Function
function NavItem(name, link, icon = null) {
    this.name = name;
    this.link = link;
    this.icon = icon;
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
    new MethodsItem(`Meet`, `${urlMeet}`, `Video Conference`, `Google Meet`, `${faviconMeet}`),
    new MethodsItem(`bKash`, `${urlBkash}`, `Payment by bKash`, `bKash`, `${faviconBkash}`),
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

function LegalsItem(name, link) {
    this.name = name;
    this.link = link;
}
const legals = [
    new LegalsItem(`Privacy Policy`, `/privacy-policy`),
    new LegalsItem(`Terms of Service`, `/terms-of-service`),
    new LegalsItem(`Refund &amp; Cancelation Policy`, `/refund_and_cancelation-policy`),
];

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
    toHtmlProps(seoImg(src, alt, size, border));

const seoAProps = toHtmlProps(seoA());
const seoButtonProps = toHtmlProps(seoButton());
const seoFooterProps = toHtmlProps(footer());
const seoSectionProps = toHtmlProps(seoSection('footer'));
const seoHProps = toHtmlProps(seoH('footer'));

const authorPhotoProps = getSeoImgProps(author.photo, `${author.name} profile image`, '1.6em', '1');

export default function Footer() {
    return (
        <footer
            {...seoSectionProps}
            {...seoFooterProps}
            className="flex items-center justify-center gap-6"
            id="footer"
            data-version={VERSION}
        >
            <form className="flex flex-nowrap items-center justify-center gap-6">
                <label className="d-non txt-tertiary" htmlFor="system-theme">
                    Choose Theme:
                </label>
                <select
                    id="system-theme"
                    name="system-theme"
                    className="pill btn-primary cursor-pointer"
                >
                    <option value="default">Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </form>

            <div className="w-full max-w-[1024px] flex flex-wrap gap-6">
                <div className="max-w-[375px] flex flex-col gap-4">
                    <h2 {...seoHProps} className="p txt-tertiary">
                        I craft marketing strategies that elevate brands,{' '}
                        <span className="txt-primary">
                            <a {...seoAProps} aria-label="Business Profile" href={begaritola}>
                                <img
                                    src={author.photo}
                                    alt={author.name}
                                    style={{
                                        display: 'inline',
                                        inlineSize: '1em',
                                    }}
                                    className="square rounded-full"
                                />
                            </a>{' '}
                            attract audiences, and drive measurable business growth.
                        </span>
                    </h2>
                    <h3 className="p">
                        Providing high-quality web design and front-end development services to
                        clients in <span dangerouslySetInnerHTML={{ __html: locationSecondary }} />.
                    </h3>

                    <div className="flex gap-4 items-stretch justify-start">
                        <a
                            {...seoAProps}
                            href="/resume"
                            className="btn-primary pill items-center txt-center splitText nowrap"
                            style={{
                                flex: 0,
                                blockSize: 'stretch',
                                alignSelf: 'stretch',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 0,
                            }}
                        >
                            Resume
                        </a>

                        <button
                            className="btn btn-primary flex flex-nowrap items-center justify-center gap-1 bg-green-400/50 border-0"
                            style={{
                                blockSize: 'stretch',
                                alignSelf: 'stretch',
                                display: 'none',
                                color: 'var(--txt-primary)',
                            }}
                            id="installApp"
                        >
                            <img
                                src={faviconAndroid}
                                alt="App"
                                style={{ inlineSize: '1.5em', display: 'inline' }}
                                className="squar"
                            />
                            <span style={{ lineHeight: '100%' }} className="d-non splitWord">
                                Install App
                            </span>
                        </button>
                    </div>
                </div>

                <nav className="flex-1 flex flex-col gap-4">
                    <h4 className="p txt-tertiary">Pages</h4>
                    <div className="flex flex-wrap items-start justify-start gap-4 navigation-links">
                        {pages.map((page, index) => (
                            <a key={page.name} className="h6" {...seoAProps} href={page.link}>
                                <span className="p txt-tertiary">[0{index + 1}]</span>{' '}
                                <span className="splitText">{page.name}</span>{' '}
                                <span className="txt-tertiary">↗</span>
                            </a>
                        ))}
                    </div>
                </nav>

                <nav className="flex-1 flex flex-col gap-4">
                    <h4
                        className="p txt-tertiary"
                        style={
                            {
                                /* whiteSpace: 'no-wrap', */
                            }
                        }
                    >
                        Conference &amp; Payment
                    </h4>
                    <div className="flex flex-wrap items-start justify-start gap-4 methode-links">
                        {methods.map((method, index) => (
                            <a
                                key={method.name}
                                className="h6"
                                {...seoAProps}
                                aria-label={method.name}
                                href={method.link}
                            >
                                <span className="txt-tertiary">[0{index + 1}]</span>{' '}
                                <span className="splitText">{method.name}</span>{' '}
                                <span className="txt-tertiary">↗</span>
                            </a>
                        ))}
                    </div>
                </nav>

                <nav className="flex-1 flex flex-col gap-4">
                    <h4 className="p txt-tertiary">Socials</h4>
                    <div className="flex flex-wrap items-start justify-start social-links gap-4">
                        {socials.map(social => (
                            <a
                                key={social.name}
                                {...seoAProps}
                                aria-label={social.name}
                                href={social.link}
                            >
                                <img
                                    src={social.favicon}
                                    alt={social.name}
                                    style={{
                                        borderRadius: 'var(--pill)',
                                        overflow: 'clip',
                                        inlineSize: '1.6em',
                                    }}
                                    className="pill squar rounded monochrome"
                                />
                            </a>
                        ))}

                        <a
                            {...seoAProps}
                            aria-label="messenger"
                            id="chat-bubble"
                            className="pill squar rounded"
                            href={urlMessenger}
                        >
                            <img
                                src={getFavicon(`m.me`, 50)}
                                alt="Messenger"
                                className="pill squar rounded"
                                style={{ inlineSize: '1.6em' }}
                            />
                        </a>
                    </div>
                </nav>
            </div>

            <nav className="w-full max-w-[1024px] flex flex-col items-center gap-4">
                <h4 className="p txt-tertiary">Legals</h4>
                <div className="flex flex-wrap items-start justify-center legal-links gap-4">
                    {legals.map((legal, index) => (
                        <a key={legal.name} className="h6" {...seoAProps} href={legal.link}>
                            <span className="txt-tertiary">[0{index + 1}]</span>{' '}
                            <span className="splitWord">{legal.name}</span>{' '}
                            <span className="txt-tertiary">↗</span>
                        </a>
                    ))}
                </div>
            </nav>

            <div className="w-full max-w-[640px] flex flex-nowrap gap-6 input-group items-center justify-center">
                <input
                    style={{
                        padding: 'var(--space-s)',
                        border: '1px solid var(--brand-primary)',
                        color: 'var(--brand-primary)',
                        background: 'color-mix(in hsl, var(--bg), transparent 30%)',
                        fontWeight: 'bold',
                    }}
                    className="pill text-center"
                    placeholder="@hassanbiswas.github.io"
                    readOnly
                    type="text"
                />
                <a
                    {...seoAProps}
                    style={{
                        textDecoration: 'none',
                        blockSize: 'stretch',
                        alignSelf: 'stretch',
                        border: '1px solid var(--brand-primary)',
                    }}
                    href={urlYoutube}
                    className="btn btn-primary splitWord"
                >
                    Subscribe
                </a>
            </div>

            <div
                className="w-full max-w-[1024px] flex txt-primary flex-col gap-6 mask marquee_outer"
                id="footer-marquee"
                style={{ colorScheme: 'dark' }}
            >
                <div className="svg-wrapper marquee_inner">
                    <svg fill="none" viewBox="0 0 300 100" style={{ overflow: 'visible' }}>
                        <text
                            data-animate="svgDrawFil"
                            x="0%"
                            y="50%"
                            textAnchor="left"
                            style={{
                                stroke: 'currentColor',
                                strokeWidth: 0.5,
                                fill: 'currentColor',
                                fontSize: 'calc(var(--p) * 3)',
                                fontWeight: 800,
                                strokeDasharray: 100,
                                strokeDashoffset: 0,
                            }}
                        >
                            &copy; {new Date().getFullYear()} {author.title}
                        </text>
                    </svg>
                </div>
            </div>
        </footer>
    );
}
