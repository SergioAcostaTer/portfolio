import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sergio Acosta Quintana",
  initials: "SAQ",
  url: "https://sergioaco.com",
  location: "Las Palmas, Spain",
  locationLink:
    "https://www.google.com/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.1173592,-15.4602595,14z",
  description: "Software Engineer & Full-Stack Developer",
  summary:
    "I’m a Software Engineer at [BITBOX S.L. (IKEA Spanish Islands)](/#work) since 2025, building scalable web apps with strong APIs and microservices. While finishing my [Computer Engineering degree at ULPGC](/#education) and an [Erasmus+ exchange at Halmstad University](/#education), I deliver robust backend and front-end solutions with skill and adaptability.",
  avatarUrl: "/me.webp",
  skills: [
    // Core Backend Languages & Technologies
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    // Backend Frameworks & Tools
    "Express.js",
    "Spring Boot",
    "NestJS",
    "Django",
    // Databases & Messaging Systems
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kafka",
    "RabbitMQ",
    // DevOps & Cloud
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, Lambda)",
    "CI/CD (GitHub Actions, Jenkins)",
    "Linux Server Management",
    // Full-Stack & Frontend
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    // Other
    "RESTful APIs",
    "GraphQL",
    "Microservices Architecture",
    "Git",
    "Unit Testing (Jest, JUnit)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sergioacostaquintana@gmail.com",
    tel: undefined,
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sergioacostater",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sergioacostaquintana/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sergioacostaquintana@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "BITBOX S.L.|(IKEA)",
      href: "https://bitbox.com/",
      location: "Las Palmas, Spain",
      title: "Full-Stack Developer",
      logoUrl: "/bitbox.webp",
      start: "Jan 2025",
      startDate: new Date(2025, 0),
      end: "Present",
      description:
        "Developed scalable backend systems using Java and Spring Boot, with PostgreSQL for data storage. Built RESTful APIs and microservices, utilizing Kafka for event-driven communication. Contributed to front-end development with React and TypeScript. Managed code and collaboration through Git in an Agile SCRUM environment.",
    },
  ],
  education: [
    {
      school: "University of Las Palmas de Gran Canaria (ULPGC)",
      href: "https://www.ulpgc.es/",
      degree: "Bachelor's in Computer Engineering",
      logoUrl: "/ulpgc.webp",
      start: "2022",
      end: "Present",
      location: "Las Palmas, Spain",
      description:
        "Pursuing a degree in Computer Engineering with a focus on software architecture, distributed systems, and backend development. Coursework includes advanced algorithms, database design, and cloud computing.",
    },
    {
      school: "Halmstad University",
      href: "https://www.hh.se/",
      degree: "Computer Science",
      logoUrl: "/halmstad.webp",
      start: "2024",
      end: "2025",
      location: "Halmstad, Sweden",
      description:
        "Completed an Erasmus+ program specializing in backend development and software engineering. Studied scalable system design, message queues, and cloud-native technologies.",
    },
  ],
  projects: [
    // {
    //   title: "Distributed E-Commerce Platform",
    //   href: "https://github.com/sergioacostater/ecommerce-platform",
    //   dates: "2024",
    //   active: true,
    //   description:
    //     "Developed a scalable e-commerce backend with Spring Boot and PostgreSQL, featuring microservices orchestrated via Kubernetes. Integrated Kafka for real-time event streaming and RabbitMQ for asynchronous messaging. Built a responsive front-end with React and TypeScript, deployed using Docker and AWS.",
    //   technologies: [
    //     "Spring Boot",
    //     "PostgreSQL",
    //     "Kafka",
    //     "RabbitMQ",
    //     "Docker",
    //     "Kubernetes",
    //     "React",
    //     "TypeScript",
    //     "AWS",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/sergioacostater/ecommerce-platform",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/ecommerce-platform.webp",
    // },
    {
      title: "Playea: Canary Beaches",
      href: "https://playea.eu/",
      dates: "2025",
      active: true,
      description:
        "Engineered a backend system with Node.js, Express, and PostgreSQL to deliver real-time beach data for the Canary Islands. Implemented Redis caching for performance optimization and Docker for deployment. Developed a dynamic Angular front-end with TypeScript for a seamless user experience.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Angular",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://playea.eu/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/playea.webp",
    },
    {
      title: "Bitcoin Price Extension",
      href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
      dates: "2023",
      active: true,
      description:
        "Built a lightweight Chrome extension with a Node.js backend to fetch real-time Bitcoin prices via the Binance API. Utilized Redis for caching to reduce API calls and improve response times, deployed with Docker for consistency.",
      technologies: ["JavaScript", "Binance API", "HTML", "CSS"],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bitcoin-price-extension.webp",
    },
  ],
};
