"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/ui/sidebar"

export function SidebarNav() {
  return (
    <div className="grid grid-cols-2 items-start gap-6">
      <Card className="overflow-hidden py-0">
        <Sidebar.Provider className="min-h-0">
          <Sidebar className="w-full bg-transparent" collapsible="none">
            <Sidebar.Content className="gap-0">
              <Sidebar.Group className="pb-1">
                <Sidebar.GroupLabel>Overview</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton isActive>
                        <IconPlaceholder
                          hugeicons="DashboardSquare01Icon"
                          lucide="LayoutDashboardIcon"
                          phosphor="SquaresFourIcon"
                          remixicon="RiDashboardLine"
                          tabler="IconLayoutDashboard"
                        />
                        Dashboard
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="ArrowDataTransferHorizontalIcon"
                          lucide="ArrowLeftRightIcon"
                          phosphor="ArrowsLeftRightIcon"
                          remixicon="RiArrowLeftRightLine"
                          tabler="IconArrowsLeftRight"
                        />
                        Transactions
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="AnalyticsUpIcon"
                          lucide="TrendingUpIcon"
                          phosphor="TrendUpIcon"
                          remixicon="RiLineChartLine"
                          tabler="IconTrendingUp"
                        />
                        Investments
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="BankIcon"
                          lucide="Building2Icon"
                          phosphor="BankIcon"
                          remixicon="RiBankLine"
                          tabler="IconBuildingBank"
                        />
                        Accounts
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="PieChartIcon"
                          lucide="PieChartIcon"
                          phosphor="ChartPieIcon"
                          remixicon="RiPieChartLine"
                          tabler="IconChartPie"
                        />
                        Spending
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Sidebar.Group>
              <Sidebar.Separator className="w-auto!" />
              <Sidebar.Group className="pt-1">
                <Sidebar.GroupLabel>Planning</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="Target02Icon"
                          lucide="TargetIcon"
                          phosphor="TargetIcon"
                          remixicon="RiFocus3Line"
                          tabler="IconTarget"
                        />
                        Goals
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="Wallet01Icon"
                          lucide="WalletIcon"
                          phosphor="WalletIcon"
                          remixicon="RiWalletLine"
                          tabler="IconWallet"
                        />
                        Budget
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="ChartBarLineIcon"
                          lucide="FileBarChartIcon"
                          phosphor="ChartBarIcon"
                          remixicon="RiBarChartLine"
                          tabler="IconReportAnalytics"
                        />
                        Reports
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="File02Icon"
                          lucide="FileTextIcon"
                          phosphor="FileTextIcon"
                          remixicon="RiFileTextLine"
                          tabler="IconFileText"
                        />
                        Documents
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Sidebar.Group>
            </Sidebar.Content>
          </Sidebar>
        </Sidebar.Provider>
      </Card>
      <Card className="overflow-hidden py-0">
        <Sidebar.Provider className="min-h-0">
          <Sidebar className="w-full bg-transparent" collapsible="none">
            <Sidebar.Content className="gap-0">
              <Sidebar.Group className="pb-1">
                <Sidebar.GroupLabel>Account</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="UserIcon"
                          lucide="UserIcon"
                          phosphor="UserIcon"
                          remixicon="RiUserLine"
                          tabler="IconUser"
                        />
                        Profile
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton isActive>
                        <IconPlaceholder
                          hugeicons="CreditCardIcon"
                          lucide="CreditCardIcon"
                          phosphor="CreditCardIcon"
                          remixicon="RiBankCardLine"
                          tabler="IconCreditCard"
                        />
                        Billing
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="Notification03Icon"
                          lucide="BellIcon"
                          phosphor="BellIcon"
                          remixicon="RiBellLine"
                          tabler="IconBell"
                        />
                        Notifications
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="ShieldIcon"
                          lucide="ShieldIcon"
                          phosphor="ShieldIcon"
                          remixicon="RiShieldLine"
                          tabler="IconShield"
                        />
                        Security
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="PaintBoardIcon"
                          lucide="PaintbrushIcon"
                          phosphor="PaletteIcon"
                          remixicon="RiPaletteLine"
                          tabler="IconPalette"
                        />
                        Appearance
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Sidebar.Group>
              <Sidebar.Separator className="w-auto!" />
              <Sidebar.Group className="pt-1">
                <Sidebar.GroupLabel>Support</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="HelpCircleIcon"
                          lucide="CircleHelpIcon"
                          phosphor="QuestionIcon"
                          remixicon="RiQuestionLine"
                          tabler="IconHelp"
                        />
                        Help Center
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="Message01Icon"
                          lucide="MessageSquareIcon"
                          phosphor="ChatIcon"
                          remixicon="RiChat1Line"
                          tabler="IconMessage"
                        />
                        Contact Us
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="BookOpen02Icon"
                          lucide="BookOpenIcon"
                          phosphor="BookOpenIcon"
                          remixicon="RiBookOpenLine"
                          tabler="IconBook"
                        />
                        Documentation
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton>
                        <IconPlaceholder
                          hugeicons="ActivityIcon"
                          lucide="ActivityIcon"
                          phosphor="ActivityIcon"
                          remixicon="RiPulseLine"
                          tabler="IconActivity"
                        />
                        Status
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Sidebar.Group>
            </Sidebar.Content>
          </Sidebar>
        </Sidebar.Provider>
      </Card>
    </div>
  )
}
