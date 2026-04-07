"use client";

import { useState } from "react";

export interface AppFormData {
  id: string;
  label: string;
  subtitle: string;
  badge_color: string;
  badge_text: string;
  icon_type: string;
  icon_name: string;
  app_type: string;
  target: string;
  sort_order: number;
  enabled: boolean;
  install_cmd: string;
  uninstall_cmd: string;
  check_cmd: string;
  instructions_url: string;
  instructions_archive_url: string;
}

const EMPTY: AppFormData = {
  id: "",
  label: "",
  subtitle: "",
  badge_color: "#6366f1",
  badge_text: "",
  icon_type: "",
  icon_name: "",
  app_type: "native",
  target: "",
  sort_order: 99,
  enabled: true,
  install_cmd: "",
  uninstall_cmd: "",
  check_cmd: "",
  instructions_url: "",
  instructions_archive_url: "",
};

interface Props {
  initial?: Partial<AppFormData>;
  isEdit?: boolean;
  onSubmit: (data: AppFormData) => Promise<void>;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-on-surface-variant">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-outline-variant bg-surface-container px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

export default function AppForm({ initial, isEdit, onSubmit }: Props) {
  const [form, setForm] = useState<AppFormData>({ ...EMPTY, ...initial });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof AppFormData>(key: K, value: AppFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await onSubmit(form);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="ID">
          <input
            className={inputClass}
            value={form.id}
            onChange={(e) => set("id", e.target.value)}
            disabled={isEdit}
            required
          />
        </Field>
        <Field label="Label">
          <input
            className={inputClass}
            value={form.label}
            onChange={(e) => set("label", e.target.value)}
            required
          />
        </Field>
        <Field label="Subtitle">
          <input
            className={inputClass}
            value={form.subtitle}
            onChange={(e) => set("subtitle", e.target.value)}
            required
          />
        </Field>
        <Field label="App Type">
          <select
            className={inputClass}
            value={form.app_type}
            onChange={(e) => set("app_type", e.target.value)}
          >
            <option value="native">native</option>
            <option value="webview">webview</option>
            <option value="installable">installable</option>
          </select>
        </Field>
        <Field label="Target">
          <input
            className={inputClass}
            value={form.target}
            onChange={(e) => set("target", e.target.value)}
            required
          />
        </Field>
        <Field label="Badge Color">
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={form.badge_color}
              onChange={(e) => set("badge_color", e.target.value)}
              className="h-9 w-9 cursor-pointer rounded border border-outline-variant bg-transparent"
            />
            <input
              className={inputClass}
              value={form.badge_color}
              onChange={(e) => set("badge_color", e.target.value)}
            />
          </div>
        </Field>
        <Field label="Badge Text">
          <input
            className={inputClass}
            value={form.badge_text}
            onChange={(e) => set("badge_text", e.target.value)}
          />
        </Field>
        <Field label="Sort Order">
          <input
            type="number"
            className={inputClass}
            value={form.sort_order}
            onChange={(e) => set("sort_order", parseInt(e.target.value) || 0)}
          />
        </Field>
        <Field label="Icon Type">
          <input
            className={inputClass}
            value={form.icon_type}
            onChange={(e) => set("icon_type", e.target.value)}
            placeholder="e.g. fa6"
          />
        </Field>
        <Field label="Icon Name">
          <input
            className={inputClass}
            value={form.icon_name}
            onChange={(e) => set("icon_name", e.target.value)}
            placeholder="e.g. docker"
          />
        </Field>
      </div>

      <Field label="Enabled">
        <button
          type="button"
          onClick={() => set("enabled", !form.enabled)}
          className={`relative h-6 w-11 rounded-full transition-colors ${
            form.enabled ? "bg-primary" : "bg-outline-variant"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
              form.enabled ? "translate-x-5" : ""
            }`}
          />
        </button>
      </Field>

      {(form.app_type === "installable" || form.install_cmd) && (
        <div className="space-y-5 rounded-lg border border-outline-variant p-4">
          <p className="text-xs font-medium text-on-surface-variant">
            Install Configuration
          </p>
          <Field label="Install Command">
            <textarea
              className={inputClass + " min-h-[80px] font-mono text-xs"}
              value={form.install_cmd}
              onChange={(e) => set("install_cmd", e.target.value)}
            />
          </Field>
          <Field label="Uninstall Command">
            <textarea
              className={inputClass + " min-h-[80px] font-mono text-xs"}
              value={form.uninstall_cmd}
              onChange={(e) => set("uninstall_cmd", e.target.value)}
            />
          </Field>
          <Field label="Check Command">
            <input
              className={inputClass + " font-mono text-xs"}
              value={form.check_cmd}
              onChange={(e) => set("check_cmd", e.target.value)}
            />
          </Field>
          <Field label="Instructions URL">
            <input
              className={inputClass}
              value={form.instructions_url}
              onChange={(e) => set("instructions_url", e.target.value)}
            />
          </Field>
          <Field label="Instructions Archive URL">
            <input
              className={inputClass}
              value={form.instructions_archive_url}
              onChange={(e) => set("instructions_archive_url", e.target.value)}
            />
          </Field>
        </div>
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {saving ? "Saving..." : isEdit ? "Update App" : "Create App"}
      </button>
    </form>
  );
}
