import '@/app/globals.css';
import { VERSION } from '@/lib/utils';
import Loader from '@/components/navigation/loader';
import Navbar from '@/components/navigation/navbar';
import Header from '@/components/navigation/header';
import Cta from '@/components/sections/cta';
import Footer from '@/components/navigation/footer';

export const metadata = {
    title: 'Web Developer | Hassan Biswas — UI/UX & Front-End Architecture',
    description: 'Freelance Front-End Developer & UI/UX Designer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-version={VERSION}>
            <head data-version={VERSION}>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body
                className="min-h-screen flex flex-col justify-between antialiased"
                data-version={VERSION}
            >
                <Loader />
                <Header />
                <Navbar />
                <main className="grow" data-version={VERSION}>
                    {children}
                    <Cta />
                </main>
                <Footer />
            </body>
        </html>
    );
}
