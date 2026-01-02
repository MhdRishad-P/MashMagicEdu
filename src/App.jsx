import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Hero/Navbar";
import Hero from "./components/Hero/Hero";
import CardGrid from "./components/CardGrid";
import OurPrograms from "./components/OurPrograms";
import TestimonialCards from "./components/TestimonialCard";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

/* =========================
   HOME PAGE
========================= */
function HomePage() {
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

      <section ref={heroRef} id="hero">
        <Hero />
      </section>

      <section ref={whyUsRef} id="whyus">
        <CardGrid />
      </section>

      <section ref={programsRef} id="programs">
        <OurPrograms />
      </section>

      <section ref={testimonialRef} id="testimonial">
        <TestimonialCards />
      </section>

      {/* BLOG PREVIEW */}
     

      <Footer />
    </>
  );
}

/* =========================
   APP ROUTES
========================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}
