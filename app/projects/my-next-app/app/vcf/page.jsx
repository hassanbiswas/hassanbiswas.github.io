import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function VcfPage() {
    return (
        <>
            <MetaRedirect url={`vcf.vcf?v=${VERSION}`} />
            <Hero />
        </>
    );
}
