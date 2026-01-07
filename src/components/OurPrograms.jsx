import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { img: "/courses/BrightBridge.png", subtitle: "Skill-building foundation" },
  { img: "/courses/classMate.png", subtitle: "Everyday learning support" },
  { img: "/courses/Crash45.png", subtitle: "Full subject mastery in 45 hours" },
  { img: "/courses/FinalTouch.png", subtitle: "Last-stage exam prep" },
  { img: "/courses/missionX.png", subtitle: "High-performance training" },
];

export default function OurProgramsMarquee() {
  const marqueeRef = useRef(null);
  const titleRefs = useRef([]);
  const popupRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  /* =====================================================
     MARQUEE – SCROLL SPEED + MOUSE DIRECTION
  ===================================================== */
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let x = 0;

    const BASE_SPEED = 0.3; // default right
    let currentSpeed = BASE_SPEED;
    let targetSpeed = BASE_SPEED;

    let mouseInfluence = 0;
    let wheelVelocity = 0;
    let pageScrollVelocity = 0;

    let lastScrollY = window.scrollY;
    let isPaused = false;

    const smoothness = 0.08;
    const decay = 0.9;
    const limit = marquee.scrollWidth / 2;

    /* ---------- MAIN LOOP ---------- */
    const tick = () => {
      if (isPaused) return;

      wheelVelocity *= decay;
      pageScrollVelocity *= decay;

      targetSpeed =
        BASE_SPEED +
        mouseInfluence +
        wheelVelocity +
        pageScrollVelocity;

      targetSpeed = gsap.utils.clamp(-1.5, 1.5, targetSpeed);

      currentSpeed += (targetSpeed - currentSpeed) * smoothness;
      x += currentSpeed;

      if (x >= 0) x -= limit;
      if (x <= -limit) x += limit;

      marquee.style.transform = `translateX(${x}px)`;
    };

    gsap.ticker.add(tick);

    /* ---------- PAUSE ON HOVER ---------- */
    marquee.addEventListener("mouseenter", () => (isPaused = true));
    marquee.addEventListener("mouseleave", () => (isPaused = false));

    /* ---------- MOUSE POSITION → DIRECTION ---------- */
    const onMouseMove = (e) => {
      const center = window.innerWidth / 2;
      const delta = (e.clientX - center) / center;

      // LEFT → negative, RIGHT → positive
      mouseInfluence = delta * 0.8;
    };

    /* ---------- PAGE SCROLL SPEED ---------- */
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      pageScrollVelocity = gsap.utils.clamp(-1, 1, delta * 0.015);
    };

    /* ---------- SCROLL WHEEL ---------- */
    const onWheel = (e) => {
      wheelVelocity += e.deltaY * 0.002;
      wheelVelocity = gsap.utils.clamp(-1.2, 1.2, wheelVelocity);
    };

    /* ---------- TOUCH ---------- */
    let lastX = 0;

    const onTouchStart = (e) => {
      lastX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      const nowX = e.touches[0].clientX;
      const delta = nowX - lastX;
      lastX = nowX;

      mouseInfluence = gsap.utils.clamp(-1.2, 1.2, delta * 0.06);
    };

    const onTouchEnd = () => {
      mouseInfluence = 0;
    };

    const wrapper = marquee.parentElement;

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("wheel", onWheel, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (isTouch && wrapper) {
      wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
      wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
      wrapper.addEventListener("touchend", onTouchEnd);
      wrapper.addEventListener("touchcancel", onTouchEnd);
    }

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);

      if (wrapper) {
        wrapper.removeEventListener("touchstart", onTouchStart);
        wrapper.removeEventListener("touchmove", onTouchMove);
        wrapper.removeEventListener("touchend", onTouchEnd);
        wrapper.removeEventListener("touchcancel", onTouchEnd);
      }
    };
  }, [isTouch]);

  /* =====================================================
     TITLES
  ===================================================== */
  useEffect(() => {
    gsap.fromTo(
      titleRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".marquee-wrapper",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-10 overflow-hidden bg-white select-none">
      <h2 className="text-2xl md:text-5xl font-semibold text-center text-[#008080] mb-3">
        Explore Our Programs
      </h2>

      <p className="text-gray-600 text-center mb-10">
        Personalised learning programs designed for every student’s needs
      </p>

      <div className="relative w-full overflow-hidden marquee-wrapper">
        <div ref={marqueeRef} className="flex gap-12 whitespace-nowrap px-4">
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
    </section>
  );
}
