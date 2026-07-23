import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const BLOG_CATEGORIES = ['All', 'Web Development', 'Digital Marketing', 'Artificial Intelligence'];

const BLOG_POSTS = [
  {
    title: 'Integrating Custom Large Language Models (LLMs) in Enterprise Workflows',
    excerpt: 'How local LLM models like Llama-3 can streamline support desks, handle database queries, and protect secure client transaction datasets.',
    category: 'Artificial Intelligence',
    badgeVariant: 'advise' as const,
    author: 'Suman Akula',
    publishedAt: '2026-06-15',
    readTime: '6 min read',
    tags: ['AI', 'LLM', 'Enterprise Tech'],
  },
  {
    title: 'The Blueprint of Local SEO for Healthcare Providers',
    excerpt: 'Detailed tactics on keyword mapping, local clinic listing, and semantic web audits that drove Microcare ENT to Google Page 1.',
    category: 'Digital Marketing',
    badgeVariant: 'grow' as const,
    author: 'DigitalMarketing Lead',
    publishedAt: '2026-05-10',
    readTime: '5 min read',
    tags: ['SEO', 'Marketing', 'Healthcare'],
  },
  {
    title: 'Why Flutter Remains the Premier Framework for Cross-Platform App Development',
    excerpt: 'Deep dive into rendering threads, native API compilations, and why Flutter helps build rapid prototypes that scale on iOS and Android.',
    category: 'Web Development',
    badgeVariant: 'build' as const,
    author: 'Mobile Architect',
    publishedAt: '2026-04-20',
    readTime: '8 min read',
    tags: ['Flutter', 'Mobile Development', 'Dart'],
  },
  {
    title: 'Transitioning from Monolithic Software to Modern Cloud Microservices',
    excerpt: 'Audit roadmap for managers planning database migrations, cloud hosting setups, and microservice structures.',
    category: 'Web Development',
    badgeVariant: 'build' as const,
    author: 'Cloud Specialist',
    publishedAt: '2026-03-05',
    readTime: '7 min read',
    tags: ['Cloud', 'Microservices', 'AWS'],
  },
  {
    title: 'Social Media Optimization (SMO) Best Practices for Academic Institutions',
    excerpt: 'Case study details on organic reach, campus event campaigns, and student registry leads developed for DRNCC and Icreate.',
    category: 'Digital Marketing',
    badgeVariant: 'grow' as const,
    author: 'Branding Strategist',
    publishedAt: '2026-02-18',
    readTime: '4 min read',
    tags: ['SMO', 'Branding', 'EdTech'],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    return selectedCategory === 'All' || post.category === selectedCategory;
  });

  return (
    <>
      <PageHero
        title="Insights & News"
        subtitle="Latest technology trends, digital marketing blueprints, and enterprise custom software case details."
      />

      {/* ── Category Selector ── */}
      <Section spacing="sm" background="surface" className="border-b border-dr-border">
        <Container className="flex flex-wrap gap-2 justify-center">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={[
                'px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300',
                selectedCategory === cat
                  ? 'bg-dr-rose border-dr-rose text-white shadow-[0_0_16px_rgba(255,42,95,0.3)]'
                  : 'bg-dr-elevated/60 border-dr-border text-dr-text-secondary hover:border-dr-border-strong hover:text-dr-text-primary',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </Container>
      </Section>

      {/* ── Blog List ── */}
      <Section spacing="xl">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-dr-border rounded-2xl">
              <p className="text-sm text-dr-text-secondary">No articles found in this category.</p>
            </div>
          ) : (
            <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <Card
                  key={idx}
                  className="group border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <CardContent className="p-7 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant={post.badgeVariant}>{post.category}</Badge>
                        <div className="flex items-center gap-1 text-[10px] text-dr-text-muted">
                          <Clock className="size-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold text-dr-text-primary group-hover:text-dr-cyan transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-dr-text-secondary leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[10px] font-semibold text-dr-text-muted uppercase tracking-wider bg-dr-panel/60 border border-dr-border px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-dr-border space-y-3">
                      <div className="flex items-center justify-between text-[10px] text-dr-text-muted">
                        <span className="flex items-center gap-1.5">
                          <User className="size-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3" />
                          {post.publishedAt}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-dr-rose hover:text-dr-cyan transition-colors duration-300 group/btn"
                      >
                        Read full article
                        <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggerChildren>
          )}
        </Container>
      </Section>
    </>
  );
}
