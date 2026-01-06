import { useId } from 'react'
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

const DialogSignUpDemo = () => {
  const id = useId()

  return (
    <Dialog>
      <form>
        <Button variant='outline'>Sign Up</Button>
        <DialogContent className='bg-linear-to-b bg-size-[100%_101%] from-green-100 to-40% to-card sm:max-w-sm dark:from-green-900'>
          <DialogHeader className='items-center'>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>Start your 60-day free trial now.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <form className='flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='first-name'>First Name</Label>
                  <Input autoFocus id='first-name' name='firstname' placeholder='John' />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='last-name'>Last Name</Label>
                  <Input id='last-name' name='lastname' placeholder='Doe' />
                </div>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='useremail' placeholder='example@gmail.com' type='email' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='userpassword' placeholder='Password' type='password' />
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  className='focus-visible:ring-green-600/20 data-selected:*:data-[slot=box]:border-green-600 data-selected:*:data-[slot=box]:bg-green-600 dark:text-white dark:focus-visible:ring-green-400/40 dark:data-selected:*:data-[slot=box]:border-green-400 dark:data-selected:*:data-[slot=box]:bg-green-400'
                  defaultSelected
                  id={id}
                />
                <Label className='gap-1' htmlFor={id}>
                  I agree with
                  <a className='underline hover:no-underline' href='#'>
                    condition
                  </a>
                  and
                  <a className='underline hover:no-underline' href='#'>
                    privacy policy
                  </a>
                </Label>
              </div>
            </form>
          </DialogBody>
          <DialogFooter className='pt-4 sm:flex-col'>
            <Button className='bg-green-600 text-white hover:bg-green-600 focus-visible:ring-green-600 dark:bg-green-400 dark:focus-visible:ring-green-400 dark:hover:bg-green-400'>
              Start your trial
            </Button>
            <div className='flex items-center gap-4 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'>
              <span className='text-muted-foreground text-xs'>Or</span>
            </div>
            <Button variant='outline'>
              <img
                alt='Google Icon'
                className='size-5'
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
              />
              <span className='flex justify-center'>Continue with Google</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogSignUpDemo
