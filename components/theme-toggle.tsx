"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { useTheme } from "@/components/providers"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ variant = "outline" }: { variant?: "outline" | "ghost" }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      aria-label={`Switch to ${resolvedTheme}` === "light" ? "dark" : "light" + "mode"}
      onPress={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      size="icon"
      variant={variant}
    >
      <IconPlaceholder
        aria-hidden
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        hugeicons="Sun02Icon"
        lucide="SunIcon"
        phosphor="SunIcon"
        remixicon="RiSunLine"
        tabler="IconSun"
      />
      <IconPlaceholder
        aria-hidden
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        hugeicons="Moon02Icon"
        lucide="MoonIcon"
        phosphor="MoonIcon"
        remixicon="RiMoonLine"
        tabler="IconMoon"
      />
    </Button>
  )
}
