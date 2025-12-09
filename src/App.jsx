import React, { useRef } from "react";
import "./App.css";

import Navbar from "./components/Hero/Navbar";
import Hero from "./components/Hero/Hero";
import CardGrid from "./components/CardGrid";
import OurPrograms from "./components/OurPrograms";
import TestimonialCards from "./components/TestimonialCard";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import WhyUs from "./components/Hero/WhyUs";

function App() {
  // Section refs for scrolling
  const heroRef = useRef(null);
  const whyUsRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialRef = useRef(null);

  return (
    <>
      <Navbar
        heroRef={heroRef}
        whyUsRef={whyUsRef}
        programsRef={programsRef}
        testimonialRef={testimonialRef}
      />

      {/* HERO SECTION */}
      <section ref={heroRef} id="hero">
        <Hero />
      </section>

      {/* WHY US SECTION */}
      <section ref={whyUsRef} id="whyus">
        <CardGrid />
      </section>

      {/* PROGRAMS SECTION */}
      <section ref={programsRef} id="programs">
        <OurPrograms />
      </section>

      {/* TESTIMONIAL SECTION */}
      <section ref={testimonialRef} id="testimonial">
        <TestimonialCards />
      </section>

      {/* FOOTER */}
      <Footer />

       <ContactForm/>
    </>
  );
}

export default App;
