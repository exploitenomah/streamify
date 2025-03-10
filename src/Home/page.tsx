import RecentStreamsTable from "../components/RecentStreamsTable"
import StatCard from "../components/StatCard"
import TopArtistCard from "../components/TopArtistCard"

export default function DashboardPage() {
  return (
    <div className="px-6 md:px-0 md:pr-12 pt-8 md:pt-0">
      <main className="overflow-x-hidden">
        <h1 className="text-2xl md:text-4xl text-text-light dark:text-text-dark mb-8">
          Dashboard
        </h1>
        <div className="overflow-x-auto p-1">
          <div className="flex md:flex-wrap gap-3">
            <StatCard title={"Total Users"} subtext={"120K"} />
            <StatCard title={"Active Users"} subtext={"85K"} />
            <StatCard title={"Total Streams"} subtext={"2.5M"} />
            <StatCard title={"Revenue"} subtext={"97.8K"} />
          </div>
        </div>
      </main>
      <section className="grid grid-cols-3 grid-rows-2 gap-3 mt-12">
        <div className="col-start-1 col-span-1">
          <TopArtistCard />
        </div>
      </section>
      <section className="mt-12 p-1 w-full overflow-x-auto">
        <RecentStreamsTable />
      </section>
    </div>
  )
}
