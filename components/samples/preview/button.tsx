"use client"

import type { Key } from "@/components/ui/select"
import { IconBrandAdobe } from "@tabler/icons-react"
import { type ComponentProps, useState } from "react"
import { ComponentPreview } from "@/components/component-preview"
import { FieldSelect, FieldText } from "@/components/forms"
import { Button, buttonVariants } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const variants = Object.keys(buttonVariants.variants.variant)
const sizes = Object.keys(buttonVariants.variants.size)

type ButtonProps = ComponentProps<typeof Button>

export default function ButtonPreview() {
  const [isPending, setIsPending] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [children, setChildren] = useState("Button")
  const [variant, setVariant] = useState<Key | null>(variants[0])
  const [size, setSize] = useState<Key | null>(sizes[0])
  const [withIcon, setWithIcon] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)

  const onIconOnlyChange = (value: boolean) => {
    setIconOnly(value)
    if (value) {
      setWithIcon(false)
      setSize(sizes.find((size) => size.startsWith("icon")) as Key)
    } else {
      setSize(sizes[0] as Key)
    }
  }

  return (
    <>
      <ComponentPreview>
        <ComponentPreview.Settings>
          <FieldText
            isDisabled={iconOnly}
            label="Children"
            name="children"
            onChange={setChildren}
            placeholder="Button"
            value={children}
          />
          <Switch isDisabled={iconOnly} isSelected={withIcon} onChange={setWithIcon}>
            With Icon
          </Switch>
          <Switch isSelected={iconOnly} onChange={onIconOnlyChange}>
            Icon Only
          </Switch>
          <FieldSelect
            items={variants.map((variant) => ({ id: variant, label: variant }))}
            label={"Variant"}
            name={"variant"}
            onChange={setVariant}
            value={variant}
          />
          <FieldSelect
            items={
              iconOnly
                ? sizes.filter((size) => size.startsWith("icon")).map((size) => ({ id: size, label: size }))
                : sizes.filter((size) => !size.startsWith("icon")).map((size) => ({ id: size, label: size }))
            }
            label={"Size"}
            name={"size"}
            onChange={setSize}
            value={size}
          />
          <Switch isSelected={isPending} onChange={setIsPending}>
            Pending
          </Switch>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </ComponentPreview.Settings>
        <ComponentPreview.View>
          <Button
            isDisabled={isDisabled}
            isPending={isPending}
            size={size as ButtonProps["size"]}
            variant={variant as ButtonProps["variant"]}
          >
            {withIcon && <IconBrandAdobe />}
            {iconOnly ? <IconBrandAdobe /> : children}
          </Button>
        </ComponentPreview.View>
      </ComponentPreview>
      <ComponentPreview.Code
        code={`${iconOnly || withIcon ? "import { IconBrandAdobe } from '@tabler/icons-react'\n" : ""}import { Button } from '@/components/ui/button'

<Button${variant !== "default" ? ` variant="${variant}"` : ""}${size !== "default" ? ` size="${size}"` : ""}${isPending ? " isPending" : ""}${isDisabled ? " isDisabled" : ""}>
  ${
    iconOnly
      ? `<IconBrandAdobe />`
      : withIcon
        ? `<IconBrandAdobe />
  ${children}`
        : children
  }
</Button>`}
      />
    </>
  )
}
