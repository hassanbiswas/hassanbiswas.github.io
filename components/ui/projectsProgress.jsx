import {
    VERSION,
    experience,
    successProjects,
    coreWebVitals,
    urlCoreWebVitals,
    clientSatisfaction,
} from '../../lib/utils';

const ProjectsProgress = () => {
    return (
        <div
            className="text-center grid md:grid-cols-4 grid-cols-2 items-start justify-center projectProgress gap-6 p-6"
            data-version={VERSION}
        >
            <div className="flex flex-col items-center justify-center" style={{ gap: '.4em' }}>
                <b className="h1">
                    <span className="txtStroke">{experience}</span>
                    <span className="txt-tertiary">+</span>
                </b>
                <p className="txt-center">Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ gap: '.4em' }}>
                <b className="h1 ">
                    <span className="txtStroke">{successProjects}</span>
                    <span className="txt-tertiary">+</span>
                </b>
                <a href="/#projects" className="p txt-center">
                    Success projects
                </a>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ gap: '.4em' }}>
                <b className="h1 ">
                    <span className="txtStroke">{coreWebVitals}</span>
                    <span className="txt-tertiary">%</span>
                </b>
                <a href={urlCoreWebVitals} className="p txt-center">
                    Core web vitals
                </a>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ gap: '.4em' }}>
                <b className="h1 ">
                    <span className="txtStroke">{clientSatisfaction}</span>
                    <span className="txt-tertiary">%</span>
                </b>
                <p className="txt-center">Client satisfaction</p>
            </div>
        </div>
    );
};

export default ProjectsProgress;
