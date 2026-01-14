'use client'

import type { ReactNode } from 'react'
import type { Key } from 'react-aria-components'
import type { ColorFormat } from '@/lib/themes/color-converter'
import type { ThemeStyleProps, ThemeStyles } from '@/types/theme'
import { useState } from 'react'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Dialog, DialogBody, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { defaultDarkThemeStyles, defaultLightThemeStyles } from '@/config/theme'
import { generateThemeCode } from '@/lib/themes/generator'
import { presets } from '@/lib/themes/presets'

type ThemeVariablesDialogProps = {
  lightTheme?: Partial<ThemeStyleProps>
  darkTheme?: Partial<ThemeStyleProps>
  trigger?: ReactNode
  activeTheme?: string | null
}

const ThemeVariablesDialog = ({ lightTheme, darkTheme, trigger, activeTheme }: ThemeVariablesDialogProps) => {
  const [colorFormat, setColorFormat] = useState<Key | null>('oklch')

  const themeStyles: ThemeStyles = {
    light: { ...defaultLightThemeStyles, ...lightTheme },
    dark: { ...defaultDarkThemeStyles, ...darkTheme }
  }

  const themeCSS = generateThemeCode(themeStyles, colorFormat as ColorFormat)

  // Check if the active theme exists in presets
  const isPresetTheme = activeTheme ? activeTheme in presets : false

  return (
    <Dialog>
      {trigger}
      <DialogContent className='sm:max-w-195'>
        <DialogHeader>
          <DialogTitle>Theme Variables</DialogTitle>
          <DialogDescription>Copy these CSS variables to use your theme in other projects.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className='relative'>{activeTheme && isPresetTheme && <CLI command='add' items={[activeTheme]} />}</div>
          <div>
            <div className='sticky top-0 w-full'>
              <Select
                aria-label='Color'
                name='color'
                onChange={setColorFormat}
                placeholder='Format'
                value={colorFormat}
              >
                <SelectTrigger className='w-fit cursor-pointer gap-1 border bg-card outline-hidden focus:border-border focus:ring-transparent focus-visible:border'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem id='oklch'>OKLCH</SelectItem>
                  <SelectItem id='hsl'>HSL</SelectItem>
                  <SelectItem id='rgb'>RGB</SelectItem>
                  <SelectItem id='hex'>HEX</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Code code={themeCSS} copy lang='css' />
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}

export default ThemeVariablesDialog
