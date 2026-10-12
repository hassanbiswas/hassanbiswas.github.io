import Reviews from '@/components/ui/reviews';
import ProjectsProgress from '@/components/ui/projectsProgress';
import {
    VERSION,
    author,
    getFavicon,
    thisYear,
    locationSecondary,
    projects,
    experience,
    componentSkipSection,
} from '@/lib/utils';

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center gap-6 px-6 bg-primary"
            data-version={VERSION}
        >
            <div className="flex flex-col items-center  gap-6 w-full max-w-[640px] ">
                <div className="flex flex-col gap-2">
                    <p className="fade-in-to txt-tertiary">
                        Selected <span className="txt-secondary">Projects</span>{' '}
                        <i>2023 - {new Date().getFullYear()}</i>
                    </p>
                    <div>
                        <h2
                            data-animate="scaleIn"
                            className="h2 splitWord text-3xl"
                            style={{ display: 'inline' }}
                        >
                            I am providing the best value at a reasonable price with a focus on
                            performance and SEO-friendly architecture.
                        </h2>
                        <p
                            data-animate="scaleIn"
                            className="h2 txt-tertiary text-3xl"
                            style={{ fontWeight: 'bold', display: 'inline' }}
                        >
                            {' '}
                            <span className="text-revel-onscrol">
                                With {experience}+ years of experience, I'm Designing & developing
                                websites in {locationSecondary}.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-stretch justify-stretch gap-0 projects-list screenHeight fluidHovere">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            id={'project-' + (index + 1)}
                            href={project.link}
                            style={{ textDecoration: 'none', paddingBlock: '1em', gap: '.8em' }}
                            className="flex flex-nowrap items-center justify-between gap-2 py-4 fade-in-top-containe project-item"
                        >
                            <h3
                                style={{ paddingBlock: '0em', flex: 1, zIndex: 1 }}
                                className="h6 fade-in-to py-0 flex-1 z-index-1"
                            >
                                <span className="p txt-tertiary">[0{index + 1}]</span>{' '}
                                <span className="splitWord">{project.category}</span>{' '}
                                <span className="txt-tertiary">↗</span>
                            </h3>

                            <span inert className="project-image" style={{ zIndex: -20 }}>
                                <img src={project.getImage(index)} alt="project image" />
                            </span>

                            <i className="p fade-in-to" style={{ zIndex: 1 }}>
                                {project.date}
                            </i>
                        </a>
                    ))}
                </div>

                {/* {componentSkipSection()} */}
            </div>
        </section>
    );
}
