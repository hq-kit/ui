'use client'

import React from 'react'

import { IconUserX } from 'hq-icons'

import { Button, Card, Form, Modal, Note, TextField } from '@/components/ui'

export default function SecuritySetting() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Danger Area</Card.Title>
                <Card.Description>Delete your account.</Card.Description>
            </Card.Header>
            <Card.Content>
                <Modal>
                    <Button variant='danger'>
                        <IconUserX />
                        Delete Account
                    </Button>
                    <Modal.Content role='alertdialog'>
                        <Modal.Header
                            title='Delete Account'
                            description='This will permanently delete your account and all your data'
                        >
                            <Note variant='danger'>No undo button here, so be sure!</Note>
                        </Modal.Header>
                        <Form onSubmit={() => {}}>
                            <Modal.Body>
                                <TextField
                                    isRequired
                                    autoFocus
                                    label='Password'
                                    type='password'
                                    isRevealable
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Modal.Close>Cancel</Modal.Close>
                                <Button variant='danger'>Confirm</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Content>
                </Modal>
            </Card.Content>
        </Card>
    )
}
