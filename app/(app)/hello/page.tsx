'use client'

import { TabsSwitcher } from '@/components/mdx/tabs-switcher'
import { Container } from '@/components/ui'
import { TabPanel } from 'react-aria-components'

export default function Page() {
    return (
        <Container>
            <TabsSwitcher>
                <TabPanel id='preview'>View</TabPanel>
                <TabPanel id='code'>Code</TabPanel>
            </TabsSwitcher>
        </Container>
    )
}
