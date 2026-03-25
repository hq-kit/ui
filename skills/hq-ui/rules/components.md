# Components Rules

Always use HQ UI components from `src/components/ui/` instead of raw HTML elements. Import from `@/components/ui/<component-name>`.

## Available components

accordion, alert, autocomplete, avatar, badge, breadcrumb, button-group, button, calendar, card, carousel, chart, checkbox, collapsible, colors, combo-box, command, container, date-field, dialog, drawer, dropdown-menu, drop-zone, empty, field, file-trigger, grid-list, header, input-otp, input, item, kbd, label, link, list-box, meter, native-select, navbar, number-field, pagination, popover, progress, radio, search-field, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, tag, text-field, toggle-group, toggle, toolbar, tooltip, tree

## HTML element → HQ UI component mapping

| Instead of              | Use                                                      | Import from                                           |
| ----------------------- | -------------------------------------------------------- | ----------------------------------------------------- |
| `<button>`              | `<Button>`                                               | `@/components/ui/button`                              |
| `<input>`               | `<Input>` inside `<TextField>` for text-like values only | `@/components/ui/input`, `@/components/ui/text-field` |
| `<input type="number">` | `<NumberInput>` inside `<NumberField>`                   | `@/components/ui/number-field`                        |
| `<input type="date">`   | `<DatePicker>`                                           | `@/components/ui/field`                               |
| `<select>`              | `<Select>`                                               | `@/components/ui/select`                              |
| `<textarea>`            | `<Textarea>`                                             | `@/components/ui/input`                               |
| `<table>`               | `<Table>`                                                | `@/components/ui/table`                               |
| `<a>` (standalone)      | `<Link>`                                                 | `@/components/ui/link`                                |
| `<label>` in forms      | `<Label>`                                                | `@/components/ui/label`                               |
| `<hr>`                  | `<Separator>`                                            | `@/components/ui/separator`                           |
| `<nav>` breadcrumbs     | `<Breadcrumb>`                                           | `@/components/ui/breadcrumb`                          |
| `<img>` for avatars     | `<Avatar>`                                               | `@/components/ui/avatar`                              |
| Custom spinner          | `<Spinner>`                                              | `@/components/ui/spinner`                             |
| Custom checkbox         | `<Checkbox>`                                             | `@/components/ui/checkbox`                            |
| Custom radio            | `<Radio>`                                                | `@/components/ui/radio`                               |
| Custom switch/toggle    | `<Switch>`                                               | `@/components/ui/switch`                              |
| Custom tooltip          | `<Tooltip>`                                              | `@/components/ui/tooltip`                             |
| Custom tabs             | `<Tabs>`                                                 | `@/components/ui/tabs`                                |
| Custom dropdown         | `<DropdownMenu>`                                         | `@/components/ui/dropdown-menu`                       |
| Custom popover          | `<Popover>`                                              | `@/components/ui/popover`                             |
| Custom modal/dialog     | `<Dialog>`                                               | `@/components/ui/dialog`                              |
| Custom card             | `<Card>`                                                 | `@/components/ui/card`                                |
| Custom badge/tag        | `<Badge>`                                                | `@/components/ui/badge`                               |
| Custom skeleton         | `<Skeleton>`                                             | `@/components/ui/skeleton`                            |
| Custom progress         | `<Progress>`                                             | `@/components/ui/progress`                            |

## Coding conventions

- Use `cn` from `@/lib/utils` for composing class names
- Use `tailwind-variants` (`tv`) for component variant styles
- Components are built on `react-aria-components` primitives
- Add `"use client"` directive when using React hooks or interactive components if working with Nextjs project
- Use `variant` prop for color variants (not `intent` or `color`)

## When NOT to replace raw HTML

- Structural `<div>`, `<section>`, `<main>`, `<article>`, `<aside>`, `<header>`, `<footer>` are fine as layout wrappers
- `<span>` for inline non-styled text or wrappers is fine
- `<p>` for basic paragraph text without special styling is fine
- `<ul>`, `<ol>`, `<li>` for basic lists are fine (use `<ListBox>` for interactive/selectable lists)
- `<form>` is fine — Intent UI doesn't replace it
- `<img>` for regular images is fine (use `<Avatar>` only for user/profile avatars)
