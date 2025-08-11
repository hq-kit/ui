'use client'

import { useState } from 'react'
import { Button, Form, Modal, Textarea, toast } from '@/components/ui'

export default function ModalNestedDemo() {
    const [firstModal, setFirstModal] = useState<boolean>(false)
    const [secondModal, setSecondModal] = useState<boolean>(false)
    const [filled, setFilled] = useState(false)

    return (
        <>
            <Button onPress={() => setFirstModal(true)}>Register</Button>

            <Modal.Content
                aria-label='Confirm Registration'
                isOpen={firstModal}
                onOpenChange={() => setFirstModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>Confirm Registration</Modal.Title>
                    <Modal.Description>Please confirm your registration details.</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                            setSecondModal(true)
                        }}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal.Content>

            <Modal.Content
                aria-label='Profile Setup'
                isOpen={secondModal}
                onOpenChange={(open) => {
                    if (!open && !filled) {
                        toast('Profile setup incomplete')
                    }
                    setSecondModal(open)
                }}
            >
                <Modal.Header>
                    <Modal.Title>Set Up Your Profile</Modal.Title>
                    <Modal.Description>We need a bit more information before you can get started.</Modal.Description>
                </Modal.Header>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        toast.success('Profile setup complete')
                        setSecondModal(false)
                        setFirstModal(false)
                    }}
                >
                    <Modal.Body>
                        <Textarea
                            isRequired
                            label='Bio'
                            onInput={() => setFilled(true)}
                            placeholder='Tell us something about yourself'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button slot='close' variant='outline'>
                            Skip for now
                        </Button>
                        <Button type='submit'>Complete Setup</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Content>
        </>
    )
}
