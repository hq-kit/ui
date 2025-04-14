'use client'

import { Button, Modal } from '@/components/ui'

export default function ModalAlertDemo() {
    return (
        <Modal>
            <Button variant='danger'>Delete</Button>
            <Modal.Content role='alertdialog'>
                <Modal.Header>
                    <Modal.Title>Delete file</Modal.Title>
                    <Modal.Description>This will permanently delete the selected file. Continue?</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button slot='close' variant='danger'>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}
