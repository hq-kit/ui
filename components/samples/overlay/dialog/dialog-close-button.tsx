import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function DialogCloseButton() {
  return (
    <Dialog>
      <Button variant="outline">Share</Button>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label className="sr-only" htmlFor="link">
              Link
            </Label>
            <Input defaultValue="https://ui.shadcn.com/docs/installation" id="link" readOnly />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button slot="close" type="button">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
