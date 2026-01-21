import { IconLogin } from '@tabler/icons-react'
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

const DialogSignInDemo = () => {
  return (
    <Dialog>
      <form>
        <Button variant='outline'>Sign In</Button>
        <DialogContent className='bg-linear-to-b bg-size-[100%_101%] from-sky-100 to-40% to-card sm:max-w-sm dark:from-sky-900'>
          <DialogHeader className='items-center'>
            <div className='mb-4 flex size-12 items-center justify-center rounded-full bg-sky-600/10 sm:mx-0 dark:bg-sky-400/10'>
              <IconLogin className='size-6 text-sky-600 dark:text-sky-400' />
            </div>
            <DialogTitle>Sign in with email</DialogTitle>
            <DialogDescription className='text-center'>
              Make a new doc to bring your words, data and teams together. For free.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <form className='flex flex-col gap-4'>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input autoFocus id='email' name='useremail' placeholder='example@gmail.com' type='email' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='userpassword' placeholder='Password' type='password' />
              </div>
            </form>
          </DialogBody>
          <DialogFooter className='space-y-2 pt-4 sm:flex-col'>
            <Button className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:focus-visible:ring-sky-400 dark:hover:bg-sky-400'>
              Get Started
            </Button>
            <div className='flex items-center gap-4 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'>
              <span className='text-muted-foreground text-xs'>Or sign in with</span>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Button className='flex-1' variant='outline'>
                <img
                  alt='Google Icon'
                  className='size-5'
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
                />
              </Button>
              <Button className='flex-1' variant='outline'>
                <img
                  alt='X Icon'
                  className='size-5 dark:invert'
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png?width=20&height=20&format=auto'
                />
              </Button>
              <Button className='flex-1' variant='outline'>
                <img
                  alt='Facebook Icon'
                  className='size-5'
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png?width=20&height=20&format=auto'
                />
              </Button>
              <Button className='flex-1' variant='outline'>
                <img
                  alt='GitHub Icon'
                  className='size-5 dark:invert'
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto'
                />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogSignInDemo
