import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-28 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-[clamp(6rem,20vw,12rem)] font-black tracking-tighter leading-none bg-gradient-to-b from-white/90 to-zinc-700 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-4 mb-3">
            Page not found.
          </h2>
          <p className="text-zinc-500 max-w-md text-sm leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Check the URL or head back home.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
          >
            Go home
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
