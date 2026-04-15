"use client";

import { useState, useCallback } from "react";
import { Terminal } from "./Terminal";

const COMMAND = "curl -fsSL https://dovisual.com/downloads/install.sh | bash";

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

export function InstallTerminal() {
  return (
    <Terminal label="terminal">
      <div className="space-y-0">
        <div className="flex items-center justify-between gap-2">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="text-primary">$ </span>
            <span className="text-zinc-300">{COMMAND}</span>
          </div>
          <CopyButton />
        </div>
        <div className="text-zinc-500">&nbsp; Downloading Dovi...</div>
        <div><span className="text-primary">&nbsp; &gt;</span><span className="text-zinc-400"> Binary installed</span></div>
        <div><span className="text-primary">&nbsp; &gt;</span><span className="text-zinc-400"> Email verified!</span></div>
        <div><span className="text-primary">&nbsp; &gt;</span><span className="text-zinc-400"> Systemd service installed</span></div>
        <div><span className="text-primary">&nbsp; &gt;</span><span className="text-zinc-400"> nginx configured with SSL</span></div>
        <div><span className="text-primary">&nbsp; &gt;</span><span className="text-zinc-400"> Dovi service started</span></div>
        <div>&nbsp;</div>
        <div className="text-primary font-medium">&nbsp; Dovi is running!</div>
        <div>&nbsp;</div>
        <div>
          <span className="text-zinc-600 inline-block min-w-[10ch]">&nbsp;&nbsp; URL</span>
          <span className="text-zinc-400">&nbsp; https://myapp.dovisual.com</span>
        </div>
        <div>
          <span className="text-zinc-600 inline-block min-w-[10ch]">&nbsp;&nbsp; PIN</span>
          <span className="text-primary">&nbsp; 483921</span>
        </div>
      </div>
    </Terminal>
  );
}
