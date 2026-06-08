import { ArrowUpRight, Calendar } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Blog() {
  const { blogs } = siteData

  return (
    <section id="blog" className="py-24 sm:py-32 bg-tag/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="section-label">Insights & News</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
              Campaign tips &<br />
              <span className="italic text-accent">industry insights.</span>
            </h2>
          </div>
          <p className="animate-on-scroll font-body text-muted max-w-xs text-sm leading-relaxed">
            Lessons from 800+ real campaigns, straight from our team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((post, i) => (
            <article
              key={i}
              className="animate-on-scroll card-base group overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-accent rounded-full px-3 py-1 font-body text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={12} className="text-muted" />
                  <span className="font-mono text-xs text-muted">{post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-ink leading-snug group-hover:text-accent transition-colors duration-200 mb-2">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 font-body text-sm font-medium text-accent">
                  Read more <ArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
