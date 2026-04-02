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
            aiPay
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-[0.15em] text-primary/70 uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
          Virtual
        </span>
      </div>

      {/* NFC icon */}
      <div className="relative z-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/30"
        >
          <path
            d="M6.5 13.5a5 5 0 017-7"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <path
            d="M4 16a9 9 0 0112.7-12.7"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <path
            d="M9 11a1.5 1.5 0 012.1-2.1"
            stroke="currentColor"
            strokeWidth={1.2}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Card number */}
      <div className="font-mono text-[15px] tracking-[0.2em] text-white/80 relative z-10">
        &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
        &#8226;&#8226;&#8226;&#8226; 4242
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between relative z-10">
        <div className="flex gap-8">
          <div>
            <div className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/30 mb-0.5">
              Valid Thru
            </div>
            <div className="text-[11px] font-mono text-white/70">09/27</div>
          </div>
          <div>
            <div className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/30 mb-0.5">
              Cardholder
            </div>
            <div className="text-[11px] font-mono text-white/70">AI AGENT</div>
          </div>
        </div>
        {/* Mastercard logo */}
        <svg width="40" height="24" viewBox="0 0 40 24" className="flex-shrink-0">
          <circle cx="14" cy="12" r="10" fill="#EB001B" opacity="0.9" />
          <circle cx="26" cy="12" r="10" fill="#F79E1B" opacity="0.9" />
          <path
            d="M20 4.4a10 10 0 010 15.2 10 10 0 000-15.2z"
            fill="#FF5F00"
          />
        </svg>
      </div>
    </div>
  );
}
