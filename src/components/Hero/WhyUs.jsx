import React from "react";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "Magic Mentor™ Support",
    img: "/images/mentor.png",
    points: [
      "Daily check-ins & guidance",
      "Emotional + academic support",
      "School-teacher coordination",
    ],
  },
  {
    title: "True One-to-One Tuition",
    img: "https://cdn-icons-png.flaticon.com/128/4727/4727424.png",
    points: [
      "Fully personalized sessions",
      "Expert teachers for each subject",
      "Flexible timing for each student",
    ],
  },
  {
    title: "Weekly Parent Reports",
    img: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
    points: [
      "Transparent progress tracking",
      "Strengths, weaknesses & action plans",
      "Early-warning alerts for parents",
    ],
  },
  {
    title: "Complete Learning Management",
    img: "https://cdn-icons-png.flaticon.com/128/3262/3262260.png",
    points: [
      "Homework help & daily follow-up",
      "Test prep, revision & doubt clearing",
      "Structured learning roadmaps",
    ],
  },
  {
    title: "Student Growth & Well-Being",
    img: "https://cdn-icons-png.flaticon.com/128/3209/3209992.png",
    points: [
      "Confidence-building activities",
      "Habit formation & discipline guidance",
      "Personal development suggestions",
    ],
  },
  {
    title: "Parent Priority System",
    img: "https://cdn-icons-png.flaticon.com/128/1250/1250615.png",
    points: [
      "Dedicated support for parents",
      "Fast response from mentor team",
      "Monthly review calls & development plans",
    ],
  },
];

export default function WhyUs() {
  return (
    <section className="py-20  bg-white px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#008080]">
          Why Mash Magic?
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          A complete mentoring ecosystem designed to support, guide and uplift
          every student with personalized care.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <GlassCard
            key={i}
            title={item.title}
            img={item.img}
            points={item.points}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
