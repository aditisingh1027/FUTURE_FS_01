import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Coffee } from 'lucide-react';
import aditiProfile from '../assets/aditi-profile.jpeg';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../utils/constants';

const HeroSection = ({ onOpenResume, theme }) => {
  const isDark = theme === 'dark';

  const socialBtn = isDark
    ? 'bg-white/5 border-white/5 text-slate-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/20'
    : 'bg-black/5 border-black/8 text-slate-500 hover:text-slate-900 hover:border-violet-400/40 hover:bg-violet-50';
  const resumeBtn = isDark
    ? 'glass-panel text-slate-200 hover:text-white glass-panel-hover'
    : 'border border-black/10 bg-white/80 text-slate-700 hover:text-slate-900 hover:border-violet-400/40';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">

      {/* Softer background — one glow, not two */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-5"
        >
          {/* Small status pill — no spin */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Open to internships & collaborations</span>
          </div>

          {/* Heading — less rigid line breaks */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-heading font-bold leading-[1.18] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Hi, I'm Aditi —<br />
            I build things for the <span className="text-gradient">web</span> and<br />
            explore <span className="text-gradient">AI</span> on the side.
          </h1>

          {/* Subtitle — conversational */}
          <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            CSE student at CV Raman Global University. I like turning ideas into working products — full-stack apps, ML experiments, and the occasional 2am side project.
          </p>

          {/* Personal one-liner */}
          <p className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <Coffee className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>Probably debugging something right now.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 transition-all group"
            >
              <span>See my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${resumeBtn}`}
            >
              <FileText className="w-4 h-4 text-violet-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border-subtle)', width: '100%', paddingTop: '1rem' }}>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Find me on</span>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${socialBtn}`}
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT — profile image in Bento card frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Soft glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-indigo-500/8 to-transparent rounded-3xl blur-2xl pointer-events-none" />

          {/* Bento card frame — same proportions as before */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: '1px solid var(--border-subtle)',
              boxShadow: isDark
                ? '0 24px 48px -12px rgba(139,92,246,0.18), 0 8px 24px -4px rgba(0,0,0,0.4)'
                : '0 24px 48px -12px rgba(109,40,217,0.12), 0 8px 24px -4px rgba(0,0,0,0.08)'
            }}
          >
            {/* Image fills the square */}
            <img
              src={aditiProfile}
              alt="Aditi Kumari Singh"
              className="w-full h-full object-cover object-top"
            />

            {/* Subtle bottom gradient overlay — name tag */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{
                background: isDark
                  ? 'linear-gradient(to top, rgba(9,10,15,0.85) 0%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 100%)'
              }}
            >
              <p className="text-white text-sm font-semibold font-heading leading-tight">Aditi Kumari Singh</p>
              <p className="text-slate-300 text-xs mt-0.5">CSE · CV Raman Global University · 2027</p>
            </div>

            {/* Top-right status badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[11px] font-mono backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>open to work</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
