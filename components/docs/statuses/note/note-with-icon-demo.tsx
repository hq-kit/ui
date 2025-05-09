import { Note } from '@/components/ui'
import { IconInfo } from 'hq-icons'

export default function NoteWithIconDemo() {
    return (
        <Note>
            <IconInfo />
            <Note.Title>Heads up!</Note.Title>
            <Note.Description>Change a few things up and try submitting again.</Note.Description>
        </Note>
    )
}
