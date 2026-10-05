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
const header = () => {
    return `id="header" role="banner"`;
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

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
    toHtmlProps(seoImg(src, alt, size, border));

const seoAProps = toHtmlProps(seoA());
const headerProps = toHtmlProps(header());
const faviconAuthorProps = getSeoImgProps(
    faviconAuthor,
    'Hassan Biswas home page icon',
    '1.6em',
    '1'
);
const authorPhotoProps = getSeoImgProps(author.photo, `${author.name} profile image`, '1.6em', '1');

export default function Header() {
    return (
        <header
            {...headerProps}
            className=" flex flex-col items-center justify-center bg-primary"
            id="header"
            data-version={VERSION}
        >
            <nav className="w-full max-w-3xl flex flex-nowrap items-center justify-between gap-4 py-2">
                <span
                    aria-label="Primary service location"
                    className="flex flex-nowrap gap-1.5"
                    dangerouslySetInnerHTML={{ __html: locationPrimary }}
                />

                <a {...seoAProps} aria-label="Messenger" href={urlMessenger}>
                    @{author.siteUrl}
                </a>
            </nav>
        </header>
    );
}
