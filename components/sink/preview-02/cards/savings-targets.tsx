"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { Select } from "@/components/ui/native-select"
import { Progress } from "@/components/ui/progress"
import { TextField } from "@/components/ui/text-field"

export function SavingsTargets() {
  return (
    <div className="grid grid-cols-2 gap-(--gap)">
      <Card>
        <Card.Header>
          <Card.Title>Savings Targets</Card.Title>
          <Card.Description>Active milestones for 2024</Card.Description>
          <Card.Action>
            <Button size="sm" variant="outline">
              New Goal
            </Button>
          </Card.Action>
        </Card.Header>
        <Card.Content>
          <Item.Group className="gap-3">
            <Item className="flex-col items-stretch" variant="muted">
              <Item.Content className="gap-3">
                <Item.Description className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  Retirement
                </Item.Description>
                <span className="font-semibold text-3xl tabular-nums">$420,000</span>
                <Progress value={65} />
              </Item.Content>
              <Item.Footer>
                <span className="text-muted-foreground text-sm">65% achieved</span>
                <span className="font-medium text-sm tabular-nums">$273,000</span>
              </Item.Footer>
            </Item>
            <Item className="flex-col items-stretch" variant="muted">
              <Item.Content className="gap-3">
                <Item.Description className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  Real Estate
                </Item.Description>
                <span className="font-semibold text-3xl tabular-nums">$85,000</span>
                <Progress value={32} />
              </Item.Content>
              <Item.Footer>
                <span className="text-muted-foreground text-sm">32% achieved</span>
                <span className="font-medium text-sm tabular-nums">$27,200</span>
              </Item.Footer>
            </Item>
          </Item.Group>
        </Card.Content>
        <Card.Footer>
          <Card.Description className="text-center">You have not met your targets for this year.</Card.Description>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Buy Investment</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-1 flex-col gap-3">
          <FieldGroup className="flex-1">
            <TextField defaultValue="1,000.00">
              <Label>Amount to Invest</Label>
              <InputGroup>
                <InputGroup.Addon>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Addon>
                <InputGroup.Input />
              </InputGroup>
            </TextField>
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
        </Card.Content>
        <Card.Footer className="flex-col gap-3">
          <Button className="w-full">Review Order</Button>
          <Card.Description className="text-center">
            Trades are typically executed within minutes during market hours.
          </Card.Description>
        </Card.Footer>
      </Card>
    </div>
  )
}
