'use client';

import { useEffect } from 'react';

export default function MetaRedirect({ url = '/', delay = 6 }) {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = `${delay}; URL=${url}`;
        document.head.appendChild(meta);

        return () => {
            meta.remove();
        };
    }, [url, delay]);

    return null;
}
