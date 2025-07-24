'use client'

import { Button, Card, Form, Switch, TextField } from '@/components/ui'
import { IconKey } from 'hq-icons'

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
                        prefix={<IconKey />}
                        autoFocus
                        type='password'
                        label='Current Password'
                        id='current_password'
                        name='current_password'
                        isRequired
                    />
                    <TextField
                        prefix={<IconKey />}
                        type='password'
                        label='New Password'
                        id='new_password'
                        name='new_password'
                        isRequired
                    />
                    <TextField
                        prefix={<IconKey />}
                        type='password'
                        label='Confirm New Password'
                        id='new_password_confirm'
                        name='new_password_confirm'
                        isRequired
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
