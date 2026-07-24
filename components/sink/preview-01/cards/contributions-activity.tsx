import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, FieldGroup, FieldSet, Label, Legend } from "@/components/ui/field"

export function ContributionsActivity() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Contributions & Activity</Card.Title>
        <Card.Description>Manage your contributions and activity visibility.</Card.Description>
      </Card.Header>
      <Card.Content>
        <form id="contributions-activity">
          <FieldGroup>
            <FieldSet>
              <Legend className="sr-only">Contributions & activity</Legend>
              <Checkbox>
                <Label>Make profile private and hide activity</Label>
                <Description>
                  Enabling this will hide your contributions and activity from your GitHub profile and from social
                  features like followers, stars, feeds, leaderboards and releases.
                </Description>
              </Checkbox>
            </FieldSet>
          </FieldGroup>
        </form>
      </Card.Content>
      <Card.Footer>
        <Button className="style-sera:w-full" form="contributions-activity">
          Save Changes
        </Button>
      </Card.Footer>
    </Card>
  )
}
