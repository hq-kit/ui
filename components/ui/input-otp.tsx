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
    className={cn("cn-input-otp-input disabled:cursor-not-allowed", className)}
    containerClassName={cn("cn-input-otp flex items-center has-disabled:opacity-50", containerClassName)}
    data-slot="input-otp"
    spellCheck={false}
    {...props}
  />
)

const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-input-otp-group flex items-center", className)} data-slot="input-otp-group" {...props} />
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
      className={cn("cn-input-otp-slot relative flex items-center justify-center data-[active=true]:z-10", className)}
      data-active={isActive}
      data-slot="input-otp-slot"
      slot="control"
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="cn-input-otp-caret pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="cn-input-otp-caret-line" />
        </div>
      )}
    </div>
  )
}

const InputOTPSeparator = (props: ComponentProps<"div">) => (
  // biome-ignore lint/a11y/useFocusableInteractive: false-positive
  <div
    className="cn-input-otp-separator flex items-center"
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
