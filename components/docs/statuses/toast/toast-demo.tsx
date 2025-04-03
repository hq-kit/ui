'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui'

export default function ToastDemo() {
    return <Button onPress={() => toast('This is Toast Message')}>Toast</Button>
}
