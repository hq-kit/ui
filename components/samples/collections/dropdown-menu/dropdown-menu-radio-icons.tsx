"use client"

import type { Selection } from "react-aria-components/Menu"
import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = useState<Selection>(new Set("card"))

  return (
    <DropdownMenu>
      <Button variant="outline">Payment Method</Button>
      <DropdownMenuContent className="min-w-56">
        <DropdownMenuGroup onSelectionChange={setPaymentMethod} selectedKeys={paymentMethod} selectionMode="single">
          <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
          <DropdownMenuItem id="card">
            <CreditCardIcon />
            Credit Card
          </DropdownMenuItem>
          <DropdownMenuItem id="paypal">
            <WalletIcon />
            PayPal
          </DropdownMenuItem>
          <DropdownMenuItem id="bank">
            <Building2Icon />
            Bank Transfer
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
