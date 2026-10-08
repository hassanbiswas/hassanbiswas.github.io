import MetaRedirect from '@/components/ui/metaRedirect';
import { urlInstagram } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function InstagramPage() {
    return (
        <>
            <MetaRedirect url={urlInstagram} />
            <Hero />
        </>
    );
}
