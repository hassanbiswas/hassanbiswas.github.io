import {
    VERSION,
    author,
    seoA,
    faviconAuthor,
    faviconMessenger,
    faviconAndroid,
    footer,
    urlMessenger,
    seoImg,
    begaritola,
    locationPrimary,
    urlYoutube,
    seoButton,
    seoH,
    bangladesh,
    asia,
    worldwide,
    locationSecondary,
    seoSection,
    pages,
    methods,
    socials,
    legals,
} from '@/lib/utils';
import ThemeButton from '@/components/ui/themeButton';

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
            className="flex flex-wrap items-center justify-center gap-6 pt-12"
            id="footer"
            data-version={VERSION}
        >
            <div className=" flex items-center justify-center gap-6" style={{ display: 'none' }}>
                <span className="txt-tertiary ">Choose Theme</span>
                <ThemeButton />
            </div>

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
                        clients in{' '}
                        <a {...seoAProps} href={asia}>
                            {locationSecondary}
                        </a>
                        .
                    </h3>

                    <div className="flex gap-4 items-stretch justify-start">
                        <a
                            {...seoAProps}
                            href="/resume"
                            className="btn btn-primary pill items-center txt-center splitText nowrap"
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
                                App
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
                    <h4 className="p txt-tertiary">Conference &amp; Payment</h4>
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
                                src={faviconMessenger}
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
                    className="btn pill text-center py-3"
                    style={{
                        border: '1px solid var(--brand-primary)',
                        color: 'var(--brand-primary)',
                        background: 'color-mix(in hsl, var(--bg), transparent 30%)',
                        fontWeight: 'bold',
                    }}
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
                className="w-full max-w-[1024px] flex txt-primary flex-col gap-6 pt-8 mask marquee_outer"
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
