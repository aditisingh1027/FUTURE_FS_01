import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../utils/constants';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';

const FeaturedProjectsSection = ({ theme }) => {
  const isDark = theme === 'dark';

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };

  const cardBorder = isDark
    ? 'border-white/10 hover:border-violet-500/25'
    : 'border-black/8 hover:border-violet-400/25';

  const tagClass = isDark
    ? 'bg-white/5 border-white/8'
    : 'bg-black/4 border-black/7';

  const btnGhost = isDark
    ? 'border-white/10 text-slate-300 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/10'
    : 'border-black/10 text-slate-600 hover:border-violet-400/40 hover:text-slate-900 hover:bg-violet-50';

  return (
    <section className="py-20 px-5 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header — centered, no badge */}
        <div className="flex flex-col items-center text-center gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            Things I've Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base max-w-lg leading-relaxed" style={ts}
          >
            A few projects I genuinely enjoyed building, learning from, and occasionally debugging at 2am.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`glass-panel rounded-[1.75rem] p-8 flex flex-col gap-7 relative overflow-hidden group border transition-all shadow-lg ${cardBorder}`}
            >
              {/* Soft background glow — subtle */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/8 rounded-full blur-3xl group-hover:bg-violet-500/14 transition-all pointer-events-none" />

              {/* Content */}
              <div className="flex flex-col gap-4 relative z-10 flex-1">
                <h3
                  className="text-xl font-heading font-bold leading-snug group-hover:text-violet-400 transition-colors duration-200"
                  style={tp}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={ts}>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${tagClass}`}
                    style={ts}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div
                className="flex items-center gap-3 pt-5 relative z-10"
                style={{ borderTop: '1px solid var(--border-subtle)' }}
              >
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold shadow-sm shadow-violet-500/20 hover:shadow-violet-500/35 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}

                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${btnGhost}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </motion.a>
                )}

                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-xs italic" style={tm}>Repo & writeup coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
