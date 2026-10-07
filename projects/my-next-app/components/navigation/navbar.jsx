import {
    VERSION,
    seoA,
    getFavicon,
    faviconAuthor,
    navPrimary,
    seoImg,
    navigations,
} from '@/lib/utils';

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
