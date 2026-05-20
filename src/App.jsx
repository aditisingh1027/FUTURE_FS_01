import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import ResumeModal from './components/ResumeModal';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const openResume = () => setResumeOpen(true);

  return (
    <BrowserRouter>
      <MainLayout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/"         element={<HeroSection onOpenResume={openResume} theme={theme} />} />
          <Route path="/about"    element={<AboutPage theme={theme} />} />
          <Route path="/projects" element={<ProjectsPage theme={theme} />} />
          <Route path="/contact"  element={<ContactPage theme={theme} onOpenResume={openResume} />} />
        </Routes>
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
