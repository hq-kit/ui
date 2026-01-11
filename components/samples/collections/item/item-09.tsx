import { IconChevronRight, IconExternalLink } from '@tabler/icons-react'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

const Example = () => (
  <div className='flex w-full max-w-md flex-col gap-4'>
    <Item href='#'>
      <ItemContent>
        <ItemTitle>Visit our documentation</ItemTitle>
        <ItemDescription>Learn how to get started with our components.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <IconChevronRight className='size-4' />
      </ItemActions>
    </Item>
    <Item className='bg-background' href='#' rel='noopener noreferrer' target='_blank' variant='outline'>
      <ItemContent>
        <ItemTitle>External resource</ItemTitle>
        <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <IconExternalLink className='size-4' />
      </ItemActions>
    </Item>
  </div>
)

export default Example
