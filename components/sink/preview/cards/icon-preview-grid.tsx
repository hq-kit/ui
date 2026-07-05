"use client"

import type { IconLibraryName } from "shadcn/icons"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Card, CardContent } from "@/components/ui/card"

const PREVIEW_ICONS = [
  {
    lucide: "CopyIcon",
    tabler: "IconCopy",
    hugeicons: "Copy01Icon",
    phosphor: "CopyIcon",
    remixicon: "RiFileCopyLine"
  },
  {
    lucide: "CircleAlertIcon",
    tabler: "IconExclamationCircle",
    hugeicons: "AlertCircleIcon",
    phosphor: "WarningCircleIcon",
    remixicon: "RiErrorWarningLine"
  },
  {
    lucide: "TrashIcon",
    tabler: "IconTrash",
    hugeicons: "Delete02Icon",
    phosphor: "TrashIcon",
    remixicon: "RiDeleteBinLine"
  },
  {
    lucide: "ShareIcon",
    tabler: "IconShare",
    hugeicons: "Share03Icon",
    phosphor: "ShareIcon",
    remixicon: "RiShareLine"
  },
  {
    lucide: "ShoppingBagIcon",
    tabler: "IconShoppingBag",
    hugeicons: "ShoppingBag01Icon",
    phosphor: "BagIcon",
    remixicon: "RiShoppingBagLine"
  },
  {
    lucide: "MoreHorizontalIcon",
    tabler: "IconDots",
    hugeicons: "MoreHorizontalCircle01Icon",
    phosphor: "DotsThreeIcon",
    remixicon: "RiMoreLine"
  },
  {
    lucide: "Loader2Icon",
    tabler: "IconLoader",
    hugeicons: "Loading03Icon",
    phosphor: "SpinnerIcon",
    remixicon: "RiLoaderLine"
  },
  {
    lucide: "PlusIcon",
    tabler: "IconPlus",
    hugeicons: "PlusSignIcon",
    phosphor: "PlusIcon",
    remixicon: "RiAddLine"
  },
  {
    lucide: "MinusIcon",
    tabler: "IconMinus",
    hugeicons: "MinusSignIcon",
    phosphor: "MinusIcon",
    remixicon: "RiSubtractLine"
  },
  {
    lucide: "ArrowLeftIcon",
    tabler: "IconArrowLeft",
    hugeicons: "ArrowLeft02Icon",
    phosphor: "ArrowLeftIcon",
    remixicon: "RiArrowLeftLine"
  },
  {
    lucide: "ArrowRightIcon",
    tabler: "IconArrowRight",
    hugeicons: "ArrowRight02Icon",
    phosphor: "ArrowRightIcon",
    remixicon: "RiArrowRightLine"
  },
  {
    lucide: "CheckIcon",
    tabler: "IconCheck",
    hugeicons: "Tick02Icon",
    phosphor: "CheckIcon",
    remixicon: "RiCheckLine"
  },
  {
    lucide: "ChevronDownIcon",
    tabler: "IconChevronDown",
    hugeicons: "ArrowDown01Icon",
    phosphor: "CaretDownIcon",
    remixicon: "RiArrowDownSLine"
  },
  {
    lucide: "ChevronRightIcon",
    tabler: "IconChevronRight",
    hugeicons: "ArrowRight01Icon",
    phosphor: "CaretRightIcon",
    remixicon: "RiArrowRightSLine"
  },
  {
    lucide: "SearchIcon",
    tabler: "IconSearch",
    hugeicons: "Search01Icon",
    phosphor: "MagnifyingGlassIcon",
    remixicon: "RiSearchLine"
  },
  {
    lucide: "SettingsIcon",
    tabler: "IconSettings",
    hugeicons: "Settings01Icon",
    phosphor: "GearIcon",
    remixicon: "RiSettingsLine"
  }
] satisfies Record<IconLibraryName, string>[]

export function IconPreviewGrid() {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-8 place-items-center gap-4">
          {PREVIEW_ICONS.map((icon, index) => (
            <div
              className="flex size-8 items-center justify-center rounded-md style-sera:rounded-none ring ring-border *:[svg]:size-4"
              key={index}
            >
              <IconPlaceholder
                hugeicons={icon.hugeicons}
                lucide={icon.lucide}
                phosphor={icon.phosphor}
                remixicon={icon.remixicon}
                tabler={icon.tabler}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
