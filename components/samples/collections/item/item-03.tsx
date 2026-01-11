import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

const Example = () => (
  <div className='flex w-full max-w-md flex-col gap-6'>
    <Item className='bg-background' variant='outline'>
      <ItemContent>
        <ItemTitle>Default Size Item</ItemTitle>
        <ItemDescription>A simple item with title and description.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size='sm' variant='outline'>
          Action
        </Button>
      </ItemActions>
    </Item>
    <Item className='bg-background' href='#' size='sm' variant='outline'>
      <ItemMedia>
        <IconCircleCheck className='size-5' />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Small Size Item</ItemTitle>
      </ItemContent>
      <ItemActions>
        <IconChevronRight className='size-4' />
      </ItemActions>
    </Item>
  </div>
)

export default Example
