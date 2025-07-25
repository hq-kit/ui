import { Toggle } from '@/components/ui'
import { IconCloud, IconCloudOff, IconLock, IconLockOpen, IconMoon, IconSun } from '@tabler/icons-react'

export default function App() {
    return (
        <div>
            <Toggle.Group orientation='vertical'>
                <Toggle>
                    {({ isSelected }) => (
                        <>
                            {isSelected ? <IconMoon /> : <IconSun />}
                            {isSelected ? 'Dark' : 'Light'} Mode
                        </>
                    )}
                </Toggle>
                <Toggle>
                    {({ isSelected }) => (
                        <>
                            {isSelected ? <IconLock /> : <IconLockOpen />}
                            Secure Access {isSelected ? 'On' : 'Off'}
                        </>
                    )}
                </Toggle>
                <Toggle>
                    {({ isSelected }) => (
                        <>
                            {isSelected ? <IconCloud /> : <IconCloudOff />}
                            Always Sync
                        </>
                    )}
                </Toggle>
            </Toggle.Group>
        </div>
    )
}
