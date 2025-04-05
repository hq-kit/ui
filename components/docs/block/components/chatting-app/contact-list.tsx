import { Avatar } from '@/components/ui'
import { cn } from '@/lib/utils'

interface ContactProps {
    id: number
    name: string
    avatar: string
    status: 'online' | 'offline'
    lastSeen: string
    active: boolean
}
export default function ContactList() {
    return (
        <div className='grid w-full gap-2'>
            {contacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </div>
    )
}
const Contact = ({ name, avatar, status, lastSeen, active }: ContactProps) => {
    return (
        <div
            className={cn(
                'flex cursor-pointer flex-row items-center gap-3 rounded-lg border p-2 md:px-4',
                active ? 'bg-primary/20' : ''
            )}
        >
            {status === 'online' ? <Avatar src={avatar} /> : <Avatar src={avatar} />}
            <div className='grid'>
                <span className='text-sm'>{name}</span>
                {status === 'online' ? (
                    <small className='text-success text-xs'>Online</small>
                ) : (
                    <small className='text-muted-fg text-xs'>Last seen {lastSeen}</small>
                )}
            </div>
        </div>
    )
}

const contacts: ContactProps[] = [
    {
        id: 1,
        avatar: 'https://i.pravatar.cc/77',
        name: 'Hebert',
        status: 'online',
        lastSeen: '20:32',
        active: true
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/78',
        name: 'Schroeder',
        status: 'offline',
        lastSeen: '02:10',
        active: false
    },
    {
        id: 3,
        avatar: 'https://i.pravatar.cc/79',
        name: 'Donna',
        status: 'online',
        lastSeen: '06:14',
        active: false
    },
    {
        id: 4,
        avatar: 'https://i.pravatar.cc/80',
        name: 'Olivia',
        status: 'offline',
        lastSeen: '06:47',
        active: false
    },
    {
        id: 5,
        avatar: 'https://i.pravatar.cc/81',
        name: 'Aisha',
        status: 'offline',
        lastSeen: '02:32',
        active: false
    },
    {
        id: 6,
        avatar: 'https://i.pravatar.cc/82',
        name: 'Bruce',
        status: 'online',
        lastSeen: '01:34',
        active: false
    },
    {
        id: 7,
        avatar: 'https://i.pravatar.cc/83',
        name: 'Harmon',
        status: 'offline',
        lastSeen: '00:15',
        active: false
    }
]
