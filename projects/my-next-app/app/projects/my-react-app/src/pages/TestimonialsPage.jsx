import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import Footer from '@/components/Footer.jsx';

const TestimonialsPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Testimonials />
            </main>
            <Footer />
        </>
    );
};

export default TestimonialsPage;
