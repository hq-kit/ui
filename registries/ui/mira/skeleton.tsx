import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Skeleton = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("bg-muted rounded-md animate-pulse", className)} data-slot="skeleton" {...props} />
)

export { Skeleton }
