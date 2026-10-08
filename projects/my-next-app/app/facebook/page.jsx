import MetaRedirect from '@/components/ui/metaRedirect';
import { urlFacebook } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function FacebookPage() {
    return (
        <>
            <MetaRedirect url={urlFacebook} />
            <Hero />
        </>
    );
}
