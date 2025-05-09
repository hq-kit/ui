'use client'

import { Link, buttonStyle } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link className={buttonStyle({ variant: 'danger' })} href='#'>
            Link
        </Link>
    )
}
