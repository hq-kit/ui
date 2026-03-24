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

const DrawerDemo = () => {
  return (
    <Drawer>
      <Button variant='outline'>Default</Button>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody className='grid flex-1 auto-rows-min gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='sheet-demo-name'>Name</Label>
            <Input defaultValue='Pedro Duarte' id='sheet-demo-name' />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='sheet-demo-username'>Username</Label>
            <Input defaultValue='@peduarte' id='sheet-demo-username' />
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
  )
}

export default DrawerDemo
