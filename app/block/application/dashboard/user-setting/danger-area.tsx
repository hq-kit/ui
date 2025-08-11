'use client'

import { IconUserX } from '@tabler/icons-react'
import { Button, Card, Form, Modal, Note, TextField } from '@/components/ui'

export default function SecuritySetting() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Danger Area</Card.Title>
                <Card.Description>Delete your account.</Card.Description>
            </Card.Header>
            <Card.Footer className='sm:justify-start'>
                <Modal>
                    <Button variant='destructive'>
                        <IconUserX />
                        Delete Account
                    </Button>
                    <Modal.Content role='alertdialog'>
                        <Modal.Header>
                            <Modal.Title>Delete Account</Modal.Title>
                            <Modal.Description>
                                This will permanently delete your account and all your data
                            </Modal.Description>
                            <Note variant='destructive'>No undo button here, so be sure!</Note>
                        </Modal.Header>
                        <Form onSubmit={() => {}}>
                            <Modal.Body>
                                <TextField autoFocus isRequired label='Password' type='password' />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot='close' variant='outline'>
                                    Cancel
                                </Button>
                                <Button variant='destructive'>Confirm</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Content>
                </Modal>
            </Card.Footer>
        </Card>
    )
}
