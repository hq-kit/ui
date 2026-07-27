import type { ComponentProps } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

type SelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

const Select = ({ className, size = "default", ...props }: SelectProps) => (
  <div
    className={cn(
      "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      className
    )}
    data-size={size}
    data-slot="native-select-wrapper"
  >
    <select
      className="bg-input/50 border-transparent placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-2xl border py-1 pr-8 pl-2.5 text-sm transition-[color,box-shadow] duration-200 select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-7 outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
      data-size={size}
      data-slot="native-select"
      slot="control"
      {...props}
    />
    <IconPlaceholder
      aria-hidden="true"
      className="text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none"
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
