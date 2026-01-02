import React from "react";
import { Link } from "react-router-dom";

export default function MentoringArticle() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link
          to="/blogs"
          className="text-sm text-teal-600 hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-900 leading-tight">
          Why Mentoring Matters More Than Tuition in 2026
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-8">
          For decades, tuition has been the automatic solution for academic struggles.
          Low marks? Add tuition. Weak subject? Add another class.
          Exam fear? Increase study hours.
        </p>

        <p className="text-lg leading-relaxed mb-10">
          As we step into <strong>2026</strong>, one truth has become undeniable:
          <span className="font-semibold text-gray-900">
            {" "}Tuition alone is no longer enough. Mentoring has become essential.
          </span>
        </p>

        {/* Section */}
        <ArticleSection title="The Reality of Students in 2026">
          <ul className="list-disc pl-6 space-y-2">
            <li>Constant exposure to screens and notifications</li>
            <li>Shorter attention spans</li>
            <li>Academic pressure starting at a very young age</li>
            <li>Comparison culture fueled by social media</li>
            <li>Fear of judgment and failure</li>
            <li>Emotional stress that often goes unnoticed</li>
          </ul>

          <p className="mt-6">
            Schools focus on completing the syllabus. Tuition focuses on repeating
            the syllabus. But who focuses on the <strong>child behind the marks?</strong>
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="What Tuition Solves — And Where It Fails">
          <p className="font-medium mb-3">Tuition is useful for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Explaining difficult concepts</li>
            <li>Providing extra practice</li>
            <li>Improving subject familiarity</li>
          </ul>

          <p className="font-medium mb-3">But tuition does not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Track daily study discipline</li>
            <li>Identify emotional blocks</li>
            <li>Build confidence and independence</li>
            <li>Teach learning strategies</li>
            <li>Coordinate with school teachers</li>
            <li>Support the child beyond academics</li>
          </ul>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="Why Mentoring Is More Powerful Than Tuition">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Daily Accountability:</strong> Mentors check in daily,
              building consistency beyond exams.
            </li>
            <li>
              <strong>Emotional Support:</strong> Mentors provide a safe space
              for fear, confusion, and pressure.
            </li>
            <li>
              <strong>Personalized Learning Plans:</strong> Tailored to the
              child’s pace, style, and mindset.
            </li>
            <li>
              <strong>Habit Formation:</strong> Long-term routines instead of
              short-term motivation.
            </li>
            <li>
              <strong>Parent–School Coordination:</strong> Clear communication
              and alignment.
            </li>
          </ol>
        </ArticleSection>

        {/* Highlight */}
        <div className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3">
            Why Mentoring Automatically Improves Marks
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Anxiety reduces</li>
            <li>Confidence increases</li>
            <li>Focus improves</li>
            <li>Study becomes consistent</li>
          </ul>
          <p className="mt-4 font-medium">
            Marks improve naturally — without pressure.
          </p>
        </div>

        {/* Conclusion */}
        <ArticleSection title="Education in 2026 and Beyond">
          <p>
            Education is shifting from:
            <br />
            <span className="italic">“How many hours did the child study?”</span>
            <br />
            to
            <br />
            <span className="italic">“How well is the child supported?”</span>
          </p>

          <p className="mt-6 font-semibold text-gray-900">
            Mentoring is no longer optional.  
            It is the foundation of modern education.
          </p>
        </ArticleSection>
      </div>
    </section>
  );
}

/* REUSABLE SECTION */
function ArticleSection({ title, children }) {
  return (
    <div className="mb-14">
      <h2 className="text-2xl font-bold mb-5 text-gray-900">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
