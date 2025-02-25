import StatCard from "../components/StatCard"

export default function DashboardPage() {
  return (
    <>
      <main className="px-6 md:px-0 md:pr-12 pt-8 md:pt-0 overflow-x-hidden">
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
    </>
  )
}
