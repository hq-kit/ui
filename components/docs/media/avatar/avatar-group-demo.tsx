import { Avatar, AvatarGroup } from '@/components/ui'

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup aria-label='avatar-group'>
            <Avatar alt='Sample Image' src='https://i.pravatar.cc/150?img=61' />
            <Avatar alt='Sample Image' src='https://i.pravatar.cc/150?img=62' />
            <Avatar alt='Sample Image' src='https://i.pravatar.cc/150?img=63' />
            <Avatar alt='Sample Image' src='https://i.pravatar.cc/150?img=64' />
            <Avatar alt='Sample Image' src='https://i.pravatar.cc/150?img=65' />
        </AvatarGroup>
    )
}
