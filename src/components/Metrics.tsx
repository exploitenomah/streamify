import { MetricsInterface } from "../types/DashboardDataTypes"
import { numberToText } from "../utils"
import StatCard from "./StatCard"
import { use } from "react"



export default function Metrics({
  metricsPromise,
}: {
  metricsPromise: Promise<MetricsInterface>
}) {
  const metrics = use(metricsPromise)

  return (
    <div className="flex md:flex-wrap gap-3">
      <StatCard
        title={"Total Users"}
        subtext={numberToText(metrics.totalUsers)}
      />
      <StatCard
        title={"Active Users"}
        subtext={numberToText(metrics.activeUsers)}
      />
      <StatCard
        title={"Total Streams"}
        subtext={numberToText(metrics.totalStreams)}
      />
      <StatCard title={"Revenue"} subtext={numberToText(metrics.revenue)} />
    </div>
  )
}
