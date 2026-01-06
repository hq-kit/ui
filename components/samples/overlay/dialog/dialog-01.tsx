import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

const AlertDialogDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Alert Dialog</Button>
      <DialogContent role='alertdialog'>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button slot='close' variant='outline'>
            Cancel
          </Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AlertDialogDemo
