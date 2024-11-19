'use client'

import { Button, Form, Modal, Note, TextField } from '@/components/ui'

export default function ModalCustomStyleDemo() {
    return (
        <Modal>
            <Button variant='danger'>Delete Project</Button>
            <Modal.Content role='alertdialog'>
                <Modal.Header
                    className='bg-bg border-b mb-4'
                    title='Delete Project'
                    description='This project’s gonna get wiped, including all its Deployments, Domains, Env Variables, Serverless Functions, and Settings.'
                >
                    <Note variant='danger'>No undo button here, so be sure!</Note>
                </Modal.Header>
                <Form onSubmit={() => {}}>
                    <Modal.Body className='space-y-4'>
                        <TextField
                            isRequired
                            autoFocus
                            label='Enter the project name'
                            type='text'
                            placeholder='team/project-name'
                        />
                        <TextField
                            isRequired
                            label='To verify, type "delete my project" below'
                            type='text'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Modal.Close>Cancel</Modal.Close>
                        <Button variant='danger' type='submit'>
                            Delete Project
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Content>
        </Modal>
    )
}
