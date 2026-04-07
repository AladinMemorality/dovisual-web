import { Logo } from "./Logo";

export function FloatingCard() {
  return (
    <div className="w-[340px] h-[214px] rounded-2xl bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-primary/10 p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent pointer-events-none" />

      {/* Top row */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Logo className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-semibold tracking-wide text-white/80">
            DoVisual
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-[0.15em] text-primary/70 uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
          Online
        </span>
      </div>

      {/* Server icon */}
      <div className="relative z-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/30"
        >
          <rect x="2" y="3" width="20" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.2} />
          <rect x="2" y="14" width="20" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.2} />
          <circle cx="6" cy="6.5" r="1" fill="currentColor" />
          <circle cx="6" cy="17.5" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Server name */}
      <div className="font-mono text-[15px] tracking-[0.05em] text-white/80 relative z-10">
        myapp.dovisual.com
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between relative z-10">
        <div className="flex gap-8">
          <div>
            <div className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/30 mb-0.5">
              Containers
            </div>
            <div className="text-[11px] font-mono text-white/70">3 running</div>
          </div>
          <div>
            <div className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/30 mb-0.5">
              CPU / Mem
            </div>
            <div className="text-[11px] font-mono text-white/70">12% / 41%</div>
          </div>
        </div>
        {/* Uptime indicator */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-mono text-primary/70">99.9%</span>
        </div>
      </div>
    </div>
  );
}
