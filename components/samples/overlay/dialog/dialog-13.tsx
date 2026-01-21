import { IconUserPlus } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const friends = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Cristofer Press',
    mail: 'cristoferpress@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Carla Korsgaard',
    mail: 'carlakorsgaard@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Hanna Baptista',
    mail: 'hannabaptista@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Zord Dorwart',
    mail: 'zorddorwart@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Corey Bergson',
    mail: 'coreybergson@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'James Lubin',
    mail: 'jameslubin@gmail.com'
  }
]

const DialogInviteFriendsDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Invite</Button>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-xl'>Invite new members </DialogTitle>
        </DialogHeader>
        <DialogBody className='space-y-4'>
          <form className='flex gap-4 max-sm:flex-col'>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' placeholder='example@gmail.com' required type='email' />
            </div>
            <Button className='sm:self-end' type='submit'>
              Send Invite
            </Button>
          </form>
          <p className='mt-2'>Invite Friends</p>
          <ul className='space-y-4'>
            {friends.map((item, index) => (
              <li className='flex items-center justify-between gap-3' key={index}>
                <div className='flex items-center gap-3 max-[420px]:w-50'>
                  <Avatar alt={item.name} className='size-10' src={item.src} />
                  <div className='flex flex-1 flex-col overflow-hidden'>
                    <span>{item.name}</span>
                    <span className='truncate text-muted-foreground text-sm'>{item.mail}</span>
                  </div>
                </div>
                <Button
                  className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:focus-visible:ring-sky-400 dark:hover:bg-sky-400'
                  size='sm'
                >
                  <IconUserPlus />
                  Invite
                </Button>
              </li>
            ))}
          </ul>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}

export default DialogInviteFriendsDemo
