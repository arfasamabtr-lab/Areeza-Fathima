import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { StatsStrip } from './components/StatsStrip';
import { LeadershipSection } from './components/LeadershipSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';
import { AcademicProgram, ModalDocument, MORE_DOCUMENTS } from './data/collegeData';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<ModalDocument | null>(null);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);

  const handleNavigate = (sectionId: string) => {
    setActiveNav(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleApplyProgram = (programName: string) => {
    setPreselectedProgram(programName);
    handleNavigate('admissions');
  };

  const handleOpenDoc = (docId: string) => {
    const doc = MORE_DOCUMENTS[docId];
    if (doc) {
      setSelectedProgram(null);
      setSelectedDoc(doc);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <Header onNavigate={handleNavigate} />

      <main className="flex-1 w-full">
        <HeroSlider
          activeNav={activeNav}
          onNavigate={handleNavigate}
          onOpenApply={() => handleNavigate('admissions')}
          onOpenMoreDoc={handleOpenDoc}
        />

        <StatsStrip onNavigate={handleNavigate} />

        <LeadershipSection />

        <ProgramsSection
          onSelectProgram={(program) => {
            setSelectedDoc(null);
            setSelectedProgram(program);
          }}
          onApplyProgram={handleApplyProgram}
        />

        <FacilitiesSection />

        <AdmissionsSection preselectedProgram={preselectedProgram} />

        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} onOpenDoc={handleOpenDoc} />

      <InfoModal
        program={selectedProgram}
        document={selectedDoc}
        onClose={() => {
          setSelectedProgram(null);
          setSelectedDoc(null);
        }}
        onApplyProgram={handleApplyProgram}
      />
    </div>
  );
}
