import BrandLogo from '../ui/brandLogo';
import Reviews from '../ui/reviews';
import {
    VERSION,
    author,
    getFavicon,
    thisYear,
    experience,
    txtFill,
    txtStroke,
    scrollerGroup,
} from '../../lib/utils';

export default function Hero() {
    const svgMarginBlock = 'auto auto'; // -30px auto
    const color = `var(--txt-primary)`,
        fontSize = `--font(1.2rem, 1.8rem)`,
        text = 'section.heading';

    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center gap-8 px-6  bg-primary"
            data-version={VERSION}
        >
            <BrandLogo />

            <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[768px] text-items text-center gradient-mas">
                <span
                    style={{ padding: '.4em .8em', gap: '.4em' }}
                    className="flex badge bg-secondary pill rounded-full items-center"
                >
                    <i
                        className="pill rounded-full"
                        style={{ background: '#14db14', padding: '.4em' }}
                    ></i>{' '}
                    Available for projects
                </span>
                <h1
                    data-animate="scaleI"
                    className="h1 txt-center splitWord text-5xl"
                    id="brand-titl"
                >
                    Crafting digital experiences that inspire, <br />
                    connect, and grow brands worldwide
                </h1>
                <p className="txt-center txt-primary lineClamp splitText">
                    ✼ Elevating Modern Digital Experiences.
                </p>
                <div className="flex items-center justify-center" style={{ gap: '1.6em' }}>
                    <a href="/resume" className="btn btn-primary text-white  pill splitText">
                        Resume
                    </a>
                    <a
                        className="h6 txt-primary pill splitText"
                        href="/#contact"
                        style={{ border: '0px solid currentColor' }}
                    >
                        Contact
                    </a>
                </div>
                {Reviews()}
                {
                    <div className="scrollerWrappe">
                        <div
                            data-visible
                            className="infiniteScrolle flex nowrap"
                            style={{ paddingBlock: '.8em', gap: 0 }}
                        >
                            HTML CSS JavaScript Tailwind React NextJS VScode GitHub ...
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}
