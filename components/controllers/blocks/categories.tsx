'use client'

import { Tab, TabList, Tabs } from 'react-aria-components'

const categories = [
    { id: 'application', label: 'Application' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'ecommerce', label: 'Ecommerce' }
]

export default function BlocksCategories({ section }: { section?: string }) {
    return (
        <div className='mx-auto w-full max-w-7xl lg:max-w-(--breakpoint-xl) 2xl:max-w-(--breakpoint-2xl)'>
            <Tabs aria-label='Categories' orientation='horizontal' className='w-full' selectedKey={section}>
                <TabList
                    className='sticky top-14 flex w-full items-center justify-between divide-x border-b bg-bg/60 backdrop-blur-lg'
                    items={categories}
                >
                    {(item) => (
                        <Tab
                            href={`/blocks/${item.id}`}
                            className='w-full cursor-pointer selected:bg-primary py-2 text-center selected:text-primary-fg text-sm outline-hidden transition-[color,background-color] hover:bg-primary/10 hover:text-primary'
                            id={item.id}
                        >
                            {item.label}
                        </Tab>
                    )}
                </TabList>
            </Tabs>
        </div>
    )
}
