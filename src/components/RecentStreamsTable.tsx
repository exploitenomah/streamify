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
export default function RecentStreamsTable() {
  return (
    <table className="w-full border-collapse text-left border border-primary/30 dark:border-primary/30">
      <thead className="text-text-light dark:text-text-dark bg-card-light dark:bg-transparent text-text-light dark:text-text-dark">
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
        {data.map((stream, index) => (
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
