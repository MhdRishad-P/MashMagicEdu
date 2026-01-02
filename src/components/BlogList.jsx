import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { blogs } from "../data/blogs";
import Footer from "./Footer";

export default function BlogList() {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      }
    );
  }, []);

  return (
    <>
      <section className="min-h-screen bg-[#f9fafb] text-black px-4 sm:px-6 py-20">

        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
          
                <button
                       onClick={() => navigate("/")}
                  className="
                    w-fit px-5 py-2 rounded-full
                    bg-yellow-400 text-black
                    text-sm font-medium
                    transition-all duration-300
                    hover:bg-teal-600 hover:text-white
                  "
                >
                  Back to Home
                </button>

          <span className="hidden sm:block text-sm text-gray-500">
            Insights • Learning • Mentoring
          </span>
        </div>

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Insights & Blogs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Deep insights on modern learning, mentoring, parenting, and education in 2026.
          </p>
        </div>

        {/* BLOG GRID */}
        <div
          className="
            grid gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            max-w-7xl mx-auto
          "
        >
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                relative group rounded-3xl overflow-hidden
                shadow-md hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="cursor-pointer"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-72 w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* CONTENT OVER IMAGE */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug mb-4">
                  {blog.title}
                </h3>

                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="
                    w-fit px-5 py-2 rounded-full
                    bg-white text-black
                    text-sm font-medium
                    transition-all duration-300
                    hover:bg-teal-600 hover:text-white
                  "
                >
                  View More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
