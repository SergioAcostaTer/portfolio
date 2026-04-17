import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// --- ENHANCED METADATA ---
// Based on your CV with Java, Spring Boot, and enterprise keywords
export const metadata: Metadata = {
    metadataBase: new URL(DATA.url), // Assuming DATA.url is "https://sergioaco.com"
    title: {
        default: "Sergio Acosta Quintana - Backend Software Engineer",
        template: "%s | Sergio Acosta Quintana - Backend Software Engineer",
    },
    description:
        "Backend Software Engineer focused on enterprise payments, Java, and distributed systems. Experience at IKEA and Inditex building resilient Spring Boot services, event-driven integrations, and production-grade APIs.",
    keywords: [
        "Sergio Acosta Quintana",
        "Backend Software Engineer",
        "Payments",
        "Java 21",
        "Spring Boot 3",
        "Distributed Systems",
        "Event-Driven Architecture",
        "Apache Kafka",
        "DB2",
        "MongoDB",
        "Couchbase",
        "OpenAPI",
        "TypeScript",
        "React",
        "CI/CD",
        "Docker",
        "AWS",
        "Las Palmas",
        "Spain",
    ],
    authors: [{ name: "Sergio Acosta Quintana", url: "https://sergioaco.com" }],
    creator: "Sergio Acosta Quintana",
    openGraph: {
        title: "Sergio Acosta Quintana - Backend Software Engineer",
        description:
            "Backend engineer in enterprise payments, specializing in Java, Spring Boot, distributed systems, and resilient API integrations.",
        url: "https://sergioaco.com",
        siteName: "Sergio Acosta Quintana",
        images: [
            {
                url: "https://sergioaco.com/sergio.jpg", // Ensure this path is correct
                width: 1200,
                height: 630,
                alt: "Sergio Acosta Quintana - Backend Software Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Sergio Acosta Quintana - Backend Software Engineer",
        description:
            "Backend engineer crafting scalable payment services with Java, Spring Boot, distributed systems, and modern API design.",
        images: ["https://sergioaco.com/sergio.jpg"], // Ensure this path is correct
        creator: "@sergioaco", // Make sure this is your Twitter handle
    },
    alternates: {
        canonical: "https://sergioaco.com",
    },
};

// --- ENHANCED STRUCTURED DATA (JSON-LD) ---
// The most detailed version based on your final CV
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sergio Acosta Quintana",
    "jobTitle": "Backend Software Engineer",
    "url": "https://sergioaco.com",
    "image": "https://sergioaco.com/sergio.jpg",
    "email": "mailto:sergioacostaquintana@gmail.com",
    "telephone": "+34600243994",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Palmas",
        "addressRegion": "Canary Islands",
        "addressCountry": "ES"
    },
    "sameAs": [
        "https://linkedin.com/in/sergioacostaquintana",
        "https://github.com/sergioacostater",
        "https://sergioaco.com"
    ],
    "description": "Backend Software Engineer specialized in enterprise payments, Java, Spring Boot, and distributed systems.",
    "worksFor": {
        "@type": "Organization",
        "name": "SNGULAR / Inditex"
    },
    "alumniOf": [
        {
            "@type": "EducationalOrganization",
            "name": "University of Las Palmas de Gran Canaria",
            "description": "BSc Computer Engineering (Expected graduation 2026)"
        },
        {
            "@type": "EducationalOrganization",
            "name": "Halmstad University",
            "description": "Computer Science (Exchange Program 2024-2025)"
        }
    ],
    "knowsAbout": [
        "Enterprise Payments",
        "Java 21",
        "Spring Boot 3",
        "DB2",
        "PostgreSQL",
        "MongoDB",
        "Couchbase",
        "Microservices",
        "Apache Kafka",
        "Docker",
        "AWS",
        "OpenAPI",
        "REST API Design",
        "CI/CD",
        "TypeScript",
        "React",
        "Distributed Systems",
        "Clean Architecture",
        "Domain-Driven Design"
    ],
    "knowsLanguage": [
        {
            "@type": "Language",
            "name": "Spanish",
            "alternateName": "es",
            "description": "Native"
        },
        {
            "@type": "Language",
            "name": "English",
            "alternateName": "en",
            "description": "Professional Working Proficiency (B2/C1)"
        }
    ]
};

// --- YOUR ROOT LAYOUT (Unchanged) ---
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                {/* Favicon */}
                <link rel="icon" href="/favicon.png" />
                {/* Preload key assets */}
                <link rel="preload" href="/sergio.jpg" as="image" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                    fontSans.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <TooltipProvider delayDuration={0}>
                        <div id="page">
                            <Header />
                            {children}
                        </div>
                        <Navbar />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}