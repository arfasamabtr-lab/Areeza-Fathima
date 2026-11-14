import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  Youtube,
  Instagram,
  Share2,
} from 'lucide-react';
import { COLLEGE_IMAGES } from '../data/collegeData';
import { SafeImage } from './SafeImage';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDoc: (docId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDoc }) => {
  return (
    <footer className="w-full pt-12 pb-8 text-white bg-[#186039] border-t border-[#23854f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <SafeImage
                src={COLLEGE_IMAGES.footerCrest}
                alt="HM College Manjeri Crest Logo"
                fallbackTitle="HM"
                className="h-10 w-auto object-contain rounded-md bg-white p-1 shadow-sm border border-white/60 shrink-0"
                fallbackClassName="h-10 w-10 rounded-md"
              />
              <span className="font-display text-lg text-white font-bold">
                HM College Manjeri
              </span>
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              HM College of Science and Technology is committed to academic distinction, ethical
              leadership, and empowering scholars across Malappuram and beyond.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-base text-white font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/85">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'academics', label: 'Academics' },
                { id: 'admissions', label: 'Admissions' },
                { id: 'facilities', label: 'Facilities' },
                { id: 'campus-life', label: 'Campus Life' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-emerald-200 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc('scholarships')}
                  className="hover:text-emerald-200 transition-colors cursor-pointer text-left"
                >
                  Scholarships &amp; Aid
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-display text-base text-white font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-white/85">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="tabular-nums">+91 483 276 8000</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="break-all">admissions@hmcollegemanjeri.edu.in</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Manjeri, Malappuram District, Kerala - 676121</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mon - Sat: 9:00 AM - 4:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 4: Community & Resources */}
          <div>
            <h3 className="font-display text-base text-white font-semibold mb-4">
              Campus Channels
            </h3>
            <p className="text-sm text-white/85 mb-4 leading-relaxed">
              Connect with our community and stay informed on research, placement drives, and
              campus life.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/85">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc('placement')}
                  className="flex items-center gap-2 hover:text-emerald-200 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                  <span>LinkedIn &amp; Alumni Network</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc('calendar')}
                  className="flex items-center gap-2 hover:text-emerald-200 transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                  <span>Academic Bulletins</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('campus-life')}
                  className="flex items-center gap-2 hover:text-emerald-200 transition-colors cursor-pointer"
                >
                  <Youtube className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                  <span>Campus Events &amp; Seminars</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('facilities')}
                  className="flex items-center gap-2 hover:text-emerald-200 transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                  <span>Student Clubs &amp; Arts</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/75">
          <p>© 2026 HM College of Science and Technology, Manjeri. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenDoc('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenDoc('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => onOpenDoc('accreditation')}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Accreditation</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
