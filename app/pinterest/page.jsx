import MetaRedirect from '../../components/ui/metaRedirect';
import { urlPinterest } from '../../lib/utils';
import Hero from '../../components/sections/hero';

export default function PinterestPage() {
    return (
        <>
            <MetaRedirect url={urlPinterest} />
            <Hero />
        </>
    );
}
