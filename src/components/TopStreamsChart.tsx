
import { use } from "react"
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Song } from "../types/DashboardDataTypes"


export default function TopStreamsChart({
  topStreamedSongsPromise,
}: {
  topStreamedSongsPromise: Promise<Song[]>
}) {
  const topStreamedSongsData = use(topStreamedSongsPromise)
  return (
    <div className="flex flex-col gap-1 bg-card-light dark:bg-card-dark shadow-sm rounded-md py-6 text-muted-light dark:text-muted-dark w-full h-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="min-h-[300px] md:min-h-unset"
      >
        <BarChart
          width={500}
          height={300}
          data={topStreamedSongsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="song" />
          <YAxis />
          <Tooltip />
          <Legend name="song"/>
          <Bar
            dataKey="streams"
            fill="#8884d8"
            activeBar={<Rectangle fill="#4a90e2" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <h3 className="text-center text-gl text-text-light dark:text-text-dark">
        Recent Streams
      </h3>
    </div>
  )
}
