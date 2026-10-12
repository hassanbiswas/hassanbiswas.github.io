import { VERSION, author } from '@/lib/utils';

const Bkash = () => {
    return (
        <section
            id="bkash"
            className="flex flex-col items-center justify-center px-6"
            style={{ background: 'var(--bg-primary)' }}
            data-version={VERSION}
        >
            <div className="flex flex-col w-full max-w-[520px] gap-6">
                <h1 className="text-center">Send Money to | {author.title}</h1>
                <p className="txt-tertiary text-center">
                    Last Modified: <i className="txt-primary">Jan 01, {new Date().getFullYear()}</i>
                </p>

                <p className="text-center">
                    As a Web Developer, I value your privacy and am committed to protecting any
                    personal information you share with me.
                </p>

                <div className="">
                    <img src={'/public/01602873384.png.jpg'} alt="bKash QR code" />
                </div>

                <div>
                    <h2>Contact Me</h2>
                    <p>
                        If you have any questions about the Privacy Policy, please{' '}
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

export default Bkash;
