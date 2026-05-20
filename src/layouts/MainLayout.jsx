import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';

const MainLayout = ({ children, theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`${theme} min-h-screen relative overflow-x-hidden`}
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, var(--glow-top) 0%, transparent 70%)` }}
      />

      <FloatingNavbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10 flex flex-col">
        {children}
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default MainLayout;
