import Reviews from '@/components/ui/reviews';
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
const seoSectionProps = toHtmlProps(seoSection('cta'));
const seoHProps = toHtmlProps(seoH('cta'));

const authorPhotoProps = getSeoImgProps(author.photo, `${author.name} profile image`, '1.6em', '1');

const Cta = () => {
    return (
        <section
            {...seoSectionProps}
            className="cta-section flex items-center justify-center bg-primary"
            id="cta"
            data-version={VERSION}
        >
            <div
                className="w-full max-w-[640px] bg-primary p-6 flex flex-col relative rounded-4xl gap-6"
                style={{
                    border: '1px solid var(--bg-secondary)',
                }}
            >
                <span inert className="dots"></span>

                <h2 {...seoHProps} data-animate="scaleIn" className="h1">
                    <span className="splitWord">Have project? Need website</span>{' '}
                    <span className="txt-tertiary splitWord">or</span>{' '}
                    <span className="splitWord">looking for Developer? I'm here!</span>
                </h2>

                <div className="flex gap-6">
                    <Reviews />
                    <a {...seoAProps} href={urlMobile} className="btn btn-primary splitWord">
                        Make a Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cta;
