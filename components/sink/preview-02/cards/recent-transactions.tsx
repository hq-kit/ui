"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Table } from "@/components/ui/table"

export function RecentTransactions() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Recent Transactions</Card.Title>
        <Card.Description>Your latest account activity.</Card.Description>
        <Card.Action>
          <Button size="sm" variant="outline">
            View All
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Table>
          <Table.Header>
            <Table.Column isRowHeader />
            <Table.Column />
            <Table.Column />
            <Table.Column />
            <Table.Column />
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <IconPlaceholder
                    className="size-4 shrink-0"
                    hugeicons="CoffeeIcon"
                    lucide="CoffeeIcon"
                    phosphor="CoffeeIcon"
                    remixicon="RiCupLine"
                    tabler="IconCoffee"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col">
                  <span className="font-medium">Blue Bottle Coffee</span>
                  <span className="text-muted-foreground text-sm">Food & Drink</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-muted-foreground text-sm">Today, 10:24 AM</Table.Cell>
              <Table.Cell className="text-right">
                <span className="font-semibold text-sm tabular-nums">-$6.50</span>
              </Table.Cell>
              <Table.Cell className="w-8">
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreVerticalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeIcon"
                      remixicon="RiMore2Line"
                      tabler="IconDotsVertical"
                    />
                  </Button>
                  <DropdownMenu.Content placement="start">
                    <DropdownMenu.Item>View details</DropdownMenu.Item>
                    <DropdownMenu.Item>Add note</DropdownMenu.Item>
                    <DropdownMenu.Item>Categorize</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Dispute</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <IconPlaceholder
                    className="size-4 shrink-0"
                    hugeicons="ShoppingCart01Icon"
                    lucide="ShoppingCartIcon"
                    phosphor="ShoppingCartIcon"
                    remixicon="RiShoppingCartLine"
                    tabler="IconShoppingCart"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col">
                  <span className="font-medium">Whole Foods Market</span>
                  <span className="text-muted-foreground text-sm">Groceries</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-muted-foreground text-sm">Yesterday</Table.Cell>
              <Table.Cell className="text-right">
                <span className="font-semibold text-sm tabular-nums">-$142.30</span>
              </Table.Cell>
              <Table.Cell className="w-8">
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreVerticalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeIcon"
                      remixicon="RiMore2Line"
                      tabler="IconDotsVertical"
                    />
                  </Button>
                  <DropdownMenu.Content placement="start">
                    <DropdownMenu.Item>View details</DropdownMenu.Item>
                    <DropdownMenu.Item>Add note</DropdownMenu.Item>
                    <DropdownMenu.Item>Categorize</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Dispute</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <IconPlaceholder
                    className="size-4 shrink-0"
                    hugeicons="Wallet01Icon"
                    lucide="WalletIcon"
                    phosphor="WalletIcon"
                    remixicon="RiWalletLine"
                    tabler="IconWallet"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col">
                  <span className="font-medium">Stripe Payout</span>
                  <span className="text-muted-foreground text-sm">Income</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-muted-foreground text-sm">Oct 12</Table.Cell>
              <Table.Cell className="text-right">
                <span className="font-semibold text-emerald-500 text-sm tabular-nums">+$4,200.00</span>
              </Table.Cell>
              <Table.Cell className="w-8">
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreVerticalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeIcon"
                      remixicon="RiMore2Line"
                      tabler="IconDotsVertical"
                    />
                  </Button>
                  <DropdownMenu.Content placement="start">
                    <DropdownMenu.Item>View details</DropdownMenu.Item>
                    <DropdownMenu.Item>Add note</DropdownMenu.Item>
                    <DropdownMenu.Item>Categorize</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Dispute</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <IconPlaceholder
                    className="size-4 shrink-0"
                    hugeicons="Car01Icon"
                    lucide="CarIcon"
                    phosphor="CarIcon"
                    remixicon="RiCarLine"
                    tabler="IconCar"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col">
                  <span className="font-medium">Uber Technologies</span>
                  <span className="text-muted-foreground text-sm">Transport</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-muted-foreground text-sm">Oct 11</Table.Cell>
              <Table.Cell className="text-right">
                <span className="font-semibold text-sm tabular-nums">-$24.10</span>
              </Table.Cell>
              <Table.Cell className="w-8">
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreVerticalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeIcon"
                      remixicon="RiMore2Line"
                      tabler="IconDotsVertical"
                    />
                  </Button>
                  <DropdownMenu.Content placement="start">
                    <DropdownMenu.Item>View details</DropdownMenu.Item>
                    <DropdownMenu.Item>Add note</DropdownMenu.Item>
                    <DropdownMenu.Item>Categorize</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Dispute</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <IconPlaceholder
                    className="size-4 shrink-0"
                    hugeicons="Tv01Icon"
                    lucide="TvIcon"
                    phosphor="TelevisionIcon"
                    remixicon="RiTvLine"
                    tabler="IconDeviceTv"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col">
                  <span className="font-medium">Netflix Subscription</span>
                  <span className="text-muted-foreground text-sm">Entertainment</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-muted-foreground text-sm">Oct 10</Table.Cell>
              <Table.Cell className="text-right">
                <span className="font-semibold text-sm tabular-nums">-$19.99</span>
              </Table.Cell>
              <Table.Cell className="w-8">
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreVerticalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeIcon"
                      remixicon="RiMore2Line"
                      tabler="IconDotsVertical"
                    />
                  </Button>
                  <DropdownMenu.Content placement="start">
                    <DropdownMenu.Item>View details</DropdownMenu.Item>
                    <DropdownMenu.Item>Add note</DropdownMenu.Item>
                    <DropdownMenu.Item>Categorize</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Dispute</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  )
}
