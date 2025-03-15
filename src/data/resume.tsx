import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sergio Acosta Quintana",
  initials: "SAQ",
  url: "https://sergioaco.com",
  location: "Las Palmas, Spain",
  locationLink:
    "https://www.google.com/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.1173592,-15.4602595,14z",
  description: "Computer Engineer and Full Stack Developer.",
  summary:
    "I’m a Computer Science student at ULPGC with full-stack experience, currently [working at BITBOX S.L. (IKEA Spanish Islands)](/#work) on scalable web apps since 2025. I specialize in intuitive, high-performance solutions and am [pursuing my degree at ULPGC](/#education) while [studying abroad at Halmstad University via Erasmus+](/#education).",
  avatarUrl: "/me.webp",
  skills: [
    // Languages
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "SQL",
    "Java",
    "C++",
    // Frameworks & Libraries
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "Astro",
    "Angular",
    "Spring Boot",
    // Databases & Message Brokers
    "PostgreSQL",
    "Redis",
    "Kafka",
    "RabbitMQ",
    // Other Tools
    "API Development",
    "RESTful Services",
    "Tailwind CSS",
    "Docker",
    "Kubernetes",
    "AWS",
    "SEO",
    "Google Analytics",
    "Linux Server Management",
    "Git",
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
      company: "BITBOX S.L. (IKEA Spanish Islands)",
      href: "https://bitbox.com/",
      location: "Las Palmas, Spain",
      title: "Full Stack Developer",
      logoUrl: "/bitbox.webp",
      start: "Jan 2025",
      startDate: new Date(2025, 0),
      end: "Present",
      description:
        "Development and maintenance of web applications using modern technologies such as React, Node.js, Spring Boot, and PostgreSQL. Implemented microservices architecture with Kafka. SCRUM methodology and CI/CD pipelines.",
      badges: ["Microservices"],
    },
  ],
  education: [
    {
      school: "University of Las Palmas de Gran Canaria (ULPGC)",
      href: "https://www.ulpgc.es/",
      degree: "Computer Engineering",
      logoUrl: "/ulpgc.webp",
      start: "2022",
      end: "Present",
      location: "Las Palmas, Spain",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering. Specializing in software development and distributed systems.",
    },
    {
      school: "Halmstad University",
      href: "https://www.hh.se/",
      degree: "Computer Science",
      logoUrl: "/halmstad.webp",
      start: "2024",
      end: "2025",
      badges: ["Erasmus+"],
      location: "Halmstad, Sweden",
      description:
        "Erasmus+ exchange program in Computer Science. Studied advanced programming and software engineering.",
    },
  ],
  projects: [
    {
      title: "Bitcoin Price Extension",
      href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
      dates: "2023",
      active: true,
      description:
        "A Chrome extension that displays the real-time price of Bitcoin, integrated with a Redis cache for performance and deployed via Docker.",
      technologies: [
        "JavaScript",
        "Binance API",
        "HTML",
        "CSS",
        "Redis",
        "Docker",
      ],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bitcoin-price-extension.webp",
    },
    // {
    //   title: "Distributed E-Commerce Platform",
    //   href: "https://github.com/sergioacostater/ecommerce-platform",
    //   dates: "2024",
    //   active: true,
    //   description:
    //     "A scalable e-commerce platform built with Spring Boot and PostgreSQL, utilizing Kafka for event streaming and RabbitMQ for messaging between microservices. Deployed with Docker and orchestrated with Kubernetes.",
    //   technologies: [
    //     "Spring Boot",
    //     "PostgreSQL",
    //     "Kafka",
    //     "RabbitMQ",
    //     "Docker",
    //     "Kubernetes",
    //     "React",
    //     "TypeScript",
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
  ],
};
