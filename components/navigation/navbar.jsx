import {
    VERSION,
    seoA,
    getFavicon,
    faviconAuthor,
    navPrimary,
    seoImg,
    navigations,
} from '../../lib/utils';

export default function Navbar() {
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

    return (
        <section
            className="flex items-center justify-center p-6"
            id="bottom-navigation"
            style={{ listStyle: 'none' }}
            data-version={VERSION}
        >
            <nav
                className="nav-list p-2 items-center txt-center flex gap-2 justify-center rounded-full"
                id="header-nav-list"
                aria-label="Primary Navigation"
            >
                {navigations.map((navigation, index) => (
                    <a
                        key={navigation.link || index}
                        style={{
                            blockSize: 'stretch',
                            ...(navigation.style || {}),
                        }}
                        className={`flex items-center justify-center text-center gap-2 ${navigation.class || ''}`}
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
