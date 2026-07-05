"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Description, Field, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export function CodespacesCard() {
  const [isCreatingCodespace, setIsCreatingCodespace] = useState(false)
  return (
    <Card>
      <CardContent>
        <Tabs defaultSelectedKey="codespaces">
          <TabsList className="w-full">
            <TabsTrigger id="codespaces">Codespaces</TabsTrigger>
            <TabsTrigger id="local">Local</TabsTrigger>
          </TabsList>
          <TabsContent id="codespaces">
            <Item className="px-1 pt-2" size="sm">
              <ItemContent>
                <ItemTitle>Codespaces</ItemTitle>
                <ItemDescription>Your workspaces in the cloud</ItemDescription>
              </ItemContent>
              <ItemActions>
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
              </ItemActions>
            </Item>
            <Separator className="-mx-2 my-2 w-auto!" />
            <Empty className="p-4">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <IconPlaceholder
                    hugeicons="ServerStackIcon"
                    lucide="ServerIcon"
                    phosphor="HardDrivesIcon"
                    remixicon="RiHardDriveLine"
                    tabler="IconServer"
                  />
                </EmptyMedia>
                <EmptyTitle>No codespaces</EmptyTitle>
                <EmptyDescription>You don&apos;t have any codespaces with this repository checked out</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
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
              </EmptyContent>
            </Empty>
            <Separator className="-mx-2 my-2 w-auto!" />
            <div className="p-1.5 text-muted-foreground text-xs">
              Codespace usage for this repository is paid for by <span className="font-medium">shadcn</span>.
            </div>
          </TabsContent>
          <TabsContent id="local">
            <Item className="hidden p-0" size="sm">
              <ItemContent>
                <ItemTitle className="gap-2">
                  <IconPlaceholder
                    className="size-4"
                    hugeicons="ComputerTerminal01Icon"
                    lucide="TerminalIcon"
                    phosphor="TerminalIcon"
                    remixicon="RiTerminalBoxLine"
                    tabler="IconTerminal"
                  />
                  Clone
                </ItemTitle>
              </ItemContent>
              <ItemActions>
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
              </ItemActions>
            </Item>
            <Tabs defaultSelectedKey="https">
              <TabsList className="w-full justify-start border-b *:[button]:flex-0" variant="line">
                <TabsTrigger id="https">HTTPS</TabsTrigger>
                <TabsTrigger id="ssh">SSH</TabsTrigger>
                <TabsTrigger id="cli">GitHub CLI</TabsTrigger>
              </TabsList>
              <div className="rounded-md border bg-muted/30 p-2">
                <TabsContent id="https">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="https-url">
                      HTTPS URL
                    </Label>
                    <InputGroup>
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroupButton>
                      </InputGroupAddon>
                      <InputGroupInput defaultValue="https://github.com/shadcn-ui/ui.git" id="https-url" readOnly />
                    </InputGroup>
                    <Description>Clone using the web URL.</Description>
                  </Field>
                </TabsContent>
                <TabsContent id="ssh">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="ssh-url">
                      SSH URL
                    </Label>
                    <InputGroup>
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroupButton>
                      </InputGroupAddon>
                      <InputGroupInput defaultValue="git@github.com:shadcn-ui/ui.git" id="ssh-url" readOnly />
                    </InputGroup>
                    <Description>Use a password-protected SSH key.</Description>
                  </Field>
                </TabsContent>
                <TabsContent id="cli">
                  <Field className="gap-2">
                    <Label className="sr-only" htmlFor="cli-command">
                      CLI Command
                    </Label>
                    <InputGroup>
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton size="icon-xs" variant="ghost">
                          <IconPlaceholder
                            hugeicons="Copy01Icon"
                            lucide="CopyIcon"
                            phosphor="CopyIcon"
                            remixicon="RiFileCopyLine"
                            tabler="IconCopy"
                          />
                        </InputGroupButton>
                      </InputGroupAddon>
                      <InputGroupInput defaultValue="gh repo clone shadcn-ui/ui" id="cli-command" readOnly />
                    </InputGroup>
                    <Description>
                      Work fast with our official CLI. <Link>Learn more</Link>
                    </Description>
                  </Field>
                </TabsContent>
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
