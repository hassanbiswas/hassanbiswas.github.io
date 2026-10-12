import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Services from '@/components/Services.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Services />
            </main>
            <Footer />
        </>
    );
};

export default ServicesPage;
