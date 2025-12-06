import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = navRef.current;

    // Navbar entrance animation
    gsap.fromTo(
      el,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Hide on scroll animation
    let lastScroll = 0;
    ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        const current = self.scroll();
        if (current > lastScroll && current > 70) {
          gsap.to(el, { y: -100, duration: 0.4, ease: "power3.out" });
        } else {
          gsap.to(el, { y: 0, duration: 0.4, ease: "power3.out" });
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
          border border-white shadow-[0_8px_30px_rgba(0,0,0,0.1)]
          transition-all duration-300 transform scale-100
          w-11/12 md:w-auto
        "
        
      >
        {/* LOGO */}
        <div className="flex items-center cursor-pointer">
      <Link to="/" className="flex items-center cursor-pointer">
  <img
    src={Logo}
    alt="Logo"
    className="w-15 h-12 object-contain"
  />
</Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center font-extrabold ml-10 ">
          <MenuItem label="Home" />
          <MenuItem label="About Us" />
          <MenuItem label="Why Us" />
          <MenuItem label="Programs" />

          <button
            className="
              bg-[#F8BA2B] text-black
              font-bold text-sm tracking-wider
              py-2.5 px-6 rounded-full transition-all duration-300
              shadow-lg hover:shadow-xl ml-4 
            "
          >
           <h1>CONTACT</h1>
          </button>
        </ul>

        {/* MOBILE TOGGLE */}
        <div
          className="md:hidden cursor-pointer p-2 rounded-full hover:bg-white/20 transition-colors "
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
            bg-white  border border-gray-100/30
            shadow-2xl md:hidden
          "
        >
          <ul className="flex flex-col gap-3 text-black text-base font-medium " >
            <MobileMenuItem label="Home" setOpen={setOpen} />
            <MobileMenuItem label="About Us" setOpen={setOpen} />
            <MobileMenuItem label="Why Us" setOpen={setOpen} />
            <MobileMenuItem label="Programs" setOpen={setOpen} />
            <MobileMenuItem label="Contact" setOpen={setOpen} />
          </ul>
        </div>
      )}
    </div>
  );
}

/* DESKTOP MENU ITEM */
function MenuItem({ label }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        color: "#6366F1",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        color: "#000000",
      });
    });
  }, []);

  return (
    <li
      ref={ref}
      className="
        cursor-pointer text-sm font-medium text-black
        tracking-wider hover:text-teal-500 transition-colors duration-200
      "
    >
      {label}
    </li>
  );
}

/* MOBILE MENU ITEM */
function MobileMenuItem({ label, setOpen }) {
  return (
    <li className="py-2 px-3 rounded-lg hover:bg-white transition-colors duration-200">
      <div
        onClick={() => setOpen(false)}
        className="block text-sm font-medium text-black hover:text-teal-400 transition-colors cursor-pointer"
      >
        {label}
      </div>
    </li>
  );
}
