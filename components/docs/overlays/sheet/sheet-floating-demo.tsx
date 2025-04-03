'use client'

import { Button, Sheet } from '@/components/ui'

export default function SheetFloatingDemo() {
    return (
        <Sheet>
            <Button variant='outline'>Open</Button>
            <Sheet.Content isFloating>
                <Sheet.Header>
                    <Sheet.Title>Floating Sheet</Sheet.Title>
                    <Sheet.Description>This sheet is floating</Sheet.Description>
                </Sheet.Header>
                <Sheet.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button>Save Changes</Button>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}
