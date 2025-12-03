'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '@/components/providers'
import { Button } from '@/components/ui'

export function ThemeToggle({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <Button
            aria-label={`Switch to ${resolvedTheme}` === 'light' ? 'dark' : 'light' + 'mode'}
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            size='icon'
            variant={variant}
        >
            <IconSun aria-hidden className='dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0' />
            <IconMoon aria-hidden className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
