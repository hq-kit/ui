"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { InputGroup } from "@/components/ui/input"
import { ToggleGroup } from "@/components/ui/toggle-group"

export function CatalogToolbar() {
  return (
    <div className="flex items-center gap-3">
      <InputGroup className="flex-1">
        <InputGroup.Addon>
          <IconPlaceholder
            hugeicons="Search01Icon"
            lucide="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            tabler="IconSearch"
          />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Search releases or catalog..." />
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
        <ToggleGroup.Item id="all-tracks">All Tracks</ToggleGroup.Item>
        <ToggleGroup.Item id="releases">Releases</ToggleGroup.Item>
        <ToggleGroup.Item id="top-earners">Top Earners</ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}
