import { Plus } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

export default function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <Avatar.Image src="https://github.com/evilrabbit.png" />
            <Avatar.Fallback>ER</Avatar.Fallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="Invite" className="rounded-full" size="icon-sm" variant="outline">
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <Avatar.Image alt="@maxleiter" src="https://github.com/maxleiter.png" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
