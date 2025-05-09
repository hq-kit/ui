import { Note } from '@/components/ui'

export default function NoteTitleDescriptionDemo() {
    return (
        <div className='space-y-6'>
            <Note>
                <Note.Title>Heads up!</Note.Title>
                <Note.Description>Change a few things up and try submitting again.</Note.Description>
            </Note>
            <Note variant='danger'>
                <Note.Title>Heads up!</Note.Title>
                <Note.Description>Change a few things up and try submitting again.</Note.Description>
            </Note>
            <Note variant='outline'>
                <Note.Title>Heads up!</Note.Title>
                <Note.Description>Change a few things up and try submitting again.</Note.Description>
            </Note>
        </div>
    )
}
