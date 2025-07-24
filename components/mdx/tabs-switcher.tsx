'use client'

import type { ReactNode } from 'react'
import { Tab, TabList, Tabs } from 'react-aria-components'

export function TabsSwitcher({ children }: { children: ReactNode }) {
    return (
        <Tabs>
            <TabList className='inline-flex h-9 w-fit select-none items-center justify-start gap-3 rounded-none bg-transparent p-[3px] px-2 text-muted-foreground *:selected:text-primary *:hover:text-primary md:px-0'>
                <Tab id='preview'>Preview</Tab>
                <Tab id='code'>Code</Tab>
            </TabList>
            {children}
        </Tabs>
    )
}
