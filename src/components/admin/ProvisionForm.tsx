"use client";

import { useState } from "react";
import { adminProvision, type ProvisionResult } from "@/lib/adminApi";

interface Props {
  email?: string;
  onSuccess?: () => void;
}

const inputClass =
  "w-full rounded-lg border border-outline-variant bg-surface-container px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

export default function ProvisionForm({ email: defaultEmail, onSuccess }: Props) {
  const [email, setEmail] = useState(defaultEmail || "");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ProvisionResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await adminProvision({ email, name, pin });
      setResult(res);
      onSuccess?.();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Provisioning failed");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div className="space-y-2 text-sm">
        <p className="font-medium text-green-400">VM provisioned successfully</p>
        <div className="grid grid-cols-2 gap-2 text-on-surface-variant sm:grid-cols-4">
          <div>
            <p className="text-xs">Domain</p>
            <p className="text-foreground font-mono text-xs">{result.domain}</p>
          </div>
          <div>
            <p className="text-xs">VMID</p>
            <p className="text-foreground">{result.vmid}</p>
          </div>
          <div>
            <p className="text-xs">IPv6</p>
            <p className="text-foreground font-mono text-xs">{result.ipv6}</p>
          </div>
          <div>
            <p className="text-xs">PIN</p>
            <p className="text-foreground">{result.pin}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-xs font-medium text-on-surface-variant">
        Provision New VM
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs text-on-surface-variant">
            Email
          </label>
          <input
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            required
            disabled={!!defaultEmail}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-on-surface-variant">
            Name
          </label>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="my-server"
            required
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-on-surface-variant">
            PIN
          </label>
          <input
            className={inputClass}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="1234"
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={loading || !email || !name}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Provisioning..." : "Provision VM"}
      </button>
    </form>
  );
}
