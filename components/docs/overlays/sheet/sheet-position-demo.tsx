'use client'

import { useState } from 'react'
import { Button, Sheet } from '@/components/ui'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function SheetPositionDemo() {
    const [sheetSide, setSheetSide] = useState<Side>('left')
    const [isOpen, setIsOpen] = useState(false)

    const sides: Side[] = ['top', 'left', 'right', 'bottom']

    const openSheet = (side: Side, open: boolean) => {
        setSheetSide(side)
        setIsOpen(open)
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                {sides.map((side, i) => (
                    <Button
                        className='first:col-span-full last:col-span-full'
                        key={i}
                        onPress={() => openSheet(side, true)}
                        variant='outline'
                    >
                        {side}
                    </Button>
                ))}
            </div>
            <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
                <Sheet.Header>
                    <Sheet.Title>{sheetSide}</Sheet.Title>
                    <Sheet.Description>The sheet will go from {sheetSide} side.</Sheet.Description>
                </Sheet.Header>
            </Sheet.Content>
        </>
    )
}
