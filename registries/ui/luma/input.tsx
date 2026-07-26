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
        "h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base outline-none transition-[color,box-shadow,border] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
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
        "field-sizing-content flex min-h-16 w-full resize-none rounded-2xl border border-transparent bg-input/50 px-3 py-3 text-base outline-none transition-[color,box-shadow,background-color] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
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
  base: "group/input-group relative flex h-9 w-full min-w-0 items-center rounded-4xl border border-transparent bg-input/50 outline-none transition-[color,box-shadow,background-color] in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:h-auto has-[>textarea]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:flex-col has-[textarea]:rounded-2xl has-data-[align=block-end]:rounded-3xl has-data-[align=block-start]:rounded-3xl has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot][aria-invalid=true]]:border-destructive has-data-focus-within:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-data-focus-within:ring-3 has-data-focus-within:ring-ring/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-start]]:[&>input]:pl-1.5"
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
  base: "flex h-auto cursor-text select-none items-center justify-center gap-2 py-2 font-medium text-muted-foreground text-sm **:data-[slot=kbd]:rounded-3xl **:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1.5 group-data-[disabled=true]/input-group:opacity-50 [&>svg:not([class*='size-'])]:size-4",
  variants: {
    align: {
      "inline-start": "order-first pl-3 has-[>button]:-ml-1 has-[>kbd]:-ml-1",
      "inline-end": "order-last pr-3 has-[>button]:-mr-1 has-[>kbd]:-mr-1",
      "block-start":
        "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-3.5 [.border-b]:pb-3.5",
      "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-3.5 [.border-t]:pt-3.5"
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
  base: "flex items-center gap-2 rounded-4xl text-sm shadow-none",
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-xl px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "",
      "icon-xs": "size-6 rounded-xl p-0 has-[>svg]:p-0",
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
  <span
    className={cn(
      "flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
      className
    )}
    {...props}
  />
)

const InputGroupInput = ({ className, ...props }: ComponentProps<typeof Input>) => (
  <Input
    className={cn(
      "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
      className
    )}
    data-slot="input-group-control"
    {...props}
  />
)

const InputGroupTextarea = ({ className, ...props }: TextAreaProps) => (
  <Textarea
    className={cn(
      "flex-1 resize-none rounded-none border-0 bg-transparent py-2.5 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
      className
    )}
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
