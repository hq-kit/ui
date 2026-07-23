import { IconPlaceholder } from "@/components/icon-placeholder"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { InputGroup } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { ToggleGroup } from "@/components/ui/toggle-group"

const HOLDINGS = [
  {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    type: "ETF",
    added: "Jan 2021",
    shares: "112",
    value: "$48,230.40"
  },
  {
    ticker: "VIG",
    name: "Vanguard Dividend Appreciation",
    type: "ETF",
    added: "Mar 2022",
    shares: "450",
    value: "$26,033.79"
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    type: "Stock",
    added: "Nov 2020",
    shares: "85",
    value: "$18,488.90"
  },
  {
    ticker: "O",
    name: "Realty Income Corp",
    type: "REIT",
    added: "Jun 2023",
    shares: "320",
    value: "$15,136.59"
  }
]

export function ReleaseCatalog() {
  return (
    <Card>
      <Card.Header>
        <div className="flex items-center justify-between gap-3">
          <InputGroup className="max-w-sm">
            <InputGroup.Addon>
              <IconPlaceholder
                hugeicons="Search01Icon"
                lucide="SearchIcon"
                phosphor="MagnifyingGlassIcon"
                remixicon="RiSearchLine"
                tabler="IconSearch"
              />
            </InputGroup.Addon>
            <InputGroup.Input placeholder="Search holdings or tickers..." />
          </InputGroup>
          <ToggleGroup defaultSelectedKeys={["etfs"]} selectionMode="single" spacing={1} variant="outline">
            <ToggleGroup.Item id="stocks">Stocks</ToggleGroup.Item>
            <ToggleGroup.Item id="etfs">ETFs</ToggleGroup.Item>
            <ToggleGroup.Item id="reits">REITs</ToggleGroup.Item>
          </ToggleGroup>
        </div>
      </Card.Header>
      <Card.Content>
        <Item.Group>
          {HOLDINGS.map((holding) => (
            <Item key={holding.ticker} variant="muted">
              <Item.Media>
                <div className="flex size-12 items-center justify-center rounded-lg border font-semibold text-sm">
                  {holding.ticker}
                </div>
              </Item.Media>
              <Item.Content>
                <Item.Title>{holding.name}</Item.Title>
                <Item.Description className="text-xs uppercase tracking-wider">
                  {holding.shares} Shares · {holding.added}
                </Item.Description>
              </Item.Content>
              <div className="flex shrink-0 items-center gap-6">
                <Badge variant="outline">{holding.type}</Badge>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">Value</span>
                  <span className="font-medium tabular-nums">{holding.value}</span>
                </div>
              </div>
            </Item>
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
