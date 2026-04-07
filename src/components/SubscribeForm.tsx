"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.dovisual.com/v1/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.detail || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="max-w-[1120px] mx-auto px-8 py-28">
      <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
          Stay in the loop.
        </h2>
        <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
          Product updates and engineering insights. No spam. Unsubscribe
          anytime.
        </p>

        {status === "success" ? (
          <p className="text-primary font-semibold text-sm relative z-10">
            Check your inbox! You&apos;re subscribed.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto relative z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 px-4 py-3 bg-black border border-white/[0.08] rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm whitespace-nowrap disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-3 relative z-10">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
