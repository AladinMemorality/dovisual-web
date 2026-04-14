"use client";

import { useState, useMemo, useRef } from "react";

// Curated list of useful FA6 solid icons for server/dev apps
const FA6_ICONS = [
  "terminal", "code", "server", "database", "hard-drive", "microchip",
  "docker", "cloud", "globe", "network-wired", "wifi", "signal",
  "lock", "shield-halved", "key", "user-shield", "fingerprint",
  "wrench", "gear", "screwdriver-wrench", "sliders", "toolbox",
  "folder", "file", "file-code", "file-lines", "file-zipper", "box-archive",
  "cookie", "bug", "robot", "wand-magic-sparkles", "bolt", "fire",
  "chart-line", "chart-bar", "chart-pie", "gauge-high",
  "envelope", "bell", "comment", "message", "paper-plane",
  "download", "upload", "cloud-arrow-down", "cloud-arrow-up",
  "play", "circle-play", "rotate", "arrows-rotate", "spinner",
  "eye", "eye-slash", "magnifying-glass", "filter",
  "link", "share-nodes", "plug", "puzzle-piece",
  "house", "building", "store", "warehouse",
  "tag", "tags", "bookmark", "star", "heart", "flag",
  "circle-check", "circle-xmark", "circle-info", "triangle-exclamation",
  "camera", "image", "palette", "paintbrush",
  "calendar", "clock", "stopwatch", "hourglass-half",
  "list", "table-cells", "grip", "layer-group",
  "cube", "cubes", "box", "boxes-stacked",
  "trash", "pen", "pencil", "copy", "paste", "scissors",
];

interface Props {
  selectedType: string;
  selectedName: string;
  badgeColor: string;
  onChange: (type: string, name: string) => void;
}

export default function IconPicker({
  selectedType,
  selectedName,
  badgeColor,
  onChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [showGrid, setShowGrid] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return FA6_ICONS;
    const q = search.toLowerCase();
    return FA6_ICONS.filter((n) => n.includes(q));
  }, [search]);

  const isFA6 = selectedType === "fa6" && selectedName;
  const isImage = selectedType === "image" && selectedName;
  const hasSelection = isFA6 || isImage;

  function handleSvgUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      onChange("image", dataUrl);
      setShowGrid(false);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  return (
    <div>
      <label className="mb-1.5 block text-xs text-on-surface-variant">
        Icon
      </label>

      {/* Current selection / trigger */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setShowGrid(!showGrid)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed border-outline-variant transition-colors hover:border-primary"
          style={
            hasSelection
              ? {
                  backgroundColor: badgeColor,
                  borderStyle: "solid",
                  borderColor: badgeColor,
                }
              : undefined
          }
        >
          {isFA6 ? (
            <i
              className={`fa-solid fa-${selectedName} text-lg text-white`}
            />
          ) : isImage ? (
            <img
              src={selectedName}
              alt=""
              className="h-7 w-7 object-contain"
            />
          ) : (
            <span className="text-xs text-on-surface-variant">+</span>
          )}
        </button>
        <div className="flex-1">
          <p className="text-sm text-foreground">
            {isFA6
              ? selectedName
              : isImage
                ? "Custom SVG"
                : "No icon selected"}
          </p>
          <p className="text-xs text-on-surface-variant">
            Click to {showGrid ? "close" : "browse icons"}
          </p>
        </div>
        {hasSelection && (
          <button
            type="button"
            onClick={() => onChange("", "")}
            className="text-xs text-on-surface-variant hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      {/* Icon grid */}
      {showGrid && (
        <div className="mt-3 rounded-lg border border-outline-variant bg-surface-container p-3">
          {/* Search + SVG upload */}
          <div className="mb-3 flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search icons..."
              className="flex-1 rounded-md border border-outline-variant bg-surface px-3 py-1.5 text-sm text-foreground outline-none focus:border-primary"
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="whitespace-nowrap rounded-md border border-outline-variant px-3 py-1.5 text-xs text-on-surface-variant transition-colors hover:border-primary hover:text-foreground"
            >
              Upload SVG
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".svg,image/svg+xml"
              onChange={handleSvgUpload}
              className="hidden"
            />
          </div>

          {/* Grid */}
          <div className="grid max-h-64 grid-cols-8 gap-1 overflow-y-auto">
            {filtered.map((name) => {
              const isSelected =
                selectedType === "fa6" && selectedName === name;
              return (
                <button
                  key={name}
                  type="button"
                  title={name}
                  onClick={() => {
                    onChange("fa6", name);
                    setShowGrid(false);
                  }}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                    isSelected
                      ? "text-white"
                      : "text-on-surface-variant hover:bg-surface hover:text-foreground"
                  }`}
                  style={
                    isSelected ? { backgroundColor: badgeColor } : undefined
                  }
                >
                  <i className={`fa-solid fa-${name} text-sm`} />
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="py-4 text-center text-xs text-on-surface-variant">
              No icons match &ldquo;{search}&rdquo;
            </p>
          )}
        </div>
      )}
    </div>
  );
}
