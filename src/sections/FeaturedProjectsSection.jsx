import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../utils/constants';
import { ExternalLink, Sparkles, Zap, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';

const FeaturedProjectsSection = ({ theme }) => {
  const isDark = theme === 'dark';

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };
  const border = { borderColor: 'var(--border-subtle)' };

  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/30' : 'border-black/8 hover:border-violet-400/30';
  const tagClass = isDark
    ? 'bg-white/5 border-white/10 group-hover:border-white/20'
    : 'bg-black/5 border-black/8 group-hover:border-black/15';

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-start gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            Things I've <span className="text-gradient">built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-lg" style={ts}
          >
            A mix of team projects, solo experiments, and things I built just to see if I could.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className={`glass-panel rounded-3xl p-8 flex flex-col justify-between gap-8 relative overflow-hidden group shadow-xl ${cardBorder}`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl group-hover:from-violet-600/20 group-hover:to-indigo-600/20 transition-all pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-medium">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-heading font-bold group-hover:text-violet-400 transition-colors" style={tp}>
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider font-mono">
                    {project.subtitle}
                  </span>
                  <p className="text-sm leading-relaxed mt-2 font-normal" style={ts}>
                    {project.description}
                  </p>
                  {project.comingSoon && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      Details coming soon
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-6 relative z-10 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-1 rounded-xl border text-xs font-medium transition-colors ${tagClass}`} style={ts}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  {project.githubUrl !== '#' ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-violet-400" style={tm}>
                      <GithubIcon className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-semibold" style={tm}>
                      <GithubIcon className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </span>
                  )}

                  {project.liveUrl !== '#' ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors">
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold" style={tm}>—</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
