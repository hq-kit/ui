'use client'

import type { ComponentProps } from 'react'
import { ThemeProvider } from 'next-themes'

const NextProvider = ({ children, ...props }: ComponentProps<typeof ThemeProvider>) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default NextProvider
