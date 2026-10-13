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
                <span className="flex bg-secondary py-1.5 px-2.5 gap-1 text-sm rounded-full items-center justify-center">
                    <i className="bg-green-400 p-1.5 rounded-full"></i> Available for projects
                </span>
                <h1
                    data-animate="scaleI"
                    className="h1 txt-center splitWord sm:text-5xl text-4xl"
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
                <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
                    <li>HTML</li> <li>CSS</li> <li>JavaScript</li>
                    <li>TailwindCSS</li> <li>ReactJS</li> <li>NextJS</li>
                    <li>VScode</li> <li>GitHub</li> <li>Figma</li>
                </ul>
            </div>
        </section>
    );
}
