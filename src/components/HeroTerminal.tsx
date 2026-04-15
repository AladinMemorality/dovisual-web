"use client";

import { useState, useEffect, useCallback } from "react";
import { Terminal } from "./Terminal";

const COMMAND = "curl -fsSL https://dovisual.com/downloads/install.sh | bash";

const OUTPUT_LINES = [
  { type: "blank" },
  { type: "info", text: "\u00A0 Downloading Dovi..." },
  { type: "step", text: "\u00A0 Binary installed" },
  { type: "step", text: "\u00A0 Email verified!" },
  { type: "step", text: "\u00A0 Systemd service installed" },
  { type: "step", text: "\u00A0 nginx configured with SSL" },
  { type: "step", text: "\u00A0 Dovi service started" },
  { type: "blank" },
  { type: "success", text: "\u00A0 Dovi is running!" },
  { type: "blank" },
  {
    type: "row",
    label: "\u00A0\u00A0 URL",
    value: "\u00A0 https://myapp.dovisual.com",
    valueColor: "text-zinc-400",
  },
  {
    type: "row",
    label: "\u00A0\u00A0 PIN",
    value: "\u00A0 483921",
    valueColor: "text-primary",
  },
] as const;

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      onClick={copy}
      className="shrink-0 p-1.5 rounded-md border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all text-zinc-500 hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

function TerminalAnimation() {
  const [charIndex, setCharIndex] = useState(0);
  const [linesShown, setLinesShown] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "output" | "done">("typing");

  useEffect(() => {
    if (phase === "typing") {
      if (charIndex < COMMAND.length) {
        const timer = setTimeout(() => setCharIndex((i) => i + 1), 30);
        return () => clearTimeout(timer);
      } else {
        setPhase("pause");
      }
    }

    if (phase === "pause") {
      const timer = setTimeout(() => setPhase("output"), 400);
      return () => clearTimeout(timer);
    }

    if (phase === "output") {
      if (linesShown < OUTPUT_LINES.length) {
        const timer = setTimeout(() => setLinesShown((n) => n + 1), 120);
        return () => clearTimeout(timer);
      } else {
        setPhase("done");
      }
    }
  }, [phase, charIndex, linesShown]);

  const typed = COMMAND.slice(0, charIndex);
  const showCursor = phase === "typing" || phase === "pause";

  return (
    <Terminal label="terminal">
      <div className="space-y-0 h-[340px] overflow-hidden">
        {/* Command line */}
        <div className="flex items-center justify-between gap-2">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="text-primary">$ </span>
            <span className="text-zinc-300">{typed}</span>
            {showCursor && (
              <span className="inline-block w-[2px] h-[1.1em] bg-zinc-300 align-middle ml-[1px] animate-[blink_1s_step-end_infinite]" />
            )}
          </div>
          {phase !== "typing" && <CopyButton />}
        </div>

        {/* Output lines */}
        {OUTPUT_LINES.slice(0, linesShown).map((line, i) => {
          if (line.type === "blank") {
            return <div key={i}>&nbsp;</div>;
          }
          if (line.type === "info") {
            return (
              <div key={i} className="text-zinc-500">
                {line.text}
              </div>
            );
          }
          if (line.type === "step") {
            return (
              <div key={i}>
                <span className="text-primary">{"\u00A0 >"}</span>
                <span className="text-zinc-400">{line.text}</span>
              </div>
            );
          }
          if (line.type === "success") {
            return (
              <div key={i} className="text-primary font-medium">
                {line.text}
              </div>
            );
          }
          return (
            <div key={i}>
              <span className="text-zinc-600 inline-block min-w-[10ch]">
                {line.label}
              </span>
              <span className={line.valueColor}>{line.value}</span>
            </div>
          );
        })}
      </div>
    </Terminal>
  );
}

export function HeroTerminal() {
  return (
    <div className="relative">
      <TerminalAnimation />
    </div>
  );
}
