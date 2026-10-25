import { RefreshCwIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, Label } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

export default function InputOTPForm() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Verify your login</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your email address: <span className="font-medium">m@example.com</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="flex items-center justify-between">
            <Label htmlFor="otp-verification">Verification code</Label>
            <Button size="xs" variant="outline">
              <RefreshCwIcon />
              Resend Code
            </Button>
          </div>
          <InputOTP id="otp-verification" maxLength={6} required>
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="mx-2" />
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Description>
            <a href="#">I no longer have access to this email address.</a>
          </Description>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button className="w-full" type="submit">
            Verify
          </Button>
          <div className="text-muted-foreground text-sm">
            Having trouble signing in?{" "}
            <a className="underline underline-offset-4 transition-colors hover:text-primary" href="#">
              Contact support
            </a>
          </div>
        </Field>
      </CardFooter>
    </Card>
  )
}
