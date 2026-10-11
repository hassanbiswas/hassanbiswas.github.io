import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function ResumePage() {
    return (
        <>
            <MetaRedirect url={`resume.docx?v=${VERSION}`} />
            <Hero />
        </>
    );
}
