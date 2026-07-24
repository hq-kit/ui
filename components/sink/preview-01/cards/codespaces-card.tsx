"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Empty } from "@/components/ui/empty"
import { Description, Field, Label } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Tabs } from "@/components/ui/tabs"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export function CodespacesCard() {
  const [isCreatingCodespace, setIsCreatingCodespace] = useState(false)
  return (
    <Card>
      <Card.Content>
        <Tabs defaultSelectedKey="codespaces">
          <Tabs.List className="w-full">
            <Tabs.Trigger id="codespaces">Codespaces</Tabs.Trigger>
            <Tabs.Trigger id="local">Local</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content id="codespaces">
            <Item className="px-1 pt-2" size="sm">
              <Item.Content>
                <Item.Title>Codespaces</Item.Title>
                <Item.Description>Your workspaces in the cloud</Item.Description>
              </Item.Content>
              <Item.Actions>
                <Tooltip>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="PlusSignIcon"
                      lucide="PlusIcon"
                      phosphor="PlusIcon"
                      remixicon="RiAddLine"
                      tabler="IconPlus"
                    />
                  </Button>
                  <TooltipContent placement="bottom">Create a codespace on main</TooltipContent>
                </Tooltip>
                <DropdownMenu>
                  <Button size="icon-sm" variant="ghost">
                    <IconPlaceholder
                      hugeicons="MoreHorizontalCircle01Icon"
                      lucide="MoreHorizontalIcon"
                      phosphor="DotsThreeOutlineIcon"
                      remixicon="RiMoreLine"
                      tabler="IconDots"
                    />
                  </Button>
                  <DropdownMenuContent className="w-56" placement="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="PlusSignIcon"
                          lucide="PlusIcon"
                          phosphor="PlusIcon"
                          remixicon="RiAddLine"
                          tabler="IconPlus"
                        />
                        New with options...
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="CubeIcon"
                          lucide="ContainerIcon"
                          phosphor="CubeIcon"
                          remixicon="RiBox1Line"
                          tabler="IconBox"
                        />
                        Configure container
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="ZapIcon"
                          lucide="ZapIcon"
                          phosphor="LightningIcon"
                          remixicon="RiFlashlightLine"
                          tabler="IconBolt"
                        />
                        Set up prebuilds
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="ServerStackIcon"
                          lucide="ServerIcon"
                          phosphor="HardDrivesIcon"
                          remixicon="RiHardDriveLine"
                          tabler="IconServer"
                        />
                        Manage codespaces
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="Share03Icon"
                          lucide="ShareIcon"
                          phosphor="ShareIcon"
                          remixicon="RiShareLine"
                          tabler="IconShare2"
                        />
                        Share deep link
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IconPlaceholder
                          hugeicons="AlertCircleIcon"
                          lucide="InfoIcon"
                          phosphor="InfoIcon"
                          remixicon="RiInformationLine"
                          tabler="IconInfoCircle"
                        />
                        What are codespaces?
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Item.Actions>
            </Item>
            <Separator className="-mx-2 my-2 w-auto!" />
            <Empty className="p-4">
              <Empty.Header>
                <Empty.Media variant="icon">
                  <IconPlaceholder
                    hugeicons="ServerStackIcon"
                    lucide="ServerIcon"
                    phosphor="HardDrivesIcon"
                    remixicon="RiHardDriveLine"
                    tabler="IconServer"
                  />
                </Empty.Media>
                <Empty.Title>No codespaces</Empty.Title>
                <Empty.Description>
                  You don&apos;t have any codespaces with this repository checked out
                </Empty.Description>
              </Empty.Header>
              <Empty.Content>
                <Button
                  isDisabled={isCreatingCodespace}
                  onClick={() => {
                    setIsCreatingCodespace(true)
                    setTimeout(() => {
                      setIsCreatingCodespace(false)
                    }, 2000)
                  }}
                  size="sm"
                >
                  {isCreatingCodespace ? <Spinner data-icon="inline-start" /> : ""}
                  Create Codespace
                </Button>
                <a className="text-muted-foreground text-xs underline underline-offset-4" href="#">
                  Learn more about codespaces
                </a>
              </Empty.Content>
            </Empty>
            <Separator className="-mx-2 my-2 w-auto!" />
            <div className="p-1.5 text-muted-foreground text-xs">
              Codespace usage for this repository is paid for by <span className="font-medium">shadcn</span>.
            </div>
          </Tabs.Content>
          <Tabs.Content id="local">
            <Item className="hidden p-0" size="sm">
              <Item.Content>
                <Item.Title className="gap-2">
                  <IconPlaceholder
                    className="size-4"
                    hugeicons="ComputerTerminal01Icon"
                    lucide="TerminalIcon"
                    phosphor="TerminalIcon"
                    remixicon="RiTerminalBoxLine"
                    tabler="IconTerminal"
                  />
                  Clone
                </Item.Title>
              </Item.Content>
              <Item.Actions>
                <Tooltip>
                  <Button size="icon" variant="ghost">
                    <IconPlaceholder
                      hugeicons="AlertCircleIcon"
                      lucide="InfoIcon"
                      phosphor="InfoIcon"
                      remixicon="RiInformationLine"
                      tabler="IconInfoCircle"
                    />
                  </Button>
                  <TooltipContent placement="left">Which remote URL should I use?</TooltipContent>
                </Tooltip>
              </Item.Actions>
            </Item>
            <Tabs defaultSelectedKey="https">
              <Tabs.List className="w-full justify-start border-b *:[button]:flex-0" variant="line">
                <Tabs.Trigger id="https">HTTPS</Tabs.Trigger>
                <Tabs.Trigger id="ssh">SSH</Tabs.Trigger>
                <Tabs.Trigger id="cli">GitHub CLI</Tabs.Trigger>
              </Tabs.List>
              <div className="rounded-md border bg-muted/30 p-2">
                <Tabs.Content id="https">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="https-url">
                      HTTPS URL
                    </Label>
                    <InputGroup>
                      <InputGroup.Addon align="inline-end">
                        <InputGroup.Button size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroup.Button>
                      </InputGroup.Addon>
                      <InputGroup.Input defaultValue="https://github.com/shadcn-ui/ui.git" id="https-url" readOnly />
                    </InputGroup>
                    <Description>Clone using the web URL.</Description>
                  </Field>
                </Tabs.Content>
                <Tabs.Content id="ssh">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="ssh-url">
                      SSH URL
                    </Label>
                    <InputGroup>
                      <InputGroup.Addon align="inline-end">
                        <InputGroup.Button size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroup.Button>
                      </InputGroup.Addon>
                      <InputGroup.Input defaultValue="git@github.com:shadcn-ui/ui.git" id="ssh-url" readOnly />
                    </InputGroup>
                    <Description>Use a password-protected SSH key.</Description>
                  </Field>
                </Tabs.Content>
                <Tabs.Content id="cli">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="cli-command">
                      CLI Command
                    </Label>
                    <InputGroup>
                      <InputGroup.Addon align="inline-end">
                        <InputGroup.Button size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroup.Button>
                      </InputGroup.Addon>
                      <InputGroup.Input defaultValue="gh repo clone shadcn-ui/ui" id="cli-command" readOnly />
                    </InputGroup>
                    <Description>
                      Work fast with our official CLI. <Link>Learn more</Link>
                    </Description>
                  </Field>
                </Tabs.Content>
              </div>
            </Tabs>
            <Separator className="-mx-2 my-2 w-auto!" />
            <div className="flex flex-col">
              <Button className="justify-start gap-1.5" size="sm" variant="ghost">
                <IconPlaceholder
                  data-icon="inline-start"
                  hugeicons="ComputerIcon"
                  lucide="MonitorIcon"
                  phosphor="MonitorIcon"
                  remixicon="RiComputerLine"
                  tabler="IconDeviceDesktop"
                />
                Open with GitHub Desktop
              </Button>
              <Button className="justify-start gap-1.5" size="sm" variant="ghost">
                <IconPlaceholder
                  data-icon="inline-start"
                  hugeicons="DownloadIcon"
                  lucide="DownloadIcon"
                  phosphor="DownloadIcon"
                  remixicon="RiDownloadLine"
                  tabler="IconDownload"
                />
                Download ZIP
              </Button>
            </div>
          </Tabs.Content>
        </Tabs>
      </Card.Content>
    </Card>
  )
}
