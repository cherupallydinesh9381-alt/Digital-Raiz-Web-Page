import { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { Card, CardContent } from '@/components/ui/Card';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const CATEGORIES = ['All', 'Web Development', 'Mobile Apps', 'SEO & Marketing', 'Fintech & Cloud'];

const CASE_STUDIES_DATA = [
  {
    title: 'Microcare ENT Hospital Marketing',
    client: 'Microcare ENT',
    category: 'SEO & Marketing',
    link: 'https://www.microenthospital.com/',
    desc: 'Structured local landing directories and Google Maps optimization, raising booking query rates by 150%.',
    tags: ['SEO', 'Local Listing', 'Healthcare'],
    color: 'text-dr-rose bg-dr-rose/10 border-dr-rose/15',
  },
  {
    title: 'ChitBoss Fintech Administrator Panel',
    client: 'ChitBoss',
    category: 'Fintech & Cloud',
    link: 'http://chitboss.com/',
    desc: 'Bespoke multi-tenant administrative ledger panel built with robust backend access controls.',
    tags: ['Web App', 'Fintech', 'Role-based Access'],
    color: 'text-dr-cyan bg-dr-cyan/10 border-dr-cyan/15',
  },
  {
    title: 'Solar Sales Guru Lead Pipeline',
    client: 'Solar Sales Guru',
    category: 'SEO & Marketing',
    link: 'https://solarsalesguru.com/',
    desc: 'Targeted pay-per-click ad campaigns and responsive lead forms optimized for solar panel installations.',
    tags: ['Lead Generation', 'PPC Ads', 'Solar'],
    color: 'text-dr-amber bg-dr-amber/10 border-dr-amber/15',
  },
  {
    title: 'Dr Narayana College Portal (DRNCC)',
    client: 'DRNCC',
    category: 'Web Development',
    link: 'https://www.drncc.in/',
    desc: 'Responsive web platform showing academic programs, admissions requirements, and campus details.',
    tags: ['React', 'Education', 'SEO Optimization'],
    color: 'text-dr-violet bg-dr-violet/10 border-dr-violet/15',
  },
  {
    title: 'Carnival Castle Event Showcase',
    client: 'Carnival Castle',
    category: 'Web Development',
    link: 'https://carnivalcastle.com/',
    desc: 'Designed a highly visual media-centric portal promoting local family event bookings in Hyderabad.',
    tags: ['UI/UX Design', 'Booking Site', 'Media Optimizations'],
    color: 'text-dr-rose bg-dr-rose/10 border-dr-rose/15',
  },
  {
    title: 'Sri Balaji Solar Energies Business Site',
    client: 'Sri Balaji Solar Energies',
    category: 'Web Development',
    link: 'http://www.sribalajisolarenergies.com/',
    desc: 'Commercial industrial webpage showcasing custom solar array deployments and client savings counters.',
    tags: ['Web Development', 'Solar Energy', 'SEO'],
    color: 'text-dr-amber bg-dr-amber/10 border-dr-amber/15',
  },
  {
    title: 'Icreate Degree College Registry',
    client: 'Icreate College',
    category: 'Web Development',
    link: 'https://icreatedegreecollege.com/',
    desc: 'Online registration portal for bachelor and master degrees, integrated with file uploads.',
    tags: ['PHP', 'MySQL', 'Academic Registry'],
    color: 'text-dr-cyan bg-dr-cyan/10 border-dr-cyan/15',
  },
  {
    title: 'Sai Ram Neuro Patient Booking App',
    client: 'Sai Ram Neuro',
    category: 'Mobile Apps',
    link: 'https://sairamneuro.com/',
    desc: 'Flutter-powered native application facilitating remote doctor consult scheduling.',
    tags: ['Flutter', 'Native Android/iOS', 'Doctor Bookings'],
    color: 'text-dr-violet bg-dr-violet/10 border-dr-violet/15',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = CASE_STUDIES_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Explore the digital applications and search marketing solutions engineered for our valued associates."
      />

      {/* ── Filter & Search ── */}
      <Section spacing="sm" background="surface" className="border-b border-dr-border">
        <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={[
                  'px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300',
                  selectedCategory === cat
                    ? 'bg-dr-rose border-dr-rose text-white shadow-[0_0_16px_rgba(255,42,95,0.3)]'
                    : 'bg-dr-elevated/60 border-dr-border text-dr-text-secondary hover:border-dr-border-strong hover:text-dr-text-primary',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-dr-text-muted" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dr-elevated/80 border border-dr-border rounded-full pl-10 pr-4 py-2.5 text-xs text-dr-text-primary placeholder:text-dr-text-muted focus:border-dr-cyan focus:outline-none focus:ring-2 focus:ring-dr-cyan/20 transition-all duration-300"
            />
          </div>
        </Container>
      </Section>

      {/* ── Case Studies Grid ── */}
      <Section spacing="xl">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-dr-border rounded-2xl">
              <p className="text-sm text-dr-text-secondary">No case studies match your selection.</p>
            </div>
          ) : (
            <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, idx) => (
                <Card
                  key={idx}
                  className="group border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-7 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.color}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-lg font-bold text-dr-text-primary">
                        {project.title}
                      </h3>
                      <p className="text-xs text-dr-text-secondary leading-relaxed">{project.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-dr-border flex items-center justify-between">
                      <span className="text-[10px] text-dr-text-muted font-medium">
                        Client: <span className="text-dr-text-secondary">{project.client}</span>
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-dr-cyan hover:text-dr-rose transition-colors duration-300 group/link"
                      >
                        Visit Live
                        <ExternalLink className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </a>
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
