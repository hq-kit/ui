import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"

export function GithubProfile() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <Card.Header>
        <Card.Title>Profile</Card.Title>
        <Card.Description>Manage your profile information.</Card.Description>
      </Card.Header>
      <Card.Content>
        <form id="profile">
          <FieldGroup>
            <TextField>
              <Label>Name</Label>
              <Input placeholder="shadcn" />
              <Description>
                Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.
              </Description>
            </TextField>
            <Select>
              <Label>Public Email</Label>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="m@shadcn.com">m@shadcn.com</Select.Item>
                <Select.Item value="m@gmail.com">m@gmail.com</Select.Item>
              </Select.Content>
            </Select>
            <Description>
              You can manage verified email addresses in your <Link>email settings</Link>.
            </Description>
            <TextField>
              <Label>Bio</Label>
              <Textarea placeholder="Tell us a little bit about yourself" />
              <Description>
                You can <span>@mention</span> other users and organizations to link to them.
              </Description>
            </TextField>
          </FieldGroup>
        </form>
      </Card.Content>
      <Card.Footer>
        <Button className="style-sera:w-full" form="profile">
          Save Profile
        </Button>
      </Card.Footer>
    </Card>
  )
}
