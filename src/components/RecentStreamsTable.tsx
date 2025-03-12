import { use, useMemo } from "react"
import { Song, Stream } from "../types/DashboardDataTypes"

const data = [
  {
    song: "Echoes of You",
    artist: "Luna Rae",
    dateStreamed: "2025-02-21",
    streamCount: 1,
    userId: "USR1023",
  },
  {
    song: "Neon Dreams",
    artist: "Atlas Sky",
    dateStreamed: "2025-02-21",
    streamCount: 2,
    userId: "USR1056",
  },
  {
    song: "Midnight Vibes",
    artist: "Zane Storm",
    dateStreamed: "2025-02-20",
    streamCount: 1,
    userId: "USR1098",
  },
  {
    song: "Golden Hour",
    artist: "Sierra Blaze",
    dateStreamed: "2025-02-20",
    streamCount: 3,
    userId: "USR1015",
  },
  {
    song: "Into the Horizon",
    artist: "Echo Waves",
    dateStreamed: "2025-02-19",
    streamCount: 1,
    userId: "USR1044",
  },
]
export default function RecentStreamsTable({
  recentStreamsPromise,
  sortOption,
  sortOrder,
  searchTerm,
}: {
  recentStreamsPromise: Promise<{
    data: Stream[]
    first: number
    items: number
    last: number
    next: number
    pages: number
  }>
  searchTerm: string
  sortOrder: "asc" | "desc"
  sortOption: "dateStreamed" | "streamCount"
}) {
  const recentStreams = use(recentStreamsPromise)

  // Filtering logic
  const filteredData = useMemo(
    () =>
      recentStreams.data.filter(
        (stream) =>
          stream.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stream.song.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [recentStreams.data, searchTerm]
  )

  // Sorting logic
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
  )
}
