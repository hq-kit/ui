'use client'

import { Link, buttonStyle } from '@/components/ui'

export default function LinkButtonDemo() {
    return (
        <div className='flex gap-2'>
            <Link className={buttonStyle()} href='#'>
                Link
            </Link>
            <Link className={buttonStyle({ variant: 'secondary' })} href='#'>
                Link
            </Link>
            <Link className={buttonStyle({ variant: 'danger' })} href='#'>
                Link
            </Link>
            <Link className={buttonStyle({ variant: 'outline' })} href='#'>
                Link
            </Link>
            <Link className={buttonStyle({ variant: 'ghost', shape: 'circle' })} href='#'>
                Link
            </Link>
        </div>
    )
}
