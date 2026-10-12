import MetaRedirect from '@/components/ui/metaRedirect';
import { urlMessenger } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function MessengerPage() {
    return (
        <>
            <MetaRedirect url={urlMessenger} />
            <Hero />
        </>
    );
}
