import MetaRedirect from '../../components/ui/metaRedirect';
import { urlImo } from '../../lib/utils';
import Hero from '../../components/sections/hero';

export default function ImoPage() {
    return (
        <>
            <MetaRedirect url={urlImo} />
            <Hero />
        </>
    );
}
