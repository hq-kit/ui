import { Button } from "@/components/ui/button"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle } from "@/components/ui/popover"

export default function PopoverForm() {
  return (
    <Popover>
      <Button variant="outline">Open Popover</Button>
      <PopoverContent className="w-64" placement="bottom start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <Label className="w-1/2" htmlFor="width">
              Width
            </Label>
            <Input defaultValue="100%" id="width" />
          </Field>
          <Field orientation="horizontal">
            <Label className="w-1/2" htmlFor="height">
              Height
            </Label>
            <Input defaultValue="25px" id="height" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}
