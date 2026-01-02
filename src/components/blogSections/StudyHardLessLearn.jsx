import React from "react";
import { Link } from "react-router-dom";

export default function StudyHardLearnLess() {
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
          Why Most Students Study Hard but Learn Less in 2026
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Every year, thousands of students put in long study hours. They wake up
          early, attend school, join tuition classes, sit with books late into
          the night — yet when exam results arrive, many feel disappointed.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Parents ask,
          <br />
          <strong>“You studied so much… then why are the marks low?”</strong>
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Students silently ask themselves,
          <br />
          <strong>“Why am I not able to remember anything during exams?”</strong>
        </p>

        <p className="text-lg leading-relaxed mb-12 font-semibold text-gray-900">
          The problem is not effort.  
          The problem is how students are studying.
        </p>

        {/* Section */}
        <ArticleSection title="The Invisible Struggle Behind Long Study Hours">
          <p className="mb-4">
            Most students are sincere. They genuinely try to do well. But they
            are trapped in outdated study habits:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reading textbooks repeatedly</li>
            <li>Memorizing without understanding</li>
            <li>Watching long explanation videos passively</li>
            <li>Studying for hours without breaks</li>
            <li>Revising everything again and again</li>
          </ul>

          <p className="mt-6">
            These methods feel productive, but they don’t help the brain retain
            information. Students appear busy — but real learning remains shallow.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="The Biggest Myth: “More Hours Means Better Results”">
          <p className="mb-4">
            This belief has damaged student confidence for years. In reality:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>The brain has a limited attention span</li>
            <li>Passive reading creates an illusion of learning</li>
            <li>Long sessions reduce focus and recall</li>
            <li>Fatigue blocks memory formation</li>
          </ul>

          <p className="mt-6 font-medium">
            Learning quality matters more than learning quantity.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="How the Brain Actually Learns">
          <p className="mb-4">
            Modern learning science shows that the brain learns best when:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>It actively recalls information</li>
            <li>It applies concepts through practice</li>
            <li>It revisits topics at intervals</li>
            <li>It learns from mistakes</li>
            <li>It studies with clear goals</li>
          </ul>

          <p className="mt-6">
            Unfortunately, most students are never taught these techniques in
            school. They are taught what to study — but never how to study.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="Why Students Lose Focus So Easily">
          <p className="mb-4">
            Lack of focus is not a character flaw. It is a structural problem.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Study sessions have no clear objective</li>
            <li>Mobile phones interrupt concentration</li>
            <li>Emotional stress reduces mental energy</li>
            <li>There is no accountability system</li>
            <li>Learning feels overwhelming</li>
          </ul>

          <p className="mt-6">
            Without structure, the brain naturally seeks escape.
          </p>
        </ArticleSection>

        {/* Highlight */}
        <div className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3">
            The Difference Between Studying and Learning
          </h3>

          <p className="mb-4 font-medium">Studying means:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Sitting with books</li>
            <li>Highlighting text</li>
            <li>Reading notes</li>
          </ul>

          <p className="mb-4 font-medium">Learning means:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understanding concepts</li>
            <li>Applying knowledge</li>
            <li>Remembering during exams</li>
          </ul>
        </div>

        {/* Section */}
        <ArticleSection title="How Structured Productivity Transforms Results">
          <ul className="list-disc pl-6 space-y-2">
            <li>Study sessions have defined goals</li>
            <li>Time is divided into focused blocks</li>
            <li>Breaks are used intentionally</li>
            <li>Learning becomes active, not passive</li>
            <li>Progress is tracked daily</li>
          </ul>

          <p className="mt-6 font-medium">
            Productivity becomes natural — not forced.
          </p>
        </ArticleSection>

        {/* Conclusion */}
        <ArticleSection title="Final Thought">
          <p>
            When students stop blaming themselves and start learning the right
            way, everything changes.
          </p>

          <p className="mt-4">
            Marks improve. Confidence grows. Fear reduces.
          </p>

          <p className="mt-6 font-semibold text-gray-900">
            Because learning is not about how hard you try —  
            it’s about how well you are guided.
          </p>
        </ArticleSection>

      </div>
    </section>
  );
}

/* Reusable section component */
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
