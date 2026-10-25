import { ExternalLinkIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input"

export default function InputGroupInCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card with Input Group</CardTitle>
        <CardDescription>This is a card with an input group.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="email-input">Email Address</Label>
            <InputGroup>
              <InputGroupInput id="email-input" placeholder="you@example.com" type="email" />
              <InputGroupAddon align="inline-end">
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="website-input">Website URL</Label>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="website-input" placeholder="example.com" />
              <InputGroupAddon align="inline-end">
                <ExternalLinkIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="feedback-textarea">Feedback & Comments</Label>
            <InputGroup>
              <InputGroupTextarea className="min-h-25" id="feedback-textarea" placeholder="Share your thoughts..." />
              <InputGroupAddon align="block-end">
                <InputGroupText>0/500 characters</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
