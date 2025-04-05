'use client'

import { Button, toast } from '@/components/ui'

export default function ToastDemo() {
    return <Button onPress={() => toast('This is Toast Message')}>Toast</Button>
}
