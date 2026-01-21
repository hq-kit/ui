import { IconPlus } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

const Example = () => (
  <div className='flex w-full max-w-lg flex-col gap-6'>
    <Item className='bg-background' variant='outline'>
      <ItemMedia>
        <Avatar className='size-10' fallback='HB' src='https://github.com/haydenbleasel.png' />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Hayden Bleasel</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button aria-label='Invite' className='rounded-full' size='sm' variant='outline'>
          <IconPlus />
        </Button>
      </ItemActions>
    </Item>
  </div>
)

export default Example
