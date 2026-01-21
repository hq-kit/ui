import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

const SheetSidesDemo = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Sheet>
        <Button variant='outline'>Top</Button>
        <SheetContent side='top'>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>
          <SheetBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='sheet-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='sheet-demo-username' />
            </div>
          </SheetBody>
          <SheetFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Sheet>
        <Button variant='outline'>Right</Button>
        <SheetContent side='right'>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>
          <SheetBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='sheet-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='sheet-demo-username' />
            </div>
          </SheetBody>
          <SheetFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Sheet>
        <Button variant='outline'>Bottom</Button>
        <SheetContent side='bottom'>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>
          <SheetBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='sheet-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='sheet-demo-username' />
            </div>
          </SheetBody>
          <SheetFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Sheet>
        <Button variant='outline'>Left</Button>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>
          <SheetBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='sheet-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='sheet-demo-username' />
            </div>
          </SheetBody>
          <SheetFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default SheetSidesDemo
