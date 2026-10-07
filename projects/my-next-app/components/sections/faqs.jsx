import {
    VERSION,
    faviconAuthor,
    getFavicon,
    urlMessenger,
    seoA,
    seoImg,
    seoSection,
    seoH,
    author,
    faviconMessenger,
    urlMobile,
    faqs,
} from '@/lib/utils';

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
    toHtmlProps(seoImg(src, alt, size, border));

const seoAProps = toHtmlProps(seoA());
const seoSectionProps = toHtmlProps(seoSection('faqs'));
const seoHProps = toHtmlProps(seoH('faqs'));

const authorPhotoProps = getSeoImgProps(author.photo, `${author.name} profile image`, '1.6em', '1');

const Faqs = () => {
    return (
        <section
            {...seoSectionProps}
            className="cta-section flex flex-col items-center justify-center bg-primary px-6 gap-6"
            id="faqs"
            data-version={VERSION}
        >
            <div className="w-full max-w-3xl flex flex-col text-center gap-3">
                <p className="text-center">FAQ's</p>
                <h2 {...seoHProps} data-animate="scaleIn">
                    <span className="splitWord">Got questions?</span> <br />
                    <span className="txt-tertiary splitText">I’ve got answers</span>
                </h2>
                <p className="text-center">
                    <span className="text-revel-onscrol splitWord">
                        Everything you need to know about my process, pricing, and how I work
                    </span>
                </p>
            </div>

            <div className="w-full max-w-3xl grid md:grid-cols-2 items-start gap-4 fluidHovere">
                {faqs.map((faq, index) => (
                    <details key={index} name="flex flex-col question">
                        <summary className="flex flex-nowrap items-center justify-between gap-2">
                            <h3 className="p question txt-tertiary px-6">
                                [0{index + 1}]{' '}
                                <span
                                    dangerouslySetInnerHTML={{ __html: faq.question }}
                                    className="txt-primary"
                                ></span>{' '}
                            </h3>
                            <b className="marker">+</b>
                        </summary>
                        <p
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                            className="h6 answer"
                        ></p>
                    </details>
                ))}
            </div>

            <div className="fw-full max-w-3xl flex flex-col gap-4" style={{ display: 'none' }}>
                <div className="flex gap-2">
                    <input
                        name="agreement"
                        id="agreement"
                        className="pill"
                        defaultChecked={true}
                        type="radio"
                    />
                    <label htmlFor="agreement">
                        I agree to the
                        <a {...seoAProps} href="/privacy-policy">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                <a {...seoAProps} href={urlMessenger} className="pill btn btn-primary">
                    Ask on Messenger
                </a>
            </div>
        </section>
    );
};

export default Faqs;
