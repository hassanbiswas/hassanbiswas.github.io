import {
    VERSION,
    author,
    getFavicon,
    thisYear,
    locationSecondary,
    money,
    random,
    stripedCurrency,
    coreWebVitals,
    clientSatisfaction,
    servicesPrimary,
    experience,
    txtFill,
    txtStroke,
    componentSkipSection,
} from '../../lib/utils';

export default function Services() {
    return (
        <section
            id="services"
            className="flex flex-col text-center items-center justify-center gap-8 px-6 bg-primary  "
            data-version={VERSION}
        >
            <div
                className="flex flex-col fade-in-top-containe items-center justify-center  gap-6 w-full max-w-[640px] "
                style={{ gap: '.8em' }}
            >
                <p className="h6 fade-in-to">
                    Services <span className="txt-tertiary">by {author.name}</span>
                </p>
                <h2 data-animate="scaleI" className="text-4xl">
                    Services available in <br /> {locationSecondary}.
                </h2>
                <p className="text-center splitWord">
                    High-performance static web development starting from affordable rates (
                    <b>{money(random(75, 80))}</b> – <b>{money(300)}+</b>). Clear pricing, zero
                    hidden fees, and guaranteed <b>{clientSatisfaction}%</b> satisfaction.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 w-full max-w-[768px] fluidHovere">
                {servicesPrimary.map((service, index) => (
                    <div
                        key={index}
                        id={'service-' + (index + 1)}
                        className="flex flex-col text-center gap-2 p-3 w-full fade-in-top-containe  items-center justify-center "
                    >
                        <div className="flex flex-col items-center content-center gap--1.5">
                            <h3 className="h5 text-center splitText text-[20px]">{service.name}</h3>
                            <h4 className="txt-center">
                                <span className="p txt-tertiary splitWord">Starting from </span>
                                <b> {service.price}</b>
                            </h4>
                            <b className="text-center txt-primary">{service.star} • 4.9/5</b>
                        </div>
                        <p className="text-center splitWord">{service.description}</p>
                        <ul className="flex flex-col gap-0.5 text-left d-non list-disc">
                            <li className="done">Responsive Layout</li>
                            <li className="done">Pixel-perfect accuracy</li>
                            <li className="done">Modern dark/light theme</li>
                            <li className="done">
                                Multi-page architecture (<b className="txt-primary">Pro</b>)
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* {componentSkipSection()} */}
        </section>
    );
}
