'use client'

import { Link, buttonStyles } from '@/components/ui'

export default function LinkButtonDemo() {
    return (
        <div className='flex gap-2'>
            <Link className={buttonStyles()} href='#'>
                Link
            </Link>
            <Link className={buttonStyles({ variant: 'outline' })} href='#'>
                Link
            </Link>
            <Link className={buttonStyles({ variant: 'ghost', shape: 'circle' })} href='#'>
                Link
            </Link>
        </div>
    )
}
