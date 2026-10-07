'use client';
import React, { useEffect, useState } from 'react';
import { VERSION, greetings } from '@/lib/utils';

export default function Loader() {
    const [greeting, setGreeting] = useState(greetings[0] || '');
    const [visible, setVisible] = useState(true);
    const [isPageLoaded, setIsPageLoaded] = useState(
        typeof document !== 'undefined' ? document.readyState === 'complete' : false
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateLoadState = () => setIsPageLoaded(true);

        if (document.readyState === 'complete') {
            setIsPageLoaded(true);
            return undefined;
        }

        window.addEventListener('load', updateLoadState, { once: true });
        return () => window.removeEventListener('load', updateLoadState);
    }, []);

    useEffect(() => {
        if (!greetings.length) return undefined;

        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % greetings.length;
            setGreeting(greetings[index]);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!visible || !isPageLoaded || typeof navigator === 'undefined' || !navigator.onLine) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [isPageLoaded, visible]);

    if (!visible) return null;

    return (
        <section
            id="loader"
            className="flex flex-col items-center justify-center text-center"
            data-version={VERSION}
        >
            <h3 className="greeting">
                <svg
                    data-visible
                    viewBox="0 0 100 100"
                    height="100%"
                    width="100%"
                    sizes="any"
                    className="inline"
                >
                    <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        id="say-hello"
                        className="loaderSvgDraw font-bold text-[--font(2rem, 3.2rem)]"
                        stroke="currentColor"
                        strokeWidth=".5"
                        fill="transparent"
                        strokeDasharray="100"
                        strokeDashoffset="50"
                    >
                        {greeting}
                    </text>
                </svg>
            </h3>
        </section>
    );
}
