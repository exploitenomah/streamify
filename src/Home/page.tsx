import { Suspense, useState } from "react"
import Metrics from "../components/Metrics"
import TopStreamsChart from "../components/TopStreamsChart"
import RecentStreamsTable from "../components/RecentStreamsTable"
import RevenueChart from "../components/RevenueChart"
import TopArtistCard from "../components/TopArtistCard"
import UserGrowthChart from "../components/UserGrowthChart"
import { fetchData } from "../utils"
import RecentStreams from "../components/RecentStreams"

export default function DashboardPage() {
  const metrics = fetchData("http://localhost:5000/metrics")
  const userGrowth = fetchData("http://localhost:5000/userGrowth")
  const revenueDistribution = fetchData(
    "http://localhost:5000/revenueDistribution"
  )
  const topStreamedSongs = fetchData("http://localhost:5000/topStreamedSongs")

  return (
    <div className="px-6 md:px-0 md:pr-12 pt-8 md:pt-0 pb-24">
      <main className="overflow-x-hidden">
        <h1 className="text-2xl md:text-4xl text-text-light dark:text-text-dark mb-8">
          Dashboard
        </h1>
        <div className="overflow-x-auto p-1">
          <Suspense fallback={<>Hello</>}>
            <Metrics metricsPromise={metrics} />
          </Suspense>
        </div>
      </main>
      <section className="flex flex-col lg:grid md:grid-cols-5 md:grid-rows-2 gap-3 md:gap-6 mt-18 items-stretch">
        <div className="md:col-start-1 md:col-span-2">
          <Suspense fallback={<>Hello</>}>
            <TopArtistCard metricsPromise={metrics} />
          </Suspense>
        </div>
        <div className="md:col-start-3 md:col-span-3 md:row-start-1 md:row-span-1">
          <Suspense fallback={<>Hello</>}>
            <UserGrowthChart userGrowthPromise={userGrowth} />
          </Suspense>
        </div>
        <div className="md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1">
          <Suspense fallback={<>Hello</>}>
            <RevenueChart revenueDistributionPromise={revenueDistribution} />
          </Suspense>
        </div>
        <div className="md:col-start-3 md:col-span-3 md:row-start-2 md:row-span-1">
          <Suspense fallback={<>Hello</>}>
            <TopStreamsChart topStreamedSongsPromise={topStreamedSongs} />
          </Suspense>
        </div>
      </section>
      <section className="mt-18 p-1 w-full overflow-x-auto">
        <RecentStreams />
      </section>
    </div>
  )
}
