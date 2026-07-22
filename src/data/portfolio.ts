export type SocialLink = {
  label: string;
  href: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  details: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
};

export const portfolio = {
  name: 'Mohammad Hossein ValiArdabili',
  headline: 'CE Student | AI Researcher & Backend Developer',
  intro:
    'I am a final-year Computer Engineering student and co-founder of DEMORA AI startup, with a strong focus on Computer Vision, Deep Learning, and backend development. I build reliable AI-powered systems and scalable backend architectures, and I am seeking graduate research opportunities to deepen my expertise.',
  email: 'mh.vali.ardabili@gmail.com',
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/mohamadardebili',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammad-ardebili',
    },
  ] satisfies SocialLink[],
  education: [
    {
      degree: 'B.Sc. in Computer Engineering',
      institution: 'Islamic Azad University',
      years: '2022 – 2026',
      details:
        'GPA: 3.7/4 (18.5/20). Ranked 2nd university in Iran (US News). Focused on applied AI, Deep Learning, and software engineering. Research on Human Pose Estimation for automated exercise assessment.',
    },
    {
      degree: 'Diploma of Mathematics',
      institution: 'Shahid Soltani Talented Students School (Sampad)',
      years: '2019 – 2022',
      details:
        'GPA: 4/4 (20/20). Ranked 1st in Iran — a nationwide school for exceptionally talented students, managed by the National Organization for Development of Exceptional Talents.',
    },
  ] satisfies EducationItem[],
  skills: [
    {
      title: 'AI & Machine Learning',
      skills: ['Computer Vision', 'OpenCV', 'MediaPipe', 'Deep Learning', 'Scikit-Learn', 'NumPy', 'Pandas'],
    },
    {
      title: 'LLM & Retrieval Systems',
      skills: ['LangChain', 'RAG', 'Vector Databases', 'ChromaDB', 'Prompt Engineering'],
    },
    {
      title: 'Backend Development',
      skills: ['Django', 'Django REST Framework', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      title: 'Languages & Tools',
      skills: ['Python', 'JavaScript', 'C++', 'SQL', 'Git', 'Docker', 'Linux'],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: 'Human Pose Estimation for Exercise Assessment',
      description:
        'Designed a computer vision system using MediaPipe for automated analysis of exercise movements. Achieved 90-95% accuracy in repetition counting through joint angle tracking and smoothing techniques.',
      tags: ['Python', 'MediaPipe', 'Computer Vision', 'Django'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Real-Time Face Recognition',
      description:
        'Implemented a real-time face recognition system using OpenCV and feature embeddings. Built a labeled dataset (~30 images/person), encoding comparison pipeline, and webcam-based live identification.',
      tags: ['Python', 'OpenCV', 'Face Recognition', 'Deep Learning'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Employee Attendance Management System',
      description:
        'Web-based attendance and request management platform with ~30 RESTful API endpoints. Built with Django, DRF, and PostgreSQL, featuring an admin dashboard for monitoring working hours.',
      tags: ['Django', 'DRF', 'PostgreSQL', 'REST API'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Persian RAG System',
      description:
        'Retrieval-Augmented Generation system for Persian language achieving ~95% accuracy in document retrieval. Implements ingestion, embedding generation, and vector retrieval pipelines using LangChain.',
      tags: ['LangChain', 'RAG', 'ChromaDB', 'Python'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'DEMORA AI Startup',
      description:
        'Co-founded a 9-member startup leading backend system design. Developing a Persian-native RAG system with LangChain and OpenCV-based face recognition for automated attendance verification.',
      tags: ['Startup', 'LangChain', 'OpenCV', 'Django'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
  ] satisfies Project[],
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
