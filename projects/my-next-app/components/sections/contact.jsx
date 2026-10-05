import { VERSION } from '@/lib/utils';

const author = {
    name: `Hassan Biswas`,
    siteUrl: `hassanbiswas.github.io`,
    photo: `https://lh3.googleusercontent.com/a/ACg8ocJfIX4otqilqq6qUXViOZFY1tLeGWq20Ylvch7bsP_41Kwlq20=s96-c-no?v=${VERSION}`,
};
author.iframeHome = `https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7452527536307!2d89.23107137772256!3d23.06979927914087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff134bb81a3bb7%3A0xe2dd7732283d1db1!2sWeb%20Developer%20%7C%20Responsive%20Website%20Design%20%26%20Front-End%20Development!5e0!3m2!1sen!2sbd!4v1770707284182!5m2!1sen!2sbd`;
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
const seoH = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `id="${sectionName}Heading"`;
};
const begaritola = `https://maps.app.goo.gl/Q3pP1HzDSEdKv1Zr8`;
const urlMobile = `tel:+8801602873384`,
    faviconMobile = getFavicon(`voice.google.com/regain`),
    urlGmail = `mailto:hassanbiswas.github.io@gmail.com`,
    faviconGmail = getFavicon(`chat.google.com`),
    faviconMap = getFavicon(`maps.google.com`);
const seoSection = (sectionName = `sectionName`) => {
    // section id="about" > h2 id="aboutHeading"
    return `aria-labelledby="${sectionName}Heading"`;
};
const preferedLanguages = [
    { name: `English`, props: `Native` },
    { name: `Bangla`, props: `Advanced` },
    { name: `Hindi`, props: `Speaking` },
];
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

/* import {
    faviconAuthor,
    getFavicon,
    preferedLanguages,
    linksData,
    urlMessenger,
    begaritola,
    seoA,
    seoImg,
    seoSection,
    seoH,
    author,
    faviconMap,
    locationPrimary,
    faviconGmail,
    urlGmail,
    faviconMessenger
} from '@/app/index'; */

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
    toHtmlProps(seoImg(src, alt, size, border));

const seoAProps = toHtmlProps(seoA());
const seoSectionProps = toHtmlProps(seoSection('contact'));
const seoHProps = toHtmlProps(seoH('contact'));
const faviconAuthorProps = getSeoImgProps(
    faviconAuthor,
    'Hassan Biswas home page icon',
    '1.6em',
    '1'
);
const authorPhotoProps = getSeoImgProps(author.photo, `${author.name} profile image`, '1.6em', '1');

export default function Contact() {
    return (
        <section
            id="contact"
            {...seoSectionProps}
            className="flex flex-col items-center justify-center gap-6 px-6"
        >
            <div className="flex flex-col w-full max-w-[640px] background-map overflow-clip object-cover">
                <iframe
                    className="monochrome border-0"
                    src={author.iframeHome}
                    aria-label="Business Location"
                    title="Business Location"
                    style={{
                        aspectRatio: '16/6',
                        borderRadius: '2em 2em 0 0',
                        background: 'var(--bg-secondary)',
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="ph-wrapper w-full max-w-[640px]">
                <h2 {...seoHProps} data-animate="scaleIn" className="h2 txt-primary inline">
                    <span className="splitWord">I help ambitious brands stand out through</span>{' '}
                    <a {...seoAProps} aria-label="Home Page" href="/">
                        <img src={faviconAuthor} className="square inline w-[1em]" />
                    </a>{' '}
                    <span className="splitWord">bold design and digital strategies.</span>
                </h2>{' '}
                <p data-animate="scaleIn" className="h2 txt-tertiary inline font-bold">
                    <span className="splitWord">Ready to scale your brand with</span>{' '}
                    <a {...seoAProps} aria-label="Business Profile" href={begaritola}>
                        <img src={author.photo} className="square rounded-full inline w-[1em]" />
                    </a>{' '}
                    <span className="splitWord">{author.name}?</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 items-start w-full max-w-[640px] gap-6">
                <div className="flex flex-col  gap-4">
                    <h3 className="p txt-tertiary">Languages:</h3>
                    <ul className="flex flex-col gap-4 list-none">
                        {preferedLanguages.map((language, index) => (
                            <li key={language.name} className="p txt-tertiary">
                                [0{index + 1}]<span className="p txt-primary">{language.name}</span>
                                ({language.props})
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="p txt-tertiary">Links:</h3>
                    <div className="flex flex-col gap-4">
                        {linksData.map((data, index) => (
                            <div key={data.name} className="flex gap-2 flex-nowrap">
                                <img
                                    src={data.favicon}
                                    style={{ inlineSize: '1.5em' }}
                                    className="squar"
                                />
                                <a {...seoAProps} aria-label={data.title} href={data.link}>
                                    <span dangerouslySetInnerHTML={{ __html: data.name }} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full max-w-[640px]">
                <a
                    {...seoAProps}
                    href="/vcf"
                    style={{ textDecoration: 'none', color: 'var(--brand-primary)' }}
                >
                    ❯ <b className="splitText">Download VCF</b>
                </a>
                <p className="txt-tertiary">or connect</p>
                <a
                    {...seoAProps}
                    aria-label="messenger"
                    style={{ inlineSize: '4em' }}
                    className="pill squar"
                    href={urlMessenger}
                >
                    <img src={getFavicon(`m.me`, 50)} className="pill squar" />
                </a>
            </div>
        </section>
    );
}
