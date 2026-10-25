import type { ComponentProps } from "react"
import { cn } from "cn"
import { IconPlaceholder } from "@/components/icon-placeholder"

const Spinner = ({ className, ...props }: ComponentProps<"svg">) => (
  <IconPlaceholder
    aria-label="Loading"
    className={cn("size-4 animate-spin", className)}
    hugeicons="Loading03Icon"
    lucide="Loader2Icon"
    phosphor="SpinnerIcon"
    remixicon="RiLoaderLine"
    role="status"
    tabler="IconLoader"
    {...props}
  />
)

export { Spinner }
