'use client'

import AccountSetting from 'components/user-setting/account-setting'
import DangerArea from 'components/user-setting/danger-area'
import PlanBillingSetting from 'components/user-setting/plan-billing-setting'
import SecuritySetting from 'components/user-setting/security-setting'
import NavbarLayout from 'layouts/navbar-layout'

import { Card, Tabs } from '@/components/ui'

export default function UserSetting() {
    return (
        <NavbarLayout variant='floating'>
            <Card borderless>
                <Card.Header withoutPadding>
                    <Card.Title>User Setting</Card.Title>
                    <Card.Description>
                        Manage your account settings and preferences.
                    </Card.Description>
                </Card.Header>
            </Card>
            <Tabs className='w-full gap-x-24' isResponsive aria-label='E-Learning Platform'>
                <Tabs.List className='h-fit'>
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
        </NavbarLayout>
    )
}
