'use client'

import { Note } from '@/components/ui'

export default function NoteHideIndicatorDemo() {
    return (
        <>
            <Note indicator={false}>
                You need to be careful with this note. This is a note without indicator.
            </Note>
        </>
    )
}
