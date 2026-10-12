import MetaRedirect from '@/components/ui/metaRedirect';
import { urlLinkedin } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function LinkedinPage() {
    return (
        <>
            <MetaRedirect url={urlLinkedin} />
            <Hero />
        </>
    );
}
