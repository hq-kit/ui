import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DrawerSidesDemo = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Drawer>
        <Button variant='outline'>Top</Button>
        <DrawerContent side='top'>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='drawer-demo-username' />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <Button variant='outline'>Right</Button>
        <DrawerContent side='right'>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='drawer-demo-username' />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <Button variant='outline'>Bottom</Button>
        <DrawerContent side='bottom'>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='drawer-demo-username' />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <Button variant='outline'>Left</Button>
        <DrawerContent side='left'>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody className='grid flex-1 auto-rows-min gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='drawer-demo-username' />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerSidesDemo
