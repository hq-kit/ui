"use client"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input"
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup } from "@/components/ui/item"
import { Select } from "@/components/ui/native-select"
import { Progress } from "@/components/ui/progress"

export function SavingsTargets() {
  return (
    <div className="grid grid-cols-2 gap-(--gap)">
      <Card>
        <CardHeader>
          <CardTitle>Savings Targets</CardTitle>
          <CardDescription>Active milestones for 2024</CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              New Goal
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <ItemGroup className="gap-3">
            <Item className="flex-col items-stretch" variant="muted">
              <ItemContent className="gap-3">
                <ItemDescription className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  Retirement
                </ItemDescription>
                <span className="font-semibold text-3xl tabular-nums">$420,000</span>
                <Progress value={65} />
              </ItemContent>
              <ItemFooter>
                <span className="text-muted-foreground text-sm">65% achieved</span>
                <span className="font-medium text-sm tabular-nums">$273,000</span>
              </ItemFooter>
            </Item>
            <Item className="flex-col items-stretch" variant="muted">
              <ItemContent className="gap-3">
                <ItemDescription className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  Real Estate
                </ItemDescription>
                <span className="font-semibold text-3xl tabular-nums">$85,000</span>
                <Progress value={32} />
              </ItemContent>
              <ItemFooter>
                <span className="text-muted-foreground text-sm">32% achieved</span>
                <span className="font-medium text-sm tabular-nums">$27,200</span>
              </ItemFooter>
            </Item>
          </ItemGroup>
        </CardContent>
        <CardFooter>
          <CardDescription className="text-center">You have not met your targets for this year.</CardDescription>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Buy Investment</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <FieldGroup className="flex-1">
            <Field>
              <Label htmlFor="invest-amount">Amount to Invest</Label>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput defaultValue="1,000.00" id="invest-amount" />
              </InputGroup>
            </Field>
            <Field>
              <Label htmlFor="invest-type">Order Type</Label>
              <Select defaultValue="market" id="invest-type">
                <Select.Item value="market">Market Order</Select.Item>
                <Select.Item value="limit">Limit Order</Select.Item>
                <Select.Item value="stop">Stop Order</Select.Item>
              </Select>
              <Description>Market orders execute at the current price.</Description>
            </Field>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Estimated Shares</span>
                <span className="font-semibold text-sm tabular-nums">1.95</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Buying Power</span>
                <span className="font-semibold text-sm tabular-nums">$12,450.00</span>
              </div>
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button className="w-full">Review Order</Button>
          <CardDescription className="text-center">
            Trades are typically executed within minutes during market hours.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
