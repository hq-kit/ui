"use client"

import { ChevronDownIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com"
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com"
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com"
  }
]

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <Button variant="outline">
        Select <ChevronDownIcon />
      </Button>
      <DropdownMenuContent className="w-48" placement="bottom end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item className="w-full" size="xs">
                <ItemMedia>
                  <Avatar className="size-[--spacing(6.5)]">
                    <AvatarImage className="grayscale" src={person.avatar} />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
