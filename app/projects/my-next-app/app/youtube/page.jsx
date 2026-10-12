import MetaRedirect from '@/components/ui/metaRedirect';
import { urlYoutube } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function YoutubePage() {
    return (
        <>
            <MetaRedirect url={urlYoutube} />
            <Hero />
        </>
    );
}
