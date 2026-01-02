import React from "react";
import { Link } from "react-router-dom";

export default function EmotionalSupportVsPressure() {
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
          Emotional Support vs Pressure: The Parenting Balance Every Child Needs in 2026
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-6">
          Every parent wants their child to succeed. Every parent wants to see
          confidence, happiness, and growth.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Yet, in many homes, academic discussions slowly turn into stress-filled
          conversations — not because parents don’t care, but because they care
          deeply and don’t know where to draw the line.
        </p>

        <p className="text-lg leading-relaxed mb-12 font-semibold text-gray-900">
          Emotional support is no longer optional in education.  
          It is essential.
        </p>

        {/* Section */}
        <ArticleSection title="Why Children Feel More Pressure Than Ever Before">
          <p className="mb-4">
            Children today grow up in a world filled with expectations:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Competitive exams starting at a young age</li>
            <li>Constant comparison with classmates and relatives</li>
            <li>Exposure to toppers and achievements on social media</li>
            <li>Fear of disappointing parents and teachers</li>
            <li>Less free time and higher academic load</li>
          </ul>

          <p className="mt-6">
            Even well-intentioned advice can feel overwhelming to a child.
            What parents see as motivation, children often feel as pressure.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="How Pressure Silently Affects a Child’s Mind">
          <p className="mb-4">
            Pressure doesn’t always show as rebellion. More often, it appears as:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Sudden loss of interest in studies</li>
            <li>Avoidance of difficult subjects</li>
            <li>Increased irritability or silence</li>
            <li>Fear before exams</li>
            <li>Drop in confidence despite effort</li>
          </ul>

          <p className="mt-6">
            Children stop enjoying learning not because they are weak — but
            because they feel unsafe to make mistakes.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="The Emotional Gap Between Parents and Children">
          <p className="mb-4 font-medium">Parents usually ask:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>“Why aren’t you focusing?”</li>
            <li>“Why are your marks dropping?”</li>
            <li>“We are doing everything for you.”</li>
          </ul>

          <p className="mb-4 font-medium">Children silently feel:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>“What if I fail?”</li>
            <li>“What if I disappoint them?”</li>
            <li>“Why does no one understand how I feel?”</li>
          </ul>

          <p className="mt-6">
            This emotional gap slowly damages both learning and relationships.
          </p>
        </ArticleSection>

        {/* Highlight */}
        <div className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3">
            What Emotional Support Truly Means
          </h3>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Listening without immediate judgment</li>
            <li>Allowing children to express fear and confusion</li>
            <li>Encouraging effort instead of only results</li>
            <li>Staying calm during failures</li>
            <li>Reassuring the child that marks do not define worth</li>
          </ul>

          <p className="font-medium">
            Emotionally supported children are not lazy.  
            They are brave enough to try.
          </p>
        </div>

        {/* Section */}
        <ArticleSection title="Why Children Learn Better When They Feel Safe">
          <p className="mb-4">
            The brain learns best in a calm state. When fear reduces:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Focus improves</li>
            <li>Memory strengthens</li>
            <li>Curiosity returns</li>
            <li>Confidence grows</li>
          </ul>

          <p className="mt-6 font-medium">
            Pressure blocks learning.  
            Safety unlocks potential.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="Why Parents Feel Confused in 2026">
          <ul className="list-disc pl-6 space-y-2">
            <li>Syllabus patterns have changed</li>
            <li>Teaching methods differ from their school days</li>
            <li>Exams demand application, not memorization</li>
            <li>Children face psychological stress parents never faced</li>
          </ul>

          <p className="mt-6">
            Parents want to help — but don’t know how much to push and when to
            step back.
          </p>
        </ArticleSection>

        {/* Section */}
        <ArticleSection title="How External Mentors Support Both Parents and Children">
          <ul className="list-disc pl-6 space-y-2">
            <li>Handle daily academic follow-ups</li>
            <li>Understand emotional and learning struggles</li>
            <li>Communicate issues calmly</li>
            <li>Guide students professionally</li>
            <li>Keep parents informed without tension</li>
          </ul>

          <p className="mt-6">
            Children often express themselves more freely to mentors.
            Parents receive clarity without conflict.
          </p>
        </ArticleSection>

        {/* Conclusion */}
        <ArticleSection title="Final Thought">
          <p>
            Children don’t need perfect parents.  
            They need parents who understand balance.
          </p>

          <p className="mt-4">
            When emotional support replaces pressure:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Confidence grows</li>
            <li>Fear reduces</li>
            <li>Performance improves</li>
            <li>Relationships strengthen</li>
          </ul>

          <p className="mt-6 font-semibold text-gray-900">
            Because the strongest academic advantage a child can have is
            feeling supported at home.
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
