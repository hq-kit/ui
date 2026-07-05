"use client"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

export function NoTeamMembers() {
  return (
    <Card>
      <CardContent>
        <Empty className="h-56 border">
          <EmptyHeader>
            <EmptyMedia>
              <AvatarGroup className="grayscale">
                <Avatar size="lg">
                  <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage alt="@maxleiter" src="https://github.com/maxleiter.png" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </EmptyMedia>
            <EmptyTitle>No Team Members</EmptyTitle>
            <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Invite Members</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
