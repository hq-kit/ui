'use client'

import React from 'react'

import { ThemeProvider, useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { RouterProvider } from 'react-aria-components'

import { Toast } from './ui'

declare module 'react-aria-components' {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
    }
}

const Providers = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return (
        <RouterProvider navigate={router.push}>
            <ThemeProvider storageKey='hq-theme' attribute='class'>
                {children}
                <Toast />
            </ThemeProvider>
        </RouterProvider>
    )
}

export { Providers, ThemeProvider, useTheme }
