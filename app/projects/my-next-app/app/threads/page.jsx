import MetaRedirect from '@/components/ui/metaRedirect';
import { urlThreads } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function ThreadsPage() {
    return (
        <>
            <MetaRedirect url={urlThreads} />
            <Hero />
        </>
    );
}
