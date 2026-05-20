import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap, MapPin, Calendar, CheckCircle2,
  Briefcase, Award, ChevronDown, ArrowRight, Sparkles, Heart, Zap
} from 'lucide-react';
import { SKILL_CATEGORIES, EXPERIENCE_DATA, BENTO_ITEMS } from '../utils/constants';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const AboutPage = ({ theme }) => {
  const [expandedCert, setExpandedCert] = useState(null);
  const isDark = theme === 'dark';

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };
  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/25' : 'border-black/8 hover:border-violet-400/25';
  const pillClass = isDark
    ? 'bg-white/5 border-white/10 hover:bg-violet-500/15 hover:border-violet-500/35'
    : 'bg-black/4 border-black/8 hover:bg-violet-50 hover:border-violet-400/35';
  const nodeBg = isDark ? 'bg-slate-950' : 'bg-white';

  return (
    <div className="min-h-screen pt-24 pb-20 px-5 md:px-10 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* ── Page header ── */}
        <motion.div {...fade()} className="flex flex-col gap-3 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>About me</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}>
            The person behind the <span className="text-gradient">code</span>
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={ts}>
            A quick look at who I am, what I study, what I've built, and what I'm working towards.
          </p>
        </motion.div>

        {/* ── Intro + Education bento row ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Intro card — wider */}
          <motion.div {...fade(0.05)}
            className={`md:col-span-7 glass-panel rounded-3xl p-7 flex flex-col gap-5 relative overflow-hidden group shadow-lg ${cardBorder}`}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">01 // intro</span>
            <div className="flex flex-col gap-3 relative z-10">
              <h2 className="text-xl font-heading font-bold" style={tp}>Hi, I'm Aditi 👋</h2>
              <p className="text-sm leading-relaxed" style={ts}>
                I'm a third-year Computer Science student who got into coding because I wanted to build things — not just study them. I started with basic web pages, got curious about how backends work, then fell into the rabbit hole of AI and ML.
              </p>
              <p className="text-sm leading-relaxed" style={ts}>
                Right now I'm most excited about full-stack development and exploring how AI tools can make products smarter. I like working on real projects with real users — the kind where you actually have to think about what you're building and why.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t relative z-10" style={{ borderColor: 'var(--border-subtle)' }}>
              {['Building things', 'Learning in public', 'Open source', 'AI/ML exploration'].map(tag => (
                <span key={tag} className={`px-3 py-1 rounded-full text-xs border transition-colors ${pillClass}`} style={ts}>{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div {...fade(0.1)}
            className={`md:col-span-5 glass-panel rounded-3xl p-7 flex flex-col gap-5 group shadow-lg ${cardBorder}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">02 // education</span>
              <GraduationCap className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-heading font-bold leading-snug" style={tp}>
                  B.Tech — Computer Science & Engineering
                </h3>
                <span className="text-sm font-medium text-indigo-400">CV Raman Global University</span>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="flex items-center gap-1 text-xs" style={tm}>
                    <MapPin className="w-3 h-3" /> Bhubaneswar, Odisha
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={tm}>
                    <Calendar className="w-3 h-3" /> 2023 – 2027
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center justify-between text-xs" style={tm}>
                  <span>Current CGPA</span>
                  <span className="font-mono font-bold text-green-500">8.24</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: isDark ? '#1e293b' : '#e2e8f0' }}>
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" style={{ width: '82%' }} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-xs font-semibold" style={tm}>Relevant coursework</span>
              <div className="flex flex-wrap gap-1.5">
                {['DSA', 'DBMS', 'OOPs', 'OS', 'CN', 'ML Fundamentals'].map(c => (
                  <span key={c} className={`px-2.5 py-0.5 rounded-lg text-[11px] border ${pillClass}`} style={ts}>{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Currently / Interests row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Zap,
              color: 'text-amber-400',
              label: '03 // currently',
              title: 'What I\'m up to',
              items: [
                'Interning at Future Interns (MERN)',
                'Building Campusync with my team',
                'Learning more about AI/ML pipelines',
                'Exploring Next.js & TypeScript',
              ]
            },
            {
              icon: Heart,
              color: 'text-rose-400',
              label: '04 // interests',
              title: 'What excites me',
              items: [
                'AI tools & how they\'re evolving',
                'Clean, minimal UI design',
                'Open source contributions',
                'Building things that solve real problems',
              ]
            },
            {
              icon: Award,
              color: 'text-violet-400',
              label: '05 // goals',
              title: 'Where I\'m headed',
              items: [
                'Land a strong SDE/AI internship',
                'Ship more open-source projects',
                'Get better at system design',
                'Graduate in 2027 with a solid portfolio',
              ]
            },
          ].map(({ icon: Icon, color, label, title, items }, i) => (
            <motion.div key={label} {...fade(i * 0.08)}
              className={`glass-panel rounded-3xl p-6 flex flex-col gap-4 group shadow-lg ${cardBorder}`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono uppercase tracking-widest ${color}`}>{label}</span>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <h3 className="text-base font-heading font-semibold" style={tp}>{title}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed" style={ts}>
                    <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Skills ── */}
        <motion.div {...fade(0.05)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">06 // skills</span>
            <h2 className="text-2xl font-heading font-bold" style={tp}>What I work with</h2>
            <p className="text-sm" style={ts}>Still adding to this list every month.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.title} {...fade(i * 0.07)}
                  className={`glass-panel rounded-2xl p-6 flex flex-col gap-4 group shadow-md ${cardBorder}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                    </div>
                    <h3 className="text-sm font-heading font-semibold" style={tp}>{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    {cat.skills.map(skill => (
                      <span key={skill}
                        className={`px-3 py-1 rounded-xl border text-xs font-medium transition-colors flex items-center gap-1.5 ${pillClass}`}
                        style={ts}
                      >
                        <CheckCircle2 className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Experience timeline ── */}
        <motion.div {...fade(0.05)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">07 // experience</span>
            <h2 className="text-2xl font-heading font-bold" style={tp}>Where I've worked & learned</h2>
          </div>
          <div className="relative ml-3 pl-8 flex flex-col gap-8"
            style={{ borderLeft: '2px solid var(--border-subtle)' }}>
            {EXPERIENCE_DATA.map((item, i) => (
              <motion.div key={item.id} {...fade(i * 0.1)} className="relative group">
                {/* Node */}
                <div className={`absolute -left-[21px] top-5 w-5 h-5 rounded-full border-2 border-violet-500 flex items-center justify-center shadow-md shadow-violet-500/30 group-hover:scale-110 transition-transform ${nodeBg}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                </div>
                <div className={`glass-panel rounded-2xl p-6 flex flex-col gap-4 shadow-md ${cardBorder}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-base font-heading font-bold" style={tp}>{item.role}</h3>
                      <span className="text-sm flex items-center gap-1.5" style={ts}>
                        <Briefcase className="w-3.5 h-3.5 text-violet-400" />{item.company}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-xs font-mono text-violet-400">{item.period}</span>
                      <span className="text-xs flex items-center gap-1" style={tm}>
                        <MapPin className="w-3 h-3" />{item.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={ts}>{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    {item.skills.map(s => (
                      <span key={s} className={`px-2.5 py-1 rounded-lg border text-xs transition-colors ${pillClass}`} style={ts}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div {...fade(0.05)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">08 // certifications</span>
            <h2 className="text-2xl font-heading font-bold" style={tp}>Credentials</h2>
          </div>
          <div className="flex flex-col gap-3">
            {BENTO_ITEMS.certifications.map((cert, idx) => (
              <motion.div key={idx} {...fade(idx * 0.07)}
                className={`glass-panel rounded-2xl p-5 shadow-md ${cardBorder}`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => cert.modules ? setExpandedCert(expandedCert === idx ? null : idx) : null}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold" style={tp}>{cert.name}</span>
                      <span className="text-xs" style={tm}>{cert.issuer}</span>
                    </div>
                  </div>
                  {cert.modules && (
                    <ChevronDown
                      className={`w-4 h-4 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${expandedCert === idx ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
                <AnimatePresence>
                  {cert.modules && expandedCert === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 ml-11 flex flex-col gap-1.5 border-l border-indigo-500/20 pl-4">
                        {cert.modules.map((mod, mIdx) => (
                          <span key={mIdx} className="text-xs font-mono" style={ts}>
                            {mIdx + 1}. {mod}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA footer ── */}
        <motion.div {...fade(0.05)}
          className={`glass-panel rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 ${cardBorder}`}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-heading font-bold" style={tp}>Want to work together?</h3>
            <p className="text-sm" style={ts}>I'm open to internships, collabs, and interesting projects.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 transition-all group flex-shrink-0"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
