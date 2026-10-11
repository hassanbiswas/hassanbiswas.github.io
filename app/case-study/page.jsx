import MetaRedirect from '@/components/ui/metaRedirect';
import { urlGithub } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function CaseStudyPage() {
    return (
        <>
            <MetaRedirect url={urlGithub} />
            <Hero />
        </>
    );
}
