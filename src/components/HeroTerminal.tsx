"use client";

import { useState, useEffect, useCallback } from "react";
import { Terminal } from "./Terminal";
import { FloatingCard } from "./FloatingCard";

const COMMAND = "dovi cards create --amount 200 --currency eur";

const OUTPUT_LINES = [
  { type: "blank" },
  { type: "success", text: "\u00A0 Virtual card issued!" },
  { type: "blank" },
  {
    type: "row",
    label: "\u00A0 Card",
    value: "\u00A0 \u2022\u2022\u2022\u2022 8391",
    valueColor: "text-zinc-400",
  },
  {
    type: "row",
    label: "\u00A0 Expires",
    value: "\u00A0 09/27",
    valueColor: "text-zinc-400",
  },
  {
    type: "row",
    label: "\u00A0 Balance",
    value: "\u00A0 EUR 200.00",
    valueColor: "text-primary",
  },
  {
    type: "row",
    label: "\u00A0 Agent",
    value: "\u00A0 procurement-bot",
    valueColor: "text-zinc-400",
  },
  {
    type: "row",
    label: "\u00A0 ID",
    value: "\u00A0 card_eur_3kf9a...",
    valueColor: "text-zinc-400",
  },
] as const;

function colorizeCommand(text: string) {
  const parts: { text: string; color: string }[] = [];
  const regex = /(--\w+)|(\b\d+\b)|(\b(?:eur|usd|gbp)\b)/gi;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), color: "text-zinc-300" });
    }
    if (match[1]) {
      parts.push({ text: match[1], color: "text-yellow-400" });
    } else if (match[2]) {
      parts.push({ text: match[2], color: "text-blue-400" });
    } else if (match[3]) {
      parts.push({ text: match[3], color: "text-blue-400" });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), color: "text-zinc-300" });
  }

  return parts;
}

function TerminalAnimation({ onDone }: { onDone?: () => void }) {
  const [charIndex, setCharIndex] = useState(0);
  const [linesShown, setLinesShown] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "output" | "done">("typing");

  useEffect(() => {
    if (phase === "typing") {
      if (charIndex < COMMAND.length) {
        const timer = setTimeout(() => setCharIndex((i) => i + 1), 40);
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
        onDone?.();
      }
    }
  }, [phase, charIndex, linesShown, onDone]);

  const typed = COMMAND.slice(0, charIndex);
  const coloredParts = colorizeCommand(typed);
  const showCursor = phase === "typing" || phase === "pause";

  return (
    <Terminal label="terminal">
      <div className="space-y-0 min-h-[260px]">
        {/* Command line */}
        <div>
          <span className="text-primary">$ </span>
          {coloredParts.map((part, i) => (
            <span key={i} className={part.color}>{part.text}</span>
          ))}
          {showCursor && (
            <span className="inline-block w-[2px] h-[1.1em] bg-zinc-300 align-middle ml-[1px] animate-[blink_1s_step-end_infinite]" />
          )}
        </div>

        {/* Output lines */}
        {OUTPUT_LINES.slice(0, linesShown).map((line, i) => {
          if (line.type === "blank") {
            return <div key={i}>&nbsp;</div>;
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
              <span className="text-zinc-600 inline-block min-w-[16ch]">
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
  const [showCard, setShowCard] = useState(false);
  const handleDone = useCallback(() => setShowCard(true), []);

  return (
    <div className="relative perspective-card-stack">
      <TerminalAnimation onDone={handleDone} />
      <div
        className={`floating-card absolute -bottom-8 -right-6 z-20 hidden lg:block transition-all duration-500 ease-out ${
          showCard
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FloatingCard />
      </div>
    </div>
  );
}
