export function Terminal({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[#131315] rounded-xl border border-white/[0.08] shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.015]">
        <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f56]" />
        <div className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e]" />
        <div className="w-[9px] h-[9px] rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[11px] font-mono text-zinc-600">
          {label}
        </span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] md:text-[14px] leading-[1.9]">
        {children}
      </div>
    </div>
  );
}
