export interface HeroSlide {
  id: string;
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface StatMetric {
  id: string;
  value: string;
  suffix: string;
  title: string;
  description: string;
  iconName: 'programs' | 'pg' | 'career' | 'history';
  targetSection: string;
}

export type ProgramLevel = 'UG' | 'PG';
export type ProgramStream = 'Science & Tech' | 'Commerce & Management' | 'Humanities';

export interface AcademicProgram {
  id: string;
  name: string;
  shortCode: string;
  level: ProgramLevel;
  stream: ProgramStream;
  duration: string;
  intake: number;
  affiliation: string;
  eligibility: string;
  summary: string;
  coreSubjects: string[];
  careerPaths: string[];
}

export interface StrategicObjective {
  id: string;
  title: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  number: string;
  title: string;
  category: 'Academic' | 'Student Life';
  summary: string;
  highlights: string[];
}

export interface AdmissionStep {
  step: string;
  title: string;
  detail: string;
  timeline: string;
}

export interface ModalDocument {
  id: string;
  title: string;
  subtitle: string;
  sections: { heading: string; body: string }[];
}

export const COLLEGE_IMAGES = {
  headerCrest:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAAJIJnBjlvv05Y188kPiPNC7CpF19pPKCR56auU0nIoAe5o5SR1znCEkWF9S2d5SAFEfRjvHkcvdXGA1Ex_RnCuMfTvSs-RVdH4E7YKrOgh-1FAGysO-ONxLus1ZkyxTq75dZlAvDhMKsAOku6rbbVEw2AvA7Mt-2W7C6-6P3TlhGZEIfiwFQvMkFI4KjL7XyJhkk8wxXHIxFUUQZINNTwwMtC95FP6Id6Mi2q5Dunj-4a2FpVkxq',
  footerCrest:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAhgq45dnYuf-AnKiqVWn0ZyOBAmIgNvwNq7mG-MAs6ZIxnu8YRaeOeHHNKsOKOUajuCEm4gtYm1gqM7_3gHP1N987LT499xMtxh2y1pgzubT-xfFUoJrhazwjtJVQTClnvHxAk8iPsKp_iraGGD5ooUr2lqaprvqJFfGyI2BkPdTV1lQdzILqDOvPMdki_vPuqN9SVo6AjbrSgt5UAACQOE6-dU2V9oGUBtNx46wO4GCmPNQjYEu5F',
  principalPortrait:
    'https://lh3.googleusercontent.com/aida/ALJJyrCyI9yJn4WupMJokgg7QTLX5z05I6u-l7cYjm4yJCoE2WTHatnOwBcWijZJ8JwYjK8DHfnQ_vi4uedP2YUtsJsY6WmXQUeFkwceb0c-33cXEmKe93gcKImdOag43nrQJGCfgvix2-IBG3vOALzDECe4aTiUyJIU5k_v1rm4tCcCEc6iRaOtabmYgzIVVV9GMbKTkRJ3zaWfJ-h3rYi6snnBVYq6tQYz_PuRiSWylhE',
  managerPortrait:
    'https://lh3.googleusercontent.com/aida/ALJJyrAFyA-mfjSzB7R2lIUqPNQAEOxysnuCQRdK1rmwLYgCx8AFR73KcguQDEmISYNkV8pPcVxYlQK7uiEy2WypbuI9Mp783KgfMO-Ce1Zi-FIiEuGU_8HpckQyrOhjthC9HDjbWWXNFj2Qpbh1K_K3rPdRY5Vi72-tkKk86O31xcYdBtSCnoNojvGSczuryTplVAY6ztch5G4_fkn6572b0XZq8hif_saEt0xdVyC3Aj9d',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'campus',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBipWUqyJJMQhnSjtjmIWSFyPj5qY9QXH5HiHGgxVEDTmfFbnQIUpgPqAn0VbnLK3e__cGQLLos84ypTAtM4BA_obrjOm0YGvtQ_A4kLPgZY4udIukEtCZ24SFTn0C5GDldni_T4_t9SDNhx7q66AAg7gcvSJH5VKvu9zfW9FHHo2b4usnI8H3JHixUNcPsNGKMYxavBd-tmr6PfGU_ZYBTnFKWkwfPyLATALH4fZ4',
    alt: 'Lush Kerala college campus with students and modern academic buildings',
    caption: 'Green Academic Campus · Manjeri, Malappuram',
  },
  {
    id: 'library',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVQ27MFnzsxt6q4TQwczVkXLxppuiNDNwC9Pze9vFsh-frvFMYzD4OfbCYHoNG_F37Qbqy1EocaL1nrjzOWcj_M0MDo5PPbIz3Re2_DwJ3hmQTtObeDtqYdCxmqrnUYGIP02_oxLgskO7_JP1MaTzY_ZIoFDb6BeanYrUccDz9XWrC6LxAuGxlBaNK7WlvMBvDWvjtQGL8v7y2tLG-Zi2oCPdYhW0Wn2OhHGeKKg8',
    alt: 'Modern university library and computer lab study hall',
    caption: 'Central Library & Digital Computing Center',
  },
  {
    id: 'convocation',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxamjB7yho7XRH32RaGNe-go6xJcKhEG766FwJ9RHDMj9xTcSzHLj-EuZdTxdUlYmV_zml0-_nWxBl-9NG6GoRitQU1bT9Ab0mo4ehyJoBBl8RcQXb7_yJ-YiihZdmDK_Xq8hraQuvrSynEfw6gIh5JjXy8XrMeewXjOcXoiIv5lkHHFLEX6zLx5cPChr-L58OcaAr0BcExro2PjuMmX7RQszRHOzubyCldRd4uOA',
    alt: 'Joyous college graduation day convocation ceremony',
    caption: 'Annual Convocation & Student Honors',
  },
];

export const INSTITUTIONAL_STATS: StatMetric[] = [
  {
    id: 'ug-programs',
    value: '12',
    suffix: '+',
    title: 'Degree Programs',
    description: 'B.Sc, B.Com, BBA, BCA, M.Com & tech.',
    iconName: 'programs',
    targetSection: 'academics',
  },
  {
    id: 'pg-programs',
    value: '6',
    suffix: '+',
    title: 'PG Programs',
    description: 'M.Com, M.Sc & research tracks.',
    iconName: 'pg',
    targetSection: 'academics',
  },
  {
    id: 'career-rate',
    value: '94.2',
    suffix: '%',
    title: 'Career & Higher Ed',
    description: 'Placements, campus drives & honors.',
    iconName: 'career',
    targetSection: 'facilities',
  },
  {
    id: 'years-service',
    value: '20',
    suffix: '+',
    title: 'Years of Service',
    description: 'Higher education excellence in Malappuram.',
    iconName: 'history',
    targetSection: 'leadership',
  },
];

export const LEADERSHIP_PROFILES = {
  principal: {
    name: 'Dr. Rajesh Sharma',
    credentials: 'M.Sc., Ph.D., Post-Doc (IISc)',
    role: 'Principal, HM College of Science & Technology',
    imageUrl: COLLEGE_IMAGES.principalPortrait,
    quote:
      'Education is not merely the acquisition of knowledge, but the illumination of intellect and character. At HM College, we nurture curious minds to pursue truth, embrace innovation, and serve society with integrity and empathy. Every student is a beacon of future possibilities.',
  },
  manager: {
    name: 'Dr. Vikram Singh',
    credentials: 'M.Tech., MBA, Ph.D. (Education Management)',
    role: 'Manager & Director, HM College Trust',
    badge: 'Management & Trust Board',
    imageUrl: COLLEGE_IMAGES.managerPortrait,
    quote:
      'Our mission is to bridge ambition with opportunity by building world-class infrastructure and fostering an inclusive academic environment in Malappuram. We believe quality education must be accessible to every deserving student, equipping youth with the skills to lead and thrive in a dynamic global landscape.',
  },
};

export const STRATEGIC_OBJECTIVES: StrategicObjective[] = [
  {
    id: 'academic-distinction',
    title: 'Academic Distinction',
    description:
      'Deliver value-oriented UG & PG education fostering analytical thinking and research.',
  },
  {
    id: 'inclusive-opportunity',
    title: 'Inclusive Opportunity',
    description:
      'Ensure accessible higher education across Malappuram with robust scholarships.',
  },
  {
    id: 'industry-alignment',
    title: 'Industry & Skill Alignment',
    description:
      'Equip students with industry-relevant skills, certifications, and placement mentorship.',
  },
  {
    id: 'holistic-culture',
    title: 'Holistic Campus Culture',
    description:
      'Cultivate ethical leadership, social responsibility, and vibrant student-led development.',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'bsc-cs',
    name: 'B.Sc. Computer Science',
    shortCode: 'B.Sc. CS',
    level: 'UG',
    stream: 'Science & Tech',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 48,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two (HSE / CBSE / ISC) with Mathematics or Computer Science.',
    summary:
      'Foundational and applied training in algorithms, systems programming, database engineering, and modern software architecture.',
    coreSubjects: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management', 'Python & Java Engineering', 'Computer Networks'],
    careerPaths: ['Software Engineer', 'Cloud & Systems Analyst', 'Data Engineering Associate', 'MCA / M.Sc. Research'],
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications',
    shortCode: 'BCA',
    level: 'UG',
    stream: 'Science & Tech',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 48,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass in any stream with Mathematics / Computer Science / Informatics Practices.',
    summary:
      'Application-first degree focused on full-stack web engineering, enterprise software, and mobile app development.',
    coreSubjects: ['Full-Stack Web Development', 'Software Engineering', 'UI/UX & Mobile Systems', 'Cloud Computing', 'Cybersecurity Essentials'],
    careerPaths: ['Full-Stack Developer', 'Application Analyst', 'QA Automation Engineer', 'Product Support Lead'],
  },
  {
    id: 'bsc-physics',
    name: 'B.Sc. Physics',
    shortCode: 'B.Sc. Physics',
    level: 'UG',
    stream: 'Science & Tech',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 40,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two Science stream with Physics and Mathematics.',
    summary:
      'Experimental and theoretical grounding in mechanics, optics, electronics, and quantum systems with dedicated lab modules.',
    coreSubjects: ['Classical & Quantum Mechanics', 'Optics & Photonics', 'Analog & Digital Electronics', 'Electrodynamics', 'Computational Physics'],
    careerPaths: ['Scientific Instrumentation', 'Research & Lab Specialist', 'Renewable Energy Tech', 'M.Sc. Physics & GATE'],
  },
  {
    id: 'bsc-chemistry',
    name: 'B.Sc. Chemistry',
    shortCode: 'B.Sc. Chem',
    level: 'UG',
    stream: 'Science & Tech',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 40,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two Science stream with Chemistry, Physics, and Mathematics/Biology.',
    summary:
      'Analytical, organic, and inorganic chemistry training supported by volumetric, gravimetric, and spectroscopy lab practice.',
    coreSubjects: ['Organic Synthesis', 'Physical Chemistry', 'Analytical Instrumentation', 'Polymer Science', 'Environmental Chemistry'],
    careerPaths: ['Quality Control Chemist', 'Pharmaceutical Analyst', 'Materials Research', 'M.Sc. Chemical Sciences'],
  },
  {
    id: 'bsc-psychology',
    name: 'B.Sc. Psychology',
    shortCode: 'B.Sc. Psych',
    level: 'UG',
    stream: 'Science & Tech',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 45,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass in any recognized board stream.',
    summary:
      'Scientific study of human behavior, cognitive processes, developmental psychology, and psychometric assessment.',
    coreSubjects: ['Cognitive Psychology', 'Psychological Testing', 'Abnormal & Clinical Foundations', 'Research Methodology', 'Counseling Skills'],
    careerPaths: ['School & Career Counselor', 'HR Talent Specialist', 'Behavioral Research Assistant', 'M.Sc. Clinical Psychology'],
  },
  {
    id: 'bcom-finance',
    name: 'B.Com. Finance',
    shortCode: 'B.Com. Fin',
    level: 'UG',
    stream: 'Commerce & Management',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 60,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass in Commerce or equivalent stream with minimum 45% aggregate.',
    summary:
      'Comprehensive curriculum in corporate accounting, direct & indirect taxation, capital markets, and auditing standards.',
    coreSubjects: ['Corporate Accounting', 'Financial Markets & Institutions', 'GST & Income Tax Practice', 'Cost & Management Accounting', 'Auditing'],
    careerPaths: ['Chartered Accountancy Track', 'Financial Analyst', 'Tax Consultant', 'Banking & FinTech Operations'],
  },
  {
    id: 'bcom-ca',
    name: 'B.Com. Computer Application',
    shortCode: 'B.Com. CA',
    level: 'UG',
    stream: 'Commerce & Management',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 60,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass in any stream with Commerce/Accountancy or Mathematics.',
    summary:
      'Blends commercial accounting and business law with ERP systems, TallyPrime, spreadsheet modeling, and e-commerce.',
    coreSubjects: ['Computerized Accounting (Tally/ERP)', 'Business Analytics', 'Database for Commerce', 'E-Commerce Operations', 'Financial Reporting'],
    careerPaths: ['ERP Accounts Executive', 'Business Systems Analyst', 'Audit & Tax Associate', 'Digital Commerce Manager'],
  },
  {
    id: 'bba',
    name: 'Bachelor of Business Administration',
    shortCode: 'BBA',
    level: 'UG',
    stream: 'Commerce & Management',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 50,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass with minimum 45% marks in any stream.',
    summary:
      'Management degree developing leadership, organizational strategy, marketing operations, and entrepreneurial decision-making.',
    coreSubjects: ['Principles of Management', 'Marketing Strategy', 'Human Resource Management', 'Financial Management', 'Operations & Supply Chain'],
    careerPaths: ['Management Trainee', 'Operations Coordinator', 'Brand & Marketing Associate', 'MBA / Entrepreneurship'],
  },
  {
    id: 'ba-english',
    name: 'B.A. English Language & Literature',
    shortCode: 'B.A. Eng',
    level: 'UG',
    stream: 'Humanities',
    duration: '3 Years (6 Semesters) · FYUGP Honors Track',
    intake: 45,
    affiliation: 'University of Calicut',
    eligibility: 'Plus Two pass from a recognized board.',
    summary:
      'Critical study of literary traditions, linguistics, academic writing, journalism, and media communication.',
    coreSubjects: ['British & World Literatures', 'Applied Linguistics', 'Indian Writing in English', 'Journalism & Editorial Craft', 'Literary Criticism'],
    careerPaths: ['Editorial & Publishing', 'Content & Communications Lead', 'Civil Services Prep', 'M.A. & Teaching Careers'],
  },
  {
    id: 'msc-cs',
    name: 'M.Sc. Computer Science',
    shortCode: 'M.Sc. CS',
    level: 'PG',
    stream: 'Science & Tech',
    duration: '2 Years (4 Semesters)',
    intake: 24,
    affiliation: 'University of Calicut',
    eligibility: 'B.Sc. Computer Science / BCA / B.Sc. IT with minimum 55% aggregate.',
    summary:
      'Postgraduate specialization in distributed systems, machine learning foundations, cybersecurity, and software research.',
    coreSubjects: ['Machine Learning & Pattern Recognition', 'Distributed Computing', 'Advanced Cryptography', 'Compiler Design', 'Dissertation & Seminar'],
    careerPaths: ['ML / Data Engineer', 'Senior Software Architect', 'Academic Lecturer', 'Doctoral Research (Ph.D.)'],
  },
  {
    id: 'mcom-finance',
    name: 'M.Com. Finance',
    shortCode: 'M.Com. Fin',
    level: 'PG',
    stream: 'Commerce & Management',
    duration: '2 Years (4 Semesters)',
    intake: 30,
    affiliation: 'University of Calicut',
    eligibility: 'B.Com. / BBA with minimum 45% aggregate.',
    summary:
      'Advanced postgraduate mastery of corporate valuation, international finance, derivatives, and quantitative business research.',
    coreSubjects: ['Corporate Valuation & M&A', 'International Financial Management', 'Security Analysis & Portfolio Theory', 'Quantitative Research Methods', 'Tax Planning'],
    careerPaths: ['Investment & Equity Analyst', 'Corporate Finance Manager', 'UGC-NET / Assistant Professor', 'Audit & Advisory Practice'],
  },
  {
    id: 'msc-psychology',
    name: 'M.Sc. Psychology',
    shortCode: 'M.Sc. Psych',
    level: 'PG',
    stream: 'Science & Tech',
    duration: '2 Years (4 Semesters)',
    intake: 20,
    affiliation: 'University of Calicut',
    eligibility: 'B.Sc. / B.A. Psychology with minimum 50% aggregate.',
    summary:
      'Advanced clinical, counseling, and organizational psychology training with supervised practicum and empirical dissertation.',
    coreSubjects: ['Psychopathology & Diagnostics', 'Psychotherapeutic Interventions', 'Organizational Behavior', 'Neuropsychology', 'Clinical Internship'],
    careerPaths: ['Counseling Psychologist', 'Organizational Consultant', 'Clinical Research Associate', 'Rehabilitation Specialist'],
  },
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    id: 'central-library',
    number: '01',
    title: 'Central Library & Digital Archive',
    category: 'Academic',
    summary:
      'Over 18,500 reference volumes, peer-reviewed national and international journals, INFLIBNET e-resource access, and quiet reading halls.',
    highlights: ['INFLIBNET & N-LIST Digital Access', 'Dedicated PG Research Cubicles', 'Automated RFID Book Circulation'],
  },
  {
    id: 'computing-labs',
    number: '02',
    title: 'High-Speed Computing & Science Labs',
    category: 'Academic',
    summary:
      'Dedicated programming workstations, fiber-optic campus network, and instrumentation-grade Physics, Chemistry, and Psychology laboratories.',
    highlights: ['120+ Networked Workstations', 'Spectroscopy & Optics Instrumentation', 'Standardized Psychometric Testing Lab'],
  },
  {
    id: 'placement-cell',
    number: '03',
    title: 'Career Guidance & Placement Cell',
    category: 'Academic',
    summary:
      'Structured aptitude training, resume clinics, mock technical panels, and annual campus recruitment drives connecting graduates with Kerala & national employers.',
    highlights: ['94.2% Placement & Higher-Ed Progression', 'Add-on Industry Certifications', 'Competitive Exam & PSC Coaching'],
  },
  {
    id: 'nss-ncc-clubs',
    number: '04',
    title: 'NSS, Innovation Clubs & Arts Forum',
    category: 'Student Life',
    summary:
      'Active National Service Scheme (NSS) units, Entrepreneurship Development Club (IEDC), Literary Society, and annual cultural festivals.',
    highlights: ['Community Outreach in Malappuram', 'IEDC Startup & Hackathon Cell', 'Debate, Film & Fine Arts Collective'],
  },
  {
    id: 'sports-auditorium',
    number: '05',
    title: 'Sports Complex & Seminar Auditorium',
    category: 'Student Life',
    summary:
      'Multi-purpose outdoor grounds for football, cricket, and athletics alongside an air-conditioned 600-seat academic auditorium.',
    highlights: ['University-Level Athletics Coaching', 'Indoor Badminton & Table Tennis', '600-Seat Acoustic Auditorium'],
  },
  {
    id: 'hostel-transport',
    number: '06',
    title: 'Hostel, Canteen & Campus Bus Fleet',
    category: 'Student Life',
    summary:
      'Safe supervised hostels, hygienic student dining hall, and college buses covering Manjeri, Perinthalmanna, Malappuram, Nilambur, and Kondotty.',
    highlights: ['12 Dedicated Malappuram Bus Routes', '24/7 Campus Security & Medical Room', 'Subsidized Student Dining'],
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: '01',
    title: 'University of Calicut CAP Registration',
    detail:
      'Complete centralized allotment registration on the University of Calicut admission portal and select HM College Manjeri in your preference order.',
    timeline: 'May – June',
  },
  {
    step: '02',
    title: 'Online Enquiry & Management Quota Application',
    detail:
      'Submit your pre-admission enquiry here or collect the institutional application form from the Manjeri Admissions Desk.',
    timeline: 'Open Now',
  },
  {
    step: '03',
    title: 'Merit Counselling & Document Verification',
    detail:
      'Attend scheduled verification with Plus Two / Degree mark sheets, Transfer Certificate (TC), Conduct Certificate, and CAP allotment memo.',
    timeline: 'June – July',
  },
  {
    step: '04',
    title: 'Scholarship Assessment & Enrollment',
    detail:
      'Confirm seat allocation, apply for merit/trust scholarships or e-Grantz fee concessions, and attend Student Induction Week.',
    timeline: 'July',
  },
];

export const MORE_DOCUMENTS: Record<string, ModalDocument> = {
  placement: {
    id: 'placement',
    title: 'Career Guidance & Placement Cell',
    subtitle: 'Industry Partnerships · Skill Certification · Higher Education Counseling',
    sections: [
      {
        heading: 'Placement & Higher Education Track Record',
        body: '94.2% of graduating cohorts transition directly into campus-recruited roles across IT, banking, accounting, and life sciences or secure admission to premier postgraduate universities.',
      },
      {
        heading: 'Skill Readiness Modules',
        body: 'Every final-year student completes 60 hours of structured quantitative aptitude, technical interviewing, GST/Tally certification, or full-stack lab workshops before placement season.',
      },
      {
        heading: 'Recruiting Sectors',
        body: 'Graduates regularly join technology firms at Infopark Kochi & Cyberpark Kozhikode, scheduled commercial banks, chartered accounting practices, and educational institutions.',
      },
    ],
  },
  scholarships: {
    id: 'scholarships',
    title: 'Scholarships & Fee Concessions',
    subtitle: 'Merit Awards · Trust Support · Government e-Grantz Assistance',
    sections: [
      {
        heading: 'HM College Trust Merit Scholarship',
        body: 'Tuition fee waivers ranging from 25% to 100% for incoming UG and PG students scoring 90%+ in qualifying board or university examinations.',
      },
      {
        heading: 'State & Central Scholarship Facilitation',
        body: 'Dedicated administrative desk assisting eligible students with Kerala e-Grantz, Central Sector Scholarship, CH Muhammed Koya Scholarship, and Minority Welfare fellowships.',
      },
      {
        heading: 'Sports & Cultural Excellence Grants',
        body: 'Special fee concessions and equipment stipends for state and university-level athletes and arts festival medalists.',
      },
    ],
  },
  accreditation: {
    id: 'accreditation',
    title: 'Affiliation, IQAC & Accreditation',
    subtitle: 'University of Calicut · Internal Quality Assurance Cell (IQAC)',
    sections: [
      {
        heading: 'University Affiliation',
        body: 'HM College of Science and Technology, Manjeri is permanently affiliated to the University of Calicut and follows the Four-Year Undergraduate Programme (FYUGP) and CBCSS PG regulations.',
      },
      {
        heading: 'Internal Quality Assurance Cell (IQAC)',
        body: 'Our IQAC conducts periodic academic audits, faculty development workshops, and outcome-based curriculum reviews to maintain teaching rigor and laboratory standards.',
      },
      {
        heading: 'Anti-Ragging & Student Grievance Redressal',
        body: 'Zero-tolerance anti-ragging compliance in accordance with UGC regulations, backed by an active Internal Complaints Committee and Student Mentoring Cell.',
      },
    ],
  },
  calendar: {
    id: 'calendar',
    title: 'Academic Calendar 2026–27',
    subtitle: 'Key Institutional Milestones & Examination Windows',
    sections: [
      {
        heading: 'Odd Semester (Semesters I, III, V)',
        body: 'Classes commence in July 2026 · First Internal Assessment in September 2026 · University End-Semester Examinations in November–December 2026.',
      },
      {
        heading: 'Even Semester (Semesters II, IV, VI)',
        body: 'Classes resume in January 2027 · Annual Arts & Sports Meet in February 2027 · Campus Placement Drive in March 2027 · Final Examinations in April–May 2027.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'HM College of Science and Technology, Manjeri',
    sections: [
      {
        heading: 'Student & Applicant Data Protection',
        body: 'Personal details submitted through admission enquiry or contact forms are used strictly by the HM College Admissions Office to process academic counseling and enrollment requests.',
      },
      {
        heading: 'No Third-Party Commercial Sharing',
        body: 'Applicant records are never sold or shared with external commercial entities and are disclosed only to the University of Calicut or statutory scholarship authorities when required by law.',
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Terms of Service',
    subtitle: 'Institutional Portal Usage & Academic Notices',
    sections: [
      {
        heading: 'Program & Fee Notices',
        body: 'Course structures, intake capacities, and eligibility norms adhere to current University of Calicut statutes and Government of Kerala higher education directives.',
      },
      {
        heading: 'Code of Academic Conduct',
        body: 'All enrolled students and portal users agree to uphold institutional integrity, respectful communication, and accurate representation of academic credentials.',
      },
    ],
  },
};
