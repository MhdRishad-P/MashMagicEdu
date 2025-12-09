import React, { useRef, useState, useEffect } from "react";
import HeroImg from "../../assets/hero.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ContactForm from "../ContactForm";

gsap.registerPlugin(useGSAP);

const words = ["First", "Premium", "Trusted", "One&Only"];

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null);

  // GSAP Popup Animation
  useEffect(() => {
    if (showForm) {
      gsap.fromTo(
        popupRef.current,
        { y: -100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [showForm]);

  // ---------------- Existing GSAP References ----------------
  const leftRef = useRef(null);
  const imgRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const counterRef = useRef([]);
  const dynamicWordRef = useRef(null);

  const numbers = [
    { label: "Trusted Parents", value: 3700, image: "/images/happyparents.png" },
    { label: "Success Stories", value: 1000, image: "/images/success.png" },
    { label: "Countries", value: 12, image: "/images/country.png" },
  ];

  // ---------------- HERO Page Animations ----------------
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Typewriter
      if (dynamicWordRef.current) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

        words.forEach((word) => {
          const proxy = { val: 0 };

          tl.call(() => {
            dynamicWordRef.current.textContent = "";
            proxy.val = 0;
          });

          tl.to(proxy, {
            val: word.length,
            duration: word.length * 0.08,
            ease: "none",
            onUpdate: () => {
              dynamicWordRef.current.textContent = word.slice(
                0,
                Math.round(proxy.val)
              );
            },
          });

          tl.to({}, { duration: 1 });

          tl.to(proxy, {
            val: 0,
            duration: word.length * 0.06,
            ease: "none",
            onUpdate: () => {
              dynamicWordRef.current.textContent = word.slice(
                0,
                Math.round(proxy.val)
              );
            },
          });

          tl.to({}, { duration: 0.3 });
        });
      }

      // Entrance
      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(imgRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Counters
      counterRef.current.forEach((el, i) => {
        if (!el) return;

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
          }
        );
      });

      // Floating circles
      gsap.to(circle1Ref.current, {
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(circle2Ref.current, {
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[80px] md:pt-[110px] px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto relative">

      {/* ---------------- POPUP OVERLAY ---------------- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div ref={popupRef} className="relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-xl"
            >
              ✖
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      {/* ---------------- HERO CONTENT ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT TEXT SECTION */}
        <div ref={leftRef} className="z-10 text-center md:text-left space-y-5 sm:space-y-6">

          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-semibold">
            Welcome To Mash Magic
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">

            <span className="font-bold text-[#008080] block sm:inline">India’s{" "}</span>

            <span className="inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
              <span ref={dynamicWordRef} className="text-[#333] font-bold"></span>
            </span>

            <span className="text-[#008080] block sm:inline"> Mentoring-Based </span>

            <span className="block text-black">Learning Platform</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base max-w-sm sm:max-w-md mx-auto md:mx-0">
            We don’t just teach — We Guide, Mentor and Elevate your child’s learning journey.
          </p>

          <div>
            <button onClick={() => setShowForm(true)} className="premium-gray-button">
              BOOK FREE DEMO
            </button>

            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              30 Minute Session - Parent + Student
            </p>
          </div>

          {/* COUNTERS */}
          <div className="mt-2 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-5 sm:gap-8">
            {numbers.map((item, i) => (
              <div
                key={i}
                ref={(el) => (counterRef.current[i] = el)}
                className="text-center flex flex-col items-center w-[120px] sm:w-[110px]"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-1"
                />

                <span className="text-1xl sm:text-3xl font-bold text-[#008080]">
                  <span className="count"></span>+
                </span>

                <p className="text-black w-[200px] text-xs sm:text-sm  font-medium mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end min-h-[300px] sm:min-h-[380px] md:min-h-[450px]">

          <div className="absolute inset-0 -z-10 pointer-events-none">
            <svg className="w-full h-full opacity-30">
              <circle ref={circle1Ref} cx="120" cy="150" r="60" fill="#FABB2A" />
              <circle ref={circle2Ref} cx="380" cy="280" r="120" fill="#008080" />
            </svg>
          </div>

          <img
            ref={imgRef}
            src={HeroImg}
            alt="Student"
            className="relative z-10 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[440px] xl:w-[520px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
