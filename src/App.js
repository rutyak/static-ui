import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/first-feature/FeatureSection";
import SecondFeature from "./components/second-feature/SecondFeature";
import FAQs from "./components/FAQs";
import BlogSection from "./components/blog-section/BlogSection";
import Footer from "./components/footer/Footer";
import LogoSection from "./components/LogoSection";
import { Appicon } from "./assets/Icons";

function App() {
  const footerData = {
    sections: [
      {
        title: "Product",
        links: [
          { label: "Overview" },
          { label: "Features" },
          { label: "Solutions", badge: "New" },
          { label: "Tutorials" },
          { label: "Pricing" },
          { label: "Releases" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us" },
          { label: "Careers" },
          { label: "Press" },
          { label: "News" },
          { label: "Media kit" },
          { label: "Contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog" },
          { label: "Newsletter" },
          { label: "Events" },
          { label: "Help centre" },
          { label: "Tutorials" },
          { label: "Support" },
        ],
      },
      {
        title: "Use cases",
        links: [
          { label: "Startups" },
          { label: "Enterprise" },
          { label: "Government" },
          { label: "SaaS centre" },
          { label: "Marketplaces" },
          { label: "Ecommerce" },
        ],
      },
      {
        title: "Social",
        links: [
          { label: "Twitter" },
          { label: "LinkedIn" },
          { label: "Facebook" },
          { label: "GitHub" },
          { label: "AngelList" },
          { label: "Dribbble" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms" },
          { label: "Privacy" },
          { label: "Cookies" },
          { label: "Licenses" },
          { label: "Settings" },
          { label: "Contact" },
        ],
      },
    ],
    branding: {
      icon: <Appicon/>,
      name: "Grow",
    },
    copyright: "© 2077 Untitled UI. All rights reserved.",
  };

  return (
    <div className="w-full mx-auto">
      <Navbar />
      <HeroSection />
      <LogoSection />
      <FeaturesSection />
      <SecondFeature />
      <FAQs />
      <BlogSection />
      <Footer
        sections={footerData.sections}
        branding={footerData.branding}
        copyright={footerData.copyright}
      />
    </div>
  );
}

export default App;
