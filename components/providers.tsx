'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import { I18nProvider, RouterProvider } from 'react-aria-components'
import { Toaster } from '@/components/ui/sonner'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

export function ClientProviders({ lang, children }: { lang: string; children: ReactNode }) {
  return <I18nProvider locale={lang}>{children}</I18nProvider>
}

const Providers = ({ lang, children }: { lang: string; children: ReactNode }) => {
  const router = useRouter()
  return (
    <ClientProviders lang={lang}>
      <RouterProvider navigate={router.push}>
        <ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange enableSystem storageKey='mode'>
          <Toaster />
          {children}
        </ThemeProvider>
      </RouterProvider>
    </ClientProviders>
  )
}

export { Providers, ThemeProvider, useTheme }
