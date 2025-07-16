'use client'

import { Button } from '@/components/ui'
import { toast } from 'sonner'

export default function SonnerDemo() {
    return <Button onPress={() => toast('This is Toast Message')}>Toast</Button>
}
