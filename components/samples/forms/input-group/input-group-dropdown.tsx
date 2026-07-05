import { ChevronDownIcon, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input"

export default function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <InputGroupButton aria-label="More" size="icon-xs" variant="ghost">
              <MoreHorizontal />
            </InputGroupButton>
            <DropdownMenuContent placement="bottom end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <InputGroupButton className="pr-1.5! text-xs" variant="ghost">
              Search In... <ChevronDownIcon className="size-3" />
            </InputGroupButton>
            <DropdownMenuContent className="[--radius:0.95rem]" placement="bottom end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
