'use client'

import { Avatar, AvatarGroup } from '@/components/ui'

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup aria-label='avatar-group'>
            <Avatar tooltip alt='Sample Image' src='https://i.pravatar.cc/150?img=61' />
            <Avatar tooltip alt='Sample Image' src='https://i.pravatar.cc/150?img=62' />
            <Avatar tooltip alt='Sample Image' src='https://i.pravatar.cc/150?img=63' />
            <Avatar tooltip alt='Sample Image' src='https://i.pravatar.cc/150?img=64' />
            <Avatar tooltip alt='Sample Image' src='https://i.pravatar.cc/150?img=65' />
        </AvatarGroup>
    )
}
