import {
  FaBrain,
  FaCode,
  FaRegLightbulb,
  FaRocket,
  FaServer,
  FaLaptopCode,
  FaCogs,
  FaCloud
} from "react-icons/fa";
import { MdWork, MdComputer } from "react-icons/md";

export const milestones = [
  {
    id: 1,
    title: "The First Pixel",
    subtitle: "Started building for the web",
    description:
      "Started with HTML, CSS, and Bootstrap, learning how ideas become responsive interfaces on the web.",
    date: "2020",
    icon: <FaRegLightbulb />
  },
  {
    id: 2,
    title: "Making Interfaces Think",
    subtitle: "Moved from static pages to applications",
    description:
      "Learned JavaScript, React, Material UI, and Tailwind CSS, discovering how interactive web applications come together.",
    date: "2021",
    icon: <FaCode />
  },
  {
    id: 3,
    title: "Into Professional Life",
    subtitle: "First step into production software",
    description:
      "Joined MedLink Jobs and began working with Redux and Next.js while learning how real products are built, shipped, and maintained.",
    date: "2022",
    icon: <MdWork />
  },
  {
    id: 4,
    title: "Beyond the Framework",
    subtitle: "Started understanding the foundations",
    description:
      "Expanded into TypeScript, C++, OOP, problem solving, and DSA fundamentals while challenging myself beyond everyday frontend development.",
    date: "2023",
    icon: <FaLaptopCode />
  },
  {
    id: 5,
    title: "The Computer Science Rabbit Hole",
    subtitle: "The more I learned, the more I realized I didn't know",
    description:
      "Explored DSA, algorithms, C++, Python, SQL, and AI integration while discovering the depth behind the tools I had been using.",
    date: "2024",
    icon: <FaBrain />
  },
  {
    id: 6,
    title: "Going Down the Rabbit Hole",
    subtitle: "Discovered the beauty beneath the abstractions",
    description:
      "Explored operating systems, networking, compilers, computer architecture, and low-level concepts to understand how computers actually work.",
    date: "2025",
    icon: <MdComputer />
  },
  {
    id: 7,
    title: "Going Back Up",
    subtitle: "Building on stronger foundations",
    description:
      "Adopting Linux and Bash while stepping into modern software engineering, system architecture, and system design by layers.",
    date: "2026",
    icon: <FaCogs />
  },
  // {
  //   id: 8,
  //   title: "Reaching the Cloud",
  //   subtitle: "The next frontier",
  //   description:
  //     "In 2027, I plan to explore cloud engineering, distributed systems, infrastructure, and production-scale software architecture.",
  //   date: "2027",
  //   icon: <FaCloud />
  // }
];