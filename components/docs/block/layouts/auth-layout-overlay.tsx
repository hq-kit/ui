'use client'

import { Button, Modal } from '@/components/ui'

export default function AuthLayoutOverlay({
    title,
    description,
    children
}: {
    title: string
    description: string
    children: React.ReactNode
}) {
    return (
        <div className='flex h-screen w-full items-center justify-center'>
            <Modal>
                <Button>Register</Button>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>{title}</Modal.Title>
                        <Modal.Description>{description}</Modal.Description>
                    </Modal.Header>
                    <Modal.Body>{children}</Modal.Body>
                </Modal.Content>
            </Modal>
        </div>
    )
}
