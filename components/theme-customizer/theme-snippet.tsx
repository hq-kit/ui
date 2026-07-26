"use client"

import type { ReactNode } from "react"
import type { Key } from "react-aria-components"
import type { ColorFormat } from "@/lib/themes/color-converter"
import { useState } from "react"
import { CLI } from "@/components/mdx/cli"
import { Code } from "@/components/mdx/code-client"
import { Dialog } from "@/components/ui/dialog"
import { Select } from "@/components/ui/select"
import { defaultDarkThemeStyles, defaultLightThemeStyles } from "@/config/theme"
import { generateThemeCode } from "@/lib/themes/generator"
import { presets, type ThemeStyleProps, type ThemeStyles } from "@/lib/themes/presets"

type ThemeVariablesDialogProps = {
  lightTheme?: Partial<ThemeStyleProps>
  darkTheme?: Partial<ThemeStyleProps>
  trigger?: ReactNode
  activeTheme?: string | null
}

const ThemeVariablesDialog = ({ lightTheme, darkTheme, trigger, activeTheme }: ThemeVariablesDialogProps) => {
  const [colorFormat, setColorFormat] = useState<Key | null>("oklch")

  const themeStyles: ThemeStyles = {
    light: { ...defaultLightThemeStyles, ...lightTheme },
    dark: { ...defaultDarkThemeStyles, ...darkTheme }
  }

  const themeCSS = generateThemeCode(themeStyles, colorFormat as ColorFormat)

  const isPresetTheme = activeTheme ? activeTheme in presets : false

  return (
    <Dialog>
      {trigger}
      <Dialog.Content className="sm:max-w-195">
        <Dialog.Header>
          <Dialog.Title>Theme Variables</Dialog.Title>
          <Dialog.Description>Copy these CSS variables to use your theme in other projects.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          {activeTheme && (isPresetTheme || activeTheme === "default") && <CLI command="add" items={[activeTheme]} />}
          <div className="relative">
            <div className="absolute top-5.5 right-10 z-10">
              <Select
                aria-label="Color"
                name="color"
                onChange={setColorFormat}
                placeholder="Format"
                value={colorFormat}
              >
                <Select.Trigger className="bg-background" size="sm">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    <Select.Item id="oklch">OKLCH</Select.Item>
                    <Select.Item id="hsl">HSL</Select.Item>
                    <Select.Item id="rgb">RGB</Select.Item>
                    <Select.Item id="hex">HEX</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select>
            </div>
            <Code className="border shadow-sm" code={themeCSS} copy lang="css" />
          </div>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  )
}

export default ThemeVariablesDialog
