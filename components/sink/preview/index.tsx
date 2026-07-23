import { AssignIssue } from "@/components/sink/preview/cards/assign-issue"
import { BarVisualizerCard } from "@/components/sink/preview/cards/bar-visualizer"
import { ActivateAgentDialog } from "./cards/activate-agent-dialog"
import { AnalyticsCard } from "./cards/analytics-card"
import { AnomalyAlert } from "./cards/anomaly-alert"
import { BarChartCard } from "./cards/bar-chart-card"
import { BookAppointment } from "./cards/book-appointment"
import { CodespacesCard } from "./cards/codespaces-card"
import { ContributionsActivity } from "./cards/contributions-activity"
import { Contributors } from "./cards/contributors"
import { EnvironmentVariables } from "./cards/environment-variables"
import { FeedbackForm } from "./cards/feedback-form"
import { FileUpload } from "./cards/file-upload"
import { GithubProfile } from "./cards/github-profile"
import { IconPreviewGrid } from "./cards/icon-preview-grid"
import { InviteTeam } from "./cards/invite-team"
import { Invoice } from "./cards/invoice"
import { LiveWaveformCard } from "./cards/live-waveform"
import { NoTeamMembers } from "./cards/no-team-members"
import { NotFound } from "./cards/not-found"
import { ObservabilityCard } from "./cards/observability-card"
import { PieChartCard } from "./cards/pie-chart-card"
import { ReportBug } from "./cards/report-bug"
import { ShippingAddress } from "./cards/shipping-address"
import { Shortcuts } from "./cards/shortcuts"
import { SkeletonLoading } from "./cards/skeleton-loading"
import { SleepReport } from "./cards/sleep-report"
import { StyleOverview } from "./cards/style-overview"
import { UIElements } from "./cards/ui-elements"
import { UsageCard } from "./cards/usage-card"
import { Visitors } from "./cards/visitors"
import { WeeklyFitnessSummary } from "./cards/weekly-fitness-summary"

export default function Preview01() {
  return (
    <div className="flex w-full min-w-max justify-center">
      <div
        className="grid w-[2400px] grid-cols-7 items-start gap-(--gap) overflow-y-auto px-0 md:w-[3000px] style-lyra:md:w-[2600px] style-mira:md:w-[2600px] dark:bg-background *:[div]:gap-(--gap)"
        data-slot="capture-target"
      >
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <StyleOverview />
          <AssignIssue />
          <BarVisualizerCard />
          <CodespacesCard />
          <Invoice />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <IconPreviewGrid />
          <UIElements />
          <ObservabilityCard />
          <ShippingAddress />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <EnvironmentVariables />
          <BarChartCard />
          <InviteTeam />
          <ActivateAgentDialog />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <SkeletonLoading />
          <PieChartCard />
          <NoTeamMembers />
          <ReportBug />
          <Contributors />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <FeedbackForm />
          <BookAppointment />
          <SleepReport />
          <GithubProfile />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <WeeklyFitnessSummary />
          <FileUpload />
          <AnalyticsCard />
          <UsageCard />
          <Shortcuts />
        </div>
        <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
          <AnomalyAlert />
          <LiveWaveformCard />
          <Visitors />
          <ContributionsActivity />
          <NotFound />
        </div>
      </div>
    </div>
  )
}
