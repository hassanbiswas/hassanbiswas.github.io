import {
    VERSION,
    author,
    getFavicon,
    faviconAuthor,
    faviconMessenger,
    urlMessenger,
    locationPrimary,
    begaritola,
    urlMobile,
    faviconMobile,
    urlGmail,
    faviconGmail,
    faviconMap,
    preferedLanguages,
    linksData,
} from '@/lib/utils';

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-6 px-6">
            <div className="flex flex-col w-full max-w-[640px] background-map overflow-clip object-cover">
                <iframe
                    className="monochrome border-0"
                    src={author.iframeHome}
                    aria-label="Business Location"
                    title="Business Location"
                    style={{
                        aspectRatio: '16/6',
                        borderRadius: '2em 2em 0 0',
                        background: 'var(--bg-secondary)',
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="ph-wrapper w-full max-w-[640px]">
                <h2 data-animate="scaleIn" className="h2 txt-primary inline">
                    <span className="splitWord">I help ambitious brands stand out through</span>{' '}
                    <a aria-label="Home Page" href="/">
                        <img src={faviconAuthor} className="square inline w-[1em]" />
                    </a>{' '}
                    <span className="splitWord">bold design and digital strategies.</span>
                </h2>{' '}
                <p data-animate="scaleIn" className="h2 txt-tertiary inline font-bold">
                    <span className="splitWord">Ready to scale your brand with</span>{' '}
                    <a aria-label="Business Profile" href={begaritola}>
                        <img src={author.photo} className="square rounded-full inline w-[1em]" />
                    </a>{' '}
                    <span className="splitWord">{author.name}?</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 items-start w-full max-w-[640px] gap-6">
                <div className="flex flex-col  gap-4">
                    <h3 className="p txt-tertiary">Languages:</h3>
                    <ul className="flex flex-col gap-4 list-none">
                        {preferedLanguages.map((language, index) => (
                            <li key={language.name} className="p txt-tertiary">
                                [0{index + 1}]{' '}
                                <span className="p txt-primary">{language.name}</span>(
                                {language.props})
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="p txt-tertiary">Links:</h3>
                    <div className="flex flex-col gap-4">
                        {linksData.map((data, index) => (
                            <div key={data.name} className="flex gap-2 flex-nowrap">
                                <img
                                    src={data.favicon}
                                    style={{ inlineSize: '1.5em' }}
                                    className="squar"
                                />
                                <a aria-label={data.title} href={data.link}>
                                    {data.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full max-w-[640px]">
                <a href="/vcf" style={{ textDecoration: 'none', color: 'var(--brand-primary)' }}>
                    ❯ <b className="splitText">Download VCF</b>
                </a>
                <p className="txt-tertiary">or connect</p>
                <a
                    aria-label="messenger"
                    style={{ inlineSize: '4em' }}
                    className="pill squar"
                    href={urlMessenger}
                >
                    <img src={getFavicon(`m.me`, 50)} className="pill squar" />
                </a>
            </div>
        </section>
    );
}
