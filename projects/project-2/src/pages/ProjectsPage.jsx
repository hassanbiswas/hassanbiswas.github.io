import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Projects from '@/components/Projects.jsx';
import Footer from '@/components/Footer.jsx';

const ProjectsPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Projects />
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
