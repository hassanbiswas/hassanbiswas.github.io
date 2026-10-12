import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION, urlApp } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function AppPage() {
    return (
        <>
            <MetaRedirect url={`${urlApp}?v=${VERSION}`} />
            <Hero />
        </>
    );
}
