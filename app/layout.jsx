import './globals.css';
import { VERSION, author } from '../lib/utils';
import Loader from '../components/navigation/loader';
import Navbar from '../components/navigation/navbar';
import Header from '../components/navigation/header';
import Cta from '../components/sections/cta';
import Footer from '../components/navigation/footer';
import Gtag from '../components/ui/gtag';

export const metadata = {
    title: author.title,
    description: author.description,
};

export default function RootLayout({ children }) {
    return (
        <html dir="ltr" lang="en" data-version={VERSION}>
            <head data-version={VERSION}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                {
                                    '@type': 'Person',
                                    '@id': `${author.siteUrl}/#person`,
                                    name: `${author.name}`,
                                    url: `${author.siteUrl}`,
                                    jobTitle: 'Web Developer & Front-End Architect',
                                    description: `${author.description}`,
                                    image: `${author.photo}`,
                                    email: 'mailto:hassanbiswas.github.io@gmail.com',
                                    telephone: '+8801602873384',
                                    address: {
                                        '@type': 'PostalAddress',
                                        streetAddress: 'Begaritola Bazar',
                                        addressLocality: 'Monirampur',
                                        addressRegion: 'Jashore, Khulna',
                                        postalCode: '7440',
                                        addressCountry: 'BD',
                                    },
                                    knowsAbout: [
                                        'HTML',
                                        'CSS',
                                        'JavaScript',
                                        'Figma',
                                        'Framer',
                                        'Webflow',
                                        'Web Designer',
                                        'Web Developer',
                                        'UI/UX Design',
                                        'Front-End Architecture',
                                        'Web Components',
                                        'Web Performance Optimization',
                                        'SEO Architecture',
                                        'ReactJs',
                                        'NextJs',
                                        'TailwindCSS',
                                    ],
                                    sameAs: [
                                        'https://github.com/hassanbiswas',
                                        'https://www.linkedin.com/in/hassanbiswas-github-io',
                                        'https://www.facebook.com/hassanbiswas.github.io',
                                        'https://www.instagram.com/hassanbiswas.github.io',
                                        'https://www.x.com/o1602873384',
                                        'https://www.youtube.com/@hassanbiswas-github-io',
                                        'https://www.threads.com/hassanbiswas.github.io',
                                        'https://www.pinterest.com/hassanbiswas_github_io',
                                        'https://www.tiktok.com/@hassanbiswas.github.io',
                                        'https://m.me/hassanbiswas.github.io',
                                    ],
                                    contactPoint: {
                                        '@type': 'ContactPoint',
                                        telephone: '+8801602873384',
                                        contactType: 'professional',
                                        email: 'hassanbiswas.github.io@gmail.com',
                                    },
                                },
                                {
                                    '@type': 'WebSite',
                                    '@id': `${author.siteUrl}/#website`,
                                    url: `${author.siteUrl}`,
                                    name: `${author.title}`,
                                    description: `${author.description}`,
                                    publisher: {
                                        '@id': `${author.siteUrl}/#person`,
                                    },
                                    inLanguage: 'en',
                                    potentialAction: {
                                        '@type': 'SearchAction',
                                        target: {
                                            '@type': 'EntryPoint',
                                            urlTemplate: `${author.siteUrl}/?s={search_term_string}`,
                                        },
                                        'query-input': 'required name=search_term_string',
                                    },
                                },
                                {
                                    '@type': 'ProfessionalService',
                                    '@id': `${author.siteUrl}/#service`,
                                    name: `${author.title}`,
                                    url: `${author.siteUrl}`,
                                    provider: {
                                        '@id': `${author.siteUrl}/#person`,
                                    },
                                    image: `${author.photo}`,
                                    telephone: '+8801602873384',
                                    email: 'hassanbiswas.github.io@gmail.com',
                                    priceRange: '$75 - $300+',
                                    address: {
                                        '@type': 'PostalAddress',
                                        streetAddress: 'Begaritola Bazar',
                                        addressLocality: 'Monirampur',
                                        addressRegion: 'Jashore, Khulna',
                                        postalCode: '7440',
                                        addressCountry: 'BD',
                                    },
                                    geo: {
                                        '@type': 'GeoCoordinates',
                                        latitude: 23.0132,
                                        longitude: 89.2272,
                                    },
                                    openingHoursSpecification: {
                                        '@type': 'OpeningHoursSpecification',
                                        dayOfWeek: [
                                            'Monday',
                                            'Tuesday',
                                            'Wednesday',
                                            'Thursday',
                                            'Friday',
                                            'Saturday',
                                            'Sunday',
                                        ],
                                        opens: '00:01',
                                        closes: '23:59',
                                    },
                                    areaServed: [
                                        {
                                            '@type': 'Country',
                                            name: 'Bangladesh',
                                        },
                                        {
                                            '@type': 'Place',
                                            name: 'Worldwide',
                                        },
                                    ],
                                    hasOfferCatalog: {
                                        '@type': 'OfferCatalog',
                                        name: 'Front-End & UI/UX Development Services',
                                        itemListElement: [
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'UI/UX Design',
                                                    description:
                                                        'Wireframing, prototyping, and UI design systems in Figma.',
                                                },
                                                price: '80.00',
                                                priceCurrency: 'USD',
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'Figma / Framer / Webflow to Website',
                                                    description:
                                                        'Converting designs into responsive, pure HTML/CSS/JS code.',
                                                },
                                                price: '80.00',
                                                priceCurrency: 'USD',
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'Front-End Development',
                                                    description:
                                                        'High-performance front-end architecture and custom Web Components.',
                                                },
                                                price: '100.00',
                                                priceCurrency: 'USD',
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'Design or Redesign Website',
                                                    description:
                                                        'Complete website redesign focusing on performance, accessibility, and modern aesthetics.',
                                                },
                                                price: '160.00',
                                                priceCurrency: 'USD',
                                            },
                                        ],
                                    },
                                },
                                {
                                    '@type': 'FAQPage',
                                    '@id': `${author.siteUrl}/#faqs`,
                                    mainEntity: [
                                        {
                                            '@type': 'Question',
                                            name: 'How long does it take to convert a Figma design to a live website?',
                                            acceptedAnswer: {
                                                '@type': 'Answer',
                                                text: "The timeline depends on the project's complexity. A high-performance single-page architecture typically takes 3-5 days, while a full multi-page front-end system can take 1-2 weeks.",
                                            },
                                        },
                                        {
                                            '@type': 'Question',
                                            name: 'Do you build responsive and mobile-friendly websites?',
                                            acceptedAnswer: {
                                                '@type': 'Answer',
                                                text: 'Yes, I build every website with a mobile-first approach. I use modern HTML, CSS, JS techniques like fluid typography to ensure a seamless experience on all devices.',
                                            },
                                        },
                                        {
                                            '@type': 'Question',
                                            name: 'Are your front-end architectures optimized for SEO?',
                                            acceptedAnswer: {
                                                '@type': 'Answer',
                                                text: 'Absolutely. I use semantic HTML, optimize Core Web Vitals (LCP, FID, CLS), and implement structured data to ensure your website is easily crawlable and ranks higher on search engines.',
                                            },
                                        },
                                        {
                                            '@type': 'Question',
                                            name: 'Can you work with modern UI libraries and design systems?',
                                            acceptedAnswer: {
                                                '@type': 'Answer',
                                                text: 'Yes, I frequently work with Figma, Framer, and Webflow. I specialize in translating complex design systems into scalable, maintainable HTML, CSS, and JavaScript components.',
                                            },
                                        },
                                    ],
                                },
                                {
                                    '@type': 'BreadcrumbList',
                                    '@id': `${author.siteUrl}/#breadcrumbs`,
                                    itemListElement: [
                                        {
                                            '@type': 'ListItem',
                                            position: 1,
                                            name: 'Home',
                                            item: `${author.siteUrl}`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 2,
                                            name: 'About',
                                            item: `${author.siteUrl}/#about`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 3,
                                            name: 'Services',
                                            item: `${author.siteUrl}/#services`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 4,
                                            name: 'Projects',
                                            item: `${author.siteUrl}/#projects`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 5,
                                            name: 'Testimonials',
                                            item: `${author.siteUrl}/#testimonials`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 6,
                                            name: 'Contact',
                                            item: `${author.siteUrl}/#contact`,
                                        },
                                        {
                                            '@type': 'ListItem',
                                            position: 7,
                                            name: "FAQ's",
                                            item: `${author.siteUrl}/#faqs`,
                                        },
                                    ],
                                },
                            ],
                        }),
                    }}
                />
                <link rel="icon" href={author.faviconSvg} sizes="any" />

                <meta
                    content="DzMmin3QAgzaQNIJc-_nwKBJ-mzSEBFLgI9Ur3H_p6o"
                    name="google-site-verification"
                />

                <Gtag />

                <meta content="hsl(240, 80%, 50%)" name="theme-color" />
                <meta content={author.subTitle} name="subtitle" />
                <meta content={author.name} name="author" />
                <meta content="index, follow" name="robots" />
                <link href={author.siteUrl} rel="canonical" />
                <meta content="website" property="og:type" />
                <meta content={author.siteUrl} property="og:url" />
                <meta content={author.ogImage} property="og:image" />
                <link href="/manifest.json" rel="manifest" />

                <meta
                    content="Hassan Biswas, Home, UI/UX, Front-End, Web Design, Bangladesh, ReactJs, NextJs, tailwindCSS"
                    name="keywords"
                />
            </head>
            <body
                className="min-h-screen flex flex-col justify-between antialiased"
                data-version={VERSION}
            >
                <noscript>
                    <iframe
                        height="0"
                        loading="lazy"
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PRSSQR5H"
                        style={{ display: 'none', visibility: 'hidden' }}
                        width="0"
                    ></iframe>
                </noscript>
                <Loader />
                <Header />
                <Navbar />
                <main role="main" id="main" className="main grow" data-version={VERSION}>
                    {children}
                    <Cta />
                </main>
                <Footer />
            </body>
        </html>
    );
}
