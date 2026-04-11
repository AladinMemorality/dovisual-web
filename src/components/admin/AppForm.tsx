"use client";

import { useState, useEffect } from "react";
import IconPicker from "./IconPicker";

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
  category: string;
  description: string;
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
  category: "",
  description: "",
  install_cmd: "",
  uninstall_cmd: "",
  check_cmd: "",
  instructions_url: "",
  instructions_archive_url: "",
};

const COLOR_PRESETS = [
  { hex: "#6366f1", name: "Indigo" },
  { hex: "#0ea5e9", name: "Sky" },
  { hex: "#8b5cf6", name: "Violet" },
  { hex: "#ec4899", name: "Pink" },
  { hex: "#f97316", name: "Orange" },
  { hex: "#2dd4bf", name: "Teal" },
  { hex: "#16a34a", name: "Green" },
  { hex: "#ef4444", name: "Red" },
];

const CATEGORIES = [
  { value: "system", label: "System Tools" },
  { value: "utilities", label: "Utilities" },
  { value: "networking", label: "Networking" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

interface Props {
  initial?: Partial<AppFormData>;
  isEdit?: boolean;
  onSubmit: (data: AppFormData) => Promise<void>;
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-on-surface-variant">
        {label}
      </label>
      {children}
      {hint && (
        <p className="mt-1 text-[11px] text-on-surface-variant/60">{hint}</p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-outline-variant bg-surface-container px-3 py-2 text-sm text-foreground outline-none focus:border-primary";

export default function AppForm({ initial, isEdit, onSubmit }: Props) {
  const [form, setForm] = useState<AppFormData>({ ...EMPTY, ...initial });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [idLocked, setIdLocked] = useState(!isEdit);

  function set<K extends keyof AppFormData>(key: K, value: AppFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // Auto-generate ID from label when creating and ID is locked
  useEffect(() => {
    if (!isEdit && idLocked && form.label) {
      set("id", slugify(form.label));
    }
  }, [form.label, isEdit, idLocked]);

  // Auto-fill target for webview apps when GitHub source is set
  useEffect(() => {
    if (form.app_type === "webview" && form.id && form.instructions_archive_url) {
      const expected = `/webapps/${form.id}/`;
      if (!form.target || form.target.startsWith("/webapps/")) {
        set("target", expected);
      }
    }
  }, [form.app_type, form.id, form.instructions_archive_url]);

  // Parse GitHub instructions into repo + folder fields
  const isGitHubInstructions =
    form.instructions_archive_url.startsWith("github:");
  const ghParts = isGitHubInstructions
    ? form.instructions_archive_url.slice(7).split("/")
    : [];
  const ghRepo = ghParts.length >= 2 ? `${ghParts[0]}/${ghParts[1]}` : "";
  const ghFolder = ghParts.length >= 3 ? ghParts.slice(2).join("/") : "";

  function setGitHubInstructions(repo: string, folder: string) {
    const clean = [repo, folder].filter(Boolean).join("/");
    set("instructions_archive_url", clean ? `github:${clean}` : "");
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

  // Badge preview
  const previewIcon = form.icon_type === "fa6" ? form.icon_name : null;
  const previewIsImage = form.icon_type === "image" && form.icon_name;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Live Preview */}
      <div className="flex items-center gap-4 rounded-xl border border-outline-variant bg-surface-container/50 p-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: form.badge_color || "#6366f1" }}
        >
          {previewIcon ? (
            <i className={`fa-solid fa-${previewIcon} text-xl text-white`} />
          ) : previewIsImage ? (
            <img
              src={form.icon_name}
              alt=""
              className="h-8 w-8 object-contain"
            />
          ) : form.badge_text ? (
            <span className="font-mono text-base font-extrabold text-white">
              {form.badge_text}
            </span>
          ) : (
            <span className="text-sm font-bold text-white/60">
              {form.label ? form.label.slice(0, 2).toUpperCase() : "??"}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {form.label || "App Name"}
          </p>
          <p className="truncate text-xs text-on-surface-variant">
            {form.subtitle || "Subtitle"}
          </p>
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          {form.app_type === "installable" ? "GET" : "Open"}
        </div>
      </div>

      {/* Identity Section */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Identity
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Label">
            <input
              className={inputClass}
              value={form.label}
              onChange={(e) => set("label", e.target.value)}
              placeholder="e.g. Docker Manager"
              required
            />
          </Field>
          <Field label="ID">
            <div className="flex items-center gap-2">
              <input
                className={`${inputClass} ${idLocked && !isEdit ? "text-on-surface-variant" : ""}`}
                value={form.id}
                onChange={(e) => set("id", e.target.value)}
                disabled={isEdit}
                readOnly={idLocked && !isEdit}
                required
              />
              {!isEdit && (
                <button
                  type="button"
                  onClick={() => setIdLocked(!idLocked)}
                  title={idLocked ? "Edit manually" : "Auto-generate"}
                  className="shrink-0 rounded-md border border-outline-variant p-2 text-xs text-on-surface-variant transition-colors hover:border-primary hover:text-foreground"
                >
                  {idLocked ? "✏️" : "🔗"}
                </button>
              )}
            </div>
          </Field>
          <Field label="Subtitle">
            <input
              className={inputClass}
              value={form.subtitle}
              onChange={(e) => set("subtitle", e.target.value)}
              placeholder="e.g. Manage containers"
              required
            />
          </Field>
          <Field label="Category">
            <select
              className={inputClass}
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
            >
              <option value="">— None —</option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Description">
          <textarea
            className={inputClass + " min-h-[60px]"}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="What does this app do?"
            maxLength={1000}
          />
        </Field>
      </div>

      {/* Appearance Section */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Appearance
        </h3>

        {/* Color Presets */}
        <Field label="Badge Color">
          <div className="flex flex-wrap items-center gap-2">
            {COLOR_PRESETS.map((c) => (
              <button
                key={c.hex}
                type="button"
                title={c.name}
                onClick={() => set("badge_color", c.hex)}
                className={`h-8 w-8 rounded-full transition-all ${
                  form.badge_color === c.hex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-surface"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
            <input
              type="color"
              value={form.badge_color}
              onChange={(e) => set("badge_color", e.target.value)}
              className="h-8 w-8 cursor-pointer rounded-full border border-outline-variant bg-transparent"
              title="Custom color"
            />
            <input
              className="w-24 rounded-md border border-outline-variant bg-surface-container px-2 py-1 text-xs text-foreground outline-none focus:border-primary"
              value={form.badge_color}
              onChange={(e) => set("badge_color", e.target.value)}
            />
          </div>
        </Field>

        {/* Icon Picker */}
        <IconPicker
          selectedType={form.icon_type}
          selectedName={form.icon_name}
          badgeColor={form.badge_color}
          onChange={(type, name) => {
            set("icon_type", type);
            set("icon_name", name);
          }}
        />

        {/* Badge Text (fallback when no icon) */}
        <Field
          label="Badge Text"
          hint="Shown if no icon is selected (e.g. >_)"
        >
          <input
            className={inputClass + " w-32"}
            value={form.badge_text}
            onChange={(e) => set("badge_text", e.target.value)}
            maxLength={4}
          />
        </Field>
      </div>

      {/* Configuration Section */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          Configuration
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="App Type">
            <select
              className={inputClass}
              value={form.app_type}
              onChange={(e) => set("app_type", e.target.value)}
            >
              <option value="native">Native</option>
              <option value="webview">WebView</option>
              <option value="installable">Installable</option>
            </select>
          </Field>
          <Field
            label="Target"
            hint={
              form.app_type === "webview"
                ? "Full URL or /webapps/<id>/ for server-hosted"
                : "Route path or URL"
            }
          >
            <input
              className={inputClass}
              value={form.target}
              onChange={(e) => set("target", e.target.value)}
              placeholder={
                form.app_type === "webview"
                  ? `/webapps/${form.id || "app-id"}/`
                  : "e.g. /docker"
              }
              required
            />
          </Field>
          <Field label="Sort Order">
            <input
              type="number"
              className={inputClass + " w-24"}
              value={form.sort_order}
              onChange={(e) =>
                set("sort_order", parseInt(e.target.value) || 0)
              }
            />
          </Field>
          <Field label="Enabled">
            <button
              type="button"
              onClick={() => set("enabled", !form.enabled)}
              className={`relative mt-1 h-6 w-11 rounded-full transition-colors ${
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
        </div>
      </div>

      {/* WebApp Source (for webview apps) */}
      {form.app_type === "webview" && (
        <div className="space-y-4 rounded-lg border border-outline-variant p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
            WebApp Source
          </h3>
          <p className="text-[11px] text-on-surface-variant/60">
            HTML/JS/CSS files from a GitHub repo will be deployed to the server
            when the app is opened. Target should be{" "}
            <code className="rounded bg-surface-container px-1 font-mono">
              /webapps/{form.id || "<app-id>"}/
            </code>
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="GitHub Repo" hint="owner/repo">
              <input
                className={inputClass + " font-mono text-xs"}
                value={ghRepo}
                onChange={(e) =>
                  setGitHubInstructions(e.target.value, ghFolder)
                }
                placeholder="dovisual/dovi-webapps"
              />
            </Field>
            <Field label="Folder" hint="path within repo">
              <input
                className={inputClass + " font-mono text-xs"}
                value={ghFolder}
                onChange={(e) =>
                  setGitHubInstructions(ghRepo, e.target.value)
                }
                placeholder={form.id || "app-name"}
              />
            </Field>
          </div>
        </div>
      )}

      {/* Install Configuration */}
      {form.app_type === "installable" && (
        <div className="space-y-4 rounded-lg border border-outline-variant p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
            Install Configuration
          </h3>
          <Field label="Install Command">
            <textarea
              className={inputClass + " min-h-[80px] font-mono text-xs"}
              value={form.install_cmd}
              onChange={(e) => set("install_cmd", e.target.value)}
              placeholder="e.g. apt-get install -y docker.io"
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Uninstall Command">
              <textarea
                className={inputClass + " min-h-[60px] font-mono text-xs"}
                value={form.uninstall_cmd}
                onChange={(e) => set("uninstall_cmd", e.target.value)}
              />
            </Field>
            <Field label="Check Command" hint="Exit 0 = installed">
              <input
                className={inputClass + " font-mono text-xs"}
                value={form.check_cmd}
                onChange={(e) => set("check_cmd", e.target.value)}
                placeholder="e.g. which docker"
              />
            </Field>
          </div>

          {/* GitHub Instructions */}
          <div className="mt-2 space-y-3 rounded-lg border border-outline-variant/50 bg-surface-container/30 p-3">
            <p className="text-xs font-medium text-on-surface-variant">
              Instruction Files (GitHub)
            </p>
            <p className="text-[11px] text-on-surface-variant/60">
              Files from a GitHub repo will be downloaded to{" "}
              <code className="rounded bg-surface-container px-1 font-mono">
                ~/dovi-instructions/{form.id || "<app-id>"}/
              </code>{" "}
              on install.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="GitHub Repo" hint="owner/repo">
                <input
                  className={inputClass + " font-mono text-xs"}
                  value={ghRepo}
                  onChange={(e) =>
                    setGitHubInstructions(e.target.value, ghFolder)
                  }
                  placeholder="dovisual/dovi-instructions"
                />
              </Field>
              <Field label="Folder" hint="path within repo">
                <input
                  className={inputClass + " font-mono text-xs"}
                  value={ghFolder}
                  onChange={(e) =>
                    setGitHubInstructions(ghRepo, e.target.value)
                  }
                  placeholder={form.id || "app-name"}
                />
              </Field>
            </div>
            {!isGitHubInstructions && form.instructions_archive_url && (
              <Field label="Or direct archive URL">
                <input
                  className={inputClass + " text-xs"}
                  value={form.instructions_archive_url}
                  onChange={(e) =>
                    set("instructions_archive_url", e.target.value)
                  }
                />
              </Field>
            )}
          </div>
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
