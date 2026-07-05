"use client"

import { MaximizeIcon, MinimizeIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function CollapsibleSettings() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible className="flex items-start gap-2" isExpanded={isOpen} onExpandedChange={setIsOpen}>
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <Label className="sr-only" htmlFor="radius-x">
                Radius X
              </Label>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <Field>
              <Label className="sr-only" htmlFor="radius-y">
                Radius Y
              </Label>
              <Input defaultValue={0} id="radius" placeholder="0" />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <Label className="sr-only" htmlFor="radius-x">
                  Radius X
                </Label>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
              <Field>
                <Label className="sr-only" htmlFor="radius-y">
                  Radius Y
                </Label>
                <Input defaultValue={0} id="radius" placeholder="0" />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <Button size="icon" slot="trigger" variant="outline">
            {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
          </Button>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
