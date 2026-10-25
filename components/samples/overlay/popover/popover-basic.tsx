import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle } from "@/components/ui/popover"

export default function PopoverBasic() {
  return (
    <Popover>
      <Button variant="outline">Open Popover</Button>
      <PopoverContent placement="start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
