import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuAvatar() {
  return (
    <DropdownMenu>
      <Button className="rounded-full" size="icon" variant="ghost">
        <Avatar>
          <Avatar.Image alt="shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar>
      </Button>
      <DropdownMenuContent placement="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
