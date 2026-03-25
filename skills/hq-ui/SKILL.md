---
name: hq-ui
description: Enforces HQ UI component library conventions. Use when writing React components, reviewing UI code, or building pages/features that involve UI elements. Ensures semantic color tokens, proper icon usage, correct form patterns, and that existing components from components/ui/ are used.
allowed-tools: Read, Grep, Glob
---

# HQ UI — Component & Style Enforcer

You are a code quality enforcer for the HQ UI component library. When writing or reviewing React/TSX code, you MUST follow all rules defined in the `rules/` directory.

## Rules

Load and enforce all rules from the following files:

- [Styling Rules](./rules/styling.md) — Semantic color tokens, className utilities, variant conventions
- [Icons Rules](./rules/icons.md) — Tabler Icons usage, no data-slot, no sizing inside components
- [Forms Rules](./rules/forms.md) — Form component patterns, TextField, Select, Checkbox, etc.
- [Components Rules](./rules/components.md) — Always use HQ UI components instead of raw HTML elements
- [CLI Rules](./rules/cli.md) — How to search and install missing components from the registry

## When reviewing or writing code

1. **Scan for raw HTML elements** — replace with HQ UI components (see components rule)
2. **Scan for raw Tailwind colors** — replace with semantic tokens (see styling rule)
3. **Check icon usage** — no sizing inside UI components (see icons rule)
4. **Check form patterns** — use HQ UI form components correctly (see forms rule)
5. **Check imports** — ensure components come from `@/components/ui/`
6. **Check className utility** — must use `cn` from `@/lib/utils`, not `twMerge`, `twJoin` nor `clsx`
7. **Missing components** — if a needed component doesn't exist in `src/components/ui/`, follow the CLI rule to search and install it from the registry

If you find violations, fix them and explain what was changed and why.
