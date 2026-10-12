import MetaRedirect from '@/components/ui/metaRedirect';
import { VERSION } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function JobLetterPage() {
    return (
        <>
            <MetaRedirect url={`job-letter.docx?v=${VERSION}`} />
            <Hero />
        </>
    );
}
