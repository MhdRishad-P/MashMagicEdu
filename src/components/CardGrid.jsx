import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
      GLASS CARD (RESPONSIVE + DESKTOP 3D + MOBILE HOVER)
===================================================== */
const CardGlass = ({ title, subtitle, points, imageUrl }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;

    /* Fade In ─ on scroll */
    gsap.fromTo(
      card,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 90%" },
      }
    );

    /* Image pop */
    gsap.fromTo(
      img,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: card, start: "top 88%" },
      }
    );

    /* =====================================================
        DESKTOP 3D HOVER
    ===================================================== */
    if (window.innerWidth >= 768) {
      const move3D = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          rotateX: (y - rect.height / 2) / 12,
          rotateY: (rect.width / 2 - x) / 12,
          transformPerspective: 900,
          duration: 0.3,
        });

        gsap.to(img, {
          scale: 1.15,
          duration: 0.3,
        });
      };

      const reset3D = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
        gsap.to(img, { scale: 1, duration: 0.4 });
      };

      card.addEventListener("mousemove", move3D);
      card.addEventListener("mouseleave", reset3D);

      return () => {
        card.removeEventListener("mousemove", move3D);
        card.removeEventListener("mouseleave", reset3D);
      };
    }
  }, []);

  /* =====================================================
        MOBILE "HOVER" (Tap → hover effect)
  ===================================================== */
  const toggleMobileHover = () => {
    const card = cardRef.current;
    const img = imageRef.current;

    if (!isMobileActive) {
      // Activate 3D + scale on tap
      gsap.to(card, { rotateX: -6, rotateY: 6, scale: 1.02, duration: 0.4 });
      gsap.to(img, { scale: 1.18, duration: 0.4 });
      setMobileActive(true);
    } else {
      // Reset on second tap
      gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.4 });
      gsap.to(img, { scale: 1, duration: 0.4 });
      setMobileActive(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={toggleMobileHover}
      className="
        relative cursor-pointer
        rounded-3xl 
        mx-auto
        pt-16 pb-5
        my-5
        backdrop-blur-xl
        bg-gray-200/80
        border border-white/40
        shadow-[0_6px_20px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:shadow-[0_16px_35px_rgba(0,0,0,0.20)]
        w-[88%] sm:w-[85%] md:w-[90%] lg:w-[85%]
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating Image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
        <div
          ref={imageRef}
          className="
            w-[85px] h-[85px]
            sm:w-[110px] sm:h-[110px]
            md:w-[130px] md:h-[130px]
          "
          style={{ transform: "translateZ(45px)" }}
        >
          <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="flex flex-col w-[85%] mx-auto bg-white/80 text-center gap-2 py-6 rounded-2xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">{title}</h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-500 -mt-1">{subtitle}</p>

        <ul className="text-sm md:text-[15px] text-[#4B5563] leading-relaxed space-y-1 mx-auto w-fit">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2 items-start text-left">
              <span className="text-[#008080] font-bold">✦</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* =====================================================
                FULLY RESPONSIVE GRID WRAPPER
===================================================== */
const CardGrid = () => {
  const cardsData = [
    {
      title: "Magic Mentor™ Support",
      subtitle: "Daily guidance for every student",
      points: ["Daily check-ins", "Emotional + academic support", "Teacher coordination"],
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
      imageUrl: "images/complete1.0.png",
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
    <div className="bg-white w-full flex flex-col items-center py-12 px-4">
      <h1 className="text-[#008080] text-3xl md:text-5xl font-semibold text-center">
        Why Mash Magic?
      </h1>

      <p className="text-gray-600 text-sm md:text-lg mt-2 mb-10 px-4 text-center max-w-[700px]">
        One Platform. Multiple Personalised Solutions for every Student.
      </p>

      <div className="w-full max-w-[1500px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            px-2 sm:px-4 md:px-6
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
