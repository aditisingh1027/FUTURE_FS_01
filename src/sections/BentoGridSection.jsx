import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BENTO_ITEMS } from '../utils/constants';
import { ArrowRight, FileText, Award, Briefcase, Cpu, Sparkles, ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';

const BentoGridSection = ({ onOpenResume, theme }) => {
  const [expandedCert, setExpandedCert] = useState(null);
  const isDark = theme === 'dark';

  const cardClass = `glass-panel rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden group shadow-xl`;
  const borderBase = isDark ? 'border-white/10' : 'border-black/8';
  const textPrimary = { color: 'var(--text-primary)' };
  const textSecondary = { color: 'var(--text-secondary)' };
  const textMuted = { color: 'var(--text-muted)' };
  const borderStyle = { borderColor: 'var(--border-subtle)' };
  const skillPill = isDark
    ? 'bg-white/5 border-white/10 text-slate-300 group-hover:border-purple-500/30'
    : 'bg-black/5 border-black/8 text-slate-600 group-hover:border-purple-400/30';

  return (
    <section id="bento" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Overview</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={textPrimary}
          >
            A bit about <span className="text-gradient">me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-xl" style={textSecondary}
          >
            Skills, experience, certifications, and a few numbers — all in one place.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. ABOUT */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-8 p-8 ${cardClass} ${borderBase} hover:border-violet-500/30`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all pointer-events-none" />
            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest font-mono">01 // {BENTO_ITEMS.about.title}</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold leading-snug" style={textPrimary}>
                I like building things that <span className="text-gradient">actually work.</span>
              </h3>
              <p className="text-base leading-relaxed" style={textSecondary}>
                {BENTO_ITEMS.about.description}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t relative z-10" style={borderStyle}>
              <div className="flex items-center gap-2 text-xs font-medium" style={textMuted}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Open to internships, roles & collabs</span>
              </div>
            </div>
          </motion.div>

          {/* 2. STATS */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-4 p-8 ${cardClass} ${borderBase} hover:border-indigo-500/30`}
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest font-mono relative z-10">02 // Metrics</span>
            <div className="flex flex-col gap-6 relative z-10 my-auto">
              {BENTO_ITEMS.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-indigo-500/40 pl-4">
                  <span className="text-3xl font-bold font-mono tracking-tight" style={textPrimary}>{stat.value}</span>
                  <span className="text-xs font-medium mt-0.5" style={textMuted}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. SKILLS */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-5 p-8 ${cardClass} ${borderBase} hover:border-purple-500/30`}
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest font-mono">03 // Core Stack</span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>
              <h4 className="text-xl font-heading font-bold" style={textPrimary}>Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {BENTO_ITEMS.skills.map((skill) => (
                  <span key={skill} className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${skillPill}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/skills" className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-4 group/link w-fit">
              <span>All skills →</span>
            </Link>
          </motion.div>

          {/* 4. EXPERIENCE */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-4 p-8 ${cardClass} ${borderBase} hover:border-violet-500/30`}
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest font-mono">04 // Experience</span>
                <Briefcase className="w-4 h-4 text-violet-400" />
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <span className="text-xs font-mono text-violet-400">{BENTO_ITEMS.experience.period}</span>
                <h4 className="text-xl font-heading font-bold mt-1" style={textPrimary}>{BENTO_ITEMS.experience.role}</h4>
                <span className="text-sm font-medium" style={textSecondary}>{BENTO_ITEMS.experience.company}</span>
              </div>
            </div>
            <Link to="/experience" className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 mt-4 group/link w-fit">
              <span>Full timeline →</span>
            </Link>
          </motion.div>

          {/* 5. CERTIFICATIONS with dropdown */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-3 p-8 ${cardClass} ${borderBase} hover:border-indigo-500/30`}
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest font-mono">05 // Credentials</span>
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex flex-col gap-3 pt-2">
                {BENTO_ITEMS.certifications.map((cert, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div
                      className="flex flex-col gap-0.5 border-l-2 border-indigo-500/30 pl-3 cursor-pointer"
                      onClick={() => cert.modules ? setExpandedCert(expandedCert === idx ? null : idx) : null}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold leading-tight" style={textPrimary}>{cert.name}</span>
                        {cert.modules && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${expandedCert === idx ? 'rotate-180' : ''}`}
                          />
                        )}
                      </div>
                      <span className="text-xs" style={textMuted}>{cert.issuer}</span>
                    </div>

                    {/* Modules Dropdown */}
                    <AnimatePresence>
                      {cert.modules && expandedCert === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-indigo-500/20 pl-3">
                            {cert.modules.map((mod, mIdx) => (
                              <span key={mIdx} className="text-[11px] font-mono py-0.5" style={textSecondary}>
                                {mIdx + 1}. {mod}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 6. FEATURED PROJECT */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-12 lg:col-span-6 p-8 ${cardClass} ${borderBase} hover:border-violet-500/30`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all pointer-events-none" />
            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest font-mono">06 // Featured Work</span>
              <h4 className="text-2xl font-heading font-bold" style={textPrimary}>{BENTO_ITEMS.featuredProject.title}</h4>
              <p className="text-sm leading-relaxed" style={textSecondary}>{BENTO_ITEMS.featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {BENTO_ITEMS.featuredProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[11px] font-mono text-violet-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/projects" className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 mt-4 group/link w-fit">
              <span>See all projects →</span>
            </Link>
          </motion.div>

          {/* 7. GITHUB */}
          <motion.a
            href="https://github.com/aditisingh1027"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-6 lg:col-span-3 p-8 ${cardClass} ${borderBase} hover:border-white/30 transition-all cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest font-mono" style={textMuted}>07 // Codebase</span>
              <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" style={textPrimary} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-heading font-bold flex items-center gap-2" style={textPrimary}>
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:text-white transition-colors" style={textMuted} />
              </h4>
              <p className="text-xs" style={textMuted}>Where the actual code lives.</p>
            </div>
          </motion.a>

          {/* 8. RESUME */}
          <motion.button
            onClick={onOpenResume}
            whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
            className={`md:col-span-6 lg:col-span-3 p-8 ${cardClass} ${borderBase} hover:border-violet-500/30 transition-all cursor-pointer text-left`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest font-mono">08 // CV</span>
              <FileText className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-heading font-bold flex items-center gap-2" style={textPrimary}>
                <span>Resume</span>
                <ExternalLink className="w-4 h-4 text-violet-400 group-hover:text-white transition-colors" />
              </h4>
              <p className="text-xs" style={textMuted}>One page. No fluff.</p>
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default BentoGridSection;
