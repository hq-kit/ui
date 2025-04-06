'use client'

import React from 'react'

import { Button, Form, Modal, Textarea, toast } from '@/components/ui'

export default function ModalNestedDemo() {
    const [firstModal, setFirstModal] = React.useState<boolean>(false)
    const [secondModal, setSecondModal] = React.useState<boolean>(false)
    const [filled, setFilled] = React.useState(false)

    return (
        <>
            <Button onPress={() => setFirstModal(true)}>Register</Button>

            <Modal.Content
                isOpen={firstModal}
                onOpenChange={() => setFirstModal(false)}
                aria-label='Confirm Registration'
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
                isOpen={secondModal}
                onOpenChange={(open) => {
                    if (!open && !filled) {
                        toast('Profile setup incomplete')
                    }
                    setSecondModal(open)
                }}
                aria-label='Profile Setup'
            >
                <Modal.Header>
                    <Modal.Title>Set Up Your Profile</Modal.Title>
                    <Modal.Description>
                        We need a bit more information before you can get started.
                    </Modal.Description>
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
                            placeholder='Tell us something about yourself'
                            onInput={() => setFilled(true)}
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
