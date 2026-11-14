import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/collegeData';

type FacilityFilter = 'ALL' | 'Academic' | 'Student Life';

export const FacilitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<FacilityFilter>('ALL');

  const items = CAMPUS_FACILITIES.filter(
    (item) => filter === 'ALL' || item.category === filter
  );

  return (
    <section
      id="facilities"
      className="w-full bg-white border-b border-slate-200 py-16 scroll-mt-4"
    >
      <div id="campus-life" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#134e2f]">
              Campus Infrastructure &amp; Student Life
            </p>
            <h2 className="font-display text-3xl sm:text-[38px] font-bold text-[#00193b] mt-1.5 tracking-tight text-balance">
              Facilities &amp; Campus Ecosystem
            </h2>
            <p className="text-base text-[#44474f] mt-2 leading-relaxed">
              Designed to support rigorous laboratory study, collaborative student organizations,
              athletics, and safe daily commuting across Malappuram.
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-[#f8f9ff] border border-slate-200 rounded-lg w-fit shrink-0">
            {(['ALL', 'Academic', 'Student Life'] as FacilityFilter[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === key
                    ? 'bg-[#00193b] text-white shadow-sm'
                    : 'text-[#44474f] hover:text-[#00193b]'
                }`}
              >
                {key === 'ALL' ? 'All Facilities' : key}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((facility) => (
            <article
              key={facility.id}
              className="bg-[#f8f9ff]/65 border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#44474f] mb-3">
                  <span className="font-display font-bold text-[#134e2f] tabular-nums">
                    {facility.number}. {facility.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#00193b] leading-snug">
                  {facility.title}
                </h3>
                <p className="text-sm text-[#44474f] leading-relaxed mt-2.5">
                  {facility.summary}
                </p>
              </div>

              <ul className="mt-5 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs text-[#00193b] font-medium">
                {facility.highlights.map((hl) => (
                  <li key={hl} className="flex items-center gap-2">
                    <span className="text-[#1d7344] font-bold" aria-hidden="true">
                      —
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
