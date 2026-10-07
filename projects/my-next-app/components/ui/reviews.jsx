import {
    VERSION,
    personQuotes,
    totalReviews,
    successProjects,
    urlReviews,
    seoA,
    author,
} from '@/lib/utils';

const Reviews = () => {
    return (
        <div className="flex items-center componentReviews gap-4" data-version={VERSION}>
            <ul className="list-none flex flex-wrap gap-0">
                {personQuotes.map((person, index) => (
                    <li
                        key={person.photo || index}
                        className="bg-secondary pill p-1"
                        style={{ marginInline: '-0.4em' }}
                    >
                        <img
                            className="pill"
                            src={person.photo}
                            alt="Reviewer"
                            style={{ inlineSize: '1.6em' }}
                        />
                    </li>
                ))}
                <li className="bg-secondary pill txt-center p-1" style={{ marginInline: '-0.4em' }}>
                    {totalReviews - personQuotes?.length}+
                </li>
            </ul>
            <div className="row items-start gap-4">
                <b className="txt-primary">★★★★★ • 4.9/5</b>
                <p>
                    {successProjects}+{' '}
                    <a aria-label="Projects" href="/#projects">
                        Projects
                    </a>{' '}
                    &amp; {totalReviews}+{' '}
                    <a aria-label="Reviews" href={urlReviews}>
                        Reviews
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Reviews;
