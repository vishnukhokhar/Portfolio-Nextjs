import { meta, shopify, starbucks, tesla, hopingminds } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management",
  // },
  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: threejs,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "Hoping Minds",
    icon: hopingminds,
    iconBg: "#accbe1",
    date: "Jan 2024 - June 2024",
    points: [
      "Designed and developed a comprehensive web-based placement portal using modern technologies to facilitate job application management and tracking.",
      "Implemented an intuitive user interface allowing candidates to browse job listings, submit applications, and track their application status efficiently.",
      " Incorporated features like real-time application updates and secure user authentication to ensure a seamless and engaging experience for both candidates and administrators.",
    ],
  },
  {
    title: "Virtual Frontend Developer Internship",
    company_name: "UNIcompiler",
    icon: tesla,
    iconBg: "#ccc",
    date: "June 2022- July 2022",
    points: [
      "Developed a Personal Portfolio Website using HTML, CSS, JavaScript",
      "Developed a quiz web app using HTML, CSS, JavaScript which asks 5 ques to the use.",
      "Developed a calculator using HTML, CSS, JavaScript.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/vishnukhokhar",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "www.linkedin.com/in/vishnu-khokhar-65061a244",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Personal Portfolio",
    description:
      "Created a personal portfolio using Three.js, showcasing my skills, projects, and experience with a modern, responsive design. Implemented custom animations, interactive components.",
    link: "https://myportfolio-henna-ten.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Human Activity Recognition ",
    description:
      " Proposed and implemented a deep learning-based LRCN architecture for human activity recognition, capable of identifying movements like walking, running, and fighting.",

    link: "https://github.com/vishnukhokhar/HUMAN-ACTIVITY-RECOGNITION/tree/main",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "AI-Powered 3D Website",
    description:
      "Dynamically generate unique 3D shirts/swag with color customization, logo upload functionality, texture image upload, AI-generated logo integration, and AI-generated textures for enhanced personalization.",
    link: "https://ai-3d-website-weld.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Chess Game",
    description:
      "Developed a two-player chess game using Chess.js, enabling interactive gameplay with real-time move validation.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },

  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Rental System",
    description:
      "Developed a SQL database for user vehicle rentals, enabling registration, bookings, personalized car selections, and optional driver requests.",
    link: "https://github.com/vishnukhokhar/CAR-RENTAL-SYSTEM",
  },

  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
