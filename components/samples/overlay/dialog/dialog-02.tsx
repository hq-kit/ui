import { IconUpload } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

const AlertDialogWithIconDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Alert Dialog (With Icon)</Button>
      <DialogContent role='alertdialog'>
        <DialogHeader>
          <div className='mb-4 flex size-9 items-center justify-center rounded-full bg-sky-600/10 sm:mx-0 dark:bg-sky-400/10'>
            <IconUpload className='size-4.5 text-sky-600 dark:text-sky-400' />
          </div>
          <DialogTitle>New Update is Available</DialogTitle>
          <DialogDescription>
            New update is available for your application. Please update to the latest version to enjoy new features.
          </DialogDescription>
          <ol className='mt-4 flex list-decimal flex-col gap-2 pl-6 text-muted-foreground text-sm'>
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </DialogHeader>
        <DialogFooter>
          <Button slot='close' variant='outline'>
            Cancel
          </Button>
          <Button className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:focus-visible:ring-sky-400 dark:hover:bg-sky-400'>
            Update Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AlertDialogWithIconDemo
