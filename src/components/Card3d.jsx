import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card3D = ({ title, description, badge, imageUrl, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    /** Entrance Animation **/
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: index * 0.15
    });

    gsap.from(image, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.15 + 0.2
    });

    gsap.from(content.children, {
      x: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      delay: index * 0.15 + 0.4
    });

    /** Hover Animation **/
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      gsap.to(card, {
        rotateX: (y - centerY) / 20,
        rotateY: (centerX - x) / 20,
        transformPerspective: 900,
        duration: 0.3
      });

      gsap.to(image, {
        scale: 1.04,
        duration: 0.3
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.4
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="
        relative 
        w-full 
        h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80
        bg-white 
        rounded-2xl 
        shadow-xl 
        overflow-visible
        transition-all
        duration-300
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Protruding Image */}
      <div
        className="
          absolute 
          -left-4 sm:-left-6 md:-left-8
          top-1/2 
          -translate-y-1/2 
          z-10
          h-[130%]
        "
      >
        <div
          ref={imageRef}
          className="
            relative 
            h-full 
            w-28 sm:w-36 md:w-44 lg:w-52 
            rounded-2xl 
            overflow-hidden 
            shadow-2xl
          "
          style={{ transform: "translateZ(30px)" }}
        >
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div
        className="
          ml-28 sm:ml-36 md:ml-44 lg:ml-56
          pr-4
          h-full 
          flex 
          flex-col 
          justify-center
        "
        ref={contentRef}
      >
        <span className="text-xs sm:text-sm px-2 py-1 bg-purple-100 text-purple-600 rounded-full font-semibold">
          {badge}
        </span>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
          {title}
        </h2>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 line-clamp-3">
          {description}
        </p>

        <button className="mt-4 px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card3D;
