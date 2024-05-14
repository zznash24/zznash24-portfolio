import {
  frontend,
  backend,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  postgresql,
  math,
  myCompany,
  underdog,
  docker,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer Student',
    company_name: 'DigitalCrafts',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Nov 2021',
  },
  {
    title: 'Web Dev & Software Engineer Teaching Assistant',
    company_name: 'DigitalCrafts',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Feb 2023',
  },
  {
    title: 'UI & UX Front End Lead',
    company_name: 'COR Hackathon',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Oct 2023',
  },
  {
    title: 'Front End Developer',
    company_name: 'Nash Interactive Media',
    icon: reactjs,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Nash Interactive Media',
    description: 'My company website where I create websites and logos for customers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: myCompany,
    repo: 'https://github.com/zznash24/nash-interactive-media',
    demo: 'https://nashinteractivemedia.com/',
  },
  {
    id: 'project-2',
    name: 'Underdog Rescue',
    description:
      'A web app that allows user to input there zipcodes and serch for nearby adoptable dogs',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: underdog,
    repo: 'https://github.com/zznash24/front-end-project',
    demo: 'https://underdog-rescue-fr.netlify.app',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
