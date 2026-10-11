'use client';

import { useEffect } from 'react';

export const author = {
    name: 'Hassan Biswas',
    siteUrl: 'hassanbiswas.github.io',
};

export const getFavicon = (domain, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

export function initBrowserFeatures() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Move browser-only setup here:
    // document queries, observers, event listeners, and custom-element definitions.
}

export default function BrowserEffects() {
    useEffect(() => {
        let cleanup;
        let cancelled = false;

        import('./site-browser').then(({ initBrowserFeatures }) => {
            if (!cancelled) cleanup = initBrowserFeatures();
        });

        return () => {
            cancelled = true;
            cleanup?.();
        };
    }, []);

    return null;
}
