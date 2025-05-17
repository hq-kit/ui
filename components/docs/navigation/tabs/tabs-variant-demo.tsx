'use client'

import { Tabs } from '@/components/ui'

export default function TabsDemo() {
    return (
        <div className='space-y-6'>
            <Tabs aria-label='Project Management' variant='primary'>
                <Tabs.List>
                    <Tabs.Label id='1'>Overview</Tabs.Label>
                    <Tabs.Label id='2'>Features</Tabs.Label>
                    <Tabs.Label id='3'>Pricing</Tabs.Label>
                    <Tabs.Label id='4'>Reviews</Tabs.Label>
                </Tabs.List>
            </Tabs>
            <Tabs aria-label='Project Management' variant='secondary'>
                <Tabs.List>
                    <Tabs.Label id='1'>Overview</Tabs.Label>
                    <Tabs.Label id='2'>Features</Tabs.Label>
                    <Tabs.Label id='3'>Pricing</Tabs.Label>
                    <Tabs.Label id='4'>Reviews</Tabs.Label>
                </Tabs.List>
            </Tabs>
            <Tabs aria-label='Project Management' variant='tertiary'>
                <Tabs.List>
                    <Tabs.Label id='1'>Overview</Tabs.Label>
                    <Tabs.Label id='2'>Features</Tabs.Label>
                    <Tabs.Label id='3'>Pricing</Tabs.Label>
                    <Tabs.Label id='4'>Reviews</Tabs.Label>
                </Tabs.List>
            </Tabs>
        </div>
    )
}
