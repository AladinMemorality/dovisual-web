"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/adminApi";
import { setAdminKey } from "@/lib/adminAuth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const ok = await adminLogin(key);
      if (ok) {
        setAdminKey(key);
        router.replace("/admin/apps");
      } else {
        setError("Invalid admin key");
      }
    } catch {
      setError("Connection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-outline-variant bg-surface p-8"
      >
        <h1 className="mb-6 text-xl font-semibold text-foreground font-label">
          DoVisual Admin
        </h1>
        <label className="mb-2 block text-sm text-on-surface-variant">
          Admin Key
        </label>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="mb-4 w-full rounded-lg border border-outline-variant bg-surface-container px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          placeholder="Enter admin key"
          autoFocus
        />
        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading || !key}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
