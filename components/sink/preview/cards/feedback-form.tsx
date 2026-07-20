"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { Select, SelectItem } from "@/components/ui/native-select"

export function FeedbackForm() {
  return (
    <Card>
      <CardContent>
        <form id="feedback-form">
          <FieldGroup>
            <Field>
              <Label htmlFor="topic">Topic</Label>
              <Select id="topic">
                <SelectItem value="">Select a topic</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="accounts-and-access-controls">Accounts and Access Controls</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="cdn">CDN (Firewall, Caching)</SelectItem>
                <SelectItem value="ci-cd">CI/CD (Builds, Deployments, Environment Variables)</SelectItem>
                <SelectItem value="dashboard-interface">Dashboard Interface (Navigation, UI Issues)</SelectItem>
                <SelectItem value="domains">Domains</SelectItem>
                <SelectItem value="frameworks">Frameworks</SelectItem>
                <SelectItem value="marketplace-and-integrations">Marketplace and Integrations</SelectItem>
                <SelectItem value="observability">Observability (Observability, Logs, Monitoring)</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
              </Select>
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
