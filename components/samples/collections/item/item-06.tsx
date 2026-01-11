import { IconShieldExclamation } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

const Example = () => (
  <div className='flex w-full max-w-lg flex-col gap-6'>
    <Item className='bg-background' variant='outline'>
      <ItemMedia variant='icon'>
        <IconShieldExclamation />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security Alert</ItemTitle>
        <ItemDescription>New login detected from unknown device.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size='sm' variant='outline'>
          Review
        </Button>
      </ItemActions>
    </Item>
  </div>
)

export default Example
