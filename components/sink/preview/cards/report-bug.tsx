"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReportBug() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Bug</CardTitle>
        <CardDescription>Help us fix issues faster.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="bug-title">Title</Label>
            <Input id="bug-title" placeholder="Brief description of the issue" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <Label htmlFor="bug-severity">Severity</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="w-full" id="bug-severity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem id="critical">Critical</SelectItem>
                    <SelectItem id="high">High</SelectItem>
                    <SelectItem id="medium">Medium</SelectItem>
                    <SelectItem id="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="bug-component">Component</Label>
              <Select defaultValue="dashboard">
                <SelectTrigger className="w-full" id="bug-component">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem id="dashboard">Dashboard</SelectItem>
                    <SelectItem id="auth">Auth</SelectItem>
                    <SelectItem id="api">API</SelectItem>
                    <SelectItem id="billing">Billing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field>
            <Label htmlFor="bug-steps">Steps to reproduce</Label>
            <Textarea
              className="min-h-24 resize-none"
              id="bug-steps"
              placeholder="1. Go to&#10;2. Click on&#10;3. Observe..."
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Field className="justify-end style-sera:justify-center" orientation="horizontal">
          <Button className="style-sera:flex-1" variant="outline">
            Attach File
          </Button>
          <Button className="style-sera:flex-1">Submit Bug</Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
