import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"

export function ReportBug() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Report Bug</Card.Title>
        <Card.Description>Help us fix issues faster.</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField>
            <Label>Title</Label>
            <Input placeholder="Brief description of the issue" />
          </TextField>
          <div className="grid grid-cols-2 gap-3">
            <Select defaultValue="medium">
              <Label>Severity</Label>
              <Select.Trigger className="w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item id="critical">Critical</Select.Item>
                  <Select.Item id="high">High</Select.Item>
                  <Select.Item id="medium">Medium</Select.Item>
                  <Select.Item id="low">Low</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
            <Select defaultValue="dashboard">
              <Label>Component</Label>
              <Select.Trigger className="w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item id="dashboard">Dashboard</Select.Item>
                  <Select.Item id="auth">Auth</Select.Item>
                  <Select.Item id="api">API</Select.Item>
                  <Select.Item id="billing">Billing</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </div>
          <TextField>
            <Label>Steps to reproduce</Label>
            <Textarea className="min-h-24 resize-none" placeholder="1. Go to&#10;2. Click on&#10;3. Observe..." />
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Field className="justify-end style-sera:justify-center" orientation="horizontal">
          <Button className="style-sera:flex-1" variant="outline">
            Attach File
          </Button>
          <Button className="style-sera:flex-1">Submit Bug</Button>
        </Field>
      </Card.Footer>
    </Card>
  )
}
