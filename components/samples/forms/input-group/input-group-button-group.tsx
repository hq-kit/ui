import { Link2Icon } from "lucide-react"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
