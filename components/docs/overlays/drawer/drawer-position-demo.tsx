'use client'

import { useState } from 'react'

import { Button, Drawer } from '@/components/ui'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function DrawerPositionDemo() {
    const [DrawerSide, setDrawerSide] = useState<Side>('left')
    const [isOpen, setIsOpen] = useState(false)

    const sides: Side[] = ['top', 'left', 'right', 'bottom']

    const openDrawer = (side: Side, open: boolean) => {
        setDrawerSide(side)
        setIsOpen(open)
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                {sides.map((side, i) => (
                    <Button
                        variant='outline'
                        onPress={() => openDrawer(side, true)}
                        key={i}
                        className='first:col-span-full last:col-span-full'
                    >
                        {side}
                    </Button>
                ))}
            </div>
            <Drawer.Content isOpen={isOpen} onOpenChange={setIsOpen} side={DrawerSide}>
                <Drawer.Header>
                    <Drawer.Title>{DrawerSide}</Drawer.Title>
                    <Drawer.Description>The Drawer will go from {DrawerSide} side.</Drawer.Description>
                </Drawer.Header>
            </Drawer.Content>
        </>
    )
}
