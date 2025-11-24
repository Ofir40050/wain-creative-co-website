import { cn } from "@/lib/utils"

export function WainLogo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Abstract W with sharp edges and gradient */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4D00" />
              <stop offset="50%" stopColor="#FF0080" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>
          </defs>
          <path
            d="M4 10 L12 30 L20 10 L28 30 L36 10"
            stroke="url(#logo-gradient)"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
          {/* Inner Play Shape - Triangle */}
          <path d="M18 18 L24 22 L18 26 Z" fill="white" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight uppercase text-white">
          Wain <span className="text-white/60 font-light">Creative Co</span>
        </span>
      )}
    </div>
  )
}
