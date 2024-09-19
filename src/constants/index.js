import {
  jest,
  npm, 
  cloudflare,
  bootstrap,
  postgresql,
  webpack,
  vitejs,
  github,
  netlify,
  expressjs,
  vscode,
  mern, 
  sql,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  noteapp,
  memegenerator,
  airbnb,
  threejs,
  mysql,
  language,
  frontend,
  backendd,
  dev
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name:'Express',
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MeRN Stack",
    icon: mern,
  }
  
];

const skills = [
  {
    title: "Languages",
    icon: language,
    iconBg: "#383E56",
    points: [
      html, css, javascript, mysql
    ],
  },
  {
    title: "FrontEnd Libraries/Frameworks",
    icon: frontend,
    iconBg: "#f1f1f1",
    points: [
      reactjs, redux, tailwind, threejs, bootstrap
    ],
  },
  {
    title: "BackEnd Libraries/Frameworks",
    icon: backendd,
    iconBg: "#383E56",
    points: [
      nodejs,expressjs, mongodb, sql, postgresql
    ],
  },
  {
    title: "Dev Tools",
    icon: dev,
    iconBg: "#f1f1f1",
    points: [
      vscode,  github, git, netlify,cloudflare, vitejs, webpack,npm,jest, figma, 
    ],
  },
];
const projects = [
  {
    name: "NoteApp",
    // description:
    //   "Web-based platform that allows users to create and manage notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cloudflare",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      }
    ],
    image: noteapp,
    source_code_link: "https://github.com/CodingCookiee/NoteApp",
  },
  {
    name: "Meme Generator",
    // description:
    //   "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: memegenerator,
    source_code_link: "https://github.com/CodingCookiee/MemeGenerator/",
  },
  {
    name: "Airbnb Clone",
    // description:
    //   "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/CodingCookiee/AirbnbClone",
  },
];

export { services, technologies, skills, projects };

