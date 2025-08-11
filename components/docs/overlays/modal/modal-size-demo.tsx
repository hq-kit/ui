'use client'

import { type ComponentProps, useState } from 'react'
import { Button, Modal } from '@/components/ui'

type Size = Pick<ComponentProps<typeof Modal.Content>, 'size'>['size']
const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']

export default function ModalSizeDemo() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalSize, setModalSize] = useState<Size>('md')

    const openModal = (size: Size, open: boolean) => {
        setModalSize(size)
        setIsOpen(open)
    }
    return (
        <>
            <div className='grid grid-cols-3 gap-2'>
                {sizes.map((size, i) => (
                    <Button
                        className='last:col-span-full'
                        key={i}
                        onPress={() => openModal(size, true)}
                        variant='outline'
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
                    <Button onPress={() => setIsOpen(false)} variant='outline'>
                        Close
                    </Button>
                    <Button onPress={() => setIsOpen(false)}>Confirm</Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}
