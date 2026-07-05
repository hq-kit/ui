"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, FieldGroup, FieldSet, Label, Legend } from "@/components/ui/field"

export function ContributionsActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contributions & Activity</CardTitle>
        <CardDescription>Manage your contributions and activity visibility.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contributions-activity">
          <FieldGroup>
            <FieldSet>
              <Legend className="sr-only">Contributions & activity</Legend>
              <Checkbox id="activity-private-profile">
                <Label>Make profile private and hide activity</Label>
                <Description>
                  Enabling this will hide your contributions and activity from your GitHub profile and from social
                  features like followers, stars, feeds, leaderboards and releases.
                </Description>
              </Checkbox>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="style-sera:w-full" form="contributions-activity">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  )
}
