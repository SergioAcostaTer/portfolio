import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Define TypeScript interfaces for better type safety
interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  author: string;
}

interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  source: string;
}

interface BlogParams {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate metadata for SEO optimization
export async function generateMetadata({
  params,
}: BlogParams): Promise<Metadata | undefined> {
  const post = (await getPost(params.slug)) as BlogPost;

  if (!post) return undefined;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Schema.org JSON-LD data for better SEO
function BlogJsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: post.metadata.image
      ? `${DATA.url}${post.metadata.image}`
      : `${DATA.url}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${DATA.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Blog post header component
function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-6 lg:mb-10">
      <h1 
        id="blog-title"
        className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight"
      >
        {post.metadata.title}
      </h1>
      
      <div className="flex justify-between items-start mt-4 text-sm">
        <div className="flex flex-col space-y-1">
          <h2 className="font-medium text-neutral-800 dark:text-neutral-200">
            {post.metadata.author}
          </h2>
          <Suspense fallback={<span className="h-5 w-16 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded" />}>
            <time 
              dateTime={post.metadata.publishedAt}
              className="text-neutral-600 dark:text-neutral-400"
            >
              {formatDate(post.metadata.publishedAt)}
            </time>
          </Suspense>
        </div>
        
        <div className="text-neutral-600 dark:text-neutral-400 mt-1">
          {calculateReadingTime(post.source)} min read
        </div>
      </div>
    </header>
  );
}

// Main blog post component
export default async function BlogPost({ params }: BlogParams) {
  const post = (await getPost(params.slug)) as BlogPost;

  if (!post) {
    notFound();
  }

  return (
    <section
      id="blog-post"
      className="mt-12 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
      aria-labelledby="blog-title"
    >
      <BlogJsonLd post={post} />
      <BlogHeader post={post} />
      <article
        className="prose prose-sm sm:prose md:prose-lg dark:prose-invert max-w-none overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
      <div className="mt-12 pb-8 text-sm text-neutral-600 dark:text-neutral-400 flex justify-center">
        <a
          href="/blog"
          className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
        >
          ← Back to all posts
        </a>
      </div>
    </section>
  );
}
