import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FieldGroup, Label } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export function SocialLinks() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Social Links</Card.Title>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField defaultValue="spotify.com/artist/3j...2k">
            <Label>Spotify Artist URL</Label>
            <InputGroup>
              <InputGroup.Addon>
                <IconPlaceholder
                  hugeicons="PlusSignCircleIcon"
                  lucide="CirclePlusIcon"
                  phosphor="PlusCircleIcon"
                  remixicon="RiAddCircleLine"
                  tabler="IconCirclePlus"
                />
              </InputGroup.Addon>
              <InputGroup.Input />
            </InputGroup>
          </TextField>
          <TextField defaultValue="@julianduryea_music">
            <Label>Instagram Handle</Label>
            <InputGroup>
              <InputGroup.Addon>
                <IconPlaceholder
                  hugeicons="Camera01Icon"
                  lucide="CameraIcon"
                  phosphor="CameraIcon"
                  remixicon="RiCameraLine"
                  tabler="IconCamera"
                />
              </InputGroup.Addon>
              <InputGroup.Input />
            </InputGroup>
          </TextField>
          <TextField>
            <Label>SoundCloud URL</Label>
            <InputGroup>
              <InputGroup.Addon>
                <IconPlaceholder
                  hugeicons="CloudUploadIcon"
                  lucide="CloudIcon"
                  phosphor="CloudIcon"
                  remixicon="RiCloudLine"
                  tabler="IconCloud"
                />
              </InputGroup.Addon>
              <InputGroup.Input placeholder="soundcloud.com/username" />
            </InputGroup>
          </TextField>
          <TextField>
            <Label>Website</Label>
            <InputGroup>
              <InputGroup.Addon>
                <IconPlaceholder
                  hugeicons="Globe02Icon"
                  lucide="GlobeIcon"
                  phosphor="GlobeIcon"
                  remixicon="RiGlobalLine"
                  tabler="IconWorld"
                />
              </InputGroup.Addon>
              <InputGroup.Input placeholder="https://yoursite.com" />
            </InputGroup>
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer className="justify-end style-sera:justify-center gap-2">
        <Button className="style-sera:flex-1" variant="secondary">
          Discard
        </Button>
        <Button className="style-sera:flex-1">Save Changes</Button>
      </Card.Footer>
    </Card>
  )
}
