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
    <div className='group/demo relative rounded-lg border bg-card shadow-sm'>
      <div className='absolute top-0 left-0 z-10 flex w-full items-center justify-between gap-1 bg-accent/50 p-2 opacity-0 backdrop-blur-2xl transition group-hover/demo:opacity-100'>
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
                <CLI command='add' items={`samples/${component}`} />
              </div>
              <div>
                <h3 className='font-medium text-sm'>Manual Code</h3>
                <Code className='border shadow-sm' code={code} copy />
              </div>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </div>
      <div className='relative flex h-full min-h-52 items-center justify-center px-8 py-12 has-data-[slot=card]:w-full has-data-[slot=card]:p-0! **:data-[slot=card]:w-full **:data-[slot=card]:border-0 **:data-[slot=card]:shadow-none max-sm:px-4'>
        <Component />
      </div>
    </div>
  )
}
