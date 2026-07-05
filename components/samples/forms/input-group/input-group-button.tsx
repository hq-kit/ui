"use client"

import { IconCopy, IconInfoCircle, IconStar } from "@tabler/icons-react"
import { useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input"
import { Popover, PopoverContent } from "@/components/ui/popover"

export default function InputGroupButtonExample() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <InputGroupAddon>
            <InputGroupButton size="icon-xs" variant="secondary">
              <IconInfoCircle />
            </InputGroupButton>
          </InputGroupAddon>
          <PopoverContent className="flex flex-col gap-1 rounded-xl text-sm" placement="start">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">https://</InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onPress={() => setIsFavorite(!isFavorite)} size="icon-xs">
            <IconStar
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={isFavorite}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
