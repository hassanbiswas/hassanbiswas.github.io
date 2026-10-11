import MetaRedirect from '@/components/ui/metaRedirect';
import { urlLocation } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function LocationPage() {
    return (
        <>
            <MetaRedirect url={urlLocation} />
            <Hero />
        </>
    );
}
