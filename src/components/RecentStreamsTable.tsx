import { use, useMemo, useState } from "react"
import { Stream } from "../types/DashboardDataTypes"

export default function RecentStreamsTable({
  recentStreamsPromise,
}: {
  recentStreamsPromise: Promise<Stream[]>
}) {
  const recentStreams = use(recentStreamsPromise)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState<"dateStreamed" | "streamCount">(
    "dateStreamed"
  )
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredData = useMemo(
    () =>
      recentStreams.filter(
        (stream) =>
          stream.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stream.song.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [recentStreams, searchTerm]
  )

  const sortedData = useMemo(
    () =>
      [...filteredData].sort((a, b) => {
        if (sortOption === "dateStreamed") {
          return sortOrder === "asc"
            ? new Date(a.dateStreamed).getTime() -
                new Date(b.dateStreamed).getTime()
            : new Date(b.dateStreamed).getTime() -
                new Date(a.dateStreamed).getTime()
        } else {
          return sortOrder === "asc"
            ? a.streamCount - b.streamCount
            : b.streamCount - a.streamCount
        }
      }),
    [filteredData, sortOption, sortOrder]
  )

  return (
    <>
      <input
        type="text"
        placeholder="Search by artist or song..."
        className="w-full p-2 mb-4 border border-current rounded-md text-muted-light dark:text-muted-dark"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex justify-between items-center mb-4 text-muted-light dark:text-muted-dark">
        <select
          className="p-2 border rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as typeof sortOption)}
        >
          <option value="dateStreamed">Sort by Date</option>
          <option value="streamCount">Sort by Stream Count</option>
        </select>

        <button
          className="p-2 border rounded-md"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      <table className="w-full border-collapse text-left border border-primary/30 dark:border-primary/30">
        <thead className="text-text-light dark:text-text-dark bg-card-light dark:bg-transparent">
          <tr>
            <th className="p-3 border border-primary/30 dark:border-primary/30">
              Song Name
            </th>
            <th className="p-3 border border-primary/30 dark:border-primary/30">
              Artist
            </th>
            <th className="p-3 border border-primary/30 dark:border-primary/30">
              Date Streamed
            </th>
            <th className="p-3 border border-primary/30 dark:border-primary/30">
              Stream Count
            </th>
            <th className="p-3 border border-primary/30 dark:border-primary/30">
              User ID
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((stream, index) => (
            <tr
              key={index}
              className="text-muted-light dark:text-muted-dark border border-primary/30 dark:border-primary/30 odd:bg-secondary-light/5 even:bg-card-light dark:odd:bg-primary/10 dark:even:bg-transparent"
            >
              <td className="p-3 border border-primary/30 dark:border-primary/30">
                {stream.song}
              </td>
              <td className="p-3 border border-primary/30 dark:border-primary/30">
                {stream.artist}
              </td>
              <td className="p-3 border border-primary/30 dark:border-primary/30">
                {stream.dateStreamed}
              </td>
              <td className="p-3 border border-primary/30 dark:border-primary/30">
                {stream.streamCount}
              </td>
              <td className="p-3 border border-primary/30 dark:border-primary/30">
                {stream.userId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export function RecentStreamsTableSkeleton() {
  return (
    <>
      <div className="w-full p-2 mb-4 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
      <div className="flex justify-between items-center mb-4">
        <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-24 h-8 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <table className="w-full border-collapse text-left border border-primary/30 dark:border-primary/30">
        <thead className="text-text-light dark:text-text-dark bg-card-light dark:bg-transparent">
          <tr>
            {["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"].map(
              (header, index) => (
                <th
                  key={index}
                  className="p-3 border border-primary/30 dark:border-primary/30"
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {Array(5) // Simulate 5 loading rows
            .fill(0)
            .map((_, index) => (
              <tr
                key={index}
                className="text-muted-light dark:text-muted-dark border border-primary/30 dark:border-primary/30 odd:bg-secondary-light/5 even:bg-card-light dark:odd:bg-primary/10 dark:even:bg-transparent animate-pulse"
              >
                {Array(5)
                  .fill(0)
                  .map((_, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="p-3 border border-primary/30 dark:border-primary/30"
                    >
                      <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
