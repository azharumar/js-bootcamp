import React from 'react';
import NavBar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <FeatureSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;