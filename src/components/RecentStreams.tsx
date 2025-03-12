import { Suspense, useMemo, useState } from "react"
import RecentStreamsTable from "./RecentStreamsTable"
import { fetchData } from "../utils"

export default function RecentStreams() {
  const [page, setPage] = useState(1)

  const recentStreams = useMemo(
    () =>
      fetchData(
        `http://localhost:5000/recentStreams?_per_page=10&_page=${page}`
      ),
    [page]
  )

  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState<"dateStreamed" | "streamCount">(
    "dateStreamed"
  )
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  return (
    <Suspense fallback={<>Hello</>}>
      <input
        type="text"
        placeholder="Search by artist or song..."
        className="w-full p-2 mb-4 border border-current rounded-md text-muted-light dark:text-muted-dark"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sorting Options */}
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
      <RecentStreamsTable
        recentStreamsPromise={recentStreams}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        sortOption={sortOption}
      />
    </Suspense>
  )
}
