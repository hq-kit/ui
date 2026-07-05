import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="spotify-url">Spotify Artist URL</Label>
            <InputGroup>
              <InputGroupAddon>
                <IconPlaceholder
                  hugeicons="PlusSignCircleIcon"
                  lucide="CirclePlusIcon"
                  phosphor="PlusCircleIcon"
                  remixicon="RiAddCircleLine"
                  tabler="IconCirclePlus"
                />
              </InputGroupAddon>
              <InputGroupInput defaultValue="spotify.com/artist/3j...2k" id="spotify-url" />
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="instagram-handle">Instagram Handle</Label>
            <InputGroup>
              <InputGroupAddon>
                <IconPlaceholder
                  hugeicons="Camera01Icon"
                  lucide="CameraIcon"
                  phosphor="CameraIcon"
                  remixicon="RiCameraLine"
                  tabler="IconCamera"
                />
              </InputGroupAddon>
              <InputGroupInput defaultValue="@julianduryea_music" id="instagram-handle" />
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="soundcloud-url">SoundCloud URL</Label>
            <InputGroup>
              <InputGroupAddon>
                <IconPlaceholder
                  hugeicons="CloudUploadIcon"
                  lucide="CloudIcon"
                  phosphor="CloudIcon"
                  remixicon="RiCloudLine"
                  tabler="IconCloud"
                />
              </InputGroupAddon>
              <InputGroupInput id="soundcloud-url" placeholder="soundcloud.com/username" />
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="website-url">Website</Label>
            <InputGroup>
              <InputGroupAddon>
                <IconPlaceholder
                  hugeicons="Globe02Icon"
                  lucide="GlobeIcon"
                  phosphor="GlobeIcon"
                  remixicon="RiGlobalLine"
                  tabler="IconWorld"
                />
              </InputGroupAddon>
              <InputGroupInput id="website-url" placeholder="https://yoursite.com" />
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end style-sera:justify-center gap-2">
        <Button className="style-sera:flex-1" variant="secondary">
          Discard
        </Button>
        <Button className="style-sera:flex-1">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
