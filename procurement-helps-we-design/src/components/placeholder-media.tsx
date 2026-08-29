import { cn } from "@/lib/utils";

/**
 * PlaceholderImage renders a labeled, dimension-aware placeholder block in
 * place of a real photo. Swap for a real <Image> once the user supplies
 * their own asset — the `aspect` prop documents the expected ratio.
 */
export function PlaceholderImage({
  label,
  aspect = "4 / 3",
  className,
  tone = "light",
}: {
  label: string;
  aspect?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-[22px] border border-dashed text-center text-xs font-medium",
        tone === "light"
          ? "border-black/15 bg-black/5 text-black/40"
          : "border-white/20 bg-white/10 text-white/50",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <span className="px-4">{label}</span>
    </div>
  );
}

export function PlaceholderLogo({ label = "Client" }: { label?: string }) {
  return (
    <div className="flex h-10 w-28 shrink-0 items-center justify-center rounded-md border border-dashed border-black/15 text-[10px] font-semibold uppercase tracking-wide text-black/35 md:h-[70px] md:w-40">
      {label}
    </div>
  );
}
