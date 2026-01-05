'use client'

import type { Key } from 'react-aria-components'
import {
  IconCode,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconWindowMaximize
} from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import Raws from '@/components/samples/generated/previews.json'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Button, buttonVariants } from '../ui/button'
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { ToggleGroup } from '../ui/toggle-group'
import { CLI } from './cli'
import { Code } from './code'

type Raw = keyof typeof Raws

export function Iframe({ component }: { component: Raw }) {
  const [screenWidth, setScreenWidth] = useState(new Set<Key>(['max-w-none']))
  const code = Raws[component].raw

  return (
    <div className='group/demo relative overflow-hidden rounded-lg border bg-card shadow-sm'>
      <div className='flex h-0 w-full items-center justify-between gap-1 overflow-hidden bg-accent/50 backdrop-blur-2xl transition-[height,padding] group-hover/demo:h-12 group-hover/demo:p-2'>
        <Badge className='font-medium text-xs' variant='outline'>
          {component.split('/').pop()}
        </Badge>
        <div className='hidden gap-1 sm:flex'>
          <ToggleGroup
            onSelectionChange={setScreenWidth}
            selectedKeys={screenWidth}
            selectionMode='single'
            size='sm'
            variant='outline'
          >
            <ToggleGroup.Item id='max-w-sm'>
              <IconDeviceMobile />
            </ToggleGroup.Item>
            <ToggleGroup.Item id='max-w-3xl'>
              <IconDeviceTablet />
            </ToggleGroup.Item>
            <ToggleGroup.Item id='max-w-none'>
              <IconDeviceDesktop />
            </ToggleGroup.Item>
          </ToggleGroup>
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
          <Link
            className={buttonVariants({
              variant: 'outline',
              size: 'icon-sm'
            })}
            href={`/block/${component}`}
            target='_blank'
          >
            <IconWindowMaximize />
          </Link>
        </div>
      </div>
      <div className='relative flex min-h-56 w-full items-center bg-background lg:min-h-80'>
        <iframe
          allowFullScreen
          className={cn('relative z-20 w-full overflow-hidden', [...screenWidth].flat())}
          height={768}
          src={`/block/${component}`}
          style={{ zoom: 0.95 }}
          title='Preview'
        />
      </div>
    </div>
  )
}
