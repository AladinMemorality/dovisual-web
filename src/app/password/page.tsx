"use client";

import { useState, useCallback } from "react";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        const res = await fetch("/api/password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });

        if (res.ok) {
          window.location.href = "/";
        } else {
          setError("Wrong password");
          setLoading(false);
        }
      } catch {
        setError("Something went wrong");
        setLoading(false);
      }
    },
    [password]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-lg font-bold tracking-tight">
            aiPay<span className="text-primary">.</span>sh
          </h1>
          <p className="text-sm text-zinc-600 mt-1">
            Enter the password to continue
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full px-4 py-3 bg-zinc-950 border border-white/[0.08] rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 transition-colors"
          />

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
