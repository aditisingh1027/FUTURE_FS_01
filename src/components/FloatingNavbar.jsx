import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';

const KMIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4 L4 20" /><path d="M4 12 L12 4" /><path d="M4 12 L12 20" />
    <path d="M14 4 L14 20" /><path d="M14 4 L20 12 L14 20" />
  </svg>
);

const FloatingNavbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isDark = theme === 'dark';

  const navLinkBase = 'px-3.5 py-1.5 text-sm font-medium transition-colors relative group';
  const navLinkActive = isDark ? 'text-white' : 'text-slate-900';
  const navLinkInactive = isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900';

  const mobileLinkBase = 'px-4 py-3 rounded-xl text-base font-medium transition-colors';
  const mobileLinkActive = isDark ? 'text-white bg-white/8' : 'text-slate-900 bg-black/6';
  const mobileLinkInactive = isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-black/4';

  const themeBtnClass = isDark
    ? 'text-slate-400 hover:text-white'
    : 'text-slate-500 hover:text-slate-900';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 pt-5 pointer-events-none"
    >
      {/* Single unified bar */}
      <div
        className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto px-5 py-3 rounded-2xl"
        style={{
          background: isDark ? 'rgba(9,10,15,0.80)' : 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid var(--border-subtle)',
          boxShadow: isDark
            ? '0 4px 24px rgba(0,0,0,0.3)'
            : '0 4px 24px rgba(0,0,0,0.07)',
        }}
      >
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/35 transition-shadow">
            <KMIcon className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="wordmark text-base">KnowMeMore</span>
        </Link>

        {/* Nav links — right side, desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`}
              >
                {link.name}
                {/* Active underline */}
                <span className={`absolute bottom-0 inset-x-3.5 h-px bg-violet-500 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
              </Link>
            );
          })}

          {/* Divider */}
          <span className="w-px h-4 mx-2 rounded-full" style={{ background: 'var(--border-subtle)' }} />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-lg transition-colors ${themeBtnClass}`}
            aria-label="Toggle theme"
          >
            {isDark
              ? <Sun className="w-4 h-4 text-amber-400" />
              : <Moon className="w-4 h-4 text-indigo-500" />
            }
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${themeBtnClass}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg transition-colors focus:outline-none"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mt-2 mx-auto max-w-5xl pointer-events-auto"
          >
            <div
              className="rounded-2xl p-3 flex flex-col gap-1"
              style={{
                background: isDark ? 'rgba(9,10,15,0.92)' : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--border-subtle)',
                boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.1)',
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default FloatingNavbar;
