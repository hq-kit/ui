'use client'

import { IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'
import { Code } from '@/components/mdx/code'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Switch } from '@/components/ui/switch'

export default function CollapsiblePreview() {
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l'>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center px-6'>
          <Collapsible className='w-full' isDisabled={isDisabled}>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4'>
              <span>Can I use this in my project?</span>
              <IconChevronRight className='size-4 in-data-[expanded=true]:rotate-90 transition-transform' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No attribution required.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { IconChevronRight } from '@tabler/icons-react'

<Collapsible${isDisabled ? ' isDisabled' : ''}>
  <CollapsibleTrigger className='flex w-full items-center justify-between gap-4'>
    <span>Can I use this in my project?</span>
    <IconChevronRight className='size-4 in-data-[expanded=true]:rotate-90 transition-transform' />
  </CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>`}
        copy
      />
    </div>
  )
}
