import React, { useMemo, useState } from 'react';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { ACADEMIC_PROGRAMS, AcademicProgram } from '../data/collegeData';

interface ProgramsSectionProps {
  onSelectProgram: (program: AcademicProgram) => void;
  onApplyProgram: (programName: string) => void;
}

type FilterKey = 'ALL' | 'UG' | 'PG' | 'Science & Tech' | 'Commerce & Management' | 'Humanities';

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'ALL', label: 'All Programs' },
  { key: 'UG', label: 'Undergraduate (UG)' },
  { key: 'PG', label: 'Postgraduate (PG)' },
  { key: 'Science & Tech', label: 'Science & Tech' },
  { key: 'Commerce & Management', label: 'Commerce & Mgmt' },
  { key: 'Humanities', label: 'Humanities' },
];

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onApplyProgram,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ACADEMIC_PROGRAMS.filter((prog) => {
      const matchesFilter =
        activeFilter === 'ALL' ||
        prog.level === activeFilter ||
        prog.stream === activeFilter;
      const matchesSearch =
        !q ||
        prog.name.toLowerCase().includes(q) ||
        prog.shortCode.toLowerCase().includes(q) ||
        prog.summary.toLowerCase().includes(q) ||
        prog.coreSubjects.some((s) => s.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="academics" className="w-full bg-[#f8f9ff] border-b border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#134e2f]">
              University of Calicut Curriculum
            </p>
            <h2 className="font-display text-3xl sm:text-[38px] font-bold text-[#00193b] mt-1.5 tracking-tight text-balance">
              Academic Departments &amp; Degree Programs
            </h2>
            <p className="text-base text-[#44474f] mt-2 leading-relaxed">
              Structured undergraduate FYUGP Honors and postgraduate specializations balancing
              theoretical mastery with laboratory and industry readiness.
            </p>
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <label htmlFor="program-search" className="sr-only">
              Search degree programs
            </label>
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="program-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by degree or subject..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0b1c30] placeholder:text-slate-400 focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter academic programs"
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl mb-8 w-fit max-w-full"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#134e2f] text-white shadow-sm'
                    : 'text-[#44474f] hover:text-[#00193b] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" aria-hidden="true" />
            <p className="font-display font-semibold text-[#00193b]">
              No matching degree programs found
            </p>
            <p className="text-sm text-[#44474f] mt-1">
              Try clearing your search filter or switching to All Programs.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-[#134e2f] rounded-lg hover:bg-[#186039] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <article
                key={program.id}
                className="bg-white border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between hover:border-[#134e2f]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#44474f] font-medium mb-2.5">
                    <span className="font-semibold text-[#134e2f]">{program.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{program.stream}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{program.intake} Seats</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#00193b] leading-snug">
                    {program.name}
                  </h3>

                  <p className="text-xs text-[#904d00] font-medium mt-1">{program.duration}</p>

                  <p className="text-sm text-[#44474f] leading-relaxed mt-3">{program.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(program)}
                    className="text-xs sm:text-sm font-semibold text-[#00193b] hover:text-[#134e2f] underline underline-offset-4 decoration-slate-300 hover:decoration-[#134e2f] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Syllabus &amp; Eligibility
                  </button>
                  <button
                    type="button"
                    onClick={() => onApplyProgram(program.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#134e2f] bg-[#eefbf3] hover:bg-[#134e2f] hover:text-white px-3.5 py-2 rounded-md border border-[#ccebd7] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
