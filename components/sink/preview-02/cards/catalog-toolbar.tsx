"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function CatalogToolbar() {
  return (
    <div className="flex items-center gap-3">
      <InputGroup className="flex-1">
        <InputGroupAddon>
          <IconPlaceholder
            hugeicons="Search01Icon"
            lucide="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            tabler="IconSearch"
          />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search releases or catalog..." />
      </InputGroup>
      <Button>
        <IconPlaceholder
          hugeicons="Add01Icon"
          lucide="PlusIcon"
          phosphor="PlusIcon"
          remixicon="RiAddLine"
          tabler="IconPlus"
        />
        Upload New Release
      </Button>
      <ToggleGroup defaultSelectedKeys={["releases"]} selectionMode="single" variant="outline">
        <ToggleGroupItem id="all-tracks">All Tracks</ToggleGroupItem>
        <ToggleGroupItem id="releases">Releases</ToggleGroupItem>
        <ToggleGroupItem id="top-earners">Top Earners</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
