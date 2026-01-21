import { Button } from '@/components/ui/button'
import { Dialog, DialogBody, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DialogSubscribeDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Subscribe</Button>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-xl'>Subscribe blog for latest updates</DialogTitle>
          <DialogDescription className='text-base'>
            Subscribe to our blog to stay updated with the latest posts and news. Simply enter your email address and
            click &apos;Subscribe&apos; to receive notifications.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <form className='flex gap-4'>
            <div className='grid grow gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' placeholder='example@gmail.com' required type='email' />
            </div>
            <Button className='self-end' type='submit'>
              Subscribe
            </Button>
          </form>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}

export default DialogSubscribeDemo
