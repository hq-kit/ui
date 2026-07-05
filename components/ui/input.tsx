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
        "cn-input w-full min-w-0 outline-none transition-[color,box-shadow,border] file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
        "cn-textarea field-sizing-content flex min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground",
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
  base: "group/input-group cn-input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto"
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
  base: "cn-input-group-addon flex cursor-text select-none items-center justify-center",
  variants: {
    align: {
      "inline-start": "cn-input-group-addon-align-inline-start order-first",
      "inline-end": "cn-input-group-addon-align-inline-end order-last",
      "block-start": "cn-input-group-addon-align-block-start order-first w-full justify-start",
      "block-end": "cn-input-group-addon-align-block-end order-last w-full justify-start"
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
  base: "cn-input-group-button flex items-center shadow-none",
  variants: {
    size: {
      xs: "cn-input-group-button-size-xs",
      sm: "cn-input-group-button-size-sm",
      "icon-xs": "cn-input-group-button-size-icon-xs",
      "icon-sm": "cn-input-group-button-size-icon-sm"
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
  <span className={cn("cn-input-group-text flex items-center [&_svg]:pointer-events-none", className)} {...props} />
)

const InputGroupInput = ({ className, ...props }: ComponentProps<typeof Input>) => (
  <Input className={cn("cn-input-group-input flex-1", className)} data-slot="input-group-control" {...props} />
)

const InputGroupTextarea = ({ className, ...props }: TextAreaProps) => (
  <Textarea
    className={cn("cn-input-group-textarea flex-1 resize-none", className)}
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
