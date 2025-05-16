'use client'

import { Card, Container, Tabs } from '@/components/ui'
import { useIsMobile } from '@/lib/hooks'
import AccountSetting from './account-setting'
import DangerArea from './danger-area'
import PlanBillingSetting from './plan-billing-setting'
import SecuritySetting from './security-setting'

export default function UserSetting() {
    const isMobile = useIsMobile()
    return (
        <Container className='py-6 xl:py-12'>
            <Card className='mb-6'>
                <Card.Header>
                    py-6
                    <Card.Title>User Setting</Card.Title>
                    <Card.Description>Manage your account settings and preferences.</Card.Description>
                </Card.Header>
            </Card>
            <Tabs orientation={isMobile ? 'horizontal' : 'vertical'} aria-label='E-Learning Platform'>
                <Tabs.List>
                    <Tabs.Label id='account'>Account</Tabs.Label>
                    <Tabs.Label id='security'>Security</Tabs.Label>
                    <Tabs.Label id='plan'>Plan & Billing</Tabs.Label>
                    <Tabs.Label id='danger'>Danger Area</Tabs.Label>
                </Tabs.List>
                <Tabs.Content id='account'>
                    <AccountSetting />
                </Tabs.Content>
                <Tabs.Content id='security'>
                    <SecuritySetting />
                </Tabs.Content>
                <Tabs.Content id='plan'>
                    <PlanBillingSetting />
                </Tabs.Content>
                <Tabs.Content id='danger'>
                    <DangerArea />
                </Tabs.Content>
            </Tabs>
        </Container>
    )
}
