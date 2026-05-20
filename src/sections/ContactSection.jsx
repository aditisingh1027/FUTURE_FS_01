import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles, MessageSquare } from 'lucide-react';
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
  const border = { borderColor: 'var(--border-subtle)' };

  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/30' : 'border-black/8 hover:border-violet-400/30';
  const inputClass = isDark
    ? 'bg-white/[0.03] border-white/10 text-white placeholder:text-slate-600 focus:border-violet-500 focus:bg-white/[0.05]'
    : 'bg-black/[0.03] border-black/10 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:bg-black/[0.05]';
  const labelClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const socialBtn = isDark
    ? 'bg-white/5 border-white/5 text-slate-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/20'
    : 'bg-black/5 border-black/8 text-slate-500 hover:text-slate-900 hover:border-violet-400/40 hover:bg-violet-100';

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
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight" style={tp}
          >
            Say <span className="text-gradient">hello</span> 👋
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-lg" style={ts}
          >
            Whether it's an internship, a collab, or just a cool idea — I'm always happy to chat.
          </motion.p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Email */}
            <div className={`glass-panel p-8 rounded-3xl flex flex-col gap-4 transition-all shadow-xl group ${cardBorder}`}>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono" style={tm}>Direct Email</span>
                <h4 className="text-lg font-heading font-bold break-all" style={tp}>aaditisingh1027@gmail.com</h4>
                <p className="text-xs mt-1" style={tm}>Usually reply within a day.</p>
              </div>
            </div>

            {/* Location */}
            <div className={`glass-panel p-8 rounded-3xl flex flex-col gap-4 transition-all shadow-xl group ${cardBorder.replace('violet', 'indigo')}`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono" style={tm}>Location</span>
                <h4 className="text-xl font-heading font-bold" style={tp}>Bhubaneswar, Odisha, India</h4>
                <p className="text-xs mt-1" style={tm}>Open to remote and hybrid opportunities worldwide.</p>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col gap-4 shadow-xl" style={{ borderColor: 'var(--border-subtle)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider font-mono" style={tm}>Connect</span>
              <div className="flex items-center gap-4 pt-1">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all shadow-md ${socialBtn}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden glow-subtle ${cardBorder}`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2" style={tp}>
              <MessageSquare className="w-5 h-5 text-violet-400" />
              <span>Send a Message</span>
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center flex flex-col items-center gap-3 my-8"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl">✓</div>
                <h4 className="text-xl font-heading font-bold" style={tp}>Message Sent Successfully!</h4>
                <p className="text-sm" style={ts}>Thank you for reaching out. I'll reply promptly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@company.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className={`text-xs font-semibold uppercase tracking-wider font-mono ${labelClass}`}>{label}</label>
                    <input
                      type={type} id={id} required placeholder={placeholder}
                      value={formData[id]}
                      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                      className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none transition-all text-sm font-medium shadow-inner ${inputClass}`}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={`text-xs font-semibold uppercase tracking-wider font-mono ${labelClass}`}>
                    Project details or opportunity
                  </label>
                  <textarea
                    id="message" rows="5" required
                    placeholder="Hi Aditi! I wanted to reach out about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none transition-all text-sm font-medium shadow-inner resize-none ${inputClass}`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-medium text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all flex items-center justify-center gap-2 group mt-2"
                >
                  <span>Send it →</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
