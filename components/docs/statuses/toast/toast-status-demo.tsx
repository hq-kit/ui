'use client'

import { Button, toast } from '@/components/ui'

export default function ToastStatusDemo() {
    return (
        <div className='flex flex-wrap gap-3'>
            <Button variant='outline' onPress={() => toast('Everything is fine')}>
                Default
            </Button>
            <Button variant='outline' onPress={() => toast.error('The registration failed')}>
                Error
            </Button>
            <Button variant='outline' onPress={() => toast.success('The registration was successful.')}>
                Success
            </Button>
            <Button variant='outline' onPress={() => toast.warning('There was an issue during registration')}>
                Warning
            </Button>
            <Button variant='outline' onPress={() => toast.info('Email is already registered.')}>
                Info
            </Button>
        </div>
    )
}
