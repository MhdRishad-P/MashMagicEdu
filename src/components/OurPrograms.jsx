import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { img: "/images/program1.png", subtitle: "Bright Bridge" },
  { img: "/images/program1.png", subtitle: "Classmate" },
  { img: "/images/program1.png", subtitle: "Crash 45" },
  { img: "/images/program1.png", subtitle: "Magic Revision" },
  { img: "/images/program1.png", subtitle: "Final Touch" },
  { img: "/images/program1.png", subtitle: "Mission X" },
  { img: "/images/program1.png", subtitle: "Magic Mentor" },
];

export default function OurProgramsMarquee() {
  const marqueeRef = useRef(null);
  const speedRef = useRef(1);
  const lastTouchX = useRef(0);
  const titleRefs = useRef([]);
  const buttonRef = useRef(null);

  /* MARQUEE SPEED CONTROL */
  useEffect(() => {
    const marquee = marqueeRef.current;
    let currentX = 0;

    gsap.ticker.add(() => {
      currentX += speedRef.current;
      marquee.style.transform = `translateX(${currentX}px)`;

      if (currentX <= -marquee.scrollWidth / 2) currentX = 0;
      if (currentX > 0) currentX = -marquee.scrollWidth / 2;
    });

    const handleMouseMove = (e) => {
      const center = window.innerWidth / 2;
      speedRef.current = (e.clientX - center) / 150;
    };

    const handleTouchStart = (e) => {
      lastTouchX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - lastTouchX.current;
      speedRef.current = deltaX / 10;
      lastTouchX.current = touchX;
    };

    const handleTouchEnd = () => {
      gsap.to(speedRef, { current: 0.2, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  /* TITLE ANIMATION */
  useEffect(() => {
    if (!titleRefs.current.length) return;

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

  /* ⭐ BUTTON FLOAT ANIMATION ⭐ */
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
      <h2 className="text-2xl md:text-5xl sm:text-2xl  font-semibold text-center text-[#008080] mb-8">
        Explore Our Programs
      </h2>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden marquee-wrapper">
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap gap-12 px-4"
        >
          {[...programs, ...programs].map((p, i) => (
            <div key={i} className="flex flex-col items-center min-w-[180px]">
              <div className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_6px_18px_rgba(0,128,128,0.35)]">
                <img
                  src={p.img}
                  alt={p.subtitle}
                  className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain"
                />
              </div>

              <p
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-gray-600  text-sm font-semibold mt-2 tracking-wide"
                style={{ fontFamily: "Poppins" }}
              >
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONFUSING QUESTION + FLOATING BUTTON */}
      <div className="text-center mt-14 mb-6">
        <h3 className="text-sm lg:text-xl text-md font-semibold text-gray-500 mb-10">
          Still confused which program suits your child?
        </h3>

        <button
          ref={buttonRef}
          className="bg-[#006666] hover:bg-[#0808] text-white px-8 py-3 rounded-lg text-[14px] transition"
        >
          CONNECT US
        </button>
      </div>
    </section>
  );
}
