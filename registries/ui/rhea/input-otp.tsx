"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import { type ComponentProps, useContext } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const InputOTP = ({
  className,
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) => (
  <OTPInput
    className={cn("disabled:cursor-not-allowed", className)}
    containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
    data-slot="input-otp"
    spellCheck={false}
    {...props}
  />
)

const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex items-center rounded-2xl has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
      className
    )}
    data-slot="input-otp-group"
    {...props}
  />
)

const InputOTPSlot = ({
  index,
  className,
  ...props
}: ComponentProps<"div"> & {
  index: number
}) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      className={cn(
        "relative flex size-8 items-center justify-center border-input border-y border-r bg-input/50 text-sm outline-none transition-[color,box-shadow] duration-200 first:rounded-l-2xl first:border-l last:rounded-r-2xl aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/30 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      data-active={isActive}
      data-slot="input-otp-slot"
      slot="control"
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

const InputOTPSeparator = (props: ComponentProps<"div">) => (
  // biome-ignore lint/a11y/useFocusableInteractive: false-positive
  <div
    className="flex items-center [&_svg:not([class*='size-'])]:size-4"
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

InputOTP.Group = InputOTPGroup
InputOTP.Slot = InputOTPSlot
InputOTP.Separator = InputOTPSeparator

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
