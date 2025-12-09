import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
      GLASS CARD COMPONENT WITH REAL 3D EFFECT
===================================================== */
const CardGlass = ({ title, subtitle, points, imageUrl }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;

    /* === ScrollTrigger Fade-in === */
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

    /* === Second Scroll Trigger (image pop animation) === */
    gsap.fromTo(
      img,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: card, start: "top 85%" },
      }
    );

    /* === REAL 3D Hover Animation (Desktop Only) === */
    if (window.innerWidth > 768) {
      const tilt = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 12;
        const rotateY = (rect.width / 2 - x) / 12;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 900,
          transformOrigin: "center",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(img, {
          scale: 1.18,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const reset = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(img, {
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        });
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
        relative 
        rounded-3xl 
        mx-auto
        py-2 
        my-6
        backdrop-blur-xl
        bg-gray-200
        border border-white/40
        shadow-[0_6px_20px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:shadow-[0_16px_35px_rgba(0,0,0,0.2)]
        w-[90%] sm:w-[80%] md:w-[70%]
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating Icon */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
        <div
          ref={imageRef}
          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
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
      <div className="mt-16 flex flex-col w-[90%] mx-auto justify-center bg-white text-center gap-1 py-8 rounded-2xl">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        {/* SUBTITLE */}
        <p className="text-sm text-gray-500 -mt-1">{subtitle}</p>

        <ul className="text-gray-700 text-sm sm:text-sm space-y-1 mx-auto w-fit  ">
          {points.map((p, i) => (
            <li key={i} className="flex gap-1">
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
      subtitle: "Daily guidance for every student",
      points: [
        "Daily check-ins",
        "Emotional + academic support",
        "Teacher coordination",
      ],
      imageUrl: "images/support.png",
    },
    {
      title: "One-to-One Tuition",
      subtitle: "Personalized learning that adapts",
      points: ["Expert tutors", "Personal sessions", "Flexible timings"],
      imageUrl: "images/tution1.png",
    },
    {
      title: "Weekly Parent Reports",
      subtitle: "Transparent communication",
      points: ["Progress updates", "Strength insights", "Early alerts"],
      imageUrl: "images/report.png",
    },
    {
      title: "Complete Learning System",
      subtitle: "All-in-one study partner",
      points: ["Homework help", "Test prep", "Study roadmap"],
      imageUrl: "images/complete1.png",
    },
    {
      title: "Student Growth",
      subtitle: "Mindset + Skill development",
      points: ["Confidence building", "Habits", "Skill development"],
      imageUrl: "images/growth.png",
    },
    {
      title: "Parent Priority System",
      subtitle: "Fast support for parents",
      points: ["Dedicated support", "Fast replies", "Monthly reviews"],
      imageUrl: "images/priority.png",
    },
  ];

  return (
    <div className="bg-white w-full flex flex-col items-center py-10 px-0">
      <h1 className="text-[#008080] text-3xl md:text-5xl font-semibold text-center">
        Why Mash Magic?
      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-600 text-sm md:text-md mt-2 mb-8 px-4 text-center">
        One Platform. Multiple Personalised Solutions for every Student
      </p>

      <div className="w-full max-w-[1500px]">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 
            px-2
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
