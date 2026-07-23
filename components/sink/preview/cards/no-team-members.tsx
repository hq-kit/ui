import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"

export function NoTeamMembers() {
  return (
    <Card>
      <Card.Content>
        <Empty className="h-56 border">
          <Empty.Header>
            <Empty.Media>
              <Avatar.Group className="grayscale">
                <Avatar size="lg">
                  <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
                  <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar>
                <Avatar size="lg">
                  <Avatar.Image alt="@maxleiter" src="https://github.com/maxleiter.png" />
                  <Avatar.Fallback>LR</Avatar.Fallback>
                </Avatar>
                <Avatar size="lg">
                  <Avatar.Image alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
                  <Avatar.Fallback>ER</Avatar.Fallback>
                </Avatar>
              </Avatar.Group>
            </Empty.Media>
            <Empty.Title>No Team Members</Empty.Title>
            <Empty.Description>Invite your team to collaborate on this project.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm">Invite Members</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
