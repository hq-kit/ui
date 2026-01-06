import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  }
]

const DialogReferAndEarnDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Refer & Earn</Button>
      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Refers & Earn AI Credits</DialogTitle>
          <DialogDescription className='text-base'>
            Get 5 AI credits per successful referral sign up. Use AI credits to get AskFred insights, custom meetings
            notes, automated soundbites etc.
          </DialogDescription>
        </DialogHeader>
        <form>
          <DialogBody className='space-y-3'>
            <div className='grid grow gap-3'>
              <Label htmlFor='email'>Refer by email</Label>
              <Input id='email' name='email' placeholder='Emails, separated by comas or tab' required type='text' />
            </div>
            <div className='flex items-center'>
              <Checkbox>Refer 13 people from acme.com</Checkbox>
            </div>
            <div className='flex -space-x-2'>
              {avatars.map((avatar, index) => (
                <Avatar alt={avatar.name} className='ring-2 ring-background' key={index} src={avatar.src} />
              ))}
              <Avatar className='ring-2 ring-background' fallback='+10' fallbackClassName='text-xs' />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button slot='close' variant='outline'>
              Cancel
            </Button>
            <Button type='submit'>Refer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DialogReferAndEarnDemo
