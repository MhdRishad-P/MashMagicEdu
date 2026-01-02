import React from "react";
import { Link } from "react-router-dom";

export default function FortyFiveHourRevision() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link
          to="/blogs"
          className="text-sm text-teal-600 hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-900 leading-tight">
          45-Hour Revision: Why Smart Revision Beats Long Study Hours
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          As exams approach, most students make the same mistake:
          they try to study more instead of studying better.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Long hours, late nights, and endless revision often lead to confusion,
          fatigue, and fear. This is why many students feel stressed despite
          putting in effort.
        </p>

        <p className="text-lg leading-relaxed mb-12 font-semibold text-gray-900">
          Marks don’t improve with longer study hours.  
          They improve with structured revision.
        </p>

        {/* Section */}
        <ArticleSection title="Why Traditional Revision Fails">
          <p className="font-medium mb-3">Most students revise by:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Rereading textbooks</li>
            <li>Watching long videos</li>
            <li>Highlighting notes repeatedly</li>
            <li>Studying without a clear plan</li>
          </ul>

          <p className="font-medium mb-3">This often leads to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Forgetting concepts during exams</li>
            <li>Poor answer presentation</li>
            <li>Weak time management</li>
            <li>Panic during tests</li>
          </ul>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="The Logic Behind the 45-Hour Revision Model">
          <p>
            The 45-hour model is not about speed.
            <br />
            <strong>It is about impact.</strong>
          </p>

          <p className="mt-4">
            Instead of revising everything randomly, time is divided into focused
            learning blocks designed to improve:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Concept clarity</li>
            <li>Question understanding</li>
            <li>Application skills</li>
            <li>Exam confidence</li>
          </ul>

          <p className="mt-4">
            Each hour has a purpose. Nothing is wasted.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="How the 45 Hours Are Used Effectively">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Concept Reinforcement:</strong> Weak concepts are fixed
              first. Strong areas are not unnecessarily repeated.
            </li>
            <li>
              <strong>Question Pattern Mastery:</strong> Students learn how
              examiners think through previous-year and model questions.
            </li>
            <li>
              <strong>Active Practice:</strong> Writing answers, solving
              numericals, and applying logic — not passive reading.
            </li>
            <li>
              <strong>Continuous Testing:</strong> Small tests ensure mistakes
              are identified early.
            </li>
            <li>
              <strong>Guided Correction:</strong> Errors are corrected calmly,
              helping students learn without fear.
            </li>
          </ol>
        </ArticleSection>

        {/* Highlight */}
        <div className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3">
            Why Students Feel Calm Instead of Stressed
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>They know what they know</li>
            <li>They know what they don’t know</li>
            <li>They know what to revise next</li>
          </ul>
          <p className="mt-4 font-medium">
            Clarity removes fear.
          </p>
        </div>

        {/* Conclusion */}
        <ArticleSection title="The Real Benefit">
          <p>
            The 45-hour approach doesn’t push students to study harder.
            It trains them to think better, manage time, and stay confident.
          </p>

          <p className="mt-6 font-semibold text-gray-900">
            That is why results improve — without burnout.
          </p>
        </ArticleSection>

      </div>
    </section>
  );
}

/* Reusable Section Component */
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
