import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function AppPage() {
    return (
        <>
            <MetaRedirect
                url={`https://github.com/hassanbiswas/hassanbiswas.github.io/releases/download/%E2%88%9E/hassanbiswas.apk?v=${VERSION}`}
            />
            <Hero />
        </>
    );
}
