"use client"

import type { VariantProps } from "tailwind-variants"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  type InputProps,
  SearchField as RACSearchField,
  type SearchFieldProps
} from "react-aria-components/SearchField"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { fieldVariants } from "./field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input"

const SearchField = ({
  className,
  isPending = false,
  orientation = "vertical",
  ...props
}: SearchFieldProps & VariantProps<typeof fieldVariants> & { isPending?: boolean }) => (
  <RACSearchField
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    data-pending={isPending}
    data-slot="field"
    {...props}
  />
)

const SearchInput = (props: Omit<InputProps, "type">) => (
  <InputGroup className={`${props.className}`}>
    <InputGroupAddon>
      <IconPlaceholder
        aria-label="Loading"
        className="pointer-events-none in-data-[pending=true]:block hidden size-4 shrink-0 animate-spin"
        data-slot="loader"
        hugeicons="Loading03Icon"
        lucide="LoaderIcon"
        phosphor="SpinnerIcon"
        remixicon="RiLoaderLine"
        role="status"
        tabler="IconLoader"
      />
      <IconPlaceholder
        className="in-data-[pending=true]:hidden"
        data-slot="input-group-addon"
        hugeicons="SearchIcon"
        lucide="SearchIcon"
        phosphor="MagnifyingGlassIcon"
        remixicon="RiSearchLine"
        tabler="IconSearch"
      />
    </InputGroupAddon>
    <InputGroupInput className="[&::-webkit-search-cancel-button]:hidden" {...props} />
    <InputGroupAddon align="inline-end" className="group-data-empty/field:hidden">
      <InputGroupButton>
        <IconPlaceholder
          hugeicons="Cancel01Icon"
          lucide="XIcon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
          tabler="IconX"
        />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
)

export { SearchField, SearchInput }
