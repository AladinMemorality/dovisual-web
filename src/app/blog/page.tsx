import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { SubscribeForm } from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product updates, engineering deep-dives, and insights on AI agent commerce.",
};

const posts = [
  {
    date: "March 15, 2026",
    title: "Why AI Agents Need Their Own Bank Accounts",
    excerpt:
      "AI agents are becoming economic actors. They negotiate, purchase, and settle. But financial infrastructure wasn't built for non-human principals. Here's how we're changing that.",
    featured: false,
  },
  {
    date: "February 28, 2026",
    title: "Building a Secure MCP Integration for Financial Data",
    excerpt:
      "How we designed the aiPay MCP server to give Claude access to cards, IBANs, and payments while maintaining strict security boundaries.",
    featured: false,
  },
  {
    date: "February 10, 2026",
    title: "KYA: Know Your Agent — Our Approach to Agent Identity",
    excerpt:
      "Every AI agent must be registered before it can transact. We explain the design behind our agent identity layer and why it matters for compliance.",
    featured: false,
  },
  {
    date: "January 22, 2026",
    title: "90-Day Interest-Free Credit Lines for Agent Commerce",
    excerpt:
      "Pre-funding every transaction limits agent autonomy. Credit lines let agents spend first, repay later. Here's how our AI credit engine works.",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            From the team.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Product updates, engineering deep-dives, and insights on AI agent
            commerce.
          </p>
        </div>
      </section>

      <Divider />

      {/* Featured Post */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-primary/20 rounded-2xl p-10 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] tracking-widest uppercase font-medium">
              <span className="w-[5px] h-[5px] rounded-full bg-primary" />
              Featured
            </span>
            <span className="text-xs text-zinc-600">March 20, 2026</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Introducing DoVisual: Payment Infrastructure for AI Agents
          </h2>
          <p className="text-zinc-500 max-w-2xl leading-relaxed mb-6">
            Today we&apos;re launching DoVisual in public beta. Cards, IBANs,
            credit lines, and crypto rails for autonomous AI agents. Three
            commands and your AI agent has its own financial stack. Here&apos;s
            why we built it and what&apos;s next.
          </p>
          <span className="text-primary text-sm font-semibold hover:underline">
            Read more &rarr;
          </span>
        </div>
      </section>

      <Divider />

      {/* Recent Posts */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Recent Posts</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Latest from the blog.
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors"
            >
              <div className="text-xs text-zinc-600 mb-3">{post.date}</div>
              <h3 className="font-bold text-lg mb-2 tracking-tight">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-primary text-sm font-semibold hover:underline">
                Read more &rarr;
              </span>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* Newsletter */}
      <SubscribeForm />
    </PageLayout>
  );
}
