import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

type PortfolioProject = {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: { type: string; href: string; icon: ReactNode }[];
    image: string;
};

export const DATA = {
    name: "Sergio Acosta Quintana",
    initials: "SAQ",
    url: "https://sergioaco.com",
    location: "Las Palmas, Spain",
    locationLink:
        "https://www.google.com/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.1173592,-15.4602595,14z",
    description: "Backend Software Engineer | Payments, Java & Distributed Systems",
    summary:
        "Backend Engineer specializing in enterprise payments, high-availability Java services, and event-driven architectures. I modernized critical systems at [IKEA](/#work) and now work on [Inditex payment gateway integrations](/#work) with Spring Boot, DB2, MongoDB, Couchbase, OpenAPI, and React. Focused on distributed systems, API design, cloud infrastructure, and CI/CD automation with Clean Architecture and Domain-Driven Design.",
    avatarUrl: "/sergio.jpg",
    skills: [
        "Java 21",
        "Spring Boot 3",
        "Spring Batch",
        "Spring Security",
        "Microservices",
        "Apache Kafka",
        "IBM DB2",
        "OpenAPI",
        "REST APIs",
        "AWS (EC2, S3, RDS)",
        "Docker",
        "GitHub Actions CI/CD",
        "Terraform",
        "Prometheus",
        "Grafana",
        "PostgreSQL",
        "MongoDB",
        "Couchbase",
        "Redis",
        "Vector DBs",
        "Hibernate/JPA",
        "Clean Architecture",
        "Event-Driven Architecture",
        "DDD",
        "Integration Testing",
        "OAuth2/JWT",
        "React",
        "TypeScript",
        "API Contract Design",
    ],
    languages: ["English (B2/C1)", "Spanish (Native)"],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "sergioacostaquintana@gmail.com",
        tel: "+34 600 24 39 94",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/sergioacostater",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/sergioacostaquintana",
                icon: Icons.linkedin,
                navbar: true,
            },
            Portfolio: {
                name: "Portfolio",
                url: "https://sergioaco.com",
                icon: Icons.globe,
                navbar: false,
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
            company: "SNGULAR | Inditex",
            href: "https://www.sngular.com/",
            location: "Remote",
            title: "Backend Software Engineer",
            logoUrl: "/sngular.jpg",
            start: "Apr 2026",
            startDate: new Date(2026, 3),
            end: "Present",
            description:
                "Working on Inditex's global payment gateway for all group brands and markets in an enterprise environment using Spring Boot, DB2, MongoDB, Couchbase, OpenAPI, and React. Contributing to backend services, API contracts, and integration flows across legacy and modern systems while delivering reliable, scalable, and maintainable payment features in a cross-functional team.",
        },
        {
            company: "BITBOX S.L. | IKEA",
            href: "https://bitboxonline.com/",
            location: "Las Palmas, Spain",
            title: "Backend Software Engineer",
            logoUrl: "/bitbox.webp",
            start: "Jan 2025",
            startDate: new Date(2025, 0),
            end: "Apr 2026",
            description:
                "Developed mission-critical systems for IKEA's loyalty program (400k+ active cards), migrating legacy backends to Spring Boot 3 and improving resilience and delivery speed by 40% with CI/CD automation. Replaced 7 legacy PL/SQL jobs with Spring Batch workflows, cutting processing time by 55% and saving around 40h/month of support while eliminating critical failure points. Architected a decoupled insurance platform integrating Mapfre and Adeslas via Kafka and microservices with strict isolation to ensure scalability and avoid vendor lock-in.",
        },
    ],
    education: [
        {
            school: "University of Las Palmas de Gran Canaria (ULPGC)",
            href: "https://www.ulpgc.es/",
            degree: "BSc Computer Engineering (Final Year Student)",
            logoUrl: "/ulpgc.webp",
            start: "2022",
            end: "Expected",
            location: "Las Palmas, Spain",
            description:
                "Final year student focused on software architecture, distributed systems, and backend engineering.",
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
                "Exchange program in Computer Science (Erasmus+) focused on software engineering and distributed systems.",
        },
    ],
    projects: [
        {
            title: "NexoCloud - Intelligent Cloud Storage Platform",
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
                "Designed and deployed two production-grade AWS architectures (ECS Fargate and Serverless Lambda) using 1,300+ lines of CloudFormation, implementing secure VPC networking, API Gateway, and DynamoDB to support container orchestration and decoupled microservices.",
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
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/projects/aws.png",
        },
    ] as PortfolioProject[]
};
