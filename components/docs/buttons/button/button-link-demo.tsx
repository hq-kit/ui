'use client'

import { buttonStyles, Link } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link className={buttonStyles({ variant: 'success' })} href='#'>
            Choicebox
        </Link>
    )
}
