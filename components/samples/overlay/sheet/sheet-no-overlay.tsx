import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const SheetWithNoOverlayDemo = () => {
  return (
    <Sheet>
      <Button variant="outline">No Overlay</Button>
      <SheetContent className="bg-transparent! backdrop-blur-none!">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input defaultValue="Pedro Duarte" id="sheet-demo-name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input defaultValue="@peduarte" id="sheet-demo-username" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <Button slot="close" variant="outline">
            Close
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithNoOverlayDemo
