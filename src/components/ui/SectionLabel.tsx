import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]",
        light ? "text-gold-light" : "text-gold-dark",
        className
      )}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}
