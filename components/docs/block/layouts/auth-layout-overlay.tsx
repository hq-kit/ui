'use client'
import type { ReactNode } from 'react'

import { Button, Modal } from '@/components/ui'

export default function AuthLayoutOverlay({
    title,
    description,
    children
}: {
    title: string
    description: string
    children: ReactNode
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
                    <Modal.Body className='pb-4'>{children}</Modal.Body>
                </Modal.Content>
            </Modal>
        </div>
    )
}
