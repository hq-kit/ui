import { IconAlertTriangle } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

const DialogDestructiveDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Alert Dialog Destructive</Button>
      <DialogContent role='alertdialog'>
        <DialogHeader className='items-center'>
          <div className='mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-destructive/10'>
            <IconAlertTriangle className='size-6 text-destructive' />
          </div>
          <DialogTitle>Are you absolutely sure you want to delete?</DialogTitle>
          <DialogDescription className='text-center'>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
            <span className='mt-4 flex justify-center'>
              <Checkbox id='terms'>Don&apos;t ask next again</Checkbox>
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button slot='close' variant='outline'>
            Cancel
          </Button>
          <Button className='bg-destructive text-white hover:bg-destructive focus-visible:ring-destructive dark:bg-destructive/60'>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDestructiveDemo
