import { VERSION, author } from '../../lib/utils';

const RefundAndCancelationPolicy = () => {
    return (
        <section
            id="refundAndCancelationPolicy"
            className="flex flex-col items-center justify-center px-6"
            style={{ background: 'var(--bg-primary)' }}
            data-version={VERSION}
        >
            <div className="flex flex-col w-full max-w-[520px] gap-6">
                <h1 className="text-center">Refund &amp; Cancelation Policy | {author.name}</h1>
                <p className="txt-tertiary text-center">
                    Last Modified: <i className="txt-primary">Jan 01, {new Date().getFullYear()}</i>
                </p>

                <p className="text-center">
                    Thank you for choosing my services . I provide custom digital services, I want
                    to ensure we have a clear understanding of our financial commitment before a
                    project begins.
                </p>

                <div>
                    <h2>Project Deposits</h2>
                    <p>
                        Require an initial deposit (typically{' '}
                        <b className="txt-primary">30% to 50%</b>) before work commences to secures
                        your spot in my workflow and covers the initial research.{' '}
                        <strong>Deposits are non-refundable</strong> once work has started.
                    </p>
                </div>

                <div>
                    <h2>Cancellation During Development</h2>
                    <p>
                        If a project is cancelled after development has begun but before completion,
                        the client is responsible for payment for all work completed up to the date
                        of cancellation.
                        <ul className="px-4">
                            <li>
                                If the work completed exceeds the deposit, an additional invoice
                                will be issued.
                            </li>
                            <li>
                                If the work completed is less than the deposit, no refund of the
                                deposit will be issued.
                            </li>
                        </ul>
                    </p>
                </div>

                <div>
                    <h2>Final Delivery &amp; Acceptance</h2>
                    <p>
                        Once the final files are delivered and the "Final Approval" is signed off by
                        the client,
                        <strong>no refunds will be issued</strong>. Digital products can't be
                        "returned" in the traditional sense once the source code is in the client's
                        possession.
                    </p>
                </div>

                <div>
                    <h2>Revisions</h2>
                    <p>
                        To ensure satisfaction, I include a specific number of revision rounds (as
                        stated in our initial contract). This allows us to fine-tune the design and
                        functionality before final delivery.
                    </p>
                </div>

                <div>
                    <h2>Questions &amp; Disputes | Contact Me</h2>
                    <p>
                        I strive for 100% client satisfaction. If you are unhappy with the progress
                        of your project, please{' '}
                        <a href="/#contact" target="_blank" className="underline">
                            contact
                        </a>{' '}
                        me immediately so we can find a solution.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RefundAndCancelationPolicy;
