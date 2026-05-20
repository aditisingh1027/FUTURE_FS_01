import React from 'react';
import BentoGridSection from '../sections/BentoGridSection';

const OverviewPage = ({ theme, onOpenResume }) => (
  <div className="min-h-screen pt-28">
    <BentoGridSection theme={theme} onOpenResume={onOpenResume} />
  </div>
);

export default OverviewPage;
