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
    containerClassName={cn("gap-2 flex items-center has-disabled:opacity-50", containerClassName)}
    data-slot="input-otp"
    spellCheck={false}
    {...props}
  />
)

const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive rounded-lg has-aria-invalid:ring-3 flex items-center", className)} data-slot="input-otp-group" {...props} />
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
      className={cn("dark:bg-input/30 border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-8 border-y border-r text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg data-[active=true]:ring-3 relative flex items-center justify-center data-[active=true]:z-10", className)}
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

const InputOTPSeparator = (props: ComponentProps<"div">) => (
  // biome-ignore lint/a11y/useFocusableInteractive: false-positive
  <div
    className="[&_svg:not([class*='size-'])]:size-4 flex items-center"
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
