'use client'

import { IconEye, IconEyeClosed, IconLock, IconLockOpen } from '@tabler/icons-react'
import { Collection } from 'react-aria-components'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { ToggleGroup } from '@/components/ui/toggle-group'

export default function TeamManagementSink() {
  return (
    <Card className='flex flex-col items-center justify-around gap-4 p-2 lg:col-span-3 lg:flex-row'>
      <div className='flex -space-x-2'>
        <Collection items={roles}>
          {(item) => <Avatar alt={item.name} id={item.id} src={`https://i.pravatar.cc/150?img=2${item.id}`} />}
        </Collection>
      </div>
      <DropdownMenu>
        <Button>Options</Button>
        <DropdownMenu.Content items={roles}>
          {(item) => (
            <DropdownMenu.Item id={item.id} textValue={item.name}>
              {item.name}
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu>
      <ToggleGroup size='sm' variant='outline'>
        <ToggleGroup.Item>
          {(values) =>
            values.isSelected ? (
              <>
                <IconLock />
                Locked
              </>
            ) : (
              <>
                <IconLockOpen />
                Lock
              </>
            )
          }
        </ToggleGroup.Item>
        <ToggleGroup.Item>
          {(values) =>
            values.isSelected ? (
              <>
                <IconEye />
                Visible
              </>
            ) : (
              <>
                <IconEyeClosed />
                Hidden
              </>
            )
          }
        </ToggleGroup.Item>
      </ToggleGroup>
    </Card>
  )
}

const roles = [
  { id: '1', name: 'Admin', description: 'Has full access to all resources' },
  { id: '2', name: 'Editor', description: 'Can edit content but has limited access to settings' },
  { id: '3', name: 'Viewer', description: 'Can view content but cannot make changes' },
  { id: '4', name: 'Contributor', description: 'Can contribute content for review' },
  { id: '5', name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]
