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
    avatarUrl: "/me.png",
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
        {
            title: "NexoCloud – Intelligent Cloud Storage Platform",
            href: "https://github.com/SergioAcostaTer/aicloud-drive",
            dates: "2026",
            active: true,
            description:
                "An AI-augmented cloud storage platform with hybrid semantic search and RAG-powered chat. Built with Spring Boot 3, PostgreSQL, pgvector embeddings, and MinIO S3 storage. Features OAuth2/JWT authentication, Stripe billing, multipart uploads, automatic taxonomy, and event-driven processing via Kafka.",
            technologies: [
                "Java 21",
                "Spring Boot 3.4",
                "PostgreSQL 16",
                "pgvector",
                "Redis",
                "MinIO/S3",
                "LangChain4j",
                "OpenAI",
                "React 18",
                "TypeScript",
                "TailwindCSS",
                "Docker Compose",
                "Stripe",
            ],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/SergioAcostaTer/aicloud-drive",
                    icon: <Icons.github className="size-3" />,
                },
                {
                    type: "Website",
                    href: "https://nexocloudpro.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/projects/nexo.png",
        },
        {
            title: "Bitcoin Price Extension",
            href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
            dates: "2023",
            active: true,
            description:
                "Developed a lightweight Chrome extension that retrieves real-time Bitcoin pricing from the Binance API. Implemented a Node.js backend with Redis caching to minimize external API requests and significantly improve response performance. The entire system was containerized with Docker for seamless deployment and reproducibility.",
            technologies: ["JavaScript", "Node.js", "Redis", "Binance API", "HTML", "CSS"],
            links: [
                {
                    type: "Chrome Web Store",
                    href: "https://chromewebstore.google.com/detail/bitcoin-price-extension/dmhahbbbnadgmijopggbcjldddgpjkap?hl=en",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "GitHub",
                    href: "https://github.com/SergioAcostaTer/bitcoin-price-tracker-pro",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/projects/btc.png",
        },
        {
            title: "Bitcoin Positions Tracker (AWS Cloud Architecture)",
            href: "https://github.com/SergioAcostaTer/cloud-computing-1",
            dates: "2025",
            active: true,
            description:
                "Designed and deployed two production-grade AWS architectures (ECS Fargate & Serverless Lambda) using 1,300+ lines of CloudFormation, implementing secure VPC networking, API Gateway, and DynamoDB to support container orchestration and decoupled microservices.",
            technologies: [
                "AWS ECS Fargate",
                "AWS Lambda",
                "API Gateway",
                "VPC",
                "VPC Endpoints",
                "Network Load Balancer",
                "DynamoDB",
                "CloudWatch Logs",
                "ECR",
                "CloudFormation (IaC)",
                "Security Groups",
                "Node.js 18",
            ],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/SergioAcostaTer/cloud-computing-1",
                    icon: <Icons.github className='size-3' />,
                }
            ],
            image: "/projects/aws.png",
        }
    ]
};
