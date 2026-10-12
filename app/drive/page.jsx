import MetaRedirect from '../../components/ui/metaRedirect';
import { urlDrive } from '../../lib/utils';
import Hero from '../../components/sections/hero';

export default function DrivePage() {
    return (
        <>
            <MetaRedirect url={urlDrive} />
            <Hero />
        </>
    );
}
