import MetaRedirect from '@/components/ui/metaRedirect';
import { urlDocs } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function DocsPage() {
    return (
        <>
            <MetaRedirect url={urlDocs} />
            <Hero />
        </>
    );
}
