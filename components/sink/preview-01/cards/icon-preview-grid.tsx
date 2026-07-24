import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function IconPreviewGrid() {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-8 place-items-center gap-4">
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Copy01Icon"
              lucide="CopyIcon"
              phosphor="CopyIcon"
              remixicon="RiFileCopyLine"
              tabler="IconCopy"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="AlertCircleIcon"
              lucide="CircleAlertIcon"
              phosphor="WarningCircleIcon"
              remixicon="RiErrorWarningLine"
              tabler="IconAlertCircle"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Delete02Icon"
              lucide="TrashIcon"
              phosphor="TrashIcon"
              remixicon="RiDeleteBinLine"
              tabler="IconTrash"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Share03Icon"
              lucide="ShareIcon"
              phosphor="ShareIcon"
              remixicon="RiShareLine"
              tabler="IconShare"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ShoppingBag01Icon"
              lucide="ShoppingBagIcon"
              phosphor="BagIcon"
              remixicon="RiShoppingBagLine"
              tabler="IconShoppingBag"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="MoreHorizontalCircle01Icon"
              lucide="MoreHorizontalIcon"
              phosphor="DotsThreeIcon"
              remixicon="RiMoreLine"
              tabler="IconDots"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Loading03Icon"
              lucide="Loader2Icon"
              phosphor="SpinnerIcon"
              remixicon="RiLoaderLine"
              tabler="IconLoader"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="PlusSignIcon"
              lucide="PlusIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              tabler="IconPlus"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="MinusSignIcon"
              lucide="MinusIcon"
              phosphor="MinusIcon"
              remixicon="RiSubtractLine"
              tabler="IconMinus"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowLeft02Icon"
              lucide="ArrowLeftIcon"
              phosphor="ArrowLeftIcon"
              remixicon="RiArrowLeftLine"
              tabler="IconArrowLeft"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowRight02Icon"
              lucide="ArrowRightIcon"
              phosphor="ArrowRightIcon"
              remixicon="RiArrowRightLine"
              tabler="IconArrowRight"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Tick02Icon"
              lucide="CheckIcon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              tabler="IconCheck"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowDown01Icon"
              lucide="ChevronDownIcon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              tabler="IconChevronDown"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Search01Icon"
              lucide="SearchIcon"
              phosphor="MagnifyingGlassIcon"
              remixicon="RiSearchLine"
              tabler="IconSearch"
            />
          </Button>
          <Button size="icon" variant="outline">
            <IconPlaceholder
              hugeicons="Settings01Icon"
              lucide="SettingsIcon"
              phosphor="GearIcon"
              remixicon="RiSettingsLine"
              tabler="IconSettings"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
