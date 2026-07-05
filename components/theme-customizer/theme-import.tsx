"use client"

import type { ThemeStyles } from "@/lib/themes/presets"
import { useEffect, useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { useTheme } from "@/components/providers"
import { Button } from "@/components/ui/button"
import { ColorPicker, ColorSwatch as Swatch } from "@/components/ui/colors"
import { Dialog } from "@/components/ui/dialog"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"
import { useThemeGenerator } from "@/hooks/use-theme"
import { colorFormatter } from "@/lib/themes/color-converter"
import { cn } from "@/lib/utils"

export function ThemeImport() {
  const { updateCustom } = useThemeGenerator()
  const [isValid, setIsValid] = useState<boolean>(false)

  const applyTheme = () => {
    if (isValid) {
      updateCustom(parsed!)
    }
  }

  const { theme } = useTheme()

  const [parsed, setParsed] = useState<ThemeStyles | null>(null)
  const onPaste = async (e: string) => {
    for (const variable of Object.keys(parseThemeStyles(e).light)) {
      if (!isValidThemeKey(variable)) {
        setIsValid(false)
      }
    }
    for (const variable of Object.keys(parseThemeStyles(e).dark)) {
      if (!isValidThemeKey(variable)) {
        setIsValid(false)
      }
    }
    setIsValid(true)
    setParsed(parseThemeStyles(e))
  }

  return (
    <Dialog>
      <Button className="w-full">
        <IconPlaceholder
          hugeicons="Download01Icon"
          lucide="ImportIcon"
          phosphor="DownloadIcon"
          remixicon="RiImportLine"
          tabler="IconDownload"
        />
        Import
      </Button>
      <Dialog.Content className="sm:max-w-5xl">
        <Dialog.Header>
          <Dialog.Title>Import Themes</Dialog.Title>
          <Dialog.Description>Paste the css code</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body className="max-h-[80vh]">
          <div className="scroll-fade grid gap-3 overflow-auto sm:max-h-96 sm:grid-cols-2">
            <FieldGroup>
              <TextField onChange={onPaste}>
                <Label className="sr-only">CSS Code</Label>
                <Textarea className="max-h-44 min-h-44 font-mono sm:max-h-96 sm:min-h-96" />
              </TextField>
            </FieldGroup>
            <div className="cn-skeleton grid grid-cols-2 overflow-auto">
              {!isValid && (
                <Empty className="col-span-full">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <IconPlaceholder
                        hugeicons="Alert02Icon"
                        lucide="TriangleAlertIcon"
                        phosphor="WarningIcon"
                        remixicon="RiErrorWarningLine"
                        tabler="IconAlertTriangle"
                      />
                    </EmptyMedia>
                    <EmptyTitle>Invalid Value</EmptyTitle>
                    <EmptyDescription>Check your pasted code</EmptyDescription>
                  </EmptyHeader>
                </Empty>
              )}
              {parsed &&
                Object.keys(parsed).map((mode) => (
                  <div
                    className={cn(
                      `flex flex-col gap-1.5 p-2`,
                      mode === theme ? "bg-popover text-popover-foreground" : "bg-foreground text-background"
                    )}
                    key={mode}
                  >
                    <h4 className="font-medium">{mode}</h4>
                    {Object.entries(parsed[mode as "light" | "dark"]).map(([variable, color], i) => {
                      if (!variable.includes("font") && !variable.includes("radius"))
                        return <ColorSwatch key={i} label={`${variable}`} value={color} />
                      else {
                        return (
                          <TextField isReadOnly key={i} value={color}>
                            <Label>{variable}</Label>
                            <Input />
                          </TextField>
                        )
                      }
                    })}
                  </div>
                ))}
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button slot="close" variant="secondary">
            Close
          </Button>
          <Button isDisabled={!parsed} onPress={applyTheme}>
            Apply
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}

const ColorSwatch = ({ label, value }: { label: string; value: string }) => {
  const [color, setColor] = useState(value)

  useEffect(() => {
    setColor(colorFormatter(value, "hex"))
  }, [value])

  return (
    <ColorPicker onChange={(e) => setColor(colorFormatter(e.toString("hex"), "hex"))} value={color}>
      <div className="flex items-center gap-2">
        <Swatch className="size-4" />
        {label.replace("-foreground", "-fg")}
      </div>
    </ColorPicker>
  )
}

export function parseThemeStyles(css: string): ThemeStyles {
  return {
    light: parseBlock(css, ":root"),
    dark: parseBlock(css, ".dark")
  }
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function parseBlock(css: string, selector: ":root" | ".dark"): Partial<ThemeStyleProps> {
  const selectorRegex = new RegExp(`${escapeRegExp(selector)}\\s*\\{([\\s\\S]*?)\\}`, "m")

  const match = css.match(selectorRegex)

  if (!match) return {}

  const result: Partial<ThemeStyleProps> = {}

  const variableRegex = /^\s*--([\w-]+)\s*:\s*([^;]+);/gm

  for (const [, key, value] of match[1].matchAll(variableRegex)) {
    if (!isValidThemeKey(key)) {
      continue
    }

    result[key] = value.trim()
  }

  return result
}

export const THEME_KEYS = {
  background: true,
  foreground: true,
  card: true,
  "card-foreground": true,
  popover: true,
  "popover-foreground": true,
  primary: true,
  "primary-foreground": true,
  secondary: true,
  "secondary-foreground": true,
  muted: true,
  "muted-foreground": true,
  accent: true,
  "accent-foreground": true,
  destructive: true,
  border: true,
  input: true,
  ring: true,
  "chart-1": true,
  "chart-2": true,
  "chart-3": true,
  "chart-4": true,
  "chart-5": true,
  sidebar: true,
  "sidebar-foreground": true,
  "sidebar-primary": true,
  "sidebar-primary-foreground": true,
  "sidebar-accent": true,
  "sidebar-accent-foreground": true,
  "sidebar-border": true,
  "sidebar-ring": true,
  "font-sans": true,
  "font-serif": true,
  "font-mono": true,
  radius: true
}

export type ThemeStyleProps = {
  [K in keyof typeof THEME_KEYS]: string
}

function isValidThemeKey(key: string): key is keyof typeof THEME_KEYS {
  return key in THEME_KEYS
}
