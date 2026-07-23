"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog } from "@/components/ui/dialog"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"
import { useThemeGenerator } from "@/hooks/use-theme"
import { fontMonoFamilies } from "@/lib/fonts/mono"
import { fontSansFamilies } from "@/lib/fonts/sans"

export function TypographySpecimen() {
  const { currentStyles } = useThemeGenerator()

  return (
    <Card>
      <Card.Content className="flex flex-col gap-2">
        <div className="font-medium text-muted-foreground text-xs uppercase">
          {fontSansFamilies.find((f) => f.value === currentStyles.light["font-sans"])?.label} -{" "}
          {fontMonoFamilies.find((f) => f.value === currentStyles.light["font-mono"])?.label}
        </div>
        <p className="cn-font-heading font-medium style-sera:font-semibold style-sera:text-lg text-2xl style-sera:uppercase style-sera:tracking-wider">
          Designing with rhythm and hierarchy.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          A strong body style keeps long-form content readable and balances the visual weight of headings.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.
        </p>
      </Card.Content>
      <Card.Footer>
        <Dialog>
          <Button className="w-full" variant="outline">
            Share Feedback
          </Button>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Share Feedback</Dialog.Title>
              <Dialog.Description>Let us know how we can improve your experience.</Dialog.Description>
            </Dialog.Header>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-3">
                <TextField>
                  <Label>Name</Label>
                  <Input placeholder="Your name" />
                </TextField>
                <TextField>
                  <Label>Email</Label>
                  <Input placeholder="you@example.com" type="email" />
                </TextField>
              </div>
              <Select defaultValue="general">
                <Label>Category</Label>
                <Select.Trigger className="w-full">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    <Select.Item id="general">General</Select.Item>
                    <Select.Item id="bug">Bug Report</Select.Item>
                    <Select.Item id="feature">Feature Request</Select.Item>
                    <Select.Item id="improvement">Improvement</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select>
              <TextField>
                <Label>Message</Label>
                <Textarea className="min-h-24 resize-none" placeholder="Tell us what's on your mind..." />
              </TextField>
            </FieldGroup>
            <Dialog.Footer>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button>Submit</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </Card.Footer>
    </Card>
  )
}
