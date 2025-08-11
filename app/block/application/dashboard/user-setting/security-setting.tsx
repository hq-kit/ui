'use client'

import { IconKey } from '@tabler/icons-react'
import { Button, Card, Form, Switch, TextField } from '@/components/ui'

export default function SecuritySetting() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Security</Card.Title>
                <Card.Description>Secure your account.</Card.Description>
            </Card.Header>
            <Form>
                <Card.Content className='grid gap-4'>
                    <TextField
                        autoFocus
                        id='current_password'
                        isRequired
                        label='Current Password'
                        name='current_password'
                        prefix={<IconKey />}
                        type='password'
                    />
                    <TextField
                        id='new_password'
                        isRequired
                        label='New Password'
                        name='new_password'
                        prefix={<IconKey />}
                        type='password'
                    />
                    <TextField
                        id='new_password_confirm'
                        isRequired
                        label='Confirm New Password'
                        name='new_password_confirm'
                        prefix={<IconKey />}
                        type='password'
                    />
                    <div className='text-muted-foreground'>Account Preferences</div>
                    <Switch>Enable 2FA</Switch>
                    <Switch>Auto Logout</Switch>
                </Card.Content>
                <Card.Footer>
                    <Button>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
