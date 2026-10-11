import { VERSION, author } from '../../lib/utils';

const PrivacyPolicy = () => {
    return (
        <section
            id="privacyPolicy"
            className="flex flex-col items-center justify-center px-6"
            style={{ background: 'var(--bg-primary)' }}
            data-version={VERSION}
        >
            <div className="flex flex-col w-full max-w-[520px] gap-6">
                <h1 className="text-center">Privacy Policy | {author.title}</h1>
                <p className="txt-tertiary text-center">
                    Last Modified: <i className="txt-primary">Jan 01, {new Date().getFullYear()}</i>
                </p>

                <p className="text-center">
                    As a Web Developer, I value your privacy and am committed to protecting any
                    personal information you share with me.
                </p>

                <div>
                    <h2>Information I Collect</h2>
                    <p>I may collect the following types of information:</p>
                    <ul>
                        <li>
                            <span className="txt-tertiary">Contact Data:</span> Name, email and
                            phone number.
                        </li>
                        <li>
                            <span className="txt-tertiary">Technical Data:</span> IP address,
                            browser type, and usage patterns collected via cookies or analytics
                            tools.
                        </li>
                        <li>
                            <span className="txt-tertiary">Project Data:</span> Information
                            regarding your website requirements and design preferences.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>How I Use Your Information</h2>
                    <p>The information collected is used to:</p>
                    <ul className="ml-4">
                        <li>Provide and improve services.</li>
                        <li>Communicate with regarding project inquiries or updates.</li>
                        <li>Analyze website performance to enhance user experience.</li>
                    </ul>
                </div>

                <div>
                    <h2>Third-Party Services</h2>
                    <p>
                        I do not sell or trade your personal information. However, if website is
                        hosted on GitHub Pages, which may collect server logs. Also use tools like
                        Google Analytics to monitor traffic.
                    </p>
                </div>

                <div>
                    <h2>Your Rights</h2>
                    <p>
                        You have the right to request access to the personal data I hold about you,
                        or to request that I delete any personal information by contacting me
                        directly.
                    </p>
                </div>

                <div>
                    <h2>Contact Me</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please{' '}
                        <a href="/#contact" target="_blank" className="underline">
                            contact
                        </a>{' '}
                        me.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
