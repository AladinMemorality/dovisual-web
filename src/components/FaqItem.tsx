"use client";

import { useState } from "react";

export function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/[0.06] py-6">
      <button
        className="w-full flex justify-between items-center text-left font-bold text-[15px]"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span
          className={`font-mono text-xl text-zinc-600 transition-transform ${open ? "rotate-45 text-primary" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
