import React, { useEffect, useState } from 'react';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import ProjectsPage from '@/pages/ProjectsPage.jsx';
import TestimonialsPage from '@/pages/TestimonialsPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import FaqsPage from '@/pages/FaqsPage.jsx';

const routeMap = {
    '/': HomePage,
    '/about': AboutPage,
    '/services': ServicesPage,
    '/projects': ProjectsPage,
    '/testimonials': TestimonialsPage,
    '/contact': ContactPage,
    '/faqs': FaqsPage,
};

const App = () => {
    const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname || '/');
        };

        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const CurrentPage = routeMap[currentPath] || Home;

    return <CurrentPage />;
};

export default App;
