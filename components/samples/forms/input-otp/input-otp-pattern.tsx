"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { Field, Label } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function InputOTPPattern() {
  return (
    <Field className="w-fit">
      <Label htmlFor="digits-only">Digits Only</Label>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
