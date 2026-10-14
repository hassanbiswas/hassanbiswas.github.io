import Reviews from '../ui/reviews';
import ProjectsProgress from '../ui/projectsProgress';
import {
    VERSION,
    author,
    getFavicon,
    locationPrimary,
    urlReviews,
    personQuotes,
} from '../../lib/utils';

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="flex flex-col items-center justify-center gap-6 px-6 bg-primary"
            data-version={VERSION}
        >
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[640px] text-center">
                <p className="text-center">Testimonials</p>
                <h2
                    data-animate="scaleIn"
                    className="text-center text-revel-onscrol splitWord sm:text-4xl text-3xl"
                >
                    <span className="txt-tertiary splitWord">Real People,</span> <br />
                    Real Results Feedback
                </h2>
                <p className="text-center">
                    <span data-animate="textReveal" className="splitWor">
                        What clients and colleagues say about my front-end architecture and design
                        work. See what my users are truly accomplishing with honest, and
                        project-based reviews
                    </span>
                </p>

                {ProjectsProgress()}

                {Reviews()}

                <ul
                    className="carousel bg-raise text-center"
                    style={{
                        listStyle: 'none',
                        gap: '0em',
                        borderRadius: '2em',
                        inlineSize: 'min(100%, 64rem)',
                    }}
                >
                    {personQuotes.map((person, index) => (
                        <li
                            key={index}
                            data-skeleton
                            data-visible
                            className="flex carousel-item "
                            style={{ maxInlineSize: '100%' }}
                        >
                            <blockquote
                                id="quote-{index + 1}"
                                className="flex flex-col items-center"
                                style={{ flex: 1, gap: '.8em', paddingInline: '1.6em' }}
                            >
                                <b>
                                    <span
                                        className="star txt-primary splitWord"
                                        style={{ inlineSize: '.8em' }}
                                    >
                                        {person?.star} • 4.9/5
                                    </span>
                                </b>

                                <q className="h6 quote splitWord">{person?.quote}</q>

                                <div className="flex items-center justify-center gap-4 txt-left flex-wrap">
                                    <img
                                        src={person?.photo}
                                        style={{ inlineSize: '1.5em' }}
                                        className="photo"
                                    />

                                    <div className="flex flex-col text-left mr-1.5">
                                        <a href={person?.link} className="link">
                                            <b className="name txt-primary splitWord">
                                                {person?.name}
                                            </b>
                                        </a>
                                        <p className="title splitWord">{person?.title}</p>
                                    </div>

                                    <b
                                        className="platform txt-primary splitWord"
                                        style={{
                                            borderInlineStart: '1px solid var(--txt-tertiary)',
                                            paddingInlineStart: '1.6em',
                                        }}
                                    >
                                        {person?.platform}
                                    </b>
                                </div>
                            </blockquote>
                        </li>
                    ))}
                </ul>

                <div className="flex j-center" style={{ paddingBlock: '1.6em' }}>
                    <a
                        href={urlReviews}
                        style={{ inlineSize: 'fit-content' }}
                        className="btn btn-primary splitWord"
                    >
                        Add Review ↗
                    </a>
                </div>
            </div>
        </section>
    );
}
