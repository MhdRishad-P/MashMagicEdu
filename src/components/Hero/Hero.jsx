import React, { useRef } from "react";
import HeroImg from "../../assets/hero.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const words = ["First", "Premium", "Trusted", "One&Only"];

const Hero = () => {
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

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ---------------- TYPEWRITER (SMOOTH, NO BUGS) ----------------
      if (dynamicWordRef.current) {
        const tlWords = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

        words.forEach((word) => {
          const proxy = { val: 0 };

          // Clear before typing
          tlWords.call(() => {
            if (dynamicWordRef.current) {
              dynamicWordRef.current.textContent = "";
            }
            proxy.val = 0;
          });

          // Type forward
          tlWords.to(proxy, {
            val: word.length,
            duration: word.length * 0.08,
            ease: "none",
            onUpdate: () => {
              if (!dynamicWordRef.current) return;
              const count = Math.round(proxy.val);
              dynamicWordRef.current.textContent = word.slice(0, count);
            },
          });

          // Hold full word
          tlWords.to({}, { duration: 0.9 });

          // Delete backward
          tlWords.to(proxy, {
            val: 0,
            duration: word.length * 0.06,
            ease: "none",
            onUpdate: () => {
              if (!dynamicWordRef.current) return;
              const count = Math.round(proxy.val);
              dynamicWordRef.current.textContent = word.slice(0, count);
            },
          });

          // Small gap before next word
          tlWords.to({}, { duration: 0.3 });
        });
      }

      // ---------------- ENTRANCE ANIMATIONS ----------------
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

      // ---------------- COUNTER ANIMATIONS ----------------
      counterRef.current.forEach((el, i) => {
        if (!el) return;
        const countEl = el.querySelector(".count");
        if (!countEl) return;

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

      // ---------------- FLOATING CIRCLES ----------------
      if (circle1Ref.current) {
        gsap.to(circle1Ref.current, {
          scale: 1.1,
          duration: 3,
          repeat: -1,
          yoyo: true,
        });
      }

      if (circle2Ref.current) {
        gsap.to(circle2Ref.current, {
          scale: 1.08,
          duration: 4,
          repeat: -1,
          yoyo: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[90px] md:pt-[110px] px-5 md:px-10 max-w-[1400px] mx-auto relative">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div ref={leftRef} className="z-10 text-center md:text-left space-y-6">

          <p className="text-gray-500 text-lg md:text-xl font-semibold">
            Welcome To Mash Magic
          </p>

          {/* HEADING WITH STABLE ANIMATION SLOT */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">

            {/* India’s */}
            <span className="font-bold text-[#008080] block sm:inline">
              India’s{" "}
            </span>

            {/* Fixed-width box for changing word (no flicker / jumping) */}
            <span className="inline-block min-w-[130px] sm:min-w-[160px] text-left align-baseline">
              <span
                ref={dynamicWordRef}
                className="text-[#333] font-bold inline-block"
              ></span>
            </span>

            <span className="text-[#008080] block sm:inline">
              {" "}Mentoring-Based{" "}
            </span>

            <span className="block text-black">
              Learning Platform
            </span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            We don’t just teach — We Guide, Mentor and Elevate your child’s learning journey.
          </p>

          <div>
            <button className="premium-gray-button">BOOK FREE DEMO</button>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              30 Minute Session - Parent + Student
            </p>
          </div>

          {/* STATS */}
          <div className="mt-8 w-full flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8">
            {numbers.map((item, i) => (
              <div
                key={i}
                ref={(el) => (counterRef.current[i] = el)}
                className="text-center flex flex-col items-center w-[100px] sm:w-[120px]"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-1"
                />

                <span className="text-2xl sm:text-3xl font-bold text-[#008080]">
                  <span className="count"></span>+
                </span>

                <p className="text-black text-xs sm:text-sm font-medium mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex justify-center md:justify-end min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]">

          {/* Background circles (inside wrapper so layout doesn't collapse) */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <svg className="w-full h-full opacity-30">
              <circle ref={circle1Ref} cx="150" cy="180" r="70" fill="#FABB2A" />
              <circle ref={circle2Ref} cx="430" cy="300" r="130" fill="#008080" />
            </svg>
          </div>

          <img
            ref={imgRef}
            src={HeroImg}
            alt="Student"
            className="relative z-10 w-[250px] sm:w-[320px] md:w-[380px] lg:w-[460px] xl:w-[520px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
