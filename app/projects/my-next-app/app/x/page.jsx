import MetaRedirect from '@/components/ui/metaRedirect';
import { urlX } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function XPage() {
    return (
        <>
            <MetaRedirect url={urlX} />
            <Hero />
        </>
    );
}
