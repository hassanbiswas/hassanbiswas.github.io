import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import About from '@/components/About.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <About />
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
