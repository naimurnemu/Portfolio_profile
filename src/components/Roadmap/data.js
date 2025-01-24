import { FaBrain, FaCode, FaRegLightbulb, FaRocket, FaServer } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export const milestones = [
  {
    id: 1,
    title: "Web Design",
    subtitle: "Embarked on my development journey",
    description: "Learned HTML, CSS, and Bootstrap to build responsive websites.",
    date: "2020",
    icon: <FaRegLightbulb />
  },
  {
    id: 2,
    title: "Front-End Development",
    subtitle: "Mastered dynamic UI development",
    description: "Learned JavaScript, React, Material-UI, and Tailwind CSS.",
    date: "2021",
    icon: <FaCode />
  },
  {
    id: 3,
    title: "Into Professional Life",
    subtitle: "First job at Medlink Jobs",
    description: "Worked with Redux and Next.js basics, contributing to Medlink Jobs.",
    date: "2022",
    icon: <MdWork />
  },
  {
    id: 4,
    title: "Expanding Horizons",
    subtitle: "Deepened knowledge across technologies",
    description: "Learned TypeScript, Mongoose, Next.js, C, Java, and OOP.",
    date: "2023",
    icon: <FaRocket />
  },
  {
    id: 5,
    title: "AI & Advanced Learning",
    subtitle: "Delved into AI and core concepts",
    description: "Learned AI integration, C++, data structures, algorithms, Python with OOP, and SQL.",
    date: "2024",
    icon: <FaBrain />
  },
  {
    id: 6,
    title: "Backend Expertise",
    subtitle: "Focusing on backend mastery",
    description: "Learning Django, unit testing, and advanced Backend techniques.",
    date: "2025",
    icon: <FaServer />
  }
];
