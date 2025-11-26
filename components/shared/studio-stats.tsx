import { cn } from "@/lib/utils"

type StudioStatsProps = {
  layout?: "row" | "grid"
  variant?: "minimal" | "card"
  className?: string
}

const stats = [
  { label: "50+ projects shipped" },
  { label: "5+ years building for creators and brands" },
  { label: "100+ releases in music and digital" },
]

export function StudioStats({ layout = "row", variant = "card", className }: StudioStatsProps) {
  const container =
    layout === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      : "flex flex-col sm:flex-row items-start justify-between gap-4 md:gap-6"

  const style =
    variant === "minimal"
      ? "bg-transparent border border-transparent px-0 py-0 text-white/70"
      : "bg-white/5 border border-white/10 px-6 py-5 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.4)]"

  return (
    <div className={cn(container, className)}>
      {stats.map((item) => (
        <div key={item.label} className={cn("flex-1 text-left", style)}>
          <p className="text-sm md:text-base leading-relaxed">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
