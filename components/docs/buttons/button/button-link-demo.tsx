'use client'

import { Link, buttonStyles } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link className={buttonStyles({ variant: 'success' })} href='#'>
            Choicebox
        </Link>
    )
}
