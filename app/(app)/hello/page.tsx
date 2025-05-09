'use client'
import { Button, Modal } from '@/components/ui'

export default function Page() {
    return (
        <div className='mx-auto flex min-h-[80vh] max-w-xl items-center justify-center gap-2'>
            <Modal>
                <Button>Testing</Button>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Testing</Modal.Title>
                        <Modal.Description>Testing</Modal.Description>
                    </Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta dolorem doloremque maiores
                        mollitia nobis nulla recusandae rerum sed totam.
                    </Modal.Body>
                    <Modal.Footer>Lorem ipsum.</Modal.Footer>
                </Modal.Content>
            </Modal>
        </div>
    )
}
