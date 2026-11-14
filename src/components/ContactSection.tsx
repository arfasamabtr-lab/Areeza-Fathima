import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Headphones } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [showDeskForm, setShowDeskForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || message.trim().length < 8) {
      setError('Please provide your name, a valid email address, and a brief message.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        {/* Signature Admissions CTA Banner */}
        <div
          className="rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#1d7344]/25"
          style={{
            background:
              'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgba(29, 115, 68, 0.05) 100%)',
          }}
        >
          <div className="text-center sm:text-left">
            <h2 className="font-display text-xl sm:text-2xl text-[#00193b] font-bold">
              Have questions about admissions or enrollment?
            </h2>
            <p className="text-sm text-[#44474f] mt-1">
              Connect directly with our admissions desk at HM College, Manjeri.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                setShowDeskForm((prev) => !prev);
                setSent(false);
              }}
              className="inline-flex items-center gap-2 text-white text-sm px-5 py-3 rounded-lg shadow-sm bg-[#1d7344] hover:bg-[#134e2f] active:scale-[0.98] transition-all font-semibold whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Headphones className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{showDeskForm ? 'Hide Message Form' : 'Contact Us'}</span>
            </button>
          </div>
        </div>

        {/* Campus Directory & Optional Direct Message Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={`${showDeskForm ? 'lg:col-span-5' : 'lg:col-span-12'} grid grid-cols-1 sm:grid-cols-2 ${showDeskForm ? 'lg:grid-cols-1' : 'lg:grid-cols-4'} gap-4`}>
            <div className="p-5 rounded-xl bg-[#f8f9ff] border border-slate-200 flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-[#134e2f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#44474f]">
                  Admissions Desk
                </p>
                <a
                  href="tel:+914832768000"
                  className="text-sm font-bold text-[#00193b] hover:text-[#134e2f] tabular-nums mt-0.5 block"
                >
                  +91 483 276 8000
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9ff] border border-slate-200 flex items-start gap-3.5">
              <Mail className="w-5 h-5 text-[#134e2f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#44474f]">
                  Official Email
                </p>
                <a
                  href="mailto:admissions@hmcollegemanjeri.edu.in"
                  className="text-sm font-bold text-[#00193b] hover:text-[#134e2f] break-all mt-0.5 block"
                >
                  admissions@hmcollegemanjeri.edu.in
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9ff] border border-slate-200 flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#134e2f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#44474f]">
                  Campus Address
                </p>
                <p className="text-sm font-semibold text-[#00193b] mt-0.5">
                  Manjeri, Malappuram District, Kerala - 676121
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f8f9ff] border border-slate-200 flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#134e2f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#44474f]">
                  Office Hours
                </p>
                <p className="text-sm font-semibold text-[#00193b] mt-0.5">
                  Mon – Sat: 9:00 AM – 4:30 PM IST
                </p>
              </div>
            </div>
          </div>

          {showDeskForm && (
            <div className="lg:col-span-7 bg-[#f8f9ff] border border-slate-200 rounded-xl p-6 sm:p-7">
              {sent ? (
                <div className="flex items-start gap-3 py-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1d7344] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#00193b]">
                      Message Sent to Campus Office
                    </h3>
                    <p className="text-sm text-[#44474f] mt-1">
                      Thank you, {name}. Our administrative office will reply to {email} during
                      working hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="mt-4 text-sm font-semibold text-[#134e2f] underline underline-offset-4 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} noValidate className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-[#00193b]">
                    Send a Message to Manjeri Campus Office
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#00193b] mb-1">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#134e2f]"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#00193b] mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#134e2f]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-semibold text-[#00193b] mb-1">
                      Message / Query
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#134e2f]"
                      placeholder="Ask about hostel availability, bus routes, fee concessions, or academic transcripts..."
                    />
                  </div>
                  {error && <p className="text-xs text-[#ba1a1a]">{error}</p>}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#00193b] hover:bg-[#0f2e59] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
