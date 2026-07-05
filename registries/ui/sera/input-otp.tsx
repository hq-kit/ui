"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import { type ComponentProps, useContext } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      className={cn("disabled:cursor-not-allowed", className)}
      containerClassName={cn("gap-2 flex items-center has-disabled:opacity-50", containerClassName)}
      data-slot="input-otp"
      spellCheck={false}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("has-aria-invalid:border-b-destructive dark:has-aria-invalid:border-b-destructive/50 rounded-none gap-1 flex items-center", className)} data-slot="input-otp-group" {...props} />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      className={cn("border-transparent border-b-input bg-transparent data-[active=true]:border-b-ring aria-invalid:border-b-destructive dark:aria-invalid:border-b-destructive/50 size-10 border text-sm transition-[color,border-color] outline-none first:rounded-none last:rounded-none relative flex items-center justify-center data-[active=true]:z-10", className)}
      data-active={isActive}
      data-slot="input-otp-slot"
      slot="control"
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator(props: ComponentProps<"div">) {
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: false-positive
    <div
      className="[&_svg:not([class*='size-'])]:size-3.5 flex items-center"
      data-slot="input-otp-separator"
      // biome-ignore lint/a11y/useAriaPropsForRole: false-positive
      role="separator"
      {...props}
    >
      <IconPlaceholder
        hugeicons="MinusSignIcon"
        lucide="MinusIcon"
        phosphor="MinusIcon"
        remixicon="RiSubtractLine"
        tabler="IconMinus"
      />
    </div>
  )
}

InputOTP.Group = InputOTPGroup
InputOTP.Slot = InputOTPSlot
InputOTP.Separator = InputOTPSeparator

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
