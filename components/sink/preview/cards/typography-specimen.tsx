"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useThemeGenerator } from "@/hooks/use-theme"
import { fontMonoFamilies } from "@/lib/fonts/mono"
import { fontSansFamilies } from "@/lib/fonts/sans"

export function TypographySpecimen() {
  const { currentStyles } = useThemeGenerator()

  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
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
      </CardContent>
      <CardFooter>
        <Dialog>
          <Button className="w-full" variant="outline">
            Share Feedback
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Feedback</DialogTitle>
              <DialogDescription>Let us know how we can improve your experience.</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <Label htmlFor="feedback-name">Name</Label>
                  <Input id="feedback-name" placeholder="Your name" />
                </Field>
                <Field>
                  <Label htmlFor="feedback-email">Email</Label>
                  <Input id="feedback-email" placeholder="you@example.com" type="email" />
                </Field>
              </div>
              <Field>
                <Label htmlFor="feedback-category">Category</Label>
                <Select defaultValue="general">
                  <SelectTrigger className="w-full" id="feedback-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem id="general">General</SelectItem>
                      <SelectItem id="bug">Bug Report</SelectItem>
                      <SelectItem id="feature">Feature Request</SelectItem>
                      <SelectItem id="improvement">Improvement</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <Label htmlFor="feedback-message">Message</Label>
                <Textarea
                  className="min-h-24 resize-none"
                  id="feedback-message"
                  placeholder="Tell us what's on your mind..."
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
