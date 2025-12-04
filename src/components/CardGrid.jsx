import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -----------------------------
      3D CARD COMPONENT
------------------------------ */
const Card3D = ({ title, points, imageUrl, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const children = contentRef.current?.children || [];

    /* Scroll Fade-In */
    gsap.fromTo(
      card,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      children,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      }
    );

    /* Hover Tilt (Desktop Only) */
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          rotateX: (y - rect.height / 2) / 18,
          rotateY: (rect.width / 2 - x) / 18,
          transformPerspective: 900,
          duration: 0.25,
        });

        gsap.to(image, { scale: 1.05, duration: 0.2 });
      };

      const handleLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
        gsap.to(image, { scale: 1, duration: 0.3 });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        relative 
        bg-gray-200
        rounded-2xl 
        shadow-xl 
        overflow-visible 
        h-56 sm:h-60 md:h-64 lg:h-72 mb-5 

        /* RESPONSIVE WIDTH FIX */
        w-full 
        lg:w-[90%] 
        xl:w-[95%]
        mx-auto
        
        px-3 sm:px-4 py-4
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* LEFT IMAGE */}
      <div
        className="
          absolute 
          -left-3 sm:-left-4 md:-left-6 
          top-1/2 -translate-y-1/2 
          z-10 
          h-[105%] sm:h-[110%]  md:h-[115%]
        "
      >
        <div
          ref={imageRef}
          className="
            w-24 sm:w-28 md:w-32 lg:w-36 
            h-full 
            rounded-2xl 
            overflow-hidden 
          "
          style={{ transform: "translateZ(30px)" }}
        >
          <img
            src={imageUrl}
            className="w-full h-full object-cover object-center"
            alt={title}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        ref={contentRef}
        className="
          ml-28 sm:ml-32 md:ml-40 lg:ml-30
          flex flex-col justify-center 
          h-full gap-1 bg-white rounded-2xl p-3
        "
      >
        <h2 className="text-center text-base sm:text-lg md:text-xl font-bold text-gray-900">
          {title}
        </h2>

        <ul className="text-gray-600 text-xs sm:text-sm pl-2 space-y-1 text-left">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* -----------------------------
            GRID
------------------------------ */
const CardGrid = () => {
  const cardsData = [
    {
      title: "Magic Mentor™ Support",
      points: ["Daily check-ins", "Emotional + academic support", "Teacher coordination"],
      imageUrl: "images/mentor1.png",
    },
    {
      title: "True One-to-One Tuition",
      points: ["Personalized sessions", "Expert teachers", "Flexible timing"],
      imageUrl: "images/kid.png",
    },
    {
      title: "Weekly Parent Reports",
      points: ["Progress updates", "Strength insights", "Early alerts"],
      imageUrl: "images/hero.png",
    },
    {
      title: "Complete Learning Management",
      points: ["Homework help", "Test prep", "Study roadmap"],
      imageUrl: "images/hero.png",
    },
    {
      title: "Student Growth & Well-Being",
      points: ["Confidence building", "Habit formation", "Development"],
      imageUrl: "images/hero.png",
    },
    {
      title: "Parent Priority System",
      points: ["Dedicated support", "Fast response", "Monthly reviews"],
      imageUrl: "images/hero.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h1 className="text-[#008080] text-3xl md:text-5xl font-semibold mb-10">
        Why Mash Magic?
      </h1>

      <div className="w-full max-w-7xl px-6">

        {/* RESPONSIVE GRID FIX */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-2 
          xl:grid-cols-3 
          gap-10
        ">
          {cardsData.map((card, i) => (
            <Card3D key={i} index={i} {...card} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardGrid;
