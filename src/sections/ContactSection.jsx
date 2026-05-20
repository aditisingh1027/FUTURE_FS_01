import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const ContactSection = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };

  const cardBase = isDark
    ? 'border-white/8 hover:border-violet-500/25'
    : 'border-black/7 hover:border-violet-400/25';

  const inputClass = isDark
    ? 'bg-white/[0.03] border-white/10 text-white placeholder:text-slate-600 focus:border-violet-400 focus:bg-white/[0.05]'
    : 'bg-black/[0.02] border-black/10 text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:bg-black/[0.04]';

  const labelClass = isDark ? 'text-slate-400' : 'text-slate-500';

  const socialBtn = isDark
    ? 'bg-white/5 border-white/8 text-slate-400 hover:text-white hover:border-violet-500/35 hover:bg-violet-500/12'
    : 'bg-black/4 border-black/8 text-slate-500 hover:text-slate-900 hover:border-violet-400/35 hover:bg-violet-50';

  return (
    <section className="py-16 px-5 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header — centered, no badge */}
        <div className="flex flex-col items-center text-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base max-w-md leading-relaxed" style={ts}
          >
            Whether it's an internship, a collab, or just a cool idea — I'm always happy to chat.
          </motion.p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {/* Email card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`glass-panel p-5 rounded-2xl flex items-start gap-4 border transition-all group ${cardBase}`}
            >
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0 group-hover:bg-violet-500/18 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs font-medium" style={tm}>Email</span>
                <span className="text-sm font-semibold break-all" style={tp}>aaditisingh1027@gmail.com</span>
                <span className="text-xs mt-0.5" style={tm}>I usually reply pretty quickly unless I'm stuck debugging something.</span>
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`glass-panel p-5 rounded-2xl flex items-start gap-4 border transition-all group ${cardBase}`}
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:bg-indigo-500/18 transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium" style={tm}>Location</span>
                <span className="text-sm font-semibold" style={tp}>Bhubaneswar, Odisha, India</span>
                <span className="text-xs mt-0.5" style={tm}>Currently open to internships, collaborations, and interesting opportunities.</span>
              </div>
            </motion.div>

            {/* Socials */}
            <div
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 border"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span className="text-xs font-medium" style={tm}>Find me on</span>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.08 }} whileTap={{ scale: 0.95 }}
                      title={social.name}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${socialBtn}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className={`lg:col-span-8 glass-panel p-7 md:p-8 rounded-2xl border relative overflow-hidden ${cardBase}`}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-lg font-heading font-semibold mb-6" style={tp}>
              Send a message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center gap-3 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-green-400 text-lg">✓</div>
                <p className="text-base font-semibold" style={tp}>Message sent!</p>
                <p className="text-sm" style={ts}>Thanks for reaching out — I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className={`text-xs font-medium ${labelClass}`}>Name</label>
                    <input
                      type="text" id="name" required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all text-sm ${inputClass}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={`text-xs font-medium ${labelClass}`}>Email</label>
                    <input
                      type="email" id="email" required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all text-sm ${inputClass}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className={`text-xs font-medium ${labelClass}`}>Message</label>
                  <textarea
                    id="message" rows="5" required
                    placeholder="Say hello, share an opportunity, or just talk tech :)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all text-sm resize-none ${inputClass}`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="self-start flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-md shadow-violet-500/20 hover:shadow-violet-500/35 transition-all group"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
