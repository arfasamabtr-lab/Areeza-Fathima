import React from 'react';
import { Award, GraduationCap, TrendingUp, BookOpen } from 'lucide-react';
import { INSTITUTIONAL_STATS, StatMetric } from '../data/collegeData';

interface StatsStripProps {
  onNavigate: (sectionId: string) => void;
}

const ICON_MAP: Record<StatMetric['iconName'], React.ReactNode> = {
  programs: <Award className="w-5 h-5 text-[#00193b]" aria-hidden="true" />,
  pg: <GraduationCap className="w-5 h-5 text-[#00193b]" aria-hidden="true" />,
  career: <TrendingUp className="w-5 h-5 text-[#00193b]" aria-hidden="true" />,
  history: <BookOpen className="w-5 h-5 text-[#00193b]" aria-hidden="true" />,
};

export const StatsStrip: React.FC<StatsStripProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      aria-label="Institutional Highlights"
      className="w-full bg-[#eefbf3] border-y border-[#ccebd7] py-14 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-y border-dashed border-[#1b643a]/25 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 place-items-center">
          {INSTITUTIONAL_STATS.map((stat) => (
            <button
              key={stat.id}
              type="button"
              onClick={() => onNavigate(stat.targetSection)}
              className="bg-white rounded-full aspect-square w-full max-w-[236px] p-6 border border-[#c4c6d0]/70 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:border-[#134e2f]/40 transition-all duration-200 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e2f]"
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-2.5 rounded-full border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-200"
              >
                {ICON_MAP[stat.iconName]}
              </div>
              <div className="font-display text-[34px] leading-tight font-bold text-[#00193b] tabular-nums mb-1">
                {stat.value}
                <span className="text-[#fe932c]">{stat.suffix}</span>
              </div>
              <h3 className="font-display text-[15px] font-bold text-[#00193b] leading-tight">
                {stat.title}
              </h3>
              <p className="text-[12px] text-[#44474f] mt-1 leading-snug px-2">
                {stat.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
