"use client";

import { useState, useEffect, useCallback } from "react";

const COMMAND = "npm i -g dovisual";

export function InstallModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#131315] rounded-xl border border-white/[0.08] shadow-2xl overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.015]">
            <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f56]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[11px] font-mono text-zinc-600">
              terminal
            </span>
          </div>

          {/* Command */}
          <div className="p-5 flex items-center justify-between gap-3">
            <div className="font-mono text-[14px]">
              <span className="text-primary">$ </span>
              <span className="text-zinc-300">{COMMAND}</span>
            </div>
            <button
              onClick={copy}
              className="shrink-0 p-2 rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all text-zinc-500 hover:text-white"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GetStartedButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children ?? "Get started"}
      </button>
      <InstallModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const CONNECT_STEPS = [
  { label: "Install the CLI", command: "npm i -g dovisual" },
  { label: "Authenticate", command: "dovi auth" },
  { label: "Connect to Claude", command: "dovi setup-mcp" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={copy}
      className="shrink-0 p-2 rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all text-zinc-500 hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

export function ConnectClaudeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#131315] rounded-xl border border-white/[0.08] shadow-2xl overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.015]">
            <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f56]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[11px] font-mono text-zinc-600">
              terminal
            </span>
          </div>

          {/* Steps */}
          <div className="p-5 space-y-4">
            {CONNECT_STEPS.map((step, i) => (
              <div key={i}>
                <div className="text-[11px] uppercase tracking-wider text-zinc-600 mb-1.5">
                  Step {i + 1} &mdash; {step.label}
                </div>
                <div className="flex items-center justify-between gap-3 bg-white/[0.02] rounded-lg border border-white/[0.06] px-4 py-3">
                  <div className="font-mono text-[13px] overflow-x-auto">
                    <span className="text-primary">$ </span>
                    <span className="text-zinc-300">{step.command}</span>
                  </div>
                  <CopyButton text={step.command} />
                </div>
              </div>
            ))}
            <p className="text-[12px] text-zinc-600 pt-1">
              35 MCP tools will be available once connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConnectClaudeButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children ?? "Connect to Claude"}
      </button>
      <ConnectClaudeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
