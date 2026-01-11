import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/input'

const DialogCommentDemo = () => {
  const [charRemains, setCharRemains] = useState<number>(50)
  const onType = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharRemains(50 - e.target.value.length)
  }
  return (
    <Dialog>
      <form>
        <Button variant='outline'>Comment</Button>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-xl'>Help us improve our product for you</DialogTitle>
          </DialogHeader>
          <form>
            <DialogBody className='space-y-4'>
              <fieldset>
                <legend className='font-medium text-foreground text-sm leading-none'>
                  How would you like to describe your experience with the app today?
                </legend>
              </fieldset>
              <div className='grid grow gap-3'>
                <Textarea
                  id='message-2'
                  maxLength={50}
                  onChange={onType}
                  placeholder='Type your message here.'
                  required
                />
                <p className='text-muted-foreground text-sm'>{charRemains}/50 characters left</p>
              </div>
              <Checkbox id='terms'>I consent to admin contacting me based on my feedback</Checkbox>
            </DialogBody>

            <DialogFooter className='sm:justify-end'>
              <Button slot='close' variant='outline'>
                Cancel
              </Button>
              <Button type='submit'>Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogCommentDemo
