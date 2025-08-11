'use client'

import { buttonStyle, Link } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link className={buttonStyle({ variant: 'destructive' })} href='#'>
            Link
        </Link>
    )
}
