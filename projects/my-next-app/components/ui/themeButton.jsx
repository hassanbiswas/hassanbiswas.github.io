'use client';
import React, { useState, useEffect } from 'react';
import { VERSION } from '@/lib/utils';

const themeButton = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    useEffect(() => {
        const html = document.documentElement;
        if (!html) return;

        // Explicitly set the CSS property or attribute on documentElement
        html.style.setProperty('color-scheme', theme);
    }, [theme]);

    const changeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            type="button"
            onClick={changeTheme}
            className="pill btn button btn-primary cursor-pointer"
            data-version={VERSION}
        >
            {theme ?? 'light'}
        </button>
    );
};

export default themeButton;
