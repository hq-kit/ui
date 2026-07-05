"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export function FeedbackForm() {
  return (
    <Card>
      <CardContent>
        <form id="feedback-form">
          <FieldGroup>
            <Field>
              <Label htmlFor="topic">Topic</Label>
              <NativeSelect id="topic">
                <NativeSelectOption value="">Select a topic</NativeSelectOption>
                <NativeSelectOption value="ai">AI</NativeSelectOption>
                <NativeSelectOption value="accounts-and-access-controls">
                  Accounts and Access Controls
                </NativeSelectOption>
                <NativeSelectOption value="billing">Billing</NativeSelectOption>
                <NativeSelectOption value="cdn">CDN (Firewall, Caching)</NativeSelectOption>
                <NativeSelectOption value="ci-cd">
                  CI/CD (Builds, Deployments, Environment Variables)
                </NativeSelectOption>
                <NativeSelectOption value="dashboard-interface">
                  Dashboard Interface (Navigation, UI Issues)
                </NativeSelectOption>
                <NativeSelectOption value="domains">Domains</NativeSelectOption>
                <NativeSelectOption value="frameworks">Frameworks</NativeSelectOption>
                <NativeSelectOption value="marketplace-and-integrations">
                  Marketplace and Integrations
                </NativeSelectOption>
                <NativeSelectOption value="observability">
                  Observability (Observability, Logs, Monitoring)
                </NativeSelectOption>
                <NativeSelectOption value="storage">Storage</NativeSelectOption>
              </NativeSelect>
            </Field>
            <Field>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" placeholder="Your feedback helps us improve..." />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="style-sera:w-full" form="feedback-form" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
