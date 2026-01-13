'use client'

import { IconColorSwatch } from '@tabler/icons-react'
import ThemeControlPanel from '@/components/theme-customizer/theme-control-panel'
import { Button } from '@/components/ui/button'
import { Sheet, SheetBody, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export function ThemeCustomizer() {
  return (
    <Sheet>
      <Button className='fixed top-16 right-0 z-50 mt-1 rounded-r-none' name='Theme Customizer Toggle' size='icon'>
        <IconColorSwatch />
      </Button>
      <SheetContent overlayClassName='bg-transparent'>
        <SheetHeader>
          <SheetTitle>Theme Customizer</SheetTitle>
          <SheetDescription>Pick a style and color for your components.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <ThemeControlPanel />
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}
