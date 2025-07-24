'use client'

import { Link, buttonStyle } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link className={buttonStyle({ variant: 'destructive' })} href='#'>
            Link
        </Link>
    )
}
