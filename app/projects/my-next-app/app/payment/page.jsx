import MetaRedirect from '@/components/ui/metaRedirect';
import Hero from '@/components/sections/hero';

export default function PaymentPage() {
    return (
        <>
            <MetaRedirect url={'/bkash'} />
            <Hero />
        </>
    );
}
