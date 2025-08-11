'use client'

import { Button, toast } from '@/components/ui'

export default function ToastStatusDemo() {
    return (
        <div className='flex flex-wrap gap-3'>
            <Button onPress={() => toast('Everything is fine')} variant='outline'>
                Default
            </Button>
            <Button onPress={() => toast.error('The registration failed')} variant='outline'>
                Error
            </Button>
            <Button onPress={() => toast.success('The registration was successful.')} variant='outline'>
                Success
            </Button>
            <Button onPress={() => toast.warning('There was an issue during registration')} variant='outline'>
                Warning
            </Button>
            <Button onPress={() => toast.info('Email is already registered.')} variant='outline'>
                Info
            </Button>
        </div>
    )
}
