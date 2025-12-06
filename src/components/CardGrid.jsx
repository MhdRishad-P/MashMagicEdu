import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
      GLASS CARD COMPONENT (NEW PREMIUM UI)
===================================================== */
const CardGlass = ({ title, points, imageUrl }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    const contentChildren = contentRef.current?.children || [];

    /* Fade-in animation */
    gsap.fromTo(
      card,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 90%" },
      }
    );

    gsap.fromTo(
      contentChildren,
      { opacity: 0, x: 15 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 90%" },
      }
    );

    /* Hover animation (desktop only) */
    if (window.innerWidth > 768) {
      const tilt = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          rotateX: (y - rect.height / 2) / 20,
          rotateY: (rect.width / 2 - x) / 20,
          transformPerspective: 800,
          duration: 0.25,
        });

        gsap.to(img, { scale: 1.1, duration: 0.25 });
      };

      const reset = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
        gsap.to(img, { scale: 1, duration: 0.3 });
      };

      card.addEventListener("mousemove", tilt);
      card.addEventListener("mouseleave", reset);

      return () => {
        card.removeEventListener("mousemove", tilt);
        card.removeEventListener("mouseleave", reset);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        relative w-full 
        rounded-3xl 
        p-6 sm:p-7
        backdrop-blur-xl
        bg-white/50
        border border-white/30
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating Icon */}
      <div className="absolute -top-15 left-1/2 -translate-x-1/2 z-20">
        <div
          ref={imageRef}
          className=" 
            p-3 sm:p-4 
            w-[150px] h-[150px] sm:w-[150px] sm:h-[150px]
            transition-all
          "
          style={{ transform: "translateZ(45px)" }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* TEXT */}
      <div
        ref={contentRef}
        className="mt-16 flex flex-col justify-center text-center gap-3"
        style={{ transform: "translateZ(20px)" }}
      >
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h2>

        <ul className="text-gray-700 text-xs sm:text-sm space-y-1 text-left mx-auto w-fit">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#008080] font-bold">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* =====================================================
                GRID WRAPPER
===================================================== */
const CardGrid = () => {
  const cardsData = [
    {
      title: "Magic Mentor™ Support",
      points: ["Daily check-ins", "Emotional + academic support", "Teacher coordination"],
      imageUrl: "images/support.png",
    },
    {
      title: "True One-to-One Tuition",
      points: ["Personalized sessions", "Expert teachers", "Flexible timing"],
      imageUrl: "images/tution1.png",
    },
    {
      title: "Weekly Parent Reports",
      points: ["Progress updates", "Strength insights", "Early alerts"],
      imageUrl: "images/report.png",
    },
    {
      title: "Complete Learning System",
      points: ["Homework help", "Test prep", "Study roadmap"],
      imageUrl: "images/complete1.png",
    },
    {
      title: "Student Growth & Well-Being",
      points: ["Confidence building", "Habit formation", "Development"],
      imageUrl: "images/growth.png",
    },
    {
      title: "Parent Priority System",
      points: ["Dedicated support", "Fast response", "Monthly reviews"],
      imageUrl: "images/priority.png",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-16 px-6">
      <h1 className="text-[#008080] text-3xl md:text-5xl font-semibold mb-14">
        Why Mash Magic?
      </h1>

      <div className="w-full max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-14
          "
        >
          {cardsData.map((card, i) => (
            <CardGlass key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
