import MetaRedirect from '@/components/ui/metaRedirect';
import Hero from '@/components/sections/hero';

export default function ResumePage() {
    return (
        <>
            <MetaRedirect url={`/resume`} />
            <Hero />
        </>
    );
}
