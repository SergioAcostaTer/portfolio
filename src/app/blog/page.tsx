import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="mt-16 max-w-2xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Blog</h1>
      </BlurFade>
      <div className="space-y-6">
        {posts
          .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block p-4 transition-all border rounded-xl hover:bg-accent hover:shadow-md">
                <h2 className="text-lg font-semibold tracking-tight">{post.metadata.title}</h2>
                <p className="text-sm text-muted-foreground">{post.metadata.publishedAt}</p>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}