import React, { useRef } from "react";
import HeroImg from "../../assets/hero.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const leftRef = useRef(null);
  const imgRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  const counterRef = useRef([]);
  const numbers = [
    { label: "Trusted Parents", value: 1000 },
    { label: "Teachers", value: 2000 },
    { label: "Countries", value: 12 },
  ];

  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(imgRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      delay: 0.3,
    });

    counterRef.current.forEach((el, i) => {
      const countEl = el.querySelector(".count");

      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.4 + i * 0.2,
      });

      gsap.fromTo(
        countEl,
        { innerText: 0 },
        {
          innerText: numbers[i].value,
          duration: 1.8,
          ease: "power1.out",
          snap: { innerText: 1 },
          delay: 0.4 + i * 0.2,
          onUpdate: () => {
            countEl.innerText = Math.floor(countEl.innerText);
          },
        }
      );
    });

    gsap.to(circle1Ref.current, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(circle2Ref.current, {
      scale: 1.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-[100px] px-4 max-w-[1500px] mx-auto relative overflow-hidden">

        {/* LEFT SECTION */}
        <div ref={leftRef} className="flex flex-col justify-center">

          {/* TEXT */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-gray-500 text-xl md:text-2xl font-semibold">
              Welcome To Mash Magic
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold text-center md:text-left">
              <span className="font-bold lg:text-7xl text-[#008080] block">
                India’s <span className="text-black">#</span>
                <span style={{ fontFamily: "IBM Plex Mono" }} className="text-black italic text-7xl sm:text-8xl">
                  1
                </span>
              </span>
              <span className="text-[#008080]"> Mentoring-Based </span>
              <div>Learning Platform</div>
            </h1>

            <p className="text-gray-700 text-sm sm:text-base max-w-md mx-auto md:mx-0 text-center md:text-left">
              We don’t just teach — We Guide, Mentor and Elevate your child’s learning journey.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-7 text-center md:text-left">
            <button className="bg-[#008080] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#FABB2A] transition mx-auto md:mx-0">
              BOOK FREE DEMO
            </button>

            <p className="text-gray-600 text-xs sm:text-sm mt-2 text-center md:text-left">
              30 Minute Session - Parent + Student
            </p>
          </div>

          {/* WHITE COUNTER BOX (FULLY FIXED) */}
          <div
            className="
              mt-8 bg-white shadow-xl rounded-2xl
              px-6 py-5
              w-full
              max-w-full
              flex flex-wrap 
              justify-center md:justify-between 
              items-center 
              gap-6
            "
          >
            {numbers.map((item, i) => (
              <div key={i} ref={(el) => (counterRef.current[i] = el)} className="text-center flex-1 min-w-[100px]">
                <span className="text-3xl sm:text-4xl font-bold text-[#008080] block">
                  <span className="count"></span>+
                </span>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center items-center relative mt-10 md:mt-0">
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            <circle ref={circle1Ref} cx="150" cy="150" r="90" fill="#FABB2A" />
            <circle ref={circle2Ref} cx="450" cy="300" r="160" fill="#008080" />
          </svg>

          <img
            ref={imgRef}
            src={HeroImg}
            alt="Student"
            className="relative z-10 object-contain
              w-[230px] sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[520px]"
          />
        </div>

      </div>
    </>
  );
};

export default Hero;
