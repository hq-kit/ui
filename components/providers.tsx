'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { RouterProvider } from 'react-aria-components'

import { Toast, ToastProvider } from '@/components/ui'

declare module 'react-aria-components' {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
    }
}

const Providers = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    return (
        <RouterProvider navigate={router.push}>
            <ThemeProvider storageKey='hq-theme' disableTransitionOnChange attribute='class' enableSystem>
                <ToastProvider />
                <Toast />
                {children}
            </ThemeProvider>
        </RouterProvider>
    )
}

export { Providers, ThemeProvider, useTheme }
