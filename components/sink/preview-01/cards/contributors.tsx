import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// GitHub usernames displayed as contributor avatars.
const usernames = [
  "shadcn",
  "vercel",
  "nextjs",
  "tailwindlabs",
  "typescript-lang",
  "eslint",
  "prettier",
  "babel",
  "webpack",
  "rollup",
  "parcel",
  "vite",
  "react",
  "vue",
  "angular",
  "solid"
]

export function Contributors() {
  return (
    <Card className="max-w-sm">
      <Card.Header>
        <Card.Title>
          Contributors <Badge variant="secondary">312</Badge>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-wrap gap-2">
          {usernames.map((username) => (
            <Avatar className="grayscale" key={username}>
              <Avatar.Image alt={username} src={`https://github.com/${username}.png`} />
              <Avatar.Fallback>{username.charAt(0)}</Avatar.Fallback>
            </Avatar>
          ))}
        </div>
      </Card.Content>
      <Card.Footer>
        <a className="text-sm underline underline-offset-4" href="#">
          + 810 contributors
        </a>
      </Card.Footer>
    </Card>
  )
}
