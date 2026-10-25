"use client"

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/stores/theme-store"

export function ThemeSwitcher({
  variant = "outline",
  size = "icon-sm",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <Button
      aria-label="Switch theme"
      className={className}
      onPress={toggleTheme}
      size={size}
      variant={variant}
      {...props}
    >
      {theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop />}
    </Button>
  )
}
