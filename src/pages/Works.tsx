import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionLabel } from '../components/ui/SectionLabel';

export function Works() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ['All', 'Design', 'Develop', 'Market', 'Scale'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(filteredProjects[(currentIndex + 1) % filteredProjects.length]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length]);
  };

  // Close on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedProject(null);
  };

  return (
    <div className="flex flex-col w-full min-h-screen" onKeyDown={handleKeyDown}>
      {/* Page Header */}
      <header className="bg-ivory py-20 px-8 md:px-16 border-b border-border-gray">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <SectionLabel>OUR WORK</SectionLabel>
            <h1
              className="font-sans font-bold text-charcoal leading-tight mt-4"
              style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
            >
              Works
            </h1>
            <p className="font-sans text-[16px] text-text-gray font-light mt-3">
              Branding · Strategy · Design · Development
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-[100px] z-40 bg-ivory border-b border-border-gray py-4 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-5 py-2 text-[12px] font-medium tracking-wide transition-colors duration-200',
                  filter === cat
                    ? 'bg-charcoal text-white'
                    : 'bg-transparent border border-border-gray text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-text-gray text-xs font-sans">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>

      {/* Project Grid */}
      <main className="flex-grow bg-ivory py-12 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={((index % 3) * 100) as 0 | 100 | 200 | 300}>
              <div
                className="bg-white border border-border-gray overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-text-gray text-[11px] font-mono">{project.id}</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-gold font-medium border border-gold px-2.5 py-1">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-[18px] text-charcoal">{project.name}</h3>
                  <p className="font-sans font-light text-[13px] text-text-gray mt-2 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-light-gray text-charcoal text-[11px] px-2.5 py-1 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-3xl w-full overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative bg-light-gray flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 md:h-full object-cover"
              />
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white hover:bg-[#98F499] text-charcoal flex items-center justify-center shadow-sm transition-colors"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white hover:bg-[#98F499] text-charcoal flex items-center justify-center shadow-sm transition-colors"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto relative">
              <button
                className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={22} />
              </button>

              <span className="text-gold text-[11px] uppercase tracking-[0.15em] font-medium mb-3 block">
                {selectedProject.category}
              </span>
              <h2 className="font-sans font-bold text-[28px] text-charcoal leading-tight mb-4">
                {selectedProject.name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="bg-light-gray text-charcoal text-[11px] px-2.5 py-1 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-8 h-px bg-border-gray mb-6"></div>

              <p className="font-sans font-light text-[15px] text-text-gray leading-relaxed flex-grow">
                {selectedProject.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-gold transition-colors duration-200 px-6 py-3 text-[13px] font-semibold tracking-wide mt-8 w-fit"
                onClick={(e) => e.preventDefault()}
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
