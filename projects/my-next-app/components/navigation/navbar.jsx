import { VERSION } from '@/lib/utils';
// import * as Data from '@/index.js';

const seoA = () => {
    return `loading="lazy"
        rel="noopener noreferrer"
        target="_blank"`;
};
const getFavicon = (domain = `hassanbiswas.github.io`, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}&v=${VERSION}`;
const faviconAuthor = getFavicon(`hassanbiswas.github.io`);
const navPrimary = () => {
    return `aria-label="Primary Navigation"`;
};
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
// Constructor Function
function NavItem(name, link, icon = null) {
    this.name = name;
    this.link = link;
    this.icon = icon;
}
const navigations = [
    new NavItem('Home', '/#hero', faviconAuthor),
    new NavItem('About', '/#about'),
    new NavItem('Services', '/#services'),
    new NavItem('Projects', '/#projects'),
];

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const getSeoImgProps = (src, alt, size = '1.6em', border = null) =>
    toHtmlProps(seoImg(src, alt, size, border));

const seoAProps = toHtmlProps(seoA());
const navPrimaryProps = toHtmlProps(navPrimary());

export default function Navbar() {
    return (
        <section
            {...navPrimaryProps}
            className="flex items-center justify-center p-6"
            id="bottom-navigation"
            style={{ listStyle: 'none' }}
            data-version={VERSION}
        >
            <nav
                className="nav-list p-2 items-center txt-center flex gap-2 justify-center rounded-full"
                id="header-nav-list"
            >
                {navigations.map((navigation, index) => (
                    <a
                        key={navigation.link || index}
                        style={{
                            blockSize: 'stretch',
                            ...(navigation.style || {}),
                        }}
                        className={`flex items-center justify-center text-center gap-1 ${navigation.class || ''}`}
                        href={navigation.link}
                    >
                        {navigation.icon && (
                            <img
                                src={navigation.icon}
                                alt={`${navigation.name} page`}
                                className=""
                                style={{ width: '1.6em', height: '1.6em', objectFit: 'contain' }}
                            />
                        )}
                        <span className="">{navigation.name}</span>
                    </a>
                ))}

                <a
                    className="list-item active-bg"
                    inert={true}
                    aria-hidden="true"
                    style={{ pointerEvents: 'none' }}
                ></a>
            </nav>
        </section>
    );
}
