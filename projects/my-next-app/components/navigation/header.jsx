import { VERSION, author, seoA, header, urlMessenger, jashore, locationPrimary } from '@/lib/utils';

const toHtmlProps = string =>
    Object.fromEntries(
        [...string.matchAll(/(\w+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g)].map(
            ([, key, dq, sq, bare]) => [key, dq ?? sq ?? bare ?? '']
        )
    );

const seoAProps = toHtmlProps(seoA());
const headerProps = toHtmlProps(header());

export default function Header() {
    return (
        <header
            {...headerProps}
            className=" flex flex-col items-center justify-center bg-primary"
            id="header"
            data-version={VERSION}
        >
            <nav className="w-full max-w-3xl flex flex-nowrap items-center justify-between gap-4 py-2">
                <a {...seoAProps} href={jashore} aria-label="Primary service location">
                    {locationPrimary}
                </a>

                <a {...seoAProps} aria-label="Messenger" href={urlMessenger}>
                    @{author.siteUrl}
                </a>
            </nav>
        </header>
    );
}
