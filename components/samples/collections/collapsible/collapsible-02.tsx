import { IconChevronUp } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

const CollapsibleCardDemo = () => {
  return (
    <Card className='w-full max-w-md pb-0'>
      <Collapsible>
        <div className='flex items-center justify-between px-6 pb-6'>
          <CardTitle>How do I track my order?</CardTitle>
          <CardAction>
            <Button size='sm' slot='trigger' variant='outline'>
              <span className='in-data-[expanded=true]:hidden'>Show</span>
              <span className='in-data-[expanded=true]:block hidden'>Hide</span>
              <IconChevronUp className='in-data-[expanded=true]:rotate-0 rotate-180' />
            </Button>
          </CardAction>
        </div>
        <CollapsibleContent>
          <CardContent className='space-y-2 px-0'>
            <p className='px-6'>You&apos;ll receive tracking information via email once your order ships.</p>
            <img
              alt='Banner'
              className='aspect-video h-70 rounded-b-xl object-cover'
              src='https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-1.jpg?width=446&format=auto'
            />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default CollapsibleCardDemo
