'use client'

import { buttonStyles, Link } from '@/components/ui'

export default function LinkButtonDemo() {
    return (
        <div className='flex gap-2'>
            <Link className={buttonStyles()} href='#use-as-button'>
                Link
            </Link>
            <Link className={buttonStyles({ variant: 'outline' })} href='#use-as-button'>
                Link
            </Link>
            <Link
                className={buttonStyles({ variant: 'ghost', shape: 'circle' })}
                href='#use-as-button'
            >
                Link
            </Link>
        </div>
    )
}
