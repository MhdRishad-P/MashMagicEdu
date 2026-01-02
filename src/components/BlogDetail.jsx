import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

import MentoringArticle from "../components/blogSections/mentoringArticle";
import FortyFive from "../components/blogSections/FourtyFive";
import StudyHardLearnLess from "./blogSections/StudyHardLessLearn";
import EmotionalSupportVsPressure from "./blogSections/EmotionalSupportVsPressure";
import WhyMashMagic from "./blogSections/WhyMashMagic";
import OnlineTuition2026 from "./blogSections/OnlineTuition2026";

/* 🔥 Component Map */
const ARTICLE_COMPONENTS = {
  mentoring: MentoringArticle,
  fortyFive: FortyFive,
  studyHardLearnLess: StudyHardLearnLess,
  emotionalSupportVsPressure: EmotionalSupportVsPressure,
  WhyMashMagic: WhyMashMagic,
  onlineTuition2026: OnlineTuition2026,
};

export default function BlogDetail() {
  const { id } = useParams();

  const blog = blogs.find(
    (b) => b.id === id || b.slug === id
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  /* 🔥 Render component-based article */
  if (blog.type === "component") {
    const ArticleComponent =
      ARTICLE_COMPONENTS[blog.componentKey];

    if (!ArticleComponent) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          Article component missing
        </div>
      );
    }

    return <ArticleComponent />;
  }

  /* ✨ Render text-based article */
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {blog.title}
        </h1>

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl mb-6"
        />

        <p className="text-lg leading-relaxed text-gray-700">
          {blog.content}
        </p>
      </div>
    </section>
  );
}
