import { FaGitAlt, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import imgtodo from "../assets/todo-app.png";
import imgportfolio from "../assets/portfolio.png";
import imgcourseweb from "../assets/learndata.png";

export const homeContents = {
  heading: "Hello, I'm",
  devName: "Olajire Taofeek",
  aboutDev:
    "I am a frontend developer I have a strong background in creating visually appealing and user-friendly web experiences. I am motivated to find a role where I can challenge myself and provide value to website users. I am excited to bring my knowledge and experience to a team and contribute to a company's success.",
  resume: "",
};

export const skillsContent = {
  heading: "I work mostly with",
  span: "Frontend Technologies",
  details:
    "Here are some of the tools i've worked with over the years, for my personal, professional and open source projects.",
  tools: ["Git", "React", "Tailwind", "HTML", "CSS", "JavaScript"],
  icons: [
    <FaGitAlt />,
    <FaReact />,
    <RiTailwindCssFill />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <AiOutlineJavaScript />,
  ],
};

export const projectsContent = {
  heading: "I love working on",
  span: "fun projects",
  details:
    "In my leisure time, I enjoy experimenting with and building things that I find personally interesting or useful. A few examples of these projects can be found on my GitHub page, where you can also find other miscellaneous creations I have worked on.",
  link: "https://github.com/Oltao",
  projects: [
    {
      img: imgtodo,
      title: "To-Do App",
      desc: "A mini app to manage todos",
      tools: ["React"],
      githubLink: "https://github.com/Oltao/todo-app",
      viewLink: "https://todo-lyart-nine.vercel.app/",
    },
    {
      img: imgcourseweb,
      title: "LearnWithDevmant",
      desc: "Learn Tech courses",
      tools: ["React", "Tailwind"],
      githubLink: "https://github.com/Oltao/learnwithdevmant",
      viewLink: "https://learnwithdevmant.vercel.app/",
    },
    {
      img: imgportfolio,
      title: "Portfolio",
      desc: "my personal website",
      tools: ["React", "Tailwind"],
      githubLink: "https://github.com/Oltao/portfolio",
      viewLink: "",
    },
  ],
};

export const contactContent = {
  heading: "Want to work with me?",
  span: "let's Connect",
  details:
    "I am open to remote and onsite full-time, part-time roles. If you've got anything you think I'd be interested in then fill the form.",
};
