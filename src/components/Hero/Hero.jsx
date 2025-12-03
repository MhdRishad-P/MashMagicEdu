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
  const starRef = useRef(null);

  const counterRef = useRef([]);
  const numbers = [
    { label: "Trusted Parents", value: 1000 },
    { label: "Teachers", value: 2000 },
    { label: "Countries", value: 12 },
  ];

  useGSAP(() => {
    // Left content animation
    gsap.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Hero image animation
    gsap.from(imgRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3,
    });

    // Counter animations (no shake)
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

    // Floating background shapes
    gsap.to(circle1Ref.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(circle2Ref.current, {
      scale: 1.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(starRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-[100px] mx-auto relative overflow-hidden px-4">

        {/* LEFT SECTION */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-3">
            <p className="text-gray-500 text-1xl md:text-4xl font-semibold">
              Welcome To Mash Magic
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold lg:text-6xl leading-tight">
              <span className="font-bold lg:text-7xl text-[#008080]">
                India’s <span className="text-black">#</span>
                <span
                  style={{ fontFamily: "IBM Plex Mono" }}
                  className="text-black text-7xl sm:text-8xl italic"
                >
                  1
                </span>
              </span>
              <span className="text-[#008080] block sm:inline">
                {" "}
                Mentoring-Based{" "}
              </span>
              <span>Learning Platform</span>
            </h1>

            <p className="text-gray-700 text-sm sm:text-base">
              We don’t just teach — We Guide, Mentor and Elevate your child’s learning journey.
            </p>
          </div>

          {/* WHITE BOX – balanced padding */}
          <div
            className="
              mt-8 bg-white shadow-xl rounded-2xl
              px-5 py-4 sm:px-6 sm:py-5
              w-full max-w-[850px] mx-auto
              flex flex-wrap justify-center items-center
              gap-4 sm:gap-6
              overflow-x-hidden
            "
          >
            {/* COUNTERS */}
            {numbers.map((item, i) => (
              <div
                key={i}
                ref={(el) => (counterRef.current[i] = el)}
                className="text-center flex-shrink px-3 py-1"
              >
                {/* fixed-width number → no shaking */}
                <span className="text-2xl sm:text-3xl font-bold text-[#008080] inline-block w-[55px] text-center">
                  <span className="count"></span>+
                </span>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}

            {/* BUTTON + description */}
            <div className="flex flex-col items-center flex-shrink px-3 py-1 text-center">
              <button className="bg-[#006666] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#FABB2A] transition text-sm sm:text-base w-full">
                BOOK FREE DEMO
              </button>

              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                30 Minute Session - Parent+Student
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end items-center relative mt-10 md:mt-0">
          <svg className="absolute inset-0 w-full h-full opacity-50">
            <circle ref={circle1Ref} cx="150" cy="150" r="80" fill="#FABB2A" />
            <circle ref={circle2Ref} cx="450" cy="300" r="150" fill="#008080" />
          </svg>

          <img
            ref={imgRef}
            src={HeroImg}
            alt="Student"
            className="relative z-10 max-w-full
            w-[220px] sm:w-[280px] md:w-[360px] xl:w-[450px]
            object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
