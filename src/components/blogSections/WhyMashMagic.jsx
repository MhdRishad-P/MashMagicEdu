import React from "react";
import { Link } from "react-router-dom";

export default function WhyMashMagic() {
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
          Why Mash Magic Is India’s First True Mentoring-Based Learning Platform
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          For a long time, education followed a simple belief. If a child was not
          performing well, the solution was to find a better teacher, add another
          class, or increase study hours.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Teaching became the center of education, and everything else was
          expected to fall into place automatically.
        </p>

        <p className="text-lg leading-relaxed mb-12 font-semibold text-gray-900">
          As we move into 2026, something has become increasingly clear.  
          Despite better teachers and unlimited content, many students are still
          struggling — not because they don’t understand lessons, but because
          they don’t know how to manage their learning lives.
        </p>

        {/* Section */}
        <ArticleSection title="The Silent Struggle Students Carry Every Day">
          <p className="mb-4">
            Many students attend classes regularly. They listen, take notes,
            complete homework, and even revise. On the surface, everything looks
            fine.
          </p>

          <p className="mb-4">
            Yet beneath that routine, confusion quietly builds. Students often
            don’t know whether they are studying the right way, revising at the
            right time, or focusing on the right priorities.
          </p>

          <p>
            Teaching delivers lessons — but no one asks how the child is coping
            between those lessons.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="Why Teaching, No Matter How Good, Has Limits">
          <p className="mb-4">
            Teaching is essential. Good teachers make concepts clearer and
            learning easier. But teaching has a boundary.
          </p>

          <p className="mb-4">
            Once class ends, students are left alone to manage revision,
            distractions, emotions, and expectations.
          </p>

          <p>
            When students struggle, the system responds by adding more teaching —
            not realizing the real problem lies elsewhere.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="The Missing Presence in a Student’s Life">
          <p className="mb-4">
            What most students lack is not intelligence or effort.
          </p>

          <p className="mb-4 font-medium">
            They lack consistent personal guidance.
          </p>

          <p>
            They need someone who notices when focus drops, when motivation fades,
            when fear builds, and when habits start slipping — day by day.
          </p>
        </ArticleSection>

        {/* Highlight */}
        <div className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3">
            That Role Is Mentoring
          </h3>

          <p>
            Mentoring connects academics, habits, emotions, and direction —
            something no single class or system can do alone.
          </p>
        </div>

        {/* Section */}
        <ArticleSection title="Why Mash Magic Was Built Around Mentoring">
          <p className="mb-4">
            Mash Magic was not designed to replace teachers or compete with
            schools. It was designed to support students in the spaces where they
            struggle the most — outside the classroom.
          </p>

          <p>
            By placing mentoring at the center, Mash Magic ensures that every
            student has consistent guidance, habit tracking, and emotional
            support — not occasionally, but daily.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="What Changes When Mentoring Enters the Picture">
          <p className="mb-4">
            When students know someone is paying attention to their daily
            progress, learning changes.
          </p>

          <p>
            Mentoring doesn’t create pressure. It creates clarity. Confidence
            grows naturally, and performance improves without force.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="How This Helps Parents Without Adding Stress">
          <p className="mb-4">
            Parents want the best for their children but often feel unsure about
            how much to push and when to step back.
          </p>

          <p>
            Mentoring reduces this pressure. Parents receive clarity. Students
            feel supported. Trust replaces tension.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="Education Is Changing — And Mash Magic Reflects That Change">
          <p>
            Education in 2026 is no longer about delivering more content. Content
            is everywhere.
          </p>

          <p className="mt-4 font-medium">
            What students need now is guidance, structure, and emotional balance.
          </p>
        </ArticleSection>

        {/* Conclusion */}
        <ArticleSection title="Final Thought">
          <p>
            Students don’t need more classes.
          </p>

          <p className="mt-4 font-semibold text-gray-900">
            They need someone who walks with them consistently.
          </p>

          <p className="mt-6">
            That is why Mash Magic chose mentoring — not as an extra feature, but
            as the foundation.
          </p>

          <p className="mt-4 font-semibold text-gray-900">
            When guidance becomes personal and consistent, learning stops feeling
            heavy — and growth becomes natural.
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
