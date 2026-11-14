import React from 'react';
import { Quote, Target, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP_PROFILES, STRATEGIC_OBJECTIVES } from '../data/collegeData';
import { SafeImage } from './SafeImage';

export const LeadershipSection: React.FC = () => {
  const { principal, manager } = LEADERSHIP_PROFILES;

  return (
    <div id="leadership" className="w-full bg-white">
      {/* Principal's Thought */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#134e2f]">
            Academic Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-[38px] font-bold text-[#00193b] mt-1.5 tracking-tight text-balance">
            Principal&apos;s Thought
          </h2>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-2/5 p-8 flex flex-col items-center justify-center bg-[#eff4ff]/55 border-b lg:border-b-0 lg:border-r border-slate-200/80 text-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 bg-slate-100 shrink-0">
              <SafeImage
                src={principal.imageUrl}
                alt={`${principal.name}, Principal`}
                fallbackTitle={principal.name}
                fallbackSubtitle="Principal"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#00193b]">{principal.name}</h3>
              <p className="text-xs text-[#44474f] font-medium mt-1">{principal.credentials}</p>
              <p className="text-xs text-[#904d00] font-semibold mt-0.5">{principal.role}</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center bg-white">
            <Quote
              className="w-9 h-9 text-[#1d7344]/35 mb-4 shrink-0"
              aria-hidden="true"
            />
            <blockquote className="font-serif italic text-lg sm:text-[21px] text-[#00193b] leading-relaxed max-w-2xl">
              &ldquo;{principal.quote}&rdquo;
            </blockquote>
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-xs text-[#44474f]">
              <span className="font-semibold text-[#00193b]">Office of the Principal</span>
              <span aria-hidden="true">·</span>
              <span>HM College of Science and Technology, Manjeri</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manager's Thought & Institutional Strategic Objectives */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#904d00]">
            Trust &amp; Governance
          </p>
          <h2 className="font-display text-3xl sm:text-[38px] font-bold text-[#00193b] mt-1.5 tracking-tight text-balance">
            Manager&apos;s Thought
          </h2>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row-reverse items-stretch">
          <div className="lg:w-2/5 p-8 flex flex-col items-center justify-center bg-[#eff4ff]/55 border-b lg:border-b-0 lg:border-l border-slate-200/80 text-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 bg-slate-900 shrink-0">
              <SafeImage
                src={manager.imageUrl}
                alt={`${manager.name}, ${manager.role}`}
                fallbackTitle={manager.name}
                fallbackSubtitle="Manager & Trust Director"
                className="w-full h-full object-cover object-top"
                fallbackClassName="w-full h-full"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#904d00] mb-1">
                {manager.badge}
              </p>
              <h3 className="text-xl font-bold font-display text-[#00193b]">{manager.name}</h3>
              <p className="text-xs text-[#44474f] font-medium mt-1">{manager.credentials}</p>
              <p className="text-xs text-[#134e2f] font-semibold mt-0.5">{manager.role}</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              <Quote
                className="w-9 h-9 text-[#fe932c]/50 mb-4 shrink-0"
                aria-hidden="true"
              />
              <blockquote className="font-serif italic text-lg sm:text-[20px] text-[#00193b] leading-relaxed max-w-2xl">
                &ldquo;{manager.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-[#904d00] shrink-0" aria-hidden="true" />
                <h3 className="font-display text-base sm:text-lg font-bold text-[#00193b] tracking-tight">
                  Institutional Strategic Objectives
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STRATEGIC_OBJECTIVES.map((obj) => (
                  <div
                    key={obj.id}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f8f9ff] border border-slate-200/80"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#1d7344] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-[13px] font-bold text-[#00193b] leading-snug">
                        {obj.title}
                      </h4>
                      <p className="text-[12px] text-[#44474f] leading-relaxed mt-0.5">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
