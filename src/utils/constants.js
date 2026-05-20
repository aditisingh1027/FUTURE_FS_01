import { Mail, FileText, ExternalLink, Award, Briefcase, Code2, Cpu, Database, Layout, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';

export const NAV_LINKS = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact',  href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/aditisingh1027' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/aditi-kumari-singh-9b8517376/' },
  { name: 'Email', icon: Mail, href: 'mailto:aaditisingh1027@gmail.com' },
];

export const BENTO_ITEMS = {
  about: {
    title: "About Me",
    description: "I'm a CSE student at CV Raman Global University who genuinely enjoys building things — whether that's a full-stack web app, an ML model, or just a small tool that solves a real problem.",
  },
  stats: [
    { label: "Projects shipped", value: "2+" },
    { label: "Technologies picked up", value: "18+" },
    { label: "Certifications", value: "4" },
  ],
  skills: ["Python", "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TailwindCSS", "MySQL", "Git", "REST APIs"],
  certifications: [
    { name: "Data Engineering on AWS Foundations", issuer: "AWS Training" },
    { name: "Data Analytics Virtual Experience", issuer: "Deloitte Forage" },
    {
      name: "Self-Driving Cars Specialization",
      issuer: "Coursera / University of Toronto",
      modules: [
        "Introduction to Self-Driving Cars",
        "State Estimation and Localization for Self-Driving Cars",
        "Visual Perception for Self-Driving Cars",
        "Motion Planning for Self-Driving Cars",
      ]
    },
  ],
  experience: {
    role: "Full-Stack Developer Intern",
    company: "Future Interns",
    period: "2025 – Present"
  },
  featuredProject: {
    title: "Campusync",
    description: "Built this with a team to solve a real problem — students and placement coordinators had no clean way to stay in sync. Still actively working on it.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Cloudinary"]
  }
};

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "CampusSync",
    description: "Started as a college idea and slowly became something people actually used. Built the full frontend, wired up REST APIs, handled JWT auth, and integrated Cloudinary for file uploads. Learned a lot about RBAC the hard way — but it shipped, and it works.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/Nazia004/Campus-Fe",
    liveUrl: "https://campusync.co.in/"
  },
  {
    id: 2,
    title: "LokTruth",
    description: "My first real dive into AI — spent 5 months building a deepfake detection system using computer vision. Honestly pretty humbling. Learned more from the failures than the wins. Repo and writeup coming soon.",
    tags: ["Python", "Computer Vision", "Deep Learning", "AI/ML"],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This site. Built it to experiment with UI design, animations, and interactions — and to have a place that actually feels like mine. Used React, Vite, TailwindCSS, and Framer Motion. Still tweaking things.",
    tags: ["React.js", "Vite", "TailwindCSS", "Framer Motion", "React Router"],
    githubUrl: "https://github.com/aditisingh1027/FUTURE_FS_01",
    liveUrl: "https://campusync.co.in/"
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Future Interns",
    period: "2025 – Present",
    location: "Remote",
    description: "Working on real MERN stack projects as part of a structured internship. It's been good practice — writing actual APIs, building UIs that need to work on mobile, and getting feedback on code quality.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"]
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Campusync — Team Project",
    period: "Ongoing",
    location: "Bhubaneswar, India",
    description: "Co-built a placement platform with a small team. I handled most of the frontend, helped design the API structure, and spent way too long debugging CORS issues. Shipped it. It works.",
    skills: ["React.js", "Node.js", "MongoDB", "JWT", "Cloudinary", "REST APIs"]
  },
  {
    id: 3,
    role: "AI/ML Developer",
    company: "LokTruth — Academic Project",
    period: "Nov 2024 – Mar 2025",
    location: "Bhubaneswar, India",
    description: "My first real dive into computer vision and deep learning. Built a deepfake detection system — it was messy, educational, and genuinely interesting. Learned more from the failures than the wins.",
    skills: ["Python", "Computer Vision", "Deep Learning", "AI/ML"]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: Cpu,
    skills: ["Python", "JavaScript", "Java", "SQL"]
  },
  {
    title: "Data & Analytics",
    icon: Sparkles,
    skills: ["Pandas", "NumPy", "Power BI", "Excel", "Data Visualization", "Data Cleaning"]
  },
  {
    title: "Web Development",
    icon: Layout,
    skills: ["React.js", "TailwindCSS", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"]
  },
  {
    title: "Databases & Tools",
    icon: Code2,
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code"]
  }
];
