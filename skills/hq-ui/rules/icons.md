# Icons Rules

HQ UI uses Tabler Icon (`@tabler/icons-react`).

## NEVER set icon size inside HQ UI components

Components in `src/components/ui/` already define icon sizes via CSS selectors like `[&_svg:not([class*='size-'])]:size-4`. Do NOT override these with explicit size classes.

```tsx
// ✅ Correct — let the component handle icon sizing
<MenuItem>
  <IconTrash />
  Delete
</MenuItem>

<Button>
  <IconPlus />
  Add item
</Button>

<SelectItem textValue='english'>
  <IconGlobe />
  English
</SelectItem>

<Badge>
  <IconStar />
  Featured
</Badge>

<Tabs.Trigger>
  <IconHome />
  Home
</Tabs.Trigger>

// ❌ Wrong — do NOT add size classes inside these components
<MenuItem>
  <IconTrash className="size-4" />
  Delete
</MenuItem>

<Button>
  <IconPlus className="h-5 w-5" />
  Add item
</Button>

<Badge>
  <IconStar className="size-3" />
  Featured
</Badge>

<SelectItem textValue='english'>
  <IconGlobe className="size-4" />
  English
</SelectItem>
```

## When you CAN set icon size

Only set icon size when using icons **outside** of HQ UI components, in custom layouts:

```tsx
// ✅ OK — icon is in a custom div, not inside an HQ UI component
<div className="flex items-center gap-2">
  <IconCheck className="size-4 text-green-500" />
  <span>Completed</span>
</div>
```
