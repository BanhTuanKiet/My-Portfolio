import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import { getAllArticles } from "@/lib/articles"

export default function KnowledgeSharing() {
    const articles = getAllArticles()

    return (
        <section id="knowledge" className="py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Chia Sẻ Kiến Thức</h2>
                    <p className="text-slate-400 text-lg">Chia sẻ góc nhìn và hướng dẫn về JavaScript và Java</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/knowledge/${article.slug}`}
                            className="group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{article.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.topics.map((topic, topicIndex) => (
                                    <span key={topicIndex} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                                        {topic}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                                Đọc thêm
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}