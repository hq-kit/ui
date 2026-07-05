"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export function GithubProfile() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your profile information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="profile">
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="shadcn" />
              <Description>
                Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.
              </Description>
            </Field>
            <Field>
              <Label htmlFor="email">Public Email</Label>
              <NativeSelect id="email">
                <NativeSelectOption value="m@shadcn.com">m@shadcn.com</NativeSelectOption>
                <NativeSelectOption value="m@gmail.com">m@gmail.com</NativeSelectOption>
              </NativeSelect>
              <Description>
                You can manage verified email addresses in your <Link>email settings</Link>.
              </Description>
            </Field>
            <Field>
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us a little bit about yourself" />
              <Description>
                You can <span>@mention</span> other users and organizations to link to them.
              </Description>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="style-sera:w-full" form="profile">
          Save Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
