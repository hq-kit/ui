'use client'

import { IconBinoculars, IconCurrencyDollar, IconGift, IconMessageHeart } from '@tabler/icons-react'
import { Tabs } from '@/components/ui'

export default function TabsIconsDemo() {
    return (
        <Tabs aria-label='Project Management'>
            <Tabs.List>
                <Tabs.Label id='1'>
                    <IconBinoculars />
                    Overview
                </Tabs.Label>
                <Tabs.Label id='2'>
                    <IconGift />
                    Features
                </Tabs.Label>
                <Tabs.Label id='3'>
                    <IconCurrencyDollar />
                    Pricing
                </Tabs.Label>
                <Tabs.Label id='4'>
                    <IconMessageHeart />
                    Reviews
                </Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='1'>This is the overview tab content.</Tabs.Content>
            <Tabs.Content id='2'>Details about the features are listed here.</Tabs.Content>
            <Tabs.Content id='3'>Find the pricing information on this tab.</Tabs.Content>
            <Tabs.Content id='4'>Read user reviews and ratings here.</Tabs.Content>
        </Tabs>
    )
}
