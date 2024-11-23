import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/first-feature/FeatureSection';
import SecondFeature from './components/second-feature/SecondFeature';
import FAQs from './components/FAQs';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import LogoSection from './components/LogoSection';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LogoSection/>
      <FeaturesSection/>
      <SecondFeature/>
      <FAQs/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default App;
