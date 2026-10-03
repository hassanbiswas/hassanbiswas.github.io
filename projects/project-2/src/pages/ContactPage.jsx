import React from 'react';
import Loader from '@/components/Loader.jsx';
import Navigation from '@/components/Navigation.jsx';
import Header from '@/components/Header.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

const ContactPage = () => {
    return (
        <>
            <Loader />
            <Navigation />
            <Header />
            <main id="main" role="main" className="min-h-screen">
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
