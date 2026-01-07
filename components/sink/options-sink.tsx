'use client'

import { IconBrandX, IconTrash } from '@tabler/icons-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ComboBox } from '@/components/ui/combo-box'
import { Dialog } from '@/components/ui/dialog'
import { Popover } from '@/components/ui/popover'
import { Select } from '@/components/ui/select'
import { Tooltip } from '@/components/ui/tooltip'

export default function OptionsSink() {
  return (
    <Card className='p-4'>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/docs'>Docs</Breadcrumb.Item>
        <Breadcrumb.Item>Components</Breadcrumb.Item>
      </Breadcrumb>
      <div className='mt-6 flex w-full items-center gap-2'>
        <Select aria-labelledby='per-page' className='lg:w-20' id='per-page' placeholder='Per Page'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item id='10'>10</Select.Item>
            <Select.Item id='20'>20</Select.Item>
            <Select.Item id='30'>30</Select.Item>
          </Select.Content>
        </Select>
      </div>
      <div className='mt-4 flex items-end gap-1'>
        <ComboBox aria-label='Users' className='w-full'>
          <ComboBox.Input placeholder='Select a user' />
          <ComboBox.Content items={users}>
            {(item) => (
              <ComboBox.Item id={item.id} textValue={item.name}>
                {item.name}
              </ComboBox.Item>
            )}
          </ComboBox.Content>
        </ComboBox>
        <Dialog>
          <Button size='icon' variant='destructive'>
            <IconTrash />
          </Button>
          <Dialog.Content role='alertdialog'>
            <Dialog.Header>
              <Dialog.Title>Delete User?</Dialog.Title>
              <Dialog.Description>
                This action cannot be undone. This will permanently delete the user.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer className='mt-6'>
              <Button slot='close' variant='outline'>
                Cancel
              </Button>
              <Button className='min-w-24' variant='destructive'>
                <IconTrash /> Delete
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </div>
      <div className='mt-4 flex justify-center gap-5'>
        <Tooltip>
          <Button aria-label='Follow My Twitter' size='icon'>
            <IconBrandX />
          </Button>
          <Tooltip.Content>Follow me on X @dqalhq</Tooltip.Content>
        </Tooltip>
        <Popover>
          <Button>Forgot Password</Button>
          <Popover.Content aria-label='Forgot Password'>
            <Dialog.Header>
              <Dialog.Title>Email</Dialog.Title>
              <Dialog.Description>We&apos;ll send you an email to log in.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Button>Send Login Link</Button>
            </Dialog.Footer>
          </Popover.Content>
        </Popover>
      </div>
    </Card>
  )
}

const users = [
  { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Rosemarie Koch', image_url: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Mrs. Reva Heaney Jr.', image_url: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Ms. Ettie Abshire DVM', image_url: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' },
  {
    id: 7,
    name: 'Miss Jacinthe Gerlach DVM',
    image_url: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 8,
    name: 'Miss Stephania Schaefer Sr.',
    image_url: 'https://i.pravatar.cc/150?img=8'
  },
  { id: 9, name: 'Kevon Hackett MD', image_url: 'https://i.pravatar.cc/150?img=9' },
  { id: 10, name: 'Tom Ledner', image_url: 'https://i.pravatar.cc/150?img=10' }
]
