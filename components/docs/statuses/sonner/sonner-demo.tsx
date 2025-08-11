'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui'

export default function SonnerDemo() {
    return <Button onPress={() => toast('This is Toast Message')}>Toast</Button>
}
