import MetaRedirect from '../../components/ui/metaRedirect';
import { urlMobile } from '../../lib/utils';
import Hero from '../../components/sections/hero';

export default function CallPage() {
    return (
        <>
            <MetaRedirect url={urlMobile} />
            <Hero />
        </>
    );
}
