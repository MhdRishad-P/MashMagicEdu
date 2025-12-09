import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Mash Magic completely transformed my child’s learning habits. The mentor support is unmatched!",
    author: "Ayesha Rahman",
    position: "Parent of Grade 7 Student",
    img: "images/testimonial1.jpeg",
    textColor: "#6C4DF4",
  },
  {
    text: "We tried many platforms but NOTHING worked like this. One-on-one attention made a huge difference.",
    author: "Mohammed Imran",
    position: "Parent",
    img: "images/testimonial2.jpeg",
    textColor: "#6C4DF4",
  },
  {
    text: "As a parent, I finally feel relaxed. The weekly reports & communication are absolutely perfect.",
    author: "Priya Sharma",
    position: "Mother of Grade 6 Student",
    img: "images/testimonial3.jpeg",
    textColor: "#6C4DF4",
  },
  {
    text: "My son improved in confidence, discipline, and academics. The best decision we ever made!",
    author: "Arun Kumar",
    position: "Parent",
    img: "images/testimonial1.jpeg",
    textColor: "#6C4DF4",
  },
];

export default function TestimonialCard() {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".testimonial-card");
    const images = gsap.utils.toArray(".image-wrapper");

    /* IMAGE ANIMATION */
    images.forEach((img) => {
      const angle = gsap.utils.random(-12, 12);

      gsap.fromTo(
        img,
        { opacity: 0, y: 100, scale: 0.85, rotate: angle - 20 },
        {
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: angle,
          ease: "power2.out",
        }
      );
    });

    /* TEXT ANIMATION */
    cards.forEach((card) => {
      const quote = card.querySelector(".quote");
      const author = card.querySelector(".author-block");

      gsap.fromTo(
        [quote, author],
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    });
  });

  return (
    <>
      {/* TITLE */}
      <div className="pt-14 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#008080]">
          What Parents & Students Say
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Real experiences. Real growth. Real results.
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="max-w-7xl mx-auto mt-14 px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                testimonial-card
                bg-white rounded-2xl shadow-xl
                p-10 sm:p-9 
                flex flex-col md:flex-row 
                items-center 
                gap-10 md:gap-14
                w-full
              "
            >
              {/* IMAGE CARD */}
              <div
                className="
                  image-wrapper
                  w-[260px] sm:w-[230px] md:w-[220px] lg:w-[240px]
                  aspect-[4/5]
                  p-3 sm:p-4
                  rounded-xl bg-white 
                  shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                  flex items-center justify-center origin-center
                "
              >
                <img
                  src={item.img}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* TEXT SECTION */}
              <div className="flex-1 pr-10 md:pr-14">
                <p className={`quote text-md leading-relaxed ${item.textColor}`}>
                  {item.text}
                </p>

                <div className="author-block mt-5">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.author}
                  </h4>
                  <p className="text-sm text-gray-500">{item.position}</p>
                </div>

                {/* VERIFIED BADGE */}
                <span
                  className="
                    inline-block mt-3 
                    bg-green-100 text-green-700 
                    text-xs font-semibold 
                    px-3 py-1 
                    rounded-full
                  "
                >
                  ✔ Verified Parent
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA UNDER TESTIMONIALS */}
      <div className="text-center mb-20 px-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Join 1000+ families improving with Mash Magic
        </h3>

        <button
          className="
            mt-5 px-8 py-3 
            bg-[#F8BA2B] text-black
            rounded-full 
            shadow-md 
            hover:shadow-lg hover:-translate-y-1
            transition-all font-semibold
          "
        >
          Book Free Demo
        </button>
      </div>
    </>
  );
}
