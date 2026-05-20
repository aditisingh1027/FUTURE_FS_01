import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants';

const KMIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4 L4 20" />
    <path d="M4 12 L12 4" />
    <path d="M4 12 L12 20" />
    <path d="M14 4 L14 20" />
    <path d="M14 4 L20 12 L14 20" />
  </svg>
);

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  const linkClass = isDark
    ? 'text-slate-400 hover:text-white'
    : 'text-slate-500 hover:text-slate-900';

  const iconClass = isDark
    ? 'bg-white/5 border-white/5 text-slate-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40'
    : 'bg-black/5 border-black/8 text-slate-500 hover:text-slate-900 hover:bg-violet-100 hover:border-violet-400/40';

  return (
    <footer
      className="w-full border-t backdrop-blur-md py-8 px-6 md:px-12 relative z-10"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3 max-w-sm text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-md shadow-violet-500/20">
              <KMIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="wordmark text-base">KnowMeMore</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Portfolio of Aditi Kumari Singh — All About Her.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} to={link.href} className={`transition-colors ${linkClass}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${iconClass}`}
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            Aditi Kumari Singh
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
