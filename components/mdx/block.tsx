'use client'

import { IconBrowserMaximize, IconDeviceDesktop, IconDeviceMobile, IconDeviceTablet } from '@tabler/icons-react'
import { useState } from 'react'
import { type Key, Link, TabPanel } from 'react-aria-components'
import { TabsSwitcher } from '@/components/mdx/tabs-switcher'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { ToggleGroup } from '../ui/toggle-group'

export function Block({ page }: { page: string }) {
  const [screenWidth, setScreenWidth] = useState(new Set<Key>(['max-w-none']))
  return (
    <div className='my-4'>
      <TabsSwitcher>
        <TabPanel className='my-2' id='preview'>
          <div className={cn('relative w-full bg-background', 'flex min-h-56 items-center lg:min-h-80')}>
            <div className='absolute right-0 z-20 hidden gap-1 sm:-top-10 sm:flex'>
              <ToggleGroup
                onSelectionChange={setScreenWidth}
                selectedKeys={screenWidth}
                selectionMode='single'
                size='sm'
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
              <Link
                className={buttonVariants({
                  variant: 'outline',
                  size: 'icon-sm'
                })}
                href={`/block/${page}`}
                target='_blank'
              >
                <IconBrowserMaximize />
              </Link>
            </div>
            <iframe
              allowFullScreen
              className={cn('relative z-20 w-full overflow-hidden rounded-lg border', [...screenWidth].flat())}
              height={768}
              src={`/block/${page}`}
              style={{ zoom: 0.95 }}
              title='Preview'
            />
          </div>
        </TabPanel>
        <TabPanel id='code'>None</TabPanel>
      </TabsSwitcher>
    </div>
  )
}
