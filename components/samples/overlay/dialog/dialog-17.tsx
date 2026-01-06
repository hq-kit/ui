import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DialogMiddleLeftAlignDemo = () => {
  return (
    <Dialog>
      <form>
        <Button variant='outline'>Middle left align</Button>
        <DialogContent className='sm:left-0 sm:ml-6 sm:max-w-106.25 sm:translate-x-0'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <DialogBody className='grid gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='name-1'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='name-1' name='name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Username</Label>
              <Input defaultValue='@peduarte' id='username-1' name='username' />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button slot='close' variant='outline'>
              Cancel
            </Button>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogMiddleLeftAlignDemo
