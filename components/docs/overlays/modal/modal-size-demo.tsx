'use client'

import * as React from 'react'

import { Button, Modal } from '@/components/ui'

type Size = Pick<React.ComponentProps<typeof Modal.Content>, 'size'>['size']
const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']

export default function ModalSizeDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [modalSize, setModalSize] = React.useState<Size>('md')

    const openModal = (size: Size, open: boolean) => {
        setModalSize(size)
        setIsOpen(open)
    }
    return (
        <>
            <div className='grid grid-cols-3 gap-2'>
                {sizes.map((size, i) => (
                    <Button
                        variant='outline'
                        key={i}
                        onPress={() => openModal(size, true)}
                        className='last:col-span-full'
                    >
                        {size}
                    </Button>
                ))}
            </div>

            <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen} size={modalSize}>
                <Modal.Header>
                    <Modal.Title>Modal {modalSize}</Modal.Title>
                    <Modal.Description>This won&apos;t affect on small screen</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant='outline' onPress={() => setIsOpen(false)}>
                        Close
                    </Button>
                    <Button onPress={() => setIsOpen(false)}>Confirm</Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}
