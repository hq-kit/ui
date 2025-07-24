'use client'

import { Note } from '@/components/ui'

export default function NoteVariantDemo() {
    return (
        <div className='flex flex-col gap-y-6'>
            <Note>Default alert! Change a few things up and try submitting again.</Note>
            <Note variant='destructive'>Destructive alert! Change a few things up and try submitting again.</Note>
        </div>
    )
}
