import React from 'react';
// import { useState } from 'react';
// import heroImg from '../assets/hero.png';
import * as Data from '@/index.js';
const {
    faviconAuthor,
    getFavicon,
    preferedLanguages,
    linksData,
    urlMessenger,
    begaritola,
    seoA,
    seoImg,
    seoSection,
    seoH,
    author,
    faviconMap,
    locationPrimary,
    faviconGmail,
    urlGmail,
    faviconMessenger,
} = Data;

const Contact = () => {
    const toHtmlProps = string =>
        Object.fromEntries(
            [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
                ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
            )
        );

    const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
        toHtmlProps(seoImg(src, alt, size, border));

    const seoAProps = toHtmlProps(seoA());
    const seoSectionProps = toHtmlProps(seoSection('contact'));
    const seoHProps = toHtmlProps(seoH('contact'));
    const faviconAuthorProps = getSeoImgProps(
        faviconAuthor,
        'Hassan Biswas home page icon',
        '1.6em',
        '1'
    );
    const authorPhotoProps = getSeoImgProps(
        author.photo,
        `${author.name} profile image`,
        '1.6em',
        '1'
    );

    return (
        <section
            id="contact"
            {...seoSectionProps}
            className="flex flex-col items-center justify-center gap-6 px-6"
        >
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
                <h2 {...seoHProps} data-animate="scaleIn" className="h2 txt-primary inline">
                    <span className="splitWord">I help ambitious brands stand out through</span>{' '}
                    <a {...seoAProps} aria-label="Home Page" href="/">
                        <img src={faviconAuthor} className="square inline w-[1em]" />
                    </a>{' '}
                    <span className="splitWord">bold design and digital strategies.</span>
                </h2>{' '}
                <p data-animate="scaleIn" className="h2 txt-tertiary inline font-bold">
                    <span className="splitWord">Ready to scale your brand with</span>{' '}
                    <a {...seoAProps} aria-label="Business Profile" href={begaritola}>
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
                                [0{index + 1}]<span className="p txt-primary">{language.name}</span>
                                ({language.props})
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
                                <a {...seoAProps} aria-label={data.title} href={data.link}>
                                    <span dangerouslySetInnerHTML={{ __html: data.name }} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full max-w-[640px]">
                <a
                    {...seoAProps}
                    href="/vcf"
                    style={{ textDecoration: 'none', color: 'var(--brand-primary)' }}
                >
                    ❯ <b className="splitText">Download VCF</b>
                </a>
                <p className="txt-tertiary">or connect</p>
                <a
                    {...seoAProps}
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
};

export default Contact;
