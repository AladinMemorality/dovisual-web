"use client";

import { useState, useRef, useEffect } from "react";

const steps = [
  {
    step: "STEP 01",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20" />
      </svg>
    ),
    title: "Get a VPS",
    desc: "Provision an Ubuntu server from any cloud provider \u2014 Hetzner, DigitalOcean, AWS, or let us create one for you in seconds.",
  },
  {
    step: "STEP 02",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="4 17 10 11 4 5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="19" x2="20" y2="19" strokeLinecap="round" />
      </svg>
    ),
    title: "Install Dovi",
    desc: "Run dovi install. Sets up systemd, nginx, SSL, and the API \u2014 all in one command. Your server is ready in under 90 seconds.",
  },
  {
    step: "STEP 03",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
    title: "Connect from your phone",
    desc: "Open the DoVisual app, enter your PIN, and you\u2019re in. Full terminal, Docker dashboard, file manager \u2014 all from your pocket.",
  },
  {
    step: "STEP 04",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Let AI help",
    desc: "Chat with Claude Code to deploy apps, fix configs, and manage your server conversationally. AI with full server access, your approval required.",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        const raw = (windowH - rect.top) / (windowH + rect.height);
        setProgress(Math.max(0, Math.min(1, raw)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const barProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.5));
  const stepProgress = (i: number) =>
    Math.max(0, Math.min(1, (progress - 0.15 - i * 0.08) / 0.12));

  return (
    <section
      id="how"
      ref={sectionRef}
      className="max-w-[1120px] mx-auto px-8 py-28"
    >
      <span
        className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase mb-4 block"
        style={{
          opacity: Math.max(0, Math.min(1, (progress - 0.05) / 0.1)),
          transform: `translateY(${(1 - Math.max(0, Math.min(1, (progress - 0.05) / 0.1))) * 12}px)`,
        }}
      >
        HOW IT WORKS
      </span>
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-16"
        style={{
          opacity: Math.max(0, Math.min(1, (progress - 0.08) / 0.1)),
          transform: `translateY(${(1 - Math.max(0, Math.min(1, (progress - 0.08) / 0.1))) * 16}px)`,
        }}
      >
        Four steps.
        <br />
        Zero friction.
      </h2>

      <div className="border border-white/[0.08] rounded-lg overflow-hidden relative">
        <div className="h-[3px] bg-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-primary via-yellow-200 to-primary"
            style={{ width: `${barProgress * 100}%` }}
          />
        </div>

        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => {
            const sp = stepProgress(i);
            return (
              <div
                key={s.step}
                className={`relative p-8 md:p-10 ${i < 3 ? "md:border-r md:border-white/[0.08]" : ""}`}
                style={{
                  opacity: sp,
                  transform: `translateY(${(1 - sp) * 24}px)`,
                }}
              >
                <div className="text-[11px] font-mono tracking-[0.15em] text-zinc-500 mb-6">
                  {s.step}
                </div>
                <div className="w-9 h-9 rounded-md border border-white/[0.10] flex items-center justify-center text-primary mb-6">
                  {s.icon}
                </div>
                <h4 className="font-bold text-base mb-3">{s.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {s.desc}
                </p>

                {i < 3 && (
                  <div
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 items-center justify-center text-zinc-600"
                    style={{ opacity: sp }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1 7h12m0 0L9 3m4 4L9 11"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
