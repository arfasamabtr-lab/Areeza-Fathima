import React, { useEffect } from 'react';
import { X, ArrowRight, GraduationCap } from 'lucide-react';
import { AcademicProgram, ModalDocument } from '../data/collegeData';

interface InfoModalProps {
  program: AcademicProgram | null;
  document: ModalDocument | null;
  onClose: () => void;
  onApplyProgram: (programName: string) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  program,
  document,
  onClose,
  onApplyProgram,
}) => {
  const isOpen = Boolean(program || document);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-5 flex items-start justify-between gap-4 z-10">
          <div>
            {program && (
              <p className="text-xs font-semibold uppercase tracking-wider text-[#134e2f]">
                {program.level} · {program.stream} · {program.affiliation}
              </p>
            )}
            {document && (
              <p className="text-xs font-semibold uppercase tracking-wider text-[#134e2f]">
                {document.subtitle}
              </p>
            )}
            <h3 id="modal-title" className="font-display text-xl sm:text-2xl font-bold text-[#00193b] mt-1">
              {program ? program.name : document?.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg text-slate-500 hover:text-[#00193b] hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {program && (
            <>
              <p className="text-sm sm:text-base text-[#44474f] leading-relaxed">
                {program.summary}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#f8f9ff] border border-slate-200 text-sm">
                <div>
                  <dt className="text-xs text-[#44474f] font-medium">Duration</dt>
                  <dd className="font-semibold text-[#00193b] mt-0.5">{program.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#44474f] font-medium">Annual Intake</dt>
                  <dd className="font-semibold text-[#00193b] mt-0.5 tabular-nums">
                    {program.intake} Seats
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#44474f] font-medium">Affiliation</dt>
                  <dd className="font-semibold text-[#00193b] mt-0.5">{program.affiliation}</dd>
                </div>
              </dl>

              <div>
                <h4 className="font-display font-bold text-sm text-[#00193b] mb-2">
                  Eligibility Criteria
                </h4>
                <p className="text-sm text-[#44474f] leading-relaxed">{program.eligibility}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-bold text-sm text-[#00193b] mb-2.5">
                    Core Subjects &amp; Modules
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[#44474f]">
                    {program.coreSubjects.map((subj) => (
                      <li key={subj} className="flex items-start gap-2">
                        <span className="text-[#134e2f] font-bold" aria-hidden="true">
                          ·
                        </span>
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-[#00193b] mb-2.5">
                    Career &amp; Higher Study Pathways
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[#44474f]">
                    {program.careerPaths.map((path) => (
                      <li key={path} className="flex items-start gap-2">
                        <GraduationCap
                          className="w-4 h-4 text-[#904d00] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-[#44474f] hover:text-[#00193b] rounded-lg border border-slate-300 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onApplyProgram(program.name);
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#134e2f] hover:bg-[#186039] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Apply for {program.shortCode}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </>
          )}

          {document && (
            <>
              <div className="space-y-5">
                {document.sections.map((sec) => (
                  <div key={sec.heading} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <h4 className="font-display font-bold text-base text-[#00193b]">
                      {sec.heading}
                    </h4>
                    <p className="text-sm text-[#44474f] leading-relaxed mt-1.5">{sec.body}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#134e2f] hover:bg-[#186039] rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
