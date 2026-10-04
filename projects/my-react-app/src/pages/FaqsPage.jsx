import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Faqs from '@/components/Faqs.jsx';
import Footer from '@/components/Footer.jsx';

const FaqsPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Faqs />
            </main>
            <Footer />
        </>
    );
};

export default FaqsPage;
