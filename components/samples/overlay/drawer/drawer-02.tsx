import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DrawerSidesDemo = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Drawer direction='top'>
        <DrawerTrigger asChild>
          <Button variant='outline'>Top</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='Drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='Drawer-demo-username' />
            </div>
          </div>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction='right'>
        <DrawerTrigger asChild>
          <Button variant='outline'>Right</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='Drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='Drawer-demo-username' />
            </div>
          </div>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction='bottom'>
        <DrawerTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='Drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='Drawer-demo-username' />
            </div>
          </div>
          <DrawerFooter>
            <Button type='submit'>Save changes</Button>
            <Button slot='close' variant='outline'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction='left'>
        <DrawerTrigger asChild>
          <Button variant='outline'>Left</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-name'>Name</Label>
              <Input defaultValue='Pedro Duarte' id='Drawer-demo-name' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='Drawer-demo-username'>Username</Label>
              <Input defaultValue='@peduarte' id='Drawer-demo-username' />
            </div>
          </div>
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
