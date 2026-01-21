import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'

const Example = () => (
  <div className='flex w-full max-w-md flex-col gap-6'>
    <Item className='bg-background' href='#' size='sm' variant='outline'>
      <ItemMedia>
        <IconCircleCheck className='size-5' />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <IconChevronRight className='size-4' />
      </ItemActions>
    </Item>
  </div>
)

export default Example
