'use client'

import AccountSetting from 'components/user-setting/account-setting'
import DangerArea from 'components/user-setting/danger-area'
import PlanBillingSetting from 'components/user-setting/plan-billing-setting'
import SecuritySetting from 'components/user-setting/security-setting'

import NavbarLayout from '@/components/docs/block/layouts/app-navbar'
import { Card, Container, Tabs } from '@/components/ui'
import { useMediaQuery } from '@/lib/hooks'

export default function UserSetting() {
    const isMobile = useMediaQuery('(max-width: 767px)')
    return (
        <NavbarLayout variant='float'>
            <Container className='@xl:py-12 py-6'>
                <Card className='mb-6'>
                    <Card.Header>
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
        </NavbarLayout>
    )
}
