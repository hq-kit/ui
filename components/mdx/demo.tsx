'use client'

import { IconCode } from '@tabler/icons-react'
import { previews } from '@/components/samples/generated/previews'
import Raws from '@/components/samples/generated/previews.json'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { CLI } from './cli'
import { Code } from './code'

type Raw = keyof typeof Raws

export function Demo({ component }: { component: Raw }) {
  const Component = previews[component].component
  const code = Raws[component].raw
  return (
    <div className='group/demo relative overflow-hidden rounded-lg border shadow-sm'>
      <div className='flex h-0 w-full items-center justify-between gap-1 overflow-hidden bg-accent/50 backdrop-blur-2xl transition-[height,padding] group-hover/demo:h-12 group-hover/demo:p-2 group-has-data-focused/demo:h-12 group-has-data-pressed/demo:h-12 group-has-data-focused/demo:p-2 group-has-data-pressed/demo:p-2'>
        <Badge className='font-medium text-xs' variant='outline'>
          {component.split('/').pop()}
        </Badge>
        <Dialog>
          <Button size='icon-sm' variant='outline'>
            <IconCode />
          </Button>
          <DialogContent className='sm:max-w-5xl'>
            <DialogHeader>
              <DialogTitle>{component.split('/').pop()}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <div className='mb-2 space-y-2'>
                <h3 className='font-medium text-sm'>CLI</h3>
                <CLI command='add' items={`${component.split('/').pop()}`} />
              </div>
              <div>
                <h3 className='font-medium text-sm'>Manual Code</h3>
                <Code className='border shadow-sm' code={code} copy />
              </div>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </div>
      <div className='relative flex min-h-52 items-center justify-center px-8 py-12 has-data-[slot=card]:w-full has-data-[slot=chart]:p-2! has-data-[slot=command]:p-0! has-data-[slot=chart]:**:data-[slot=card]:w-full max-sm:px-4'>
        <Component />
      </div>
    </div>
  )
}
