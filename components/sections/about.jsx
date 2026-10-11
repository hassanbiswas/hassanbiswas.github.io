import {
    VERSION,
    author,
    getFavicon,
    thisYear,
    locationSecondary,
    stories,
    experience,
    txtFill,
    txtStroke,
    componentSkipSection,
} from '../../lib/utils';

export default function About() {
    const svgMarginBlock = 'auto auto'; // -30px auto

    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center gap-8 px-6 bg-primary  "
            data-version={VERSION}
        >
            <div className="flex flex-col items-center gap-6 w-full max-w-[768px] ">
                <p data-animate="scaleIn" className="h6 text-left w-full">
                    <span className="txt-tertiary">{author.name}</span>{' '}
                    <i>2001 - {new Date().getFullYear()}</i>
                </p>
                <div className="grid md:grid-cols-2 py-0 gap-4 w-full">
                    <h2 data-animate="scaleIn" className="h3 splitWord py-1 text-4xl">
                        Driven by Quality,
                        <br /> Precision & Modern Aesthetics
                    </h2>
                    <div className="flex flex-col gap-2">
                        <p data-animate="scaleIn" className="splitWord">
                            Having earned a <b>Diploma in Computer Science & Technology</b> and
                            received specialized certification from <b>Utshob Technology Ltd</b> at
                            Sheikh Hasina Software Technology Park, I help clients around the globe
                            establish strong digital identities.
                        </p>
                        <a data-visible className="p splitText" href="/#story-1">
                            ❯ View Story
                        </a>
                    </div>
                </div>
            </div>

            {stories.map((story, index) => (
                <div
                    key={index}
                    data-pin="true"
                    id={'story-' + (index + 1)}
                    className="flex flex-col items-center gap-6 w-full max-w-[768px] "
                    style={{ paddingBlock: '0em', overflow: 'clip', position: 'relative' }}
                >
                    <span
                        inert
                        aria-hidden="true"
                        data-animate="scaleIn"
                        className="story-image mas"
                        style={{
                            filter: 'blur(3px) opacity(.3)',
                            position: 'absolute',
                            inset: 0,
                        }}
                    >
                        <img
                            src={story.image}
                            alt="Story Image"
                            style={{ bobjectFit: 'cover', height: '100%' }}
                        />
                    </span>

                    <span
                        inert
                        aria-hidden="true"
                        data-animate="clipIn"
                        className="story-imageCliped "
                        style={{
                            clipPath: 'inset(30%)',
                            opacity: 1,
                            position: 'absolute',
                            inset: 0,
                            filter: 'brightness(.7)',
                        }}
                    >
                        <img
                            src={story.image}
                            alt="Story Image"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </span>

                    <div className="toCenterContents ">
                        <div className="grid md:grid-cols-2 gap-4 py-0">
                            <div>
                                <p className="h6 txt-gra">
                                    <span className="txt-primary h2 text-2xl">0{index + 1}</span>/
                                    {stories.length}
                                </p>{' '}
                                <h3
                                    data-animate="scaleIn"
                                    className="h1 splitWord py-0 inline text-2xl"
                                >
                                    {story.title}
                                </h3>
                            </div>

                            <div data-animate="fadeI" className="flex flex-col gap-1">
                                <p className="fade-in-to h6 lineClamp splitWord">{story.desc}</p>
                                <a
                                    data-visible
                                    aria-label={story.ariaLabel}
                                    className="splitText"
                                    href={story.link}
                                >
                                    {story.linkText} ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* {componentSkipSection()} */}
        </section>
    );
}
