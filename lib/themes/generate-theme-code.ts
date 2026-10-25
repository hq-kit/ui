import type { ColorSpace, FontMono, FontSans, Preset } from "@/types/themes"
import { formatColor } from "./color-formatter"

export const generateThemeCode = (
  preset: Preset,
  colorFormat: ColorSpace = "oklch",
  fontSans?: FontSans,
  fontMono?: FontMono
): string => {
  if (!("light" in preset) || !("dark" in preset)) {
    throw new Error("Invalid theme styles: missing light or dark mode")
  }

  const format = (color?: string) => formatColor(color as string, colorFormat)

  const { light, dark } = preset as Preset

  return `@theme inline {
${fontSans ? `  --font-sans: ${fontSans};\n` : ""}${fontMono ? `  --font-sans: ${fontSans};` : ""}  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --background: ${format(light.background)};
  --foreground: ${format(light.foreground)};
  --card: ${format(light.card)};
  --card-foreground: ${format(light["card-foreground"])};
  --popover: ${format(light.popover)};
  --popover-foreground: ${format(light["popover-foreground"])};
  --primary: ${format(light.primary)};
  --primary-foreground: ${format(light["primary-foreground"])};
  --secondary: ${format(light.secondary)};
  --secondary-foreground: ${format(light["secondary-foreground"])};
  --muted: ${format(light.muted)};
  --muted-foreground: ${format(light["muted-foreground"])};
  --accent: ${format(light.accent)};
  --accent-foreground: ${format(light["accent-foreground"])};
  --destructive: ${format(light.destructive)};
  --border: ${format(light.border)};
  --input: ${format(light.input)};
  --ring: ${format(light.ring)};
  --chart-1: ${format(light["chart-1"])};
  --chart-2: ${format(light["chart-2"])};
  --chart-3: ${format(light["chart-3"])};
  --chart-4: ${format(light["chart-4"])};
  --chart-5: ${format(light["chart-5"])};
  --sidebar: ${format(light.sidebar)};
  --sidebar-foreground: ${format(light["sidebar-foreground"])};
  --sidebar-primary: ${format(light["sidebar-primary"])};
  --sidebar-primary-foreground: ${format(light["sidebar-primary-foreground"])};
  --sidebar-accent: ${format(light["sidebar-accent"])};
  --sidebar-accent-foreground: ${format(light["sidebar-accent-foreground"])};
  --sidebar-border: ${format(light["sidebar-border"])};
  --sidebar-ring: ${format(light["sidebar-ring"])};

  --radius: ${light.radius};
}

.dark {
  --background: ${format(dark.background)};
  --foreground: ${format(dark.foreground)};
  --card: ${format(dark.card)};
  --card-foreground: ${format(dark["card-foreground"])};
  --popover: ${format(dark.popover)};
  --popover-foreground: ${format(dark["popover-foreground"])};
  --primary: ${format(dark.primary)};
  --primary-foreground: ${format(dark["primary-foreground"])};
  --secondary: ${format(dark.secondary)};
  --secondary-foreground: ${format(dark["secondary-foreground"])};
  --muted: ${format(dark.muted)};
  --muted-foreground: ${format(dark["muted-foreground"])};
  --accent: ${format(dark.accent)};
  --accent-foreground: ${format(dark["accent-foreground"])};
  --destructive: ${format(dark.destructive)};
  --border: ${format(dark.border)};
  --input: ${format(dark.input)};
  --ring: ${format(dark.ring)};
  --chart-1: ${format(dark["chart-1"])};
  --chart-2: ${format(dark["chart-2"])};
  --chart-3: ${format(dark["chart-3"])};
  --chart-4: ${format(dark["chart-4"])};
  --chart-5: ${format(dark["chart-5"])};
  --sidebar: ${format(dark.sidebar)};
  --sidebar-foreground: ${format(dark["sidebar-foreground"])};
  --sidebar-primary: ${format(dark["sidebar-primary"])};
  --sidebar-primary-foreground: ${format(dark["sidebar-primary-foreground"])};
  --sidebar-accent: ${format(dark["sidebar-accent"])};
  --sidebar-accent-foreground: ${format(dark["sidebar-accent-foreground"])};
  --sidebar-border: ${format(dark["sidebar-border"])};
  --sidebar-ring: ${format(dark["sidebar-ring"])};
}`
}
