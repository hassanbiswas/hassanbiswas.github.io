import React from 'react';
// import { useState } from 'react';
// import heroImg from '../assets/hero.png';
import * as Data from '@/index.js';
const {
    header,
    faviconAuthor,
    getFavicon,
    urlMessenger,
    seoA,
    seoImg,
    author,
    locationPrimary,
    faviconMessenger,
} = Data;

const Header = () => {
    const toHtmlProps = string =>
        Object.fromEntries(
            [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
                ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
            )
        );

    const getSeoImgProps = (src, alt, size = '1.6em', border = '1') =>
        toHtmlProps(seoImg(src, alt, size, border));

    const seoAProps = toHtmlProps(seoA());
    const headerProps = toHtmlProps(header());
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
        <header
            {...headerProps}
            className=" flex flex-col items-center justify-center bg-primary"
            id="header"
        >
            <nav className="w-full max-w-3xl flex flex-nowrap items-center justify-between gap-4 py-2">
                <span
                    aria-label="Primary service location"
                    className="flex flex-nowrap gap-1.5"
                    dangerouslySetInnerHTML={{ __html: locationPrimary }}
                />

                <a {...seoAProps} aria-label="Messenger" href={urlMessenger}>
                    @{author.siteUrl}
                </a>
            </nav>
        </header>
    );
};

export default Header;
