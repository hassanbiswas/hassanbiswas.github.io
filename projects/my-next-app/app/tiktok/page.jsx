import MetaRedirect from '../../components/ui/metaRedirect';
import { urlTiktok } from '../../lib/utils';
import Hero from '../../components/sections/hero';

export default function TiktokPage() {
    return (
        <>
            <MetaRedirect url={urlTiktok} />
            <Hero />
        </>
    );
}
