import React from 'react';
import { COLLEGE_IMAGES } from '../data/collegeData';
import { SafeImage } from './SafeImage';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full bg-[#134e2f] z-50 relative shadow-sm border-b border-[#1a613b]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-center md:text-left">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="block shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fe932c] rounded-xl"
          aria-label="HM College of Science and Technology Home"
        >
          <SafeImage
            src={COLLEGE_IMAGES.headerCrest}
            alt="HM College Crest Logo"
            fallbackTitle="HM College"
            fallbackSubtitle="Manjeri"
            className="h-24 sm:h-28 w-auto object-contain p-2 rounded-xl bg-white/95 border border-white/40 shadow-md group-hover:scale-[1.03] transition-transform duration-200 mx-auto"
            fallbackClassName="h-24 w-24 rounded-xl"
          />
        </a>

        <div className="flex flex-col items-center md:items-start max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-[30px] font-display font-bold text-white tracking-tight leading-tight text-balance">
            HM College of Science and Technology
          </h1>
          <p className="text-xs sm:text-sm font-medium text-[#ecfdf5]/95 flex items-center justify-center md:justify-start flex-wrap gap-x-2 gap-y-1 mt-1.5 tracking-wide">
            <span>Manjeri, Malappuram</span>
            <span aria-hidden="true" className="text-white/45">·</span>
            <span className="font-normal text-slate-100/90">Affiliated to University of Calicut</span>
          </p>
        </div>
      </div>
    </header>
  );
};
