import { promises as fs } from "node:fs"
import path from "node:path"
import { twMerge } from "tailwind-merge"

export function parseAndCleanCn(sourceCode: string): string {
  const regex = /(cn\(\s*["'`])([^"'`]+)(["'`]\s*,?[\s\S]*?\))/g

  return sourceCode.replace(regex, (_match, prefix, classString, suffix) => {
    const cleanedClasses = twMerge(classString)
    return `${prefix}${cleanedClasses}${suffix}`
  })
}

// ─── Config ─────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, "..")
const STYLES_DIR = path.join(ROOT, "lib/styles")
const UI_DIR = path.join(ROOT, "components/ui")
const OUTPUT_DIR = path.join(ROOT, "registries/ui")

// ─── Types ───────────────────────────────────────────────────────────────────

type ClassMap = Map<string, string> // cn-class → "tailwind classes"

// ─── CSS Parser ──────────────────────────────────────────────────────────────

/**
 * Parse file CSS style-*.css, extract mapping dari `.cn-xxx { @apply ...; }`
 * CSS-nya nested dalam `.style-xxx { ... }` wrapper.
 *
 * Return: Map<"cn-xxx", "class1 class2 ...">
 */
function parseCssClassMap(cssContent: string): ClassMap {
  const map: ClassMap = new Map()

  // Hapus komentar /* ... */
  const stripped = cssContent.replace(/\/\*[\s\S]*?\*\//g, "")

  // Regex: match `.cn-xxx { @apply ...; }`
  // Support multi-line dan nested dalam .style-xxx { ... }
  const ruleRegex = /\.(cn-[\w-]+)\s*\{[^}]*?@apply\s+([\s\S]*?);[^}]*?}/g

  let match: RegExpExecArray | null
  // biome-ignore lint/suspicious/noAssignInExpressions: intentional loop pattern
  while ((match = ruleRegex.exec(stripped)) !== null) {
    const className = match[1].trim()
    // Normalize whitespace dalam value @apply
    const applyValue = match[2].replace(/\s+/g, " ").trim()

    if (map.has(className)) {
      // Jika ada duplikat (tidak seharusnya), gabung
      map.set(className, `${map.get(className)} ${applyValue}`)
    } else {
      map.set(className, applyValue)
    }
  }

  return map
}

// ─── TSX Transformer ─────────────────────────────────────────────────────────

/**
 * Replace semua `cn-xxx` class di dalam string TSX content.
 *
 * Strategy:
 * 1. Cari semua kemunculan `cn-xxx` di dalam string (string literal, template literal, dll)
 * 2. Untuk setiap match, replace dengan classes dari map
 * 3. Gunakan tailwind-merge (twMerge via cn()) yang sudah ada di komponen
 *    — kita tidak perlu tambah merge lagi karena komponen sudah pakai cn()
 *
 * Karena komponen sudah menggunakan `cn(...)` atau `tv({...})` yang sudah
 * wrap tailwind-merge, kita cukup replace class string-nya saja.
 */
function transformTsxContent(content: string, classMap: ClassMap): string {
  let result = content

  // Sort by length descending untuk hindari partial replacement
  // (e.g. cn-button sebelum cn-button-variant-default)
  const sortedEntries = [...classMap.entries()].sort((a, b) => b[0].length - a[0].length)

  for (const [cnClass, tailwindClasses] of sortedEntries) {
    if (!result.includes(cnClass)) continue

    // Escape special regex chars dalam class name
    const escaped = cnClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    /**
     * Pattern matching cn-xxx di dalam:
     * - String literals: "... cn-xxx ..." atau "... cn-xxx"
     * - Template literals: `... cn-xxx ...`
     * - Objek tv/tailwind-variants: base: "... cn-xxx ..."
     *
     * Kita replace tepat class-nya, menjaga spasi di sekitarnya.
     */
    const pattern = new RegExp(`(?<=['"\\s\`])${escaped}(?=['"\\s\`])`, "g")

    result = result.replace(pattern, tailwindClasses)
  }

  // ── Cleanup: hapus sisa cn-* yang tidak ada di CSS map ───────────────────
  // Pola: cn-[a-z...] yang masih ada di dalam string/template literal
  // Hapus beserta spasi di kiri/kanannya agar tidak ada double-space

  // Kasus 1: cn-xxx di awal string (setelah quote/backtick): "cn-xxx rest"
  result = result.replace(/(?<=['"`])(cn-[\w-]+) /g, "")
  // Kasus 2: cn-xxx di tengah string: " cn-xxx "
  result = result.replace(/ (cn-[\w-]+)(?= )/g, "")
  // Kasus 3: cn-xxx di akhir string (sebelum quote/backtick): "rest cn-xxx"
  result = result.replace(/ (cn-[\w-]+)(?=['"`])/g, "")
  // Kasus 4: cn-xxx seorang diri sebagai seluruh string: "cn-xxx"
  result = result.replace(/(?<=['"`])(cn-[\w-]+)(?=['"`])/g, "")

  // Bersihkan multiple spaces yang mungkin tersisa
  // Hanya di dalam string/template literal (antara quotes)
  result = result.replace(/(['"`])([^'"`]*?)(['"`])/g, (_, open, inner, close) => {
    const cleaned = inner.replace(/ {2,}/g, " ").replace(/^ | $/g, "")
    return `${open}${cleaned}${close}`
  })

  // ── Normalize cn("") → cn(className) dan cn("", className) → cn(className)
  // Ketika seluruh class string jadi kosong setelah cleanup
  result = result.replace(/cn\("",\s*/g, "cn(") // cn("", x) → cn(x)
  result = result.replace(/,\s*""\)/g, ")") // cn(x, "") → cn(x)
  result = result.replace(/cn\(""\)/g, 'cn("")') // biarkan cn("") apa adanya (tidak bisa kita perbaiki tanpa tahu konteksnya)
  return parseAndCleanCn(result)
}

// ─── File Helpers ─────────────────────────────────────────────────────────────

async function getStyleFiles(): Promise<{ name: string; file: string }[]> {
  const files = await fs.readdir(STYLES_DIR)
  return files
    .filter((f) => f.startsWith("style-") && f.endsWith(".css"))
    .map((f) => ({
      name: f.replace("style-", "").replace(".css", ""), // e.g. "nova"
      file: path.join(STYLES_DIR, f)
    }))
}

async function getUiComponents(): Promise<{ name: string; file: string }[]> {
  const files = await fs.readdir(UI_DIR)
  return files
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => ({
      name: f.replace(".tsx", ""), // e.g. "button"
      file: path.join(UI_DIR, f)
    }))
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Parse CLI args
  const args = process.argv.slice(2)

  if (args.includes("--help") || args.includes("-h")) {
    console.info(`
🎨 generate-styled-components

Mengubah cn-* class di TSX components menjadi Tailwind classes berdasarkan CSS style.
Output: registries/ui/{style}/{component}.tsx

Usage:
  bun scripts/generate-styled-components.ts [options]

Options:
  --style <name>       Hanya generate untuk style tertentu (e.g. nova, vega, mira)
  --component <name>   Hanya generate untuk component tertentu (e.g. button, card)
  --help, -h           Tampilkan help ini

Examples:
  bun scripts/generate-styled-components.ts
  bun scripts/generate-styled-components.ts --style nova
  bun scripts/generate-styled-components.ts --style nova --component button
  bun run generate:styled
`)
    process.exit(0)
  }

  const styleFilter = args.includes("--style") ? args[args.indexOf("--style") + 1] : null
  const componentFilter = args.includes("--component") ? args[args.indexOf("--component") + 1] : null

  console.info("🎨 Generating styled components...")
  if (styleFilter) console.info(`   Filter style: ${styleFilter}`)
  if (componentFilter) console.info(`   Filter component: ${componentFilter}`)
  console.info()

  // Buat output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  // Load semua style files
  let styleFiles = await getStyleFiles()
  if (styleFilter) {
    styleFiles = styleFiles.filter((s) => s.name === styleFilter)
    if (styleFiles.length === 0) {
      console.error(`❌ Style "${styleFilter}" tidak ditemukan di ${STYLES_DIR}`)
      console.error(`   Style yang tersedia: ${(await getStyleFiles()).map((s) => s.name).join(", ")}`)
      process.exit(1)
    }
  }

  // Load semua component files
  let components = await getUiComponents()
  if (componentFilter) {
    components = components.filter((c) => c.name === componentFilter)
    if (components.length === 0) {
      console.error(`❌ Component "${componentFilter}" tidak ditemukan di ${UI_DIR}`)
      process.exit(1)
    }
  }

  console.info(`📦 ${styleFiles.length} style(s) × ${components.length} component(s)`)
  console.info()

  let totalGenerated = 0

  for (const style of styleFiles) {
    // Parse CSS untuk style ini
    const cssContent = await fs.readFile(style.file, "utf-8")
    const classMap = parseCssClassMap(cssContent)

    console.info(`🖌  Style: ${style.name} (${classMap.size} classes mapped)`)

    // Buat output dir untuk style ini
    const styleOutputDir = path.join(OUTPUT_DIR, style.name)
    await fs.mkdir(styleOutputDir, { recursive: true })

    for (const component of components) {
      const tsxContent = await fs.readFile(component.file, "utf-8")

      // Transform content
      const transformed = transformTsxContent(tsxContent, classMap)

      // Output file
      const outputFile = path.join(styleOutputDir, `${component.name}.tsx`)
      await fs.writeFile(outputFile, transformed, "utf-8")

      totalGenerated++
      console.info(`   ✅ ${component.name}.tsx`)
    }

    console.info()
  }

  console.info(`✨ Done! ${totalGenerated} file(s) generated.`)
  console.info(`📁 Output: ${OUTPUT_DIR}`)
}

main().catch((err) => {
  console.error("❌ Error:", err)
  process.exit(1)
})
