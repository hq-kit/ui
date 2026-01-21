'use client'

import type { ReactNode } from 'react'
import type { Key } from 'react-aria-components'
import type { ColorFormat } from '@/lib/themes/color-converter'
import { useState } from 'react'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { buttonVariants } from '@/components/ui/button'
import { Dialog, DialogBody, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { defaultDarkThemeStyles, defaultLightThemeStyles } from '@/config/theme'
import { generateThemeCode } from '@/lib/themes/generator'
import { presets, type ThemeStyleProps, type ThemeStyles } from '@/lib/themes/presets'

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
          <div className='relative mb-4'>
            {activeTheme && (isPresetTheme || activeTheme === 'default') && <CLI command='add' items={[activeTheme]} />}
          </div>
          <div className='relative'>
            <div className='absolute top-5.5 right-11 z-10'>
              <Select
                aria-label='Color'
                name='color'
                onChange={setColorFormat}
                placeholder='Format'
                value={colorFormat}
              >
                <SelectTrigger
                  className={buttonVariants({
                    variant: 'ghost',
                    class: 'h-9 border-transparent bg-card hover:border-transparent dark:bg-card'
                  })}
                  size='sm'
                >
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
