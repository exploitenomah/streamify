import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts"
import { UserGrowthStat } from "../types/DashboardDataTypes"
import { use } from "react"

export default function UserGrowthChart({
  userGrowthPromise,
}: {
  userGrowthPromise: Promise<UserGrowthStat[]>
}) {
  const userGrowthData = use(userGrowthPromise)
  return (
    <article className="flex flex-col gap-1 bg-card-light dark:bg-card-dark shadow-sm rounded-md py-6 text-muted-light dark:text-muted-dark w-full h-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="min-h-[300px] md:min-h-auto"
      >
        <LineChart
          width={300}
          height={250}
          data={userGrowthData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="activeUsers" stroke="#4a90e2" />
        </LineChart>
      </ResponsiveContainer>
      <h4 className="text-center text-gl text-text-light dark:text-text-dark">
        User Growth
      </h4>
    </article>
  )
}
