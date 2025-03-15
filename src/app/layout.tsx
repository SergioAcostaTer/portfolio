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

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Sergio Acosta Quintana - Full Stack Developer",
    template: "%s | Sergio Acosta Quintana - Full Stack Developer",
  },
  description:
    "Sergio Acosta Quintana is a Computer Science student and Full Stack Developer specializing in scalable web applications using React, Node.js, and modern technologies. Based in Las Palmas, Spain.",
  keywords: [
    "Sergio Acosta Quintana",
    "Full Stack Developer",
    "Computer Science",
    "React.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Las Palmas",
    "Spain",
  ],
  authors: [{ name: "Sergio Acosta Quintana", url: "https://sergioaco.com" }],
  creator: "Sergio Acosta Quintana",
  openGraph: {
    title: "Sergio Acosta Quintana - Full Stack Developer",
    description:
      "Full Stack Developer and Computer Science student with expertise in React, Node.js, and scalable web solutions. Explore my projects and experience.",
    url: "https://sergioaco.com",
    siteName: "Sergio Acosta Quintana",
    images: [
      {
        url: "https://sergioaco.com/me.webp",
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
      "Full Stack Developer crafting scalable web apps with React, Node.js, and more.",
    images: ["https://sergioaco.com/me.webp"],
    creator: "@sergioaco",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://sergioaco.com",
  },
};

// Structured Data (JSON-LD) for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sergio Acosta Quintana",
  jobTitle: "Full Stack Developer",
  url: "https://sergioaco.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Palmas",
    addressCountry: "Spain",
  },
  sameAs: [
    "https://github.com/sergioacostater",
    "https://www.linkedin.com/in/sergioacostaquintana/",
  ],
  description:
    "Computer Science student and Full Stack Developer specializing in scalable web applications.",
};

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
        <link rel="icon" href="/favicon.ico" />
        {/* Preload key assets */}
        <link rel="preload" href="/me.webp" as="image" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}