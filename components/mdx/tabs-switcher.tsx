'use client'

import type { ReactNode } from 'react'

import { Tab, TabList, Tabs } from 'react-aria-components'

export function TabsSwitcher({ children }: { children: ReactNode }) {
    return (
        <Tabs orientation='horizontal'>
            <TabList className='flex w-fit cursor-pointer items-center rounded-lg border p-1 text-xs'>
                <Tab id='preview' className='rounded-md selected:bg-primary px-2 py-1 selected:text-primary-fg'>
                    View
                </Tab>
                <Tab id='code' className='rounded-md selected:bg-primary px-2 py-1 selected:text-primary-fg'>
                    Code
                </Tab>
            </TabList>
            {children}
        </Tabs>
    )
}
