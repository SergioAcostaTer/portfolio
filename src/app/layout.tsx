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
        default: "Sergio Acosta Quintana - Full Stack Developer",
        template: "%s | Sergio Acosta Quintana - Full Stack Developer",
    },
    description:
        "Sergio Acosta Quintana is a Computer Science student and Full Stack Developer specializing in enterprise-grade applications using Java (Spring Boot) and modern web solutions with React and Node.js. Based in Las Palmas, Spain.",
    keywords: [
        "Sergio Acosta Quintana",
        "Full Stack Developer",
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "React.js",
        "Node.js",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Computer Science",
        "Las Palmas",
        "Spain",
    ],
    authors: [{ name: "Sergio Acosta Quintana", url: "https://sergioaco.com" }],
    creator: "Sergio Acosta Quintana",
    openGraph: {
        title: "Sergio Acosta Quintana - Full Stack Developer",
        description:
            "Full Stack Developer and Computer Science student with expertise in Java (Spring Boot), React, Node.js, and scalable, event-driven microservices. Explore my projects.",
        url: "https://sergioaco.com",
        siteName: "Sergio Acosta Quintana",
        images: [
            {
                url: "https://sergioaco.com/me.png", // Ensure this path is correct
                width: 1200,
                height: 630,
                alt: "Sergio Acosta Quintana - Full Stack Developer",
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
        title: "Sergio Acosta Quintana - Full Stack Developer",
        description:
            "Full Stack Developer crafting scalable enterprise apps with Java/Spring Boot and modern web solutions with React/Node.js.",
        images: ["https://sergioaco.com/me.png"], // Ensure this path is correct
        creator: "@sergioaco", // Make sure this is your Twitter handle
    },
    verification: {
        google: "your-google-site-verification-code",
        yandex: "your-yandex-verification-code",
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
    "jobTitle": "Full-Stack Developer",
    "url": "https://sergioaco.com",
    "image": "https://sergioaco.com/me.png",
    "email": "mailto:sergioacostaquintana@gmail.com",
    "telephone": "+34600243994",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Palmas",
        "addressRegion": "Canary Islands",
        "addressCountry": "ES"
    },
    "sameAs": [
        "https://www.linkedin.com/in/sergioacostaquintana",
        "https://github.com/sergioacostater",
        "https://sergioaco.com"
    ],
    "description": "Full-Stack Developer with experience in enterprise environments. Skilled in Java (Spring Boot), PostgreSQL, JavaScript (React, Node.js), microservices, and automation.",
    "worksFor": {
        "@type": "Organization",
        "name": "BITBOX S.L. (IKEA)"
    },
    "alumniOf": [
        {
            "@type": "EducationalOrganization",
            "name": "University of Las Palmas de Gran Canaria",
            "description": "Computer Engineering (Expected 2026)"
        },
        {
            "@type": "EducationalOrganization",
            "name": "Halmstad University",
            "description": "Computer Science (Exchange Program 2024-2025)"
        }
    ],
    "knowsAbout": [
        "Java",
        "Spring Boot",
        "JavaScript",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Microservices",
        "Kafka",
        "Docker",
        "AWS",
        "REST APIs",
        "CI/CD",
        "Git",
        "TypeScript",
        "SQL",
        "Python",
        "Linux Server Management"
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
            "description": "Professional Fluency (B2)"
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
                <link rel="preload" href="/me.png" as="image" />
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