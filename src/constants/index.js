import {
  jest, 
  webpack,
  vitejs,
  github,
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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  pandaai,
  noteapp,
  memegenerator,
  airbnb,
  threejs,
  mysql,
  language,
  frontend,
  backendd,
  dev,
  fiverrservices,
  pandaplay,
  docker,
  firebase,
  restful ,
  stripe,
  uauth,
  domain_integration,
  aws,
 
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
    id: "projects",
    title: "Projects",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "MeRN Stack",
    icon: mern,
  }
  
];

const skills = [
  {
    title: "Languages",
    icon: language,
    iconBg: "#383E56",
    points: {
      images: [
      html, css, javascript, mysql
    ],
    names: [
      "HTML5", "CSS3", "JavaScript", "MySql"
    ]}
  },
  {
    title: "FrontEnd Libraries/Frameworks",
    icon: frontend,
    iconBg: "#f1f1f1",
    points:{images: [
       reactjs, tailwind, threejs 
    ],
    names:[
     
      "React js"," Tailwind CSS", "Three Js", 
    ]}
  },
  {
    title: "BackEnd Libraries/Frameworks",
    icon: backendd,
    iconBg: "#383E56",
    points:{images: [
      nodejs, expressjs, mongodb, sql, firebase
    ],
    names:[
      
      "Node Js", "Express Js", "MongoDB", "Sql", "Firebase"
    ]}
  },
  {
    title: "Dev Tools",
    icon: dev,
    iconBg: "#f1f1f1",
    points:{images: [
      vscode, github, git, vitejs, webpack, restful, jest, 
      stripe, docker,  uauth, domain_integration, aws, figma,
    ],
    names:[
      "Vs Code", "Github", "Git", "Vite Js", "Webpack", "RESTful", "Jest", 
      "Stripe", "Docker",  "UAuth", "Domain Integration", "Aws", "Figma",
    ]}
  },
];

const projects = [
  {
    name: "PandaPlay",
    description:
      "PandaPlay is a Movie management web app; developed using MERN Stack & TMBD API.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
       {
        name: "TMBD API",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Jwt",
        color: "green-text-gradient",
      }
    ],
    image: pandaplay,
    source_code_link: "https://github.com/CodingCookiee/moviesapp",
  },
   {
    name: "PANDA AI",
    description:
      "Panda AI is an AI chat bot; developed using MERN Stack & Google Gemini API.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
       {
        name: "Google Gemini API",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      }
    ],
    image: pandaai,
    source_code_link: "https://github.com/CodingCookiee/PANDA-AI",
  },
  {
    name: "Fiverr Clone",
    description:
      "Fully Functional & Responsive Fiverr Clone developed using MERN Stack",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
       {
        name: "Stripe Payments API",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      }
    ],
    image: fiverrservices,
    source_code_link: "https://github.com/CodingCookiee/FiverrClone",
  },

  {
    name: "NoteApp",
    description:
      "Web-based platform that uses lets users to perform basic CRUD functions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CRUD API",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      }
    ],
    image: noteapp,
    source_code_link: "https://github.com/CodingCookiee/NoteApp",
  },
  {
    name: "Meme Generator",
    description:
      "Simple Web based meme generator",
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
    name: "Airbnb Experiences Clone",
    description:
      "Airbnb experiences page clone",
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

