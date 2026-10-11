import MetaRedirect from '@/components/ui/metaRedirect';
import { urlFreefire } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function FreefirePage() {
    return (
        <>
            <MetaRedirect url={urlFreefire} />
            <Hero />
        </>
    );
}
