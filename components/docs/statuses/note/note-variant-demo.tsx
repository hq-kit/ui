'use client'

import { Note } from '@/components/ui'

export default function NoteVariantDemo() {
    return (
        <div className='space-y-6'>
            <Note>Default alert! Change a few things up and try submitting again.</Note>
            <Note variant='danger'>Danger alert! Change a few things up and try submitting again.</Note>
            <Note variant='outline'>Outline alert! Change a few things up and try submitting again.</Note>
        </div>
    )
}
