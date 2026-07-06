import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function DialogDemo() {
  return (
    <Dialog>
      <form>
        <Button variant="outline">Open Dialog</Button>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input defaultValue="Pedro Duarte" id="name-1" name="name" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input defaultValue="@peduarte" id="username-1" name="username" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
