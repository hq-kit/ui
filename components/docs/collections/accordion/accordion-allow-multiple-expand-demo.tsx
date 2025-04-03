'use client'

import { Accordion } from '@/components/ui'

export default function AccordionAllowMultipleExpandDemo() {
    return (
        <Accordion allowsMultipleExpanded>
            <Accordion.Item id={1}>
                <Accordion.Trigger>Personal Information</Accordion.Trigger>
                <Accordion.Content>Personal information form here.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id={2}>
                <Accordion.Trigger>Billing Address</Accordion.Trigger>
                <Accordion.Content>Billing address form here.</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    )
}
