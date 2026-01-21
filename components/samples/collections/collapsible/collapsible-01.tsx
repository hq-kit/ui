import { IconSelector } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

const CollapsibleDemo = () => {
  return (
    <Collapsible className='flex w-full max-w-87.5 flex-col gap-2'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <div className='font-semibold text-sm'>@peduarte starred 3 repositories</div>
        <Button size='icon-sm' slot='trigger' variant='ghost'>
          <IconSelector />
          <span className='sr-only'>Toggle</span>
        </Button>
      </div>
      <div className='rounded-md border px-4 py-2 font-mono text-sm'>@radix-ui/primitives</div>
      <CollapsibleContent className='flex flex-col gap-2'>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>@radix-ui/colors</div>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleDemo
