import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          
          <div>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              Resume
            </h2>
            <p className="text-sm text-zinc-500">
              Aditi Kumari Singh
            </p>
          </div>

          <div className="flex items-center gap-3">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white text-sm hover:bg-violet-700 transition"
            >
              <Download size={16} />
              Download
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <X size={20} className="text-zinc-700 dark:text-zinc-300" />
            </button>

          </div>
        </div>

        {/* PDF */}
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full"
        ></iframe>

      </div>
    </div>
  );
};

export default ResumeModal;