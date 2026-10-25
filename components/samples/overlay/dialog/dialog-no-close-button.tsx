import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DialogNoCloseButton() {
  return (
    <Dialog>
      <Button variant="outline">No Close Button</Button>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>This dialog doesn&apos;t have a close button in the top-right corner.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
