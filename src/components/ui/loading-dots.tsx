import { cn } from "@/lib/utils"

const dotVariants = "w-2 h-2 bg-current rounded-full"

export function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className={cn(dotVariants, "animate-bounce [animation-delay:-0.3s]")} />
      <div className={cn(dotVariants, "animate-bounce [animation-delay:-0.15s]")} />
      <div className={cn(dotVariants, "animate-bounce")} />
    </div>
  )
}
