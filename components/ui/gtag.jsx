'use client';

import { useEffect } from 'react';

export default function Gtag() {
    useEffect(() => {
        const tagScript = document.createElement('script');

        tagScript.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }

            (function loadDeferredAnalytics() {
                const GTM_ID = 'GTM-PRSSQR5H';
                let loaded = false;

                function initAnalytics() {
                    if (loaded) return;
                    loaded = true;

                    // Remove interaction listeners
                    ['touchstart', 'scroll', 'mousemove'].forEach(event => {
                        window.removeEventListener(event, initAnalytics);
                    });

                    // Load GTM
                    const gtmScript = document.createElement('script');
                    gtmScript.async = true;
                    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
                    document.head.appendChild(gtmScript);

                    // Push initial tracking state
                    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                    gtag('js', new Date());
                    gtag('config', GTM_ID);
                }

                // Attach passive interaction listeners or 4-second timeout safety fallback
                ['touchstart', 'scroll', 'mousemove'].forEach(event => {
                    window.addEventListener(event, initAnalytics, { passive: true });
                });
                setTimeout(initAnalytics, 4000);
            })();
        `;

        document.head.appendChild(tagScript);
    }, [ ]);

    return null;
}
