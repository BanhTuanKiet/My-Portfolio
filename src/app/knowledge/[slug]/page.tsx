import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, BookOpen } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/#knowledge"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">{article.title}</h1>

          <p className="text-xl text-slate-400 leading-relaxed mb-6">{article.description}</p>

          <div className="flex flex-wrap gap-2">
            {article.topics.map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">{article.content.introduction}</p>
        </div>

        <div className="space-y-12">
          {article.content.sections.map((section, index) => (
            <section key={index} className="border-l-2 border-cyan-500/30 pl-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">{section.heading}</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{section.content}</p>

              {section.codeExample && (
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-300">
                    <code>{section.codeExample}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
          <h2 className="text-xl font-bold text-slate-100 mb-3">Conclusion</h2>
          <p className="text-slate-300 leading-relaxed">{article.content.conclusion}</p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link
            href="/#knowledge"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  )
}