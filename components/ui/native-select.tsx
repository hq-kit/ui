import type { ComponentProps } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

type SelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

const Select = ({ className, size = "default", ...props }: SelectProps) => (
  <div
    className={cn(
      "cn-native-select-wrapper group/native-select relative w-fit has-[select:disabled]:opacity-50",
      className
    )}
    data-size={size}
    data-slot="native-select-wrapper"
  >
    <select
      className="cn-native-select outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
      data-size={size}
      data-slot="native-select"
      slot="control"
      {...props}
    />
    <IconPlaceholder
      aria-hidden="true"
      className="cn-native-select-icon pointer-events-none absolute select-none"
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
