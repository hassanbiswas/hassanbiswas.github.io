import MetaRedirect from '@/components/ui/metaRedirect';
import { urlMeet } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function MeetPage() {
    return (
        <>
            <MetaRedirect url={urlMeet} />
            <Hero />
        </>
    );
}
