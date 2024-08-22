import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";
import Copyright from "../../components/Copyright/Copyright";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NewsSection from "../../components/NewsSection/NewsSection";
import WorkSectionImage from "../../components/WorkSection/WorkSectionImage/WorkSectionImage";
import "./LandingPageScreen.scss";

function LandingPageScreen({ darkMode }) {
  return (
    <div className="landing-page-screen">
      <Hero />
      <WorkSectionImage />
      <NewsSection />
      <CallToAction /> 
      <Footer />
      <Copyright />
    </div>
  );
}

export default LandingPageScreen;

