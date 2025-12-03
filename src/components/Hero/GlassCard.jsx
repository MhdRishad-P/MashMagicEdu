import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlassCard({ title, img, points, index }) {
  const cardRef = useRef(null);
  const tealRef = useRef(null);
  const yellowRef = useRef(null);

  /* Fade-in Scroll Animation */
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: index * 0.12,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  /* Hover Animation */
  const handleHover = () => {
    gsap.to(tealRef.current, {
      x: -25,
      y: -20,
      scale: 1.25,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(yellowRef.current, {
      x: 30,
      y: 20,
      scale: 1.25,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to([tealRef.current, yellowRef.current], {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* BACKSIDE ANIMATED SVGs */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">

        {/* Teal Circle */}
        <svg
          ref={tealRef}
          className="absolute -top-10 -left-10 opacity-40"
          width="150"
          height="150"
        >
          <circle cx="75" cy="75" r="75" fill="#008080" />
        </svg>

        {/* Yellow Circle */}
        <svg
          ref={yellowRef}
          className="absolute -bottom-10 -right-10 opacity-40"
          width="170"
          height="170"
        >
          <circle cx="85" cy="85" r="85" fill="#FABB2A" />
        </svg>
      </div>

      {/* MAIN CARD */}
      <div
        ref={cardRef}
        className="
          relative z-20 bg-gray-100 rounded-2xl shadow-xl 
          p-7 transition-all duration-300
        "
      >
        {/* LEFT | RIGHT LAYOUT */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">

          {/* LEFT SECTION - IMAGE */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={img}
              alt={title}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-xl shadow-md"
            />
          </div>

          {/* RIGHT SECTION - TEXT */}
          <div className="flex-1">
            {/* TITLE */}
            <h3 className="text-xl font-bold text-[#005f5f] mb-4 text-center sm:text-left">
              {title}
            </h3>

            {/* POINTS */}
            <ul className="space-y-2 text-sm text-gray-700">
              {points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#008080] text-xl leading-none">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
