# Styling Rules

## NEVER use raw Tailwind colors

Never use raw Tailwind color utilities. This includes ANY color from: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone.

### Forbidden patterns

```
❌ text-blue-500, text-red-600, text-gray-400, text-green-500
❌ bg-blue-500, bg-red-100, bg-gray-50, bg-slate-200
❌ border-blue-500, border-gray-300, border-red-200
❌ ring-blue-500, ring-red-500
❌ from-blue-500, to-red-500, via-green-500
❌ divide-gray-200, placeholder-gray-400
❌ shadow-blue-500/50
```

## Use semantic color tokens instead

### Text colors

| For                                | Use                         |
| ---------------------------------- | --------------------------- |
| Default text                       | `text-foreground`           |
| Muted/secondary text               | `text-muted-foreground`     |
| Primary colored text               | `text-primary`              |
| Destructive/error text             | `text-destructive`          |
| Foreground on primary background   | `text-primary-foreground`   |
| Foreground on secondary background | `text-secondary-foreground` |
| Foreground on popover background   | `text-popover-foreground`   |
| Foreground on accent background    | `text-accent-foreground`    |
| Foreground on card background      | `text-card-foreground`      |
| Foreground on sidebar background   | `text-sidebar-foreground`   |

### Background colors

| For                      | Use              |
| ------------------------ | ---------------- |
| Page background          | `bg-background`  |
| Primary background       | `bg-primary`     |
| Secondary background     | `bg-secondary`   |
| Destructive background   | `bg-destructive` |
| Muted background         | `bg-muted`       |
| Accent background        | `bg-accent`      |
| Overlay/modal background | `bg-background`  |
| Popover background       | `bg-popover`     |
| Card background          | `bg-card`        |

### Border & ring colors

| For            | Use             |
| -------------- | --------------- |
| Default border | `border-border` |
| Input border   | `border-input`  |
| Focus ring     | `ring-ring`     |

### All available semantic tokens

`primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `accent`, `accent-foreground`, `destructive`, `muted`, `muted-foreground`, `popover`, `popover-foreground`, `card`, `card-foreground`, `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-primary-foreground`, `sidebar-accent`, `sidebar-accent-foreground`, `sidebar-border`, `sidebar-ring`, `background`, `foreground`, `border`, `input`, `ring`, `chart-1` through `chart-5`

## Tailwind shorthand utilities

When `width` and `height` have the same value, always use the `size-*` shorthand instead of writing both `w-*` and `h-*`.

```tsx
// ✅ Correct
<div className="size-5" />
<Avatar className="size-10" />
<span className="size-8 rounded-full" />

// ❌ Wrong — use size-* when width and height are equal
<div className="w-5 h-5" />
<Avatar className="w-10 h-10" />
<span className="h-8 w-8 rounded-full" />
```

This also applies to arbitrary values:

```tsx
// ✅ size-[32px]
// ❌ w-[32px] h-[32px]
```

## className utility

Use the right utility depending on whether the component is a react-aria component or a regular HTML element:

- **`composeRenderProps`** from `react-aria-components` — ONLY for react-aria-components that need `composeRenderProps` (e.g. `Button`, `TextField`, `Select`, etc. from `react-aria-components`)
- **`cn`** from `@/lib/utils` — for regular HTML elements (`div`, `p`, `span`, `strong`, `code`, etc.)
- **`cn`** from `@/lib/utils` — when you need to join classes without conflict resolution

```tsx
// ✅ composeRenderProps — for react-aria components
import { Button as RACButton, composeRenderProps } from "react-aria-components"
import { cn } from '@/lib/utils'

<RACButton className={composeRenderProps(className,(className) => cn("base-classes", className))} />

// ✅ twMerge — for regular HTML elements
import { cn } from "@/lib/utils"

<p className={cn("text-base/6 text-muted-foreground sm:text-sm/6", className)} />
<strong className={cn("font-medium", className)} />
<code className={cn("rounded-sm border bg-muted px-0.5", className)} />
<div className={cn("flex items-center", isActive && "bg-accent")} />

// ❌ Wrong — never use these
import clsx from "clsx"
import classNames from "classnames"
```

## Variant naming

Use `variant` for color variant props, not `intent` or `color`.

```tsx
// ✅ Correct
<Button variant="primary">Save</Button>
<Badge variant="destructive">Error</Badge>
<Note variant="secondary">Close</Note>

// ❌ Wrong
<Button intent="primary">Save</Button>
<Badge color="destructive">Error</Badge>
```

## Component styling with tailwind-variants

Use `tv` from `tailwind-variants` for component variant styles:

```tsx
import { tv } from "tailwind-variants";

const styles = tv({
  base: "...",
  variants: {
    variant: {
      primary: "...",
      destructive: "...",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
```
