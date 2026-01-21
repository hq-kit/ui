'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import { RouterProvider } from 'react-aria-components'
import { Toaster } from '@/components/ui/sonner'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange enableSystem storageKey='mode'>
        <Toaster />
        {children}
      </ThemeProvider>
    </RouterProvider>
  )
}

export { Providers, ThemeProvider, useTheme }
