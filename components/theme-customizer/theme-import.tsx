"use client"

import type { Preset, ThemeStyleProps, ThemeVar } from "@/types/themes"
import { IconAlertTriangle, IconDownload } from "@tabler/icons-react"
import { cn } from "cn"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ColorPicker, ColorSwatch as Swatch } from "@/components/ui/colors"
import { Dialog } from "@/components/ui/dialog"
import { Empty } from "@/components/ui/empty"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"
import { formatColor } from "@/lib/themes/color-formatter"
import { useTheme } from "@/stores/theme-store"

export function ThemeImport() {
  const { setVar, theme } = useTheme()
  const [isValid, setIsValid] = useState<boolean>(false)

  const applyTheme = () => {
    if (isValid && parsed) {
      Object.entries(parsed.light).forEach(([key, value]) => {
        setVar({ key: key as ThemeVar["key"], value, theme: "light" })
      })
      Object.entries(parsed.dark).forEach(([key, value]) => {
        setVar({ key: key as ThemeVar["key"], value, theme: "dark" }, false)
      })
    }
  }

  const [parsed, setParsed] = useState<Preset | null>(null)
  const onPaste = async (e: string) => {
    if (!e.includes(":root") || !e.includes(".dark")) {
      setIsValid(false)
    }
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
      <Button variant={"outline"}>
        <IconDownload />
        Import
      </Button>
      <Dialog.Content className="sm:max-w-5xl">
        <Dialog.Header>
          <Dialog.Title>Import Themes</Dialog.Title>
          <Dialog.Description>Paste the css code</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <div className="scroll-fade grid max-h-[65vh] gap-3 overflow-auto p-0.5 sm:max-h-97 sm:grid-cols-2">
            <FieldGroup>
              <TextField onChange={onPaste} spellCheck="false">
                <Label className="sr-only">CSS Code</Label>
                <Textarea className="max-h-44 min-h-44 font-mono sm:max-h-96 sm:min-h-96" />
              </TextField>
            </FieldGroup>
            <div className="cn-skeleton grid grid-cols-2 overflow-auto">
              {isValid && parsed ? (
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
                ))
              ) : (
                <Empty className="col-span-full">
                  <Empty.Header>
                    <Empty.Media variant="icon">
                      <IconAlertTriangle />
                    </Empty.Media>
                    <Empty.Title>Invalid Value</Empty.Title>
                    <Empty.Description>Check your pasted code</Empty.Description>
                  </Empty.Header>
                </Empty>
              )}
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button slot="close" variant="secondary">
            Close
          </Button>
          <Button isDisabled={!parsed || !isValid} onPress={applyTheme}>
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
    setColor(formatColor(value, "hex"))
  }, [value])

  return (
    <ColorPicker onChange={(e) => setColor(formatColor(e.toString("hex"), "hex"))} value={color}>
      <div className="flex items-center gap-2">
        <Swatch className="size-4" />
        {label.replace("-foreground", "-fg")}
      </div>
    </ColorPicker>
  )
}

export function parseThemeStyles(css: string): Preset {
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
  "font-mono": true,
  radius: true
}

function isValidThemeKey(key: string): key is keyof typeof THEME_KEYS {
  return key in THEME_KEYS
}
