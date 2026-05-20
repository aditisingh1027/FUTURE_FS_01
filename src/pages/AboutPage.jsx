import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle2, Award, ChevronDown, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES, BENTO_ITEMS } from '../utils/constants';
import aditiProfile from '../assets/aditi-profile.jpeg';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
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
  const divider = { borderColor: 'var(--border-subtle)' };

  const pill = isDark
    ? 'bg-white/5 border-white/10 hover:bg-violet-500/12 hover:border-violet-500/30'
    : 'bg-black/4 border-black/8 hover:bg-violet-50 hover:border-violet-400/30';

  const education = [
    {
      school: 'CV Raman Global University',
      degree: 'B.Tech — Computer Science & Engineering',
      spec: 'Specialization: Data Science',
      location: 'Bhubaneswar, Odisha',
      period: '2023 – 2027',
      score: '8.24',
      scoreLabel: 'CGPA',
      bar: true,
      barWidth: '82%',
    },
    {
      school: 'Chasnalla Academy',
      degree: 'Class XII — Science',
      spec: '',
      location: 'Chasnalla, Dhanbad, Jharkhand',
      period: '2022',
      score: '80%',
      scoreLabel: 'Percentage',
    },
    {
      school: 'Carmel School Digwadih',
      degree: 'Class X',
      spec: '',
      location: 'Digwadih, Dhanbad, Jharkhand',
      period: '2020',
      score: '84.8%',
      scoreLabel: 'Percentage',
    },
  ];

  const sectionHead = (title) => (
    <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-10 text-center" style={tp}>
      {title}
    </h2>
  );

  return (
    <div className="min-h-screen pt-20 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── INTRODUCTION ── */}
        <section className="py-14">
          <motion.div {...fade()}>
            {sectionHead('INTRODUCTION')}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <motion.div {...fade(0.06)} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-xl sm:text-2xl font-medium" style={tm}>Hello!!</span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold" style={tp}>
                  This is <span className="text-gradient">Aditi Kumari Singh.</span>
                </h3>
              </div>

              <div className="flex flex-col gap-4 text-base leading-relaxed" style={ts}>
                <p>
                  I'm currently pursuing Computer Science Engineering with a specialization in Data Science at CV Raman Global University, Bhubaneswar. I got into programming out of curiosity, stayed because I genuinely enjoyed building things, and somewhere along the way ended up falling into the world of web development and AI (still exploring it one bug at a time 🤷‍♀️).
                </p>
                <p>
                  I enjoy creating modern websites, experimenting with new technologies, and learning how AI tools are changing the way we build products today. Most of the time you'll find me working with technologies like Python, JavaScript, React, and FastAPI — or probably debugging something that worked perfectly five minutes ago :)
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Full-Stack Dev', 'AI / ML', 'Open Source', 'UI Design', 'Learning in public'].map(tag => (
                  <span key={tag}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${pill}`}
                    style={ts}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 transition-all group"
                >
                  <span>See my work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-all"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div {...fade(0.12)} className="flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 lg:w-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/12 to-indigo-500/8 rounded-3xl blur-2xl" />
                <div
                  className="relative rounded-3xl overflow-hidden shadow-xl"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    boxShadow: isDark
                      ? '0 20px 48px -8px rgba(139,92,246,0.18), 0 8px 20px rgba(0,0,0,0.4)'
                      : '0 20px 48px -8px rgba(109,40,217,0.10), 0 8px 20px rgba(0,0,0,0.07)',
                  }}
                >
                  <img
                    src={aditiProfile}
                    alt="Aditi Kumari Singh"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{
                      background: isDark
                        ? 'linear-gradient(to top, rgba(9,10,15,0.88) 0%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(15,23,42,0.80) 0%, transparent 100%)',
                    }}
                  >
                    <p className="text-white text-sm font-semibold">Aditi Kumari Singh</p>
                    <p className="text-slate-300 text-xs mt-0.5">CSE · Data Science · 2027</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="border-t" style={divider} />

        {/* ── EDUCATION ── */}
        <section className="py-14">
          <motion.div {...fade()}>
            {sectionHead('EDUCATION')}
          </motion.div>

          <div className="flex flex-col">
            {education.map((edu, i) => (
              <motion.div key={i} {...fade(i * 0.07)}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 items-start">
                  <div className="sm:col-span-8 flex flex-col gap-1.5">
                    <h3 className="text-lg sm:text-xl font-heading font-bold" style={tp}>{edu.school}</h3>
                    <p className="text-base" style={ts}>{edu.degree}</p>
                    {edu.spec && <p className="text-sm text-violet-400">{edu.spec}</p>}
                    <div className="flex flex-wrap gap-4 mt-1">
                      <span className="flex items-center gap-1.5 text-xs" style={tm}>
                        <MapPin className="w-3 h-3" />{edu.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={tm}>
                        <Calendar className="w-3 h-3" />{edu.period}
                      </span>
                    </div>
                  </div>
                  <div className="sm:col-span-4 flex flex-col gap-1.5 sm:items-end">
                    <span className="text-xs uppercase tracking-wider font-mono" style={tm}>{edu.scoreLabel}</span>
                    <span className="text-2xl font-bold font-mono text-green-500">{edu.score}</span>
                    {edu.bar && (
                      <div className="w-full sm:w-28 h-1.5 rounded-full overflow-hidden mt-0.5"
                        style={{ background: isDark ? '#1e293b' : '#e2e8f0' }}>
                        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                          style={{ width: edu.barWidth }} />
                      </div>
                    )}
                  </div>
                </div>
                {i < education.length - 1 && <div className="border-t" style={divider} />}
              </motion.div>
            ))}
          </div>
        </section>

        <div className="border-t" style={divider} />

        {/* ── SKILLS ── */}
        <section className="py-14">
          <motion.div {...fade()}>
            {sectionHead('SKILLS')}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.title} {...fade(i * 0.07)} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-heading font-semibold" style={tp}>{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors flex items-center gap-1.5 ${pill}`}
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
        </section>

        <div className="border-t" style={divider} />

        {/* ── CERTIFICATIONS ── */}
        <section className="py-14">
          <motion.div {...fade()}>
            {sectionHead('CERTIFICATIONS')}
          </motion.div>

          <div className="flex flex-col">
            {BENTO_ITEMS.certifications.map((cert, idx) => (
              <motion.div key={idx} {...fade(idx * 0.07)}>
                <div
                  className="py-6 flex items-start justify-between gap-4 group"
                  style={{ cursor: cert.modules ? 'pointer' : 'default' }}
                  onClick={() => cert.modules ? setExpandedCert(expandedCert === idx ? null : idx) : null}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-base font-semibold transition-colors group-hover:text-violet-400"
                        style={tp}
                      >
                        {cert.name}
                      </span>
                      <span className="text-sm" style={tm}>{cert.issuer}</span>
                    </div>
                  </div>
                  {cert.modules && (
                    <ChevronDown
                      className={`w-4 h-4 text-indigo-400 flex-shrink-0 mt-1.5 transition-transform duration-300 ${expandedCert === idx ? 'rotate-180' : ''}`}
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
                      <div className="ml-13 mb-6 pl-4 flex flex-col gap-2 border-l-2 border-indigo-500/20" style={{ marginLeft: '3.25rem' }}>
                        {cert.modules.map((mod, mIdx) => (
                          <span key={mIdx} className="text-sm" style={ts}>
                            {mIdx + 1}. {mod}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {idx < BENTO_ITEMS.certifications.length - 1 && (
                  <div className="border-t" style={divider} />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div {...fade()}
          className="rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-4"
          style={{
            background: isDark ? 'rgba(139,92,246,0.06)' : 'rgba(109,40,217,0.04)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-heading font-bold" style={tp}>Want to work together?</h3>
            <p className="text-sm" style={ts}>I'm open to internships, collabs, and interesting projects.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 transition-all group flex-shrink-0"
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
