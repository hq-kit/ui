"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, Form, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { Select } from "@/components/ui/native-select"
import { TextField } from "@/components/ui/text-field"

export function FeedbackForm() {
  return (
    <Card>
      <Card.Content>
        <Form id="feedback-form">
          <Field.Group>
            <Field>
              <Label htmlFor="topic">Topic</Label>
              <Select id="topic">
                <Select.Item value="">Select a topic</Select.Item>
                <Select.Item value="ai">AI</Select.Item>
                <Select.Item value="accounts-and-access-controls">Accounts and Access Controls</Select.Item>
                <Select.Item value="billing">Billing</Select.Item>
                <Select.Item value="cdn">CDN (Firewall, Caching)</Select.Item>
                <Select.Item value="ci-cd">CI/CD (Builds, Deployments, Environment Variables)</Select.Item>
                <Select.Item value="dashboard-interface">Dashboard Interface (Navigation, UI Issues)</Select.Item>
                <Select.Item value="domains">Domains</Select.Item>
                <Select.Item value="frameworks">Frameworks</Select.Item>
                <Select.Item value="marketplace-and-integrations">Marketplace and Integrations</Select.Item>
                <Select.Item value="observability">Observability (Observability, Logs, Monitoring)</Select.Item>
                <Select.Item value="storage">Storage</Select.Item>
              </Select>
            </Field>
            <TextField>
              <Label>Feedback</Label>
              <Textarea placeholder="Your feedback helps us improve..." />
            </TextField>
          </Field.Group>
        </Form>
      </Card.Content>
      <Card.Footer>
        <Button className="style-sera:w-full" form="feedback-form" type="submit">
          Submit
        </Button>
      </Card.Footer>
    </Card>
  )
}
