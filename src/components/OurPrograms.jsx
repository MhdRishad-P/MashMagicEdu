import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";


gsap.registerPlugin(ScrollTrigger);

const programs = [
  { img: "/courses/BrightBridge.png", subtitle: "Skill-building foundation", name: "Bright Bridge" },
  { img: "/courses/classMate.png", subtitle: "Everyday learning support", name:"classMate" },
  { img: "/courses/Crash45.png", subtitle: "Full subject mastery in 45 hours",name:"crash45" },
  { img: "/courses/FinalTouch.png", subtitle: "Last-stage exam prep", name:"Final Touch" },
  { img: "/courses/missionX.png", subtitle: "High-performance training",name:"Mission-X" },
];

export default function OurProgramsMarquee() {
  const marqueeRef = useRef(null);
  const titleRefs = useRef([]);
  const buttonRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
    const popupRef = useRef(null);
  
    // GSAP Popup Animation
    useEffect(() => {
      if (showForm && popupRef.current) {
        gsap.fromTo(
          popupRef.current,
          { y: -100, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        );
      }
    }, [showForm]);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  /* =====================================================
     SMOOTH AUTO + INFINITE MARQUEE
  ===================================================== */
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let x = 0;
    let currentSpeed = 0.35;   // actual moving speed
    let targetSpeed = 0.35;    // what input controls
    const smoothness = 0.06;   // lower = smoother

    const tick = () => {
      // inertia smoothing
      currentSpeed += (targetSpeed - currentSpeed) * smoothness;
      x -= currentSpeed;

      const limit = marquee.scrollWidth / 2;

      // true infinite loop (both directions)
      if (x <= -limit) x += limit;
      if (x >= 0) x -= limit;

      marquee.style.transform = `translateX(${x}px)`;
    };

    gsap.ticker.add(tick);

    /* ---------- DESKTOP MOUSE CONTROL ---------- */
    const handleMouseMove = (e) => {
      const center = window.innerWidth / 2;
      const delta = (e.clientX - center) / center;

      targetSpeed = 0.35 + delta * 0.2;
      targetSpeed = gsap.utils.clamp(0.05, 0.7, targetSpeed);
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    /* ---------- TOUCH CONTROL ---------- */
    let lastX = 0;

    const onTouchStart = (e) => {
      lastX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      const xNow = e.touches[0].clientX;
      const delta = xNow - lastX;
      lastX = xNow;

      targetSpeed = gsap.utils.clamp(-1, 1, delta * 0.03);
    };

    const onTouchEnd = () => {
      targetSpeed = 0.35; // return smoothly to auto scroll
    };

    const wrapper = marquee.parentElement;

    if (isTouchDevice && wrapper) {
      wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
      wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
      wrapper.addEventListener("touchend", onTouchEnd);
      wrapper.addEventListener("touchcancel", onTouchEnd);
    }

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", handleMouseMove);

      if (wrapper) {
        wrapper.removeEventListener("touchstart", onTouchStart);
        wrapper.removeEventListener("touchmove", onTouchMove);
        wrapper.removeEventListener("touchend", onTouchEnd);
        wrapper.removeEventListener("touchcancel", onTouchEnd);
      }
    };
  }, [isTouchDevice]);

  /* =====================================================
     TITLE ANIMATION
  ===================================================== */
  useEffect(() => {
    gsap.fromTo(
      titleRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".marquee-wrapper",
          start: "top 90%",
        },
      }
    );
  }, []);

  /* =====================================================
     FLOATING BUTTON
  ===================================================== */
  useEffect(() => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      y: -10,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="py-10 overflow-hidden bg-white select-none">

         {/* ---------------- POPUP OVERLAY ---------------- */}
            {showForm && (
              <div className="fixed inset-0 bg-black/40 z-[999999] flex justify-center items-center p-4">
                <div
                  ref={popupRef}
                  className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6"
                >
                  <ContactForm onClose={() => setShowForm(false)} />
                </div>
              </div>
            )}

      <h2 className="text-2xl md:text-5xl font-semibold text-center text-[#008080] mb-3">
        Explore Our Programs
      </h2>

      <p className="text-gray-600 text-base md:text-xl text-center mb-10">
        Personalised learning programs designed for every student’s needs
      </p>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden marquee-wrapper">
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap gap-12 px-4"
        >
          {[...programs, ...programs].map((p, i) => (
            <div key={i} className="flex flex-col items-center min-w-[200px]">
              <img
                src={p.img}
                alt={p.subtitle}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain"
              />

              <p
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-gray-700 text-sm font-medium mt-2 text-center"
              >
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <h3 className="text-gray-600 text-base md:text-xl text-center mb-5">
          Still confused which program suits your child?
        </h3>

            <button onClick={() => setShowForm(true)} className="premium-gray-button">
              CONNECT US
            </button>
      </div>
    </section>
  );
}
