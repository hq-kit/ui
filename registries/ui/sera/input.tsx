"use client"

import type { ComponentProps } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Group, type GroupProps } from "react-aria-components/Group"
import { type InputProps, Input as RACInput } from "react-aria-components/Input"
import { TextArea, type TextAreaProps } from "react-aria-components/TextArea"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const Input = ({ className, ...props }: InputProps) => (
  <RACInput
    className={composeRenderProps(className, (className) =>
      cn(
        "border-transparent border-b-input bg-transparent focus-visible:border-b-ring aria-invalid:border-b-destructive dark:aria-invalid:border-b-destructive/50 h-10 border px-0 py-1 text-base file:h-7 file:text-sm file:font-medium md:text-sm w-full min-w-0 outline-none transition-[color,box-shadow,border] file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    )}
    data-slot="input"
    slot="control"
    {...props}
  />
)

const Textarea = ({ className, ...props }: TextAreaProps) => (
  <TextArea
    className={composeRenderProps(className, (className) =>
      cn(
        "border-transparent border-b-input bg-transparent focus-visible:border-b-ring aria-invalid:border-b-destructive dark:aria-invalid:border-b-destructive/50 resize-none rounded-none border px-0 py-3 text-base transition-[color,border-color] md:text-sm field-sizing-content flex min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground",
        "[&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",
        className
      )
    )}
    data-slot="textarea"
    slot="control"
    {...props}
  />
)

const inputGroupVariants = tv({
  base: "group/input-group border-transparent border-b-input bg-transparent has-[[data-slot=input-group-control]:focus-visible]:border-b-ring has-[[data-slot][aria-invalid=true]]:border-b-destructive dark:has-[[data-slot][aria-invalid=true]]:border-b-destructive/50 h-10 rounded-none border transition-[color,border-color] in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-data-[align=block-end]:rounded-none has-data-[align=block-start]:rounded-none has-[textarea]:rounded-none has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto"
})

const InputGroup = ({ className, ...props }: GroupProps) => (
  <Group
    className={composeRenderProps(className, (className) => cn(inputGroupVariants(), className))}
    data-slot="input-group"
    role="group"
    slot="control"
    {...props}
  />
)

const inputGroupAddonVariants = tv({
  base: "text-muted-foreground **:data-[slot=kbd]:bg-muted-foreground/10 h-auto gap-2 py-2 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-none **:data-[slot=kbd]:px-1.5 [&>svg:not([class*='size-'])]:size-3.5 flex cursor-text select-none items-center justify-center",
  variants: {
    align: {
      "inline-start": "order-first",
      "inline-end": "order-last",
      "block-start": "pt-3 group-has-[>input]/input-group:pt-3.5 [.border-b]:pb-3.5 order-first w-full justify-start",
      "block-end": "pb-3 group-has-[>input]/input-group:pb-3.5 [.border-t]:pt-3.5 order-last w-full justify-start"
    }
  },
  defaultVariants: {
    align: "inline-start"
  }
})

const InputGroupAddon = ({
  className,
  align = "inline-start",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) => (
  <div
    className={cn(inputGroupAddonVariants({ align }), className)}
    data-align={align}
    data-slot="input-group-addon"
    onClick={(e) => {
      if ((e.target as HTMLElement).closest("button")) {
        return
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus()
    }}
    onKeyDown={(e) => {
      if ((e.target as HTMLElement).closest("button")) {
        return
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus()
    }}
    role="group"
    {...props}
  />
)

const inputGroupButtonVariants = tv({
  base: "gap-2 rounded-none text-sm flex items-center shadow-none",
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-none px-1.5 [&>svg:not([class*='size-'])]:size-3.5 text-xs",
      sm: "",
      "icon-xs": "size-6 p-0 has-[>svg]:p-0 text-xs",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
})

const InputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>) => (
  <Button
    className={cn(inputGroupButtonVariants({ size }), className)}
    data-size={size}
    type={type}
    variant={variant}
    {...props}
  />
)

const InputGroupText = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("text-muted-foreground gap-2 text-sm [&_svg:not([class*='size-'])]:size-3.5 flex items-center [&_svg]:pointer-events-none", className)} {...props} />
)

const InputGroupInput = ({ className, ...props }: ComponentProps<typeof Input>) => (
  <Input className={cn("border-0 bg-transparent ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent group-has-[>[data-align=inline-start]]/input-group:pl-2 group-has-[>[data-align=inline-end]]/input-group:pr-2 flex-1", className)} data-slot="input-group-control" {...props} />
)

const InputGroupTextarea = ({ className, ...props }: TextAreaProps) => (
  <Textarea
    className={cn("border-0 bg-transparent py-2.5 ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1 resize-none", className)}
    data-slot="input-group-control"
    {...props}
  />
)

InputGroup.Addon = InputGroupAddon
InputGroup.Button = InputGroupButton
InputGroup.Text = InputGroupText
InputGroup.Input = InputGroupInput
InputGroup.Textarea = InputGroupTextarea

export {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  inputGroupVariants,
  Textarea
}
