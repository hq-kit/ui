import { IconPlaceholder } from "@/components/icon-placeholder"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/field"
import { Item } from "@/components/ui/item"

export function CoverArt() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <Label
          className="text-center font-normal text-muted-foreground text-xs uppercase tracking-wider"
          htmlFor="cover-art"
        >
          Cover Art
        </Label>
        <Item className="aspect-square" variant="outline">
          <label className="flex size-full cursor-pointer items-center justify-center" htmlFor="cover-art">
            <IconPlaceholder
              className="size-10 text-muted-foreground/50"
              hugeicons="Image01Icon"
              lucide="ImageIcon"
              phosphor="ImageIcon"
              remixicon="RiImageLine"
              tabler="IconPhoto"
            />
          </label>
        </Item>
        <input accept="image/jpeg,image/png" className="sr-only" id="cover-art" type="file" />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <label className={buttonVariants({ variant: "secondary", className: "w-full" })} htmlFor="cover-art">
          Upload Artwork
        </label>
        <CardDescription className="text-center text-xs">
          Minimum 3000 × 3000px
          <br />
          JPEG or PNG only
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
