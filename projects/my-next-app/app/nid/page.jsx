import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function NidPage() {
    return (
        <>
            <MetaRedirect url={`nid.pdf?v=${VERSION}`} />
            <Hero />
        </>
    );
}
