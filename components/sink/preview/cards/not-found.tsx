import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"
import { InputGroup } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"

export function NotFound() {
  return (
    <Card>
      <Card.Content>
        <Empty className="h-72">
          <Empty.Header>
            <Empty.Title>404 - Not Found</Empty.Title>
            <Empty.Description>
              The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need below.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <InputGroup className="w-3/4">
              <InputGroup.Input placeholder="Try searching for pages..." />
              <InputGroup.Addon>
                <IconPlaceholder
                  hugeicons="Search01Icon"
                  lucide="SearchIcon"
                  phosphor="MagnifyingGlassIcon"
                  remixicon="RiSearchLine"
                  tabler="IconSearch"
                />
              </InputGroup.Addon>
              <InputGroup.Addon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroup.Addon>
            </InputGroup>
            <Button variant="link">Go to homepage</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
