import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { img: "/images/program1.png", subtitle: "Skill-building foundation" },
  { img: "/images/program1.png", subtitle: "Everyday learning support" },
  { img: "/images/program1.png", subtitle: "Full subject mastery in 45 hours" },
  { img: "/images/program1.png", subtitle: "Quick chapter revision" },
  { img: "/images/program1.png", subtitle: "Last-stage exam prep" },
  { img: "/images/program1.png", subtitle: "High-performance training" },
  { img: "/images/program1.png", subtitle: "Full mentorship system" },
];

export default function OurProgramsMarquee() {
  const marqueeRef = useRef(null);
  const speedRef = useRef(0.4);
  const lastTouchX = useRef(0);
  const titleRefs = useRef([]);
  const buttonRef = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  /* MARQUEE MOVEMENT */
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const wrapper = marquee.parentElement;
    let currentX = 0;

    const tick = () => {
      currentX += speedRef.current;
      marquee.style.transform = `translateX(${currentX}px)`;

      const limit = marquee.scrollWidth / 2;
      if (currentX <= -limit) currentX = 0;
      if (currentX > 0) currentX = -limit;
    };

    gsap.ticker.add(tick);

    /* Desktop mouse speed */
    const handleMouseMove = (e) => {
      const center = window.innerWidth / 2;
      const v = (e.clientX - center) / 150;
      speedRef.current = v;
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    /* Mobile touch scroll */
    let touchActive = false;

    const onTouchStart = (e) => {
      if (!e.touches.length) return;
      touchActive = true;
      lastTouchX.current = e.touches[0].clientX;
      speedRef.current = 0;
    };

    const onTouchMove = (e) => {
      if (!touchActive || !e.touches.length) return;

      const touchX = e.touches[0].clientX;
      const deltaX = touchX - lastTouchX.current;
      lastTouchX.current = touchX;

      const targetSpeed = Math.max(-10, Math.min(5, deltaX / 12));

      gsap.to(speedRef, {
        current: targetSpeed,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const onTouchEnd = () => {
      touchActive = false;
      gsap.to(speedRef, {
        current: 0.4,
        duration: 1,
        ease: "power3.out",
      });
    };

    if (isTouchDevice && wrapper) {
      wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
      wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
      wrapper.addEventListener("touchend", onTouchEnd);
      wrapper.addEventListener("touchcancel", onTouchEnd);
    }

    return () => {
      gsap.ticker.remove(tick);

      if (!isTouchDevice) window.removeEventListener("mousemove", handleMouseMove);

      if (isTouchDevice && wrapper) {
        wrapper.removeEventListener("touchstart", onTouchStart);
        wrapper.removeEventListener("touchmove", onTouchMove);
        wrapper.removeEventListener("touchend", onTouchEnd);
        wrapper.removeEventListener("touchcancel", onTouchEnd);
      }
    };
  }, [isTouchDevice]);

  /* TITLE ENTRY ANIMATION */
  useEffect(() => {
    gsap.fromTo(
      titleRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".marquee-wrapper",
          start: "top 90%",
        },
      }
    );
  }, []);

  /* FLOATING BUTTON ANIMATION */
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
    <section className="py-10 overflow-hidden bg-white">

      {/* SECTION TITLE */}
      <h2 className="text-2xl md:text-5xl font-semibold text-center text-[#008080] mb-3">
        Explore Our Programs
      </h2>

      <p className="text-gray-600 text-base md:text-xl text-center mb-10">
        Personalised learning programs designed for every student’s needs
      </p>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden marquee-wrapper">
        <div ref={marqueeRef} className="flex items-center whitespace-nowrap gap-12 px-4">
          {[...programs, ...programs].map((p, i) => (
            <div key={i} className="flex flex-col items-center min-w-[200px]">

              {/* ICON */}
              <div
                className={`transition-all duration-300 ${
                  !isTouchDevice
                    ? "hover:scale-110 hover:drop-shadow-[0_6px_18px_rgba(0,128,128,0.35)]"
                    : ""
                }`}
              >
                <img
                  src={p.img}
                  alt={p.subtitle}
                  className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain"
                />
              </div>

              {/* SUBTITLE */}
              <p
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-gray-700 text-sm font-medium mt-2 text-center leading-snug"
                style={{ fontFamily: "Poppins" }}
              >
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QUESTION + CTA BUTTON */}
      <div className="text-center mt-10 mb-4">

        {/* UPDATED QUESTION (BIGGER) */}
        <h3 className="text-xl font-medium text-gray-800 my-4">
          Still confused which program suits your child?
        </h3>

        {/* UPDATED BUTTON (LARGER + SHADOW + ANIMATION) */}
        <button
          ref={buttonRef}
          className="
            px-8 py-3 
            rounded-full 
            shadow-md bg-[#F7C948]
            hover:-translate-y-1 hover:shadow-lg 
            transition-all
            font-semibold text-black
          "
        >
          Connect Us
        </button>

      </div>
    </section>
  );
}
