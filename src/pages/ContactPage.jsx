import React from 'react';
import ContactSection from '../sections/ContactSection';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { SOCIAL_LINKS } from '../utils/constants';

const ContactPage = ({ theme, onOpenResume }) => {
  const isDark = theme === 'dark';
  const tp = { color: 'var(--text-primary)' };
  const ts = { color: 'var(--text-secondary)' };
  const tm = { color: 'var(--text-muted)' };
  const cardBorder = isDark ? 'border-white/10 hover:border-violet-500/25' : 'border-black/8 hover:border-violet-400/25';

  const quickLinks = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      sub: 'github.com/aditisingh1027',
      href: 'https://github.com/aditisingh1027',
      color: 'text-slate-300',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      sub: 'aditi-kumari-singh',
      href: 'https://www.linkedin.com/in/aditi-kumari-singh-9b8517376/',
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Quick links bar above the form */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 pt-8 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map(({ icon: Icon, label, sub, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className={`glass-panel rounded-2xl p-4 flex items-center gap-3.5 shadow-md transition-all group ${cardBorder}`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-semibold" style={tp}>{label}</span>
                <span className="text-xs truncate" style={tm}>{sub}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={tm} />
            </motion.a>
          ))}

          {/* Resume button */}
          <motion.button
            onClick={onOpenResume}
            whileHover={{ y: -2 }}
            className={`glass-panel rounded-2xl p-4 flex items-center gap-3.5 shadow-md transition-all group text-left ${cardBorder}`}
          >
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-violet-400" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold" style={tp}>Resume</span>
              <span className="text-xs" style={tm}>View & download CV</span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Contact form section */}
      <ContactSection theme={theme} />
    </div>
  );
};

export default ContactPage;
