import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label,
  className,
  variant = "light",
}: {
  label: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border text-center",
        variant === "light"
          ? "border-black/10 bg-gradient-to-br from-cream via-white to-[#f1e9d8] text-ink-soft/60"
          : "border-white/10 bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-black text-white/40",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-[0.08]",
          "bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]"
        )}
      />
      <Camera className="relative h-7 w-7" strokeWidth={1.25} aria-hidden="true" />
      <span className="relative px-6 text-xs font-medium uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}
