import type { Icon, Style, StyleMap } from "@/types/themes"
import { cn } from "cn"
import { type IconLibraryName, iconLibraries } from "shadcn/icons"
import Styles from "@/lib/styles/style-map.json"

export const transformIcons = (sourceCode: string, iconLibrary: IconLibraryName): string => {
  const libraryConfig = iconLibraries[iconLibrary]
  if (!libraryConfig) return sourceCode

  const transformedIcons = new Set<string>()

  // 1. Regex untuk mendeteksi tag <IconPlaceholder ... />
  const placeholderRegex = /<IconPlaceholder\s+([^>]*?)\/?>/g

  let newCode = sourceCode.replace(placeholderRegex, (match, attrsString) => {
    const attrRegex = /([a-zA-Z0-9_-]+)(?:=(?:["']([^"']*)["']|\{([^}]*)\}))?/g
    // biome-ignore lint/suspicious/noImplicitAnyLet: no-type
    let matchAttr
    let targetIconName: string | null = null
    const userAttributes: string[] = []
    const existingPropNames = new Set<string>()

    // biome-ignore lint/suspicious/noAssignInExpressions: no-type
    while ((matchAttr = attrRegex.exec(attrsString)) !== null) {
      const fullMatch = matchAttr[0]
      const attrName = matchAttr[1]
      const attrValue = matchAttr[2] || matchAttr[3]

      if (attrName === iconLibrary) {
        targetIconName = attrValue?.replace(/^["']|["']$/g, "") || null
      } else if (attrName in iconLibraries) {
        // Skip library-specific props
      } else {
        userAttributes.push(fullMatch)
        existingPropNames.add(attrName)
      }
    }

    if (!targetIconName) {
      return match
    }

    transformedIcons.add(targetIconName)

    const usageMatch = libraryConfig.usage.match(/<(\w+)([^>]*)\s*\/>/)

    if (!usageMatch) {
      return `<${targetIconName} ${userAttributes.join(" ")} />`
    }

    const [, componentName, defaultPropsStr] = usageMatch

    if (componentName === "ICON") {
      const propsStr = userAttributes.length > 0 ? ` ${userAttributes.join(" ")}` : ""
      return `<${targetIconName}${propsStr} />`
    } else {
      const defaultPropsWithIcon = defaultPropsStr.replace(/\{ICON\}/g, `{${targetIconName}}`)

      const defaultPropsToAdd = defaultPropsWithIcon
        .trim()
        .split(/\s+(?=\w+=)/)
        .filter(Boolean)
        .filter((prop) => {
          const propName = prop.split("=")[0]
          return propName && !existingPropNames.has(propName)
        })

      const allProps = [...defaultPropsToAdd, ...userAttributes].filter(Boolean).join(" ")
      return `<${componentName} ${allProps} />`
    }
  })

  // 2. Siapkan string import untuk icon-icon baru (jika ada)
  let newImportsString = ""
  if (transformedIcons.size > 0) {
    const useSemicolon = /import\s+.*?;/.test(sourceCode)
    const semicolon = useSemicolon ? ";" : ""

    const importStatements = libraryConfig.import.split("\n")
    const addedImports: string[] = []

    for (const importStmt of importStatements) {
      const importMatch = importStmt.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/)
      if (!importMatch) continue

      const [, importedNames, modulePath] = importMatch
      const namedImports = importedNames
        .split(",")
        .map((name) => name.trim())
        .flatMap((name) => {
          if (name === "ICON") {
            return Array.from(transformedIcons)
          }
          return name
        })

      addedImports.push(`import { ${namedImports.join(", ")} } from "${modulePath}"${semicolon}`)
    }

    newImportsString = addedImports.join("\n")
  }

  // 3. Cari import IconPlaceholder dan timpa posisinya dengan import baru
  let importReplaced = false
  const importPlaceholderRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]*icon-placeholder)['"]\s*;?/g

  newCode = newCode.replace(importPlaceholderRegex, (_, importsStr, modulePath) => {
    importReplaced = true

    const imports = importsStr
      .split(",")
      .map((i: string) => i.trim())
      .filter((i: string) => i !== "IconPlaceholder" && i !== "")

    let result = ""

    // Jika masih ada komponen lain yang di-import dari file tersebut (selain IconPlaceholder)
    if (imports.length > 0) {
      result += `import { ${imports.join(", ")} } from "${modulePath}";\n`
    }

    // Taruh import icon baru tepat di baris ini
    if (newImportsString) {
      result += `${newImportsString}\n`
    }

    return result
  })

  if (!importReplaced && newImportsString) {
    const useClientRegex = /^((?:['"]use client['"]\s*;?\s*)+)/m
    if (useClientRegex.test(newCode)) {
      newCode = newCode.replace(useClientRegex, `$1\n${newImportsString}\n`)
    } else {
      newCode = `${newImportsString}\n${newCode.trimStart()}`
    }
  }

  return newCode
}

export const transformStyle = (sourceCode: string, style: Style): string => {
  const styleMap: StyleMap = Styles[style]
  const ALLOWLIST = new Set([
    "cn-menu-target",
    "cn-menu-translucent",
    "cn-logical-sides",
    "cn-rtl-flip",
    "cn-font-heading"
  ])

  const matchedClasses = new Set<string>()

  // Regex untuk mendeteksi semua string literal ("...", '...', `...`)
  // Regex ini aman dan menangani escape character (\") dengan benar.
  const stringLiteralRegex = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g

  let newCode = sourceCode.replace(stringLiteralRegex, (match, quote) => {
    const innerText = match.slice(1, -1)

    // Deteksi cepat: jika tidak ada class yang berawalan cn-, abaikan.
    if (!/\bcn-[\w-]+\b/.test(innerText)) {
      return match
    }

    const cnClasses = innerText.match(/\bcn-[\w-]+\b/g) || []

    // Filter class yang belum pernah di-apply sebelumnya
    const unmatchedClasses = cnClasses.filter((cnClass) => !matchedClasses.has(cnClass))

    if (unmatchedClasses.length === 0) {
      // Semua class sudah diproses di bagian lain (cva/className).
      // Cukup bersihkan yang tidak masuk ALLOWLIST.
      let cleaned = innerText.replace(/\bcn-[\w-]+\b/g, (c) => (ALLOWLIST.has(c) ? c : ""))
      cleaned = cleaned.replace(/\s+/g, " ").trim()
      return `${quote}${cleaned}${quote}`
    }

    // Ekstrak class yang tidak di-allowlist untuk diubah ke Tailwind classes
    const classesToInline = unmatchedClasses.filter((cnClass) => !ALLOWLIST.has(cnClass))

    const tailwindClassesToApply = classesToInline.map((cnClass) => styleMap[cnClass]).filter(Boolean)

    if (tailwindClassesToApply.length > 0) {
      const mergedClasses = tailwindClassesToApply.join(" ")

      // Gabungkan kelas Tailwind baru dengan string class yang sudah ada (mengatasi konflik)
      let updated = cn(mergedClasses, innerText)

      // Hapus sisa class cn-* lama, biarkan class yang di ALLOWLIST
      updated = updated.replace(/\bcn-[\w-]+\b/g, (c) => (ALLOWLIST.has(c) ? c : ""))
      updated = updated.replace(/\s+/g, " ").trim()

      // Tandai bahwa cn-* ini sudah dimasukkan ke dalam file
      unmatchedClasses.forEach((cnClass) => {
        matchedClasses.add(cnClass)
      })

      return `${quote}${updated}${quote}`
    } else {
      // Tidak ada gaya yang perlu di-apply dari styleMap, cukup bersihkan cn-* non-allowlist
      let cleaned = innerText.replace(/\bcn-[\w-]+\b/g, (c) => (ALLOWLIST.has(c) ? c : ""))
      cleaned = cleaned.replace(/\s+/g, " ").trim()
      return `${quote}${cleaned}${quote}`
    }
  })

  // (Opsional/Estetika) Bersihkan argumen string kosong pada pemanggilan cn("")
  // karena kelasnya mungkin sudah dihapus seutuhnya oleh proses di atas.
  newCode = newCode.replace(/cn\(\s*(["'`])\1\s*\)/g, "cn()")
  newCode = newCode.replace(/cn\(\s*(["'`])\1\s*,\s*/g, "cn(")
  newCode = newCode.replace(/,\s*(["'`])\1(?=\s*\))/g, "")

  return newCode
}

export const transformCode = (sourceCode: string, style: Style, icon: Icon) => {
  return transformStyle(transformIcons(sourceCode, icon), style)
}
