import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../utils/constants';
import { Sparkles, Check } from 'lucide-react';

const SkillsSection = ({ theme }) => {
  const isDark = theme === 'dark';

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };

  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/30' : 'border-black/8 hover:border-violet-400/30';
  const pillClass = isDark
    ? 'bg-white/5 border-white/10 hover:bg-violet-500/20 hover:border-violet-500/40 hover:text-white'
    : 'bg-black/5 border-black/8 hover:bg-violet-100 hover:border-violet-400/40 hover:text-slate-900';

  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            What I <span className="text-gradient">work with</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-lg" style={ts}
          >
            The tools and languages I reach for most — still adding to this list every month.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`glass-panel rounded-3xl p-8 flex flex-col gap-8 relative overflow-hidden group shadow-xl ${cardBorder}`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all pointer-events-none" />

                {/* Category header */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:border-violet-500/50 transition-all shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold group-hover:text-violet-400 transition-colors" style={tp}>
                    {category.title}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5 relative z-10 pt-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-2xl border text-sm font-medium transition-all flex items-center gap-2 cursor-pointer shadow-sm ${pillClass}`}
                      style={ts}
                    >
                      <Check className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
