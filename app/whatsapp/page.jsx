import MetaRedirect from '@/components/ui/metaRedirect';
import { urlWhatsapp } from '@/lib/utils';
import Hero from '@/components/sections/hero';

export default function WhatsappPage() {
    return (
        <>
            <MetaRedirect url={urlWhatsapp} />
            <Hero />
        </>
    );
}
