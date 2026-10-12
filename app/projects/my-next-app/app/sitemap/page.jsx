import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION, author } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function SitemapPage() {
    return (
        <>
            <MetaRedirect url={`https://${author.siteUrl}/sitemap.xml?v=${VERSION}`} />
            <Hero />
        </>
    );
}
