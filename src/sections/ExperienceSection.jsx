import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../utils/constants';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const ExperienceSection = ({ theme }) => {
  const isDark = theme === 'dark';

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };
  const border = { borderColor: 'var(--border-subtle)' };

  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/30' : 'border-black/8 hover:border-violet-400/30';
  const nodeBg = isDark ? 'bg-slate-950' : 'bg-white';
  const skillPill = isDark
    ? 'bg-white/5 border-white/10 group-hover:border-violet-500/30'
    : 'bg-black/5 border-black/8 group-hover:border-violet-400/30';

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            Where I've <span className="text-gradient">worked & learned</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-lg" style={ts}
          >
            Internships, team projects, and the academic work I'm most proud of.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-32 pl-6 md:pl-12 flex flex-col gap-12"
          style={{ borderLeft: '2px solid var(--border-subtle)' }}>

          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[31px] md:-left-[55px] top-6 w-6 h-6 rounded-full border-2 border-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:scale-125 group-hover:border-indigo-400 transition-all ${nodeBg}`}>
                <div className="w-2 h-2 rounded-full bg-violet-400 group-hover:bg-indigo-300 transition-colors" />
              </div>

              {/* Desktop period label */}
              <div className="hidden md:flex flex-col items-end absolute -left-[220px] top-5 w-40 text-right pr-4">
                <span className="text-sm font-mono font-bold text-violet-400 flex items-center gap-1.5 justify-end">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </span>
                <span className="text-xs font-medium flex items-center gap-1 justify-end mt-1" style={tm}>
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                className={`glass-panel p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-xl ${cardBorder}`}
              >
                {/* Mobile period */}
                <div className="flex md:hidden items-center justify-between pb-4 mb-2" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="text-xs font-mono font-bold text-violet-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /><span>{item.period}</span>
                  </span>
                  <span className="text-xs font-medium flex items-center gap-1" style={tm}>
                    <MapPin className="w-3 h-3" /><span>{item.location}</span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-heading font-bold group-hover:text-violet-400 transition-colors" style={tp}>
                    {item.role}
                  </h3>
                  <span className="text-base font-semibold flex items-center gap-2" style={ts}>
                    <Briefcase className="w-4 h-4 text-violet-400" />
                    <span>{item.company}</span>
                  </span>
                </div>

                <p className="text-base leading-relaxed font-normal" style={ts}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  {item.skills.map((skill) => (
                    <span key={skill}
                      className={`px-3 py-1 rounded-xl border text-xs font-medium transition-colors flex items-center gap-1.5 ${skillPill}`}
                      style={ts}
                    >
                      <CheckCircle2 className="w-3 h-3 text-violet-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
