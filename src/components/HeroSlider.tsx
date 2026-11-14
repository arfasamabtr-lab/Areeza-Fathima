import React, { useEffect, useState, useRef } from 'react';
import {
  Home,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Award,
} from 'lucide-react';
import { HERO_SLIDES } from '../data/collegeData';
import { SafeImage } from './SafeImage';

interface HeroSliderProps {
  activeNav: string;
  onNavigate: (sectionId: string) => void;
  onOpenApply: () => void;
  onOpenMoreDoc: (docId: string) => void;
}

const PRIMARY_NAV_ITEMS = [
  { id: 'about', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'campus-life', label: 'Campus Life' },
  { id: 'contact', label: 'Contact' },
];

const MORE_MENU_ITEMS = [
  { id: 'placement', label: 'Placement Cell' },
  { id: 'scholarships', label: 'Scholarships & Aid' },
  { id: 'accreditation', label: 'IQAC & Accreditation' },
  { id: 'calendar', label: 'Academic Calendar' },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  activeNav,
  onNavigate,
  onOpenApply,
  onOpenMoreDoc,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[84vh] min-h-[580px] max-h-[820px] overflow-hidden bg-slate-900 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Overlay Navigation */}
      <nav
        aria-label="Primary Navigation"
        className="absolute top-0 left-0 w-full z-40 border-b border-white/15 bg-black/20 backdrop-blur-[2px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4 py-2.5 sm:py-3">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px] font-medium">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`px-4 py-2.5 inline-flex items-center gap-2 rounded-t transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                activeNav === 'home'
                  ? 'text-white font-bold bg-white/20 border-b-2 border-[#fe932c]'
                  : 'text-white/90 hover:text-white hover:bg-white/15'
              }`}
            >
              <Home className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Home</span>
            </button>

            {PRIMARY_NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2.5 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                  activeNav === item.id
                    ? 'text-white font-semibold bg-white/15 border-b-2 border-[#fe932c]'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                onClick={() => setMoreOpen((prev) => !prev)}
                className="px-3.5 py-2.5 text-white/90 hover:text-white hover:bg-white/15 rounded transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {moreOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 rounded-lg bg-white text-[#0b1c30] shadow-xl border border-slate-200 py-1.5 z-50"
                >
                  {MORE_MENU_ITEMS.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMoreOpen(false);
                        onOpenMoreDoc(doc.id);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-[#0b1c30] hover:bg-[#eefbf3] hover:text-[#134e2f] transition-colors cursor-pointer"
                    >
                      {doc.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle & Label */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white py-2 px-3 rounded bg-white/15 whitespace-nowrap"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>HM College Manjeri</span>
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white border border-white/20 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Right Institutional Tagline */}
          <div className="hidden xl:flex items-center gap-2 pl-4 py-1 shrink-0">
            <Award className="w-4 h-4 text-[#fe932c] shrink-0" aria-hidden="true" />
            <span className="text-xs text-white/95 uppercase tracking-widest font-semibold whitespace-nowrap">
              Excellence in Education
            </span>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e3b23]/95 backdrop-blur-md border-t border-white/15 px-4 py-3 space-y-1">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.id);
                }}
                className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-white hover:bg-white/15 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-white/15">
              <p className="px-3 pb-1 text-xs uppercase tracking-wider text-emerald-200/80 font-semibold">
                Resources
              </p>
              {MORE_MENU_ITEMS.map((doc) => (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMoreDoc(doc.id);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm text-white/90 hover:bg-white/15 transition-colors"
                >
                  {doc.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Slides */}
      <div className="relative w-full h-full">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <SafeImage
                src={slide.imageUrl}
                alt={slide.alt}
                fallbackTitle="HM College Campus"
                fallbackSubtitle={slide.caption}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                fallbackClassName="w-full h-full"
              />
            </div>
          );
        })}

        {/* Contrast Scrims */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(120deg, rgba(234, 114, 25, 0.14) 0%, rgba(19, 78, 47, 0.18) 55%, rgba(11, 28, 48, 0.35) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 z-20 pointer-events-none" />
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(8, 12, 16, 0.85) 0%, rgba(15, 23, 42, 0.28) 38%, transparent 70%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />

        {/* Hero Copy Overlay */}
        <div className="relative z-30 max-w-7xl mx-auto h-full px-6 lg:px-12 flex flex-col justify-center items-start pt-16 pb-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold text-emerald-200 mb-4">
              Affiliated to University of Calicut · Manjeri, Kerala
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.14] mb-5 text-balance drop-shadow-sm">
              Empowering youth through quality education in{' '}
              <span className="text-[#fe932c] italic font-serif font-semibold">Manjeri.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-[19px] text-slate-100/95 max-w-2xl leading-relaxed mb-8">
              Welcome to HM College of Science and Technology, Manjeri. Offering premier UG &amp; PG
              degree programs, fostering academic rigor, career readiness, innovative learning, and
              holistic community development across Malappuram.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2 bg-[#fe932c] text-[#2f1500] text-sm sm:text-base px-6 py-3.5 rounded-md shadow-lg hover:brightness-105 active:scale-[0.98] transition-all font-bold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm sm:text-base px-6 py-3.5 rounded-md border border-white/30 transition-all font-semibold shadow whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Programs</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-sm border border-white/25 flex items-center justify-center transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-sm border border-white/25 flex items-center justify-center transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Bottom Caption + Indicator Bars */}
        <div className="absolute bottom-5 left-0 right-0 z-30 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
          <p className="hidden sm:block text-xs font-medium text-white/80 tracking-wide">
            {HERO_SLIDES[currentIndex].caption}
          </p>
          <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show slide ${idx + 1}: ${slide.caption}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-[#fe932c]'
                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
