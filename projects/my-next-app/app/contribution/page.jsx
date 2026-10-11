import MetaRedirect from '@/components/ui/metaRedirect';
import { urlContribution } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function ContributionPage() {
    return (
        <>
            <MetaRedirect url={urlContribution} />
            <Hero />
        </>
    );
}
