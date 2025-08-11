import { IconInfoCircle } from '@tabler/icons-react'
import { Note } from '@/components/ui'

export default function NoteWithIconDemo() {
    return (
        <Note>
            <IconInfoCircle />
            <Note.Title>Heads up!</Note.Title>
            <Note.Description>Change a few things up and try submitting again.</Note.Description>
        </Note>
    )
}
