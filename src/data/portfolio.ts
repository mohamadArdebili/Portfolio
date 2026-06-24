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
  headline: 'Computer Engineering Student | Software & AI Enthusiast',
  intro:
    'I am a final-year Computer Engineering student with a strong interest in software development and artificial intelligence. I enjoy building reliable backend systems and practical AI applications, and I am seeking new paths to deepen my research and engineering experience.',
  email: 'mh.vali.ardabili@gmail.com',
  cvUrl: '/cv.pdf', // Replace public/cv.pdf with your real CV.
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
      institution: 'Islamic Azad University', // Replace with your university name.
      years: '2022 – 2026', // Replace with your actual study years.
      details:
        'Passionate final-year undergraduate student focused on applied Artificial Intelligence, Deep Learning,software engineering and Web development in the ranked 2nd university in Iran.',
    },
    {
      degree: 'Diploma of Mathematics ',
      institution: 'Shahid Soltani Talented Students School (Sampad)',
      years: '2019 – 2022',
      details:
        'Ranked 1st in Iran - Shahid Soltani is among nationwide schools developed to provide education for Iran’s exceptionally talented students and are managed by the National Organization for Development of Exceptional Talents.',
    },
  ] satisfies EducationItem[],
  skills: [
    {
      title: 'Backend',
      skills: ['Python', 'Django', 'REST APIs', 'Database Design'],
    },
    {
      title: 'AI / Machine Learning',
      skills: ['Computer Vision', 'Face Recognition', 'Machine Learning', 'Model Evaluation'],
    },
    {
      title: 'Languages & Tools',
      skills: ['Python', 'TypeScript', 'Git', 'React', 'Linux'],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: 'Face Recognition System',
      description:
        'A computer vision project for detecting and recognizing faces, with attention to model accuracy and practical usage.',
      tags: ['Python', 'Computer Vision', 'Machine Learning'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Django Backend API',
      description:
        'A backend API project demonstrating structured Django development, RESTful endpoints, and maintainable server-side logic.',
      tags: ['Python', 'Django', 'REST API'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Research Project Placeholder',
      description:
        'Add a concise description of an academic, AI, or software engineering project that highlights your research interests.',
      tags: ['Research', 'AI', 'Python'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Software Project Placeholder',
      description:
        'Add a project that shows engineering judgment, clean implementation, collaboration, or backend architecture.',
      tags: ['Software Engineering', 'TypeScript', 'Git'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Course Project Placeholder',
      description:
        'Add a strong university course project with a clear problem, your contribution, and the technologies used.',
      tags: ['Computer Engineering', 'Project', 'Development'],
      codeUrl: 'https://github.com/mohamadardebili',
    },
    {
      title: 'Course Project Placeholder',
      description:
        'Add a strong university course project with a clear problem, your contribution, and the technologies used.',
      tags: ['Computer Engineering', 'Project', 'Development'],
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
