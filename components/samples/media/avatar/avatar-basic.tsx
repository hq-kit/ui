import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage alt="@shadcn" className="grayscale" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
