import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../assets/Logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ heroRef, whyUsRef, programsRef, testimonialRef }) {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: "smooth",
    });
    setOpen(false);
  };

  useEffect(() => {
    const el = navRef.current;

    gsap.fromTo(
      el,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    let lastScroll = 0;
    ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        const current = self.scroll();
        if (current > lastScroll && current > 70) {
          gsap.to(el, { y: -100, duration: 0.4 });
        } else {
          gsap.to(el, { y: 0, duration: 0.4 });
        }
        lastScroll = current;
      },
    });
  }, []);

  return (
    <div className="w-full flex justify-center fixed top-4 z-[9999] p-2">
      <nav
        ref={navRef}
        className="
          px-2 sm:px-8 py-1 rounded-full flex items-center justify-between
          bg-white/70 backdrop-blur-xl 
          border border-white shadow-[0_8px_30px_rgba(0,0,0,0.1)]
          transition-all duration-300
          w-11/12 md:w-auto
        "
      >
        {/* LOGO Scroll to top */}
        <img
          src={Logo}
          alt="Logo"
          className="w-15 h-12 cursor-pointer object-contain"
          onClick={() => scrollToSection(heroRef)}
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center font-extrabold ml-10">
          <MenuItem label="Why Us" onClick={() => scrollToSection(whyUsRef)} />
          <MenuItem label="Programs" onClick={() => scrollToSection(programsRef)} />
          <MenuItem label="Testimonials" onClick={() => scrollToSection(testimonialRef)} />

          {/* CONTACT BUTTON */}
          <button
            className="
              bg-[#F8BA2B] text-black font-bold text-sm tracking-wider
              py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl ml-4
            "
            onClick={() => scrollToSection(testimonialRef)}
          >
            CONTACT
          </button>
        </ul>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden cursor-pointer p-2 rounded-full hover:bg-white/20"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-full mt-2 w-11/12 sm:w-64 p-4 rounded-xl
            bg-white border border-gray-100/30 shadow-2xl md:hidden
          "
        >
          <ul className="flex flex-col gap-3 text-black text-base font-medium">
            <MobileMenuItem label="Why Us" onClick={() => scrollToSection(whyUsRef)} />
            <MobileMenuItem label="Programs" onClick={() => scrollToSection(programsRef)} />
            <MobileMenuItem label="Testimonials" onClick={() => scrollToSection(testimonialRef)} />
            <MobileMenuItem label="Contact" onClick={() => scrollToSection(testimonialRef)} />
          </ul>
        </div>
      )}
    </div>
  );
}

/* DESKTOP MENU ITEM */
function MenuItem({ label, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.05, color: "#008080", duration: 0.25 });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, color: "#000", duration: 0.25 });
    });
  }, []);

  return (
    <li
      ref={ref}
      onClick={onClick}
      className="cursor-pointer text-sm font-medium tracking-wider"
    >
      {label}
    </li>
  );
}

/* MOBILE MENU ITEM */
function MobileMenuItem({ label, onClick }) {
  return (
    <li
      className="py-2 px-3 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-sm font-medium text-black">{label}</span>
    </li>
  );
}
