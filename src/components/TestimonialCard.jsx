import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // ✅ only register ScrollTrigger

const testimonials = [
  {
    text: "Mash Magic completely transformed my child’s learning habits. The mentor support is unmatched!",
    author: "Ayesha Rahman",
    position: "Parent of Grade 7 Student",
    img: "images/testimonial1.jpeg",
    textColor: "text-violet-800", // green
  },
  {
    text: "We tried many platforms but NOTHING worked like this. One-on-one attention made a huge difference.",
    author: "Mohammed Imran",
    position: "Parent",
    img: "images/testimonial2.jpeg",
    textColor: "text-green-800", // red
  },
  {
    text: "As a parent, I finally feel relaxed. The weekly reports & communication are absolutely perfect.",
    author: "Priya Sharma",
    position: "Mother of Grade 6 Student",
    img: "images/testimonial3.jpeg",
    textColor: "text-violet-800", // blue / purple
  },
  {
    text: "My son improved in confidence, discipline, and academics. The best decision we ever made!",
    author: "Arun Kumar",
    position: "Parent",
    img: "images/testimonial1.jpeg",
    textColor: "text-violet-800", // yellow / orange
  },
];

export default function TestimonialCard() {
  useGSAP(() => {
    const contents = gsap.utils.toArray(".content");
    const quotes = gsap.utils.toArray(".quote");
    const authorBlocks = gsap.utils.toArray(".author-block");
    const imageWrappers = gsap.utils.toArray(".image-wrapper");

    // ✅ Make first testimonial visible initially
    gsap.set([quotes[0], authorBlocks[0]], { y: -10, opacity: 1 });
    gsap.set(imageWrappers[0], {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: ".testimonial-container",
        pin: true,
        start: "top top",
        end: `+=${contents.length * 100}%`,
        scrub: 2,
      },
    });

    contents.forEach((_, i) => {
      if (i === contents.length - 1) return;

      // fade & slide OUT current quote + author block
      tl.to(
        [quotes[i], authorBlocks[i]],
        {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.05,
        },
        "+=0.3"
      )
        // animate IN next image
        .to(
          imageWrappers[i + 1],
          {
            scale: 1,
            opacity: 1,
            y: (i + 1) * 10,
            x: (i + 1) * -6,
            rotate: (i + 1) * 3 * (i % 2 === 0 ? 1 : -1),
            duration: 1.5,
          },
          "<"
        )
        // fade & slide IN next quote + author block
        .to(
          [quotes[i + 1], authorBlocks[i + 1]],
          {
            opacity: 1,
            y: -10,
            duration: 1,
            stagger: 0.05,
          },
          "<+=0.2"
        );
    });
  });

  return (
    <>
      {/* TITLE */}
      <div className="pt-16  text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#008080]">
          What Parents & Students Say
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Real experiences. Real growth. Real results.
        </p>
      </div>

      {/* SCROLL SECTION */}
      <div className="testimonial-container relative w-full h-screen overflow-hidden">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="
              content absolute inset-0 
              w-full h-full 
              flex flex-col lg:flex-row 
              items-center justify-center 
              gap-6 md:gap-10 
              px-6 sm:px-8 lg:px-20
              text-center lg:text-left
            "
          >
            {/* TEXT + AUTHOR BLOCK */}
            <div className="flex-1 max-w-xl md:pt-20 pt-30 ">
              <p
                className={`
                  quote opacity-0
                  leading-relaxed 
                  text-base sm:text-md
                  ${item.textColor}
                `}
              >
                {item.text}
              </p>

              <div className="author-block opacity-0 mt-4 sm:mt-5">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {item.author}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.position}
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                image-wrapper 
                w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px]
                aspect-[4/5]
                p-3 sm:p-4
                rounded-xl bg-white 
                opacity-0 scale-75
                shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]
              "
            >
              <img
                src={item.img}
                alt="Testimonial"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
