import type { ColorFormat } from './color-converter'
import type { ThemeStyleProps, ThemeStyles } from './presets'
import { colorFormatter } from './color-converter'

type ThemeType = {
  light: ThemeStyleProps
  dark: ThemeStyleProps
}

export const generateThemeCode = (styles: ThemeStyles, colorFormat: ColorFormat = 'oklch'): string => {
  if (!('light' in styles) || !('dark' in styles)) {
    throw new Error('Invalid theme styles: missing light or dark mode')
  }

  const formatColor = (color: string) => colorFormatter(color, colorFormat)

  const themeStyles = styles as ThemeType

  return `:root {
  --background: ${formatColor(themeStyles.light.background)};
  --foreground: ${formatColor(themeStyles.light.foreground)};
  --card: ${formatColor(themeStyles.light.card)};
  --card-foreground: ${formatColor(themeStyles.light['card-foreground'])};
  --popover: ${formatColor(themeStyles.light.popover)};
  --popover-foreground: ${formatColor(themeStyles.light['popover-foreground'])};
  --primary: ${formatColor(themeStyles.light.primary)};
  --primary-foreground: ${formatColor(themeStyles.light['primary-foreground'])};
  --secondary: ${formatColor(themeStyles.light.secondary)};
  --secondary-foreground: ${formatColor(themeStyles.light['secondary-foreground'])};
  --muted: ${formatColor(themeStyles.light.muted)};
  --muted-foreground: ${formatColor(themeStyles.light['muted-foreground'])};
  --accent: ${formatColor(themeStyles.light.accent)};
  --accent-foreground: ${formatColor(themeStyles.light['accent-foreground'])};
  --destructive: ${formatColor(themeStyles.light.destructive)};
  --border: ${formatColor(themeStyles.light.border)};
  --input: ${formatColor(themeStyles.light.input)};
  --ring: ${formatColor(themeStyles.light.ring)};
  --chart-1: ${formatColor(themeStyles.light['chart-1'])};
  --chart-2: ${formatColor(themeStyles.light['chart-2'])};
  --chart-3: ${formatColor(themeStyles.light['chart-3'])};
  --chart-4: ${formatColor(themeStyles.light['chart-4'])};
  --chart-5: ${formatColor(themeStyles.light['chart-5'])};
  --sidebar: ${formatColor(themeStyles.light.sidebar)};
  --sidebar-foreground: ${formatColor(themeStyles.light['sidebar-foreground'])};
  --sidebar-primary: ${formatColor(themeStyles.light['sidebar-primary'])};
  --sidebar-primary-foreground: ${formatColor(themeStyles.light['sidebar-primary-foreground'])};
  --sidebar-accent: ${formatColor(themeStyles.light['sidebar-accent'])};
  --sidebar-accent-foreground: ${formatColor(themeStyles.light['sidebar-accent-foreground'])};
  --sidebar-border: ${formatColor(themeStyles.light['sidebar-border'])};
  --sidebar-ring: ${formatColor(themeStyles.light['sidebar-ring'])};

  --font-sans: '${themeStyles.light['font-sans']}';
  --font-mono: '${themeStyles.light['font-mono']}';

  --radius: ${themeStyles.light.radius};
}

.dark {
  --background: ${formatColor(themeStyles.dark.background)};
  --foreground: ${formatColor(themeStyles.dark.foreground)};
  --card: ${formatColor(themeStyles.dark.card)};
  --card-foreground: ${formatColor(themeStyles.dark['card-foreground'])};
  --popover: ${formatColor(themeStyles.dark.popover)};
  --popover-foreground: ${formatColor(themeStyles.dark['popover-foreground'])};
  --primary: ${formatColor(themeStyles.dark.primary)};
  --primary-foreground: ${formatColor(themeStyles.dark['primary-foreground'])};
  --secondary: ${formatColor(themeStyles.dark.secondary)};
  --secondary-foreground: ${formatColor(themeStyles.dark['secondary-foreground'])};
  --muted: ${formatColor(themeStyles.dark.muted)};
  --muted-foreground: ${formatColor(themeStyles.dark['muted-foreground'])};
  --accent: ${formatColor(themeStyles.dark.accent)};
  --accent-foreground: ${formatColor(themeStyles.dark['accent-foreground'])};
  --destructive: ${formatColor(themeStyles.dark.destructive)};
  --border: ${formatColor(themeStyles.dark.border)};
  --input: ${formatColor(themeStyles.dark.input)};
  --ring: ${formatColor(themeStyles.dark.ring)};
  --chart-1: ${formatColor(themeStyles.dark['chart-1'])};
  --chart-2: ${formatColor(themeStyles.dark['chart-2'])};
  --chart-3: ${formatColor(themeStyles.dark['chart-3'])};
  --chart-4: ${formatColor(themeStyles.dark['chart-4'])};
  --chart-5: ${formatColor(themeStyles.dark['chart-5'])};
  --sidebar: ${formatColor(themeStyles.dark.sidebar)};
  --sidebar-foreground: ${formatColor(themeStyles.dark['sidebar-foreground'])};
  --sidebar-primary: ${formatColor(themeStyles.dark['sidebar-primary'])};
  --sidebar-primary-foreground: ${formatColor(themeStyles.dark['sidebar-primary-foreground'])};
  --sidebar-accent: ${formatColor(themeStyles.dark['sidebar-accent'])};
  --sidebar-accent-foreground: ${formatColor(themeStyles.dark['sidebar-accent-foreground'])};
  --sidebar-border: ${formatColor(themeStyles.dark['sidebar-border'])};
  --sidebar-ring: ${formatColor(themeStyles.dark['sidebar-ring'])};
}

@theme inline {
  --color-background: var(--background);
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

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}`
}
