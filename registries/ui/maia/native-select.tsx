import type { ComponentProps } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

type SelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

const Select = ({ className, size = "default", ...props }: SelectProps) => (
  <div
    className={cn("group/native-select relative w-fit has-[select:disabled]:opacity-50", className)}
    data-size={size}
    data-slot="native-select-wrapper"
  >
    <select
      className="h-9 w-full min-w-0 select-none appearance-none rounded-4xl border border-input bg-input/30 py-1 pr-8 pl-3 text-sm outline-none transition-colors selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-[size=sm]:h-8 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50"
      data-size={size}
      data-slot="native-select"
      slot="control"
      {...props}
    />
    <IconPlaceholder
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 select-none text-muted-foreground"
      data-slot="native-select-icon"
      hugeicons="UnfoldMoreIcon"
      lucide="ChevronsUpDownIcon"
      phosphor="CaretUpDownIcon"
      remixicon="RiExpandUpDownLine"
      tabler="IconSelector"
    />
  </div>
)

const SelectItem = ({ className, ...props }: ComponentProps<"option">) => (
  <option className={cn("bg-[Canvas] text-[CanvasText]", className)} data-slot="native-select-option" {...props} />
)

const SelectGroup = ({ className, ...props }: ComponentProps<"optgroup">) => (
  <optgroup className={cn("bg-[Canvas] text-[CanvasText]", className)} data-slot="native-select-optgroup" {...props} />
)

Select.Group = SelectGroup
Select.Item = SelectItem

export { Select, SelectGroup, SelectItem }
