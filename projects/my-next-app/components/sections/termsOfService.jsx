import { VERSION, author } from '../../lib/utils';

export default function TermsOfService() {
    return (
        <section
            id="termsOfService"
            className="flex flex-col items-center justify-center px-6"
            style={{ background: 'var(--bg-primary)' }}
            data-version={VERSION}
        >
            <div className="flex flex-col w-full max-w-[520px] gap-6">
                <h1 className="text-center">Terms of Service | {author.title}</h1>
                <p className="txt-tertiary text-center">
                    Last Modified: <i className="txt-primary">Jan 01, {new Date().getFullYear()}</i>
                </p>

                <p className="text-center">
                    These terms govern the web design and front-end development services provided by
                    <strong> {author.name} </strong>
                    through the website .
                </p>

                <div>
                    <h2>Acceptance of Terms</h2>
                    <p>
                        By engaging in a project or using this website, you agree to be bound by
                        these Terms of Service. If you do not agree, please do not use my services.
                    </p>
                </div>

                <div>
                    <h2>Scope of Work</h2>
                    <p>
                        I provide front-end development and web design services. The specific
                        deliverables, timelines, and costs will be outlined in a separate project
                        proposal or email agreement for each individual client.
                    </p>
                </div>

                <div>
                    <h2>Intellectual Property &amp; Ownership</h2>
                    <p>
                        Upon final payment, the ownership of the final front-end code (
                        <b>HTML, CSS, JS</b>) and design <b>assets</b> is transferred to the client.
                        However, I reserve the right to:
                        <ul>
                            <li>Display the completed work in my professional portfolio.</li>
                            <li>
                                Reuse generic code snippets or libraries developed during the
                                project.
                            </li>
                        </ul>
                    </p>
                </div>

                <div>
                    <h2>Payment Terms</h2>
                    <p>
                        Invoices are sent via the agreed-upon <a href="/payment">method</a>. A
                        deposit is required to start work. Final files will be delivered or deployed
                        only after the full remaining balance is cleared.
                    </p>
                </div>

                <div>
                    <h2>Client Responsibilities</h2>
                    <p>
                        The client is responsible for providing all necessary content (
                        <b>text, images, branding</b>) in a timely manner. Delays in providing
                        content will result in a shift in the project deadline.
                    </p>
                </div>

                <div>
                    <h2>Limitation of Liability</h2>
                    <p>
                        I strive for perfection, but I am not liable for any lost profits, data
                        loss, or service interruptions caused by third-party hosting, browser
                        updates, or client-side modifications after the project is handed over.
                    </p>
                </div>

                <div>
                    <h2>Governing Law</h2>
                    <p>
                        These terms are governed by the laws of
                        <mark>Bangladesh</mark>. Any disputes shall be resolved through mutual
                        discussion or within the jurisdiction of local courts.
                    </p>
                </div>

                <div>
                    <h2>Contact Me</h2>
                    <p>
                        For any legal inquiries regarding these terms, please{' '}
                        <a href="/#contact" target="_blank" className="underline">
                            contact
                        </a>{' '}
                        me.
                    </p>
                </div>
            </div>
        </section>
    );
}
