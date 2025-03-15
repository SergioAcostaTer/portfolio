import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sergio Acosta Quintana",
  initials: "SAQ",
  url: "https://sergioaco.com",
  location: "Las Palmas, España",
  locationLink:
    "https://www.google.com/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.1173592,-15.4602595,14z",
  description: "Ingeniero Informático y desarrollador Full Stack.",
  summary:
    "Soy un apasionado por la tecnología y el desarrollo de software. Me encanta crear soluciones innovadoras y mejorar constantemente mis habilidades en desarrollo web y aplicaciones distribuidas.",
  avatarUrl: "/me.webp",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Java",
    "C++",
    "Astro",
    "Angular",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        name: "Enviar Email",
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
      location: "Las Palmas, España",
      title: "Desarrollador Full Stack",
      logoUrl: "/bitbox.jpg",
      start: "Ene 2025",
      startDate: "2025-01-01",
      end: "Presente",
      description:
        "Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías modernas como React, Node.js y bases de datos SQL/MongoDB.",
      badges: undefined,
    },
  ],
  education: [
    {
      school: "Universidad de Las Palmas de Gran Canaria (ULPGC)",
      href: "https://www.ulpgc.es/",
      degree: "Ingeniería Informática",
      logoUrl: "/ulpgc.jpg",
      start: "2022",
      end: "2026",
      location: "Las Palmas, España",
    },
    {
      school: "Halmstad University",
      href: "https://www.hh.se/",
      degree: "Computer Science",
      logoUrl: "/halmstad.png",
      start: "2024",
      end: "2025",
      location: "Halmstad, Suecia",
    },
  ],
  projects: [
    {
      title: "StudioHub",
      href: "https://studiohub.com",
      dates: "2024 - Presente",
      active: true,
      description:
        "Marketplace para artistas musicales con funcionalidades avanzadas para la gestión y promoción de contenido.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
      links: [
        {
          type: "Website",
          href: "https://studiohub.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/studiohub.webp",
      video: "",
    },
    {
      title: "Clon de Spotify",
      href: "#",
      dates: "2023",
      active: false,
      description:
        "Aplicación de streaming de música inspirada en Spotify, con autenticación y reproducción en tiempo real.",
      technologies: ["React", "TypeScript", "Firebase", "Spotify API"],
      links: [],
      image: "/projects/spotify-clone.webp",
      video: "",
    },
  ],
};
