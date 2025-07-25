import { Note } from '@/components/ui'
import { IconInfoCircle } from '@tabler/icons-react'

export default function NoteWithIconDemo() {
    return (
        <Note>
            <IconInfoCircle />
            <Note.Title>Heads up!</Note.Title>
            <Note.Description>Change a few things up and try submitting again.</Note.Description>
        </Note>
    )
}
