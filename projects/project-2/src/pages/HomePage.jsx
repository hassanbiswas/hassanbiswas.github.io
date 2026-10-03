import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Services from '@/components/Services.jsx';
import Projects from '@/components/Projects.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import Contact from '@/components/Contact.jsx';
import Faqs from '@/components/Faqs.jsx';
import Cta from '@/components/Cta.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Hero />
                <About />
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
                <Faqs />
                <Cta />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
