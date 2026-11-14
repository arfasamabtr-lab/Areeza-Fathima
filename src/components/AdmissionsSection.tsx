import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, FileCheck2 } from 'lucide-react';
import { ACADEMIC_PROGRAMS, ADMISSION_STEPS } from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgram?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  qualifyingScore: string;
  quotaPreference: 'University CAP Merit' | 'Management Quota' | 'Scholarship Enquiry';
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  preselectedProgram,
}) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    program: preselectedProgram || ACADEMIC_PROGRAMS[0].name,
    qualifyingScore: '',
    quotaPreference: 'University CAP Merit',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgram) {
      setForm((prev) => ({ ...prev, program: preselectedProgram }));
      setSubmittedRef(null);
    }
  }, [preselectedProgram]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    const score = Number(form.qualifyingScore);
    if (!form.qualifyingScore.trim() || Number.isNaN(score) || score < 35 || score > 100) {
      nextErrors.qualifyingScore = 'Enter aggregate percentage between 35 and 100.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`HMC-2026-${randomCode}`);
  };

  return (
    <section id="admissions" className="w-full bg-[#eefbf3]/60 border-b border-[#ccebd7] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Admissions Process */}
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#134e2f]">
              Admissions 2026–27
            </p>
            <h2 className="font-display text-3xl sm:text-[38px] font-bold text-[#00193b] mt-1.5 tracking-tight text-balance">
              Enrollment Pathway &amp; Counselling
            </h2>
            <p className="text-base text-[#44474f] mt-2 leading-relaxed">
              Admissions follow the University of Calicut Centralized Allotment Process (CAP)
              alongside institutional merit and trust scholarship pathways.
            </p>

            <div className="mt-8 space-y-4">
              {ADMISSION_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-[#ccebd7] rounded-xl p-5 flex items-start gap-4"
                >
                  <span className="font-display font-bold text-lg text-[#134e2f] tabular-nums shrink-0 pt-0.5">
                    {item.step}.
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-base text-[#00193b]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#904d00]">
                        {item.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-[#44474f] leading-relaxed mt-1.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Application Form */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            {submittedRef ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#eefbf3] border border-[#ccebd7] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1d7344]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#00193b]">
                  Admission Enquiry Registered
                </h3>
                <p className="text-sm text-[#44474f] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#00193b]">{form.fullName}</span>.
                  Your pre-admission enquiry for{' '}
                  <span className="font-semibold text-[#134e2f]">{form.program}</span> has been
                  logged with the Manjeri Admissions Desk.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f9ff] border border-slate-200 text-sm font-semibold text-[#00193b] tabular-nums">
                  <FileCheck2 className="w-4 h-4 text-[#134e2f]" aria-hidden="true" />
                  <span>Reference ID: {submittedRef}</span>
                </div>
                <p className="text-xs text-[#44474f] mt-4">
                  Our academic counselor will contact {form.phone} within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setForm((prev) => ({
                      ...prev,
                      fullName: '',
                      email: '',
                      phone: '',
                      qualifyingScore: '',
                    }));
                  }}
                  className="mt-6 px-5 py-2.5 text-sm font-semibold text-[#134e2f] bg-[#eefbf3] border border-[#ccebd7] rounded-lg hover:bg-[#134e2f] hover:text-white transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-[#00193b]">
                    Online Admission Enquiry Form
                  </h3>
                  <p className="text-sm text-[#44474f] mt-1">
                    Request prospectus, fee schedule, and CAP counselling assistance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="apply-name"
                      className="block text-xs font-semibold text-[#00193b] mb-1.5"
                    >
                      Applicant Full Name
                    </label>
                    <input
                      id="apply-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g., Fathima Nihad P."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-[#ba1a1a] mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="apply-email"
                        className="block text-xs font-semibold text-[#00193b] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="applicant@example.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#ba1a1a] mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="apply-phone"
                        className="block text-xs font-semibold text-[#00193b] mb-1.5"
                      >
                        Mobile Number (India)
                      </label>
                      <input
                        id="apply-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98470 00000"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] tabular-nums focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                      />
                      {errors.phone && (
                        <p className="text-xs text-[#ba1a1a] mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="apply-program"
                      className="block text-xs font-semibold text-[#00193b] mb-1.5"
                    >
                      Preferred Degree Program
                    </label>
                    <select
                      id="apply-program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] bg-white focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                    >
                      {ACADEMIC_PROGRAMS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.level})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="apply-score"
                        className="block text-xs font-semibold text-[#00193b] mb-1.5"
                      >
                        Qualifying Exam Aggregate (%)
                      </label>
                      <input
                        id="apply-score"
                        type="number"
                        min={35}
                        max={100}
                        step="0.1"
                        value={form.qualifyingScore}
                        onChange={(e) =>
                          setForm({ ...form, qualifyingScore: e.target.value })
                        }
                        placeholder="e.g., 86.5"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] tabular-nums focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                      />
                      {errors.qualifyingScore && (
                        <p className="text-xs text-[#ba1a1a] mt-1">
                          {errors.qualifyingScore}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="apply-quota"
                        className="block text-xs font-semibold text-[#00193b] mb-1.5"
                      >
                        Admission Category
                      </label>
                      <select
                        id="apply-quota"
                        value={form.quotaPreference}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            quotaPreference: e.target.value as FormState['quotaPreference'],
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg text-[#0b1c30] bg-white focus:outline-none focus:border-[#134e2f] focus:ring-2 focus:ring-[#134e2f]/15"
                      >
                        <option value="University CAP Merit">University CAP Merit</option>
                        <option value="Management Quota">Management Quota</option>
                        <option value="Scholarship Enquiry">Scholarship Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#1d7344] hover:bg-[#134e2f] text-white font-semibold text-sm py-3 px-6 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Submit Admission Enquiry</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
