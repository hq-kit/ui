"use client"
import { IconSquare } from "@tabler/icons-react"
import { type ComponentProps, Suspense } from "react"
import { useIcon } from "@/components/icon-provider"
import { IconHugeicons } from "@/lib/icons/icon-hugeicons"
import { IconLucide } from "@/lib/icons/icon-lucide"
import { IconPhosphor } from "@/lib/icons/icon-phosphor"
import { IconRemixicon } from "@/lib/icons/icon-remixicon"
import { IconTabler } from "@/lib/icons/icon-tabler"

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & ComponentProps<"svg">) {
  const { iconLibrary } = useIcon()

  // Mapping state iconLibrary ke prop yang dideklarasikan
  const iconMap: Record<string, string | undefined> = {
    lucide: lucide,
    tabler: tabler,
    hugeicons: hugeicons,
    phosphor: phosphor,
    remixicon: remixicon
  }

  const iconName = iconMap[iconLibrary]

  // Jika nama icon untuk library yang aktif tidak dideklarasikan di komponen
  if (!iconName) {
    return null
  }

  return (
    <Suspense fallback={<IconSquare {...props} />}>
      {iconLibrary === "lucide" && <IconLucide name={iconName} {...props} />}
      {iconLibrary === "tabler" && <IconTabler name={iconName} {...props} />}
      {iconLibrary === "hugeicons" && <IconHugeicons name={iconName} {...props} />}
      {iconLibrary === "phosphor" && <IconPhosphor name={iconName} {...props} />}
      {iconLibrary === "remixicon" && <IconRemixicon name={iconName} {...props} />}
    </Suspense>
  )
}
