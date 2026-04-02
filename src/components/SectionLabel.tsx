export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
      <span className="w-5 h-px bg-primary" />
      {children}
    </span>
  );
}
