'use client'

import { Switch } from '@/components/ui'

export default function SwitchDemo() {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <Switch>Default</Switch>
            <Switch isReadOnly>Read Only</Switch>
            <Switch isDisabled>Disabled</Switch>
        </div>
    )
}
