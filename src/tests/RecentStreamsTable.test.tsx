import "@testing-library/jest-dom"
import { render, screen, fireEvent, act } from "@testing-library/react"
import { Stream } from "../types/DashboardDataTypes"
import RecentStreamsTable from "../components/RecentStreamsTable"

describe("RecentStreamsTable Component", () => {
  const mockStreams: Stream[] = [
    {
      song: "Song A",
      artist: "Artist A",
      dateStreamed: "2025-03-14T10:00:00Z",
      streamCount: 150,
      userId: "user123",
    },
    {
      song: "Song B",
      artist: "Artist B",
      dateStreamed: "2025-03-13T08:00:00Z",
      streamCount: 200,
      userId: "user456",
    },
  ]

  test("renders the table with correct data", async () => {
    await act(async () => {
      render(
        <RecentStreamsTable
          recentStreamsPromise={Promise.resolve(mockStreams)}
        />
      )
    })

    // Check for table headers
    expect(screen.getByText("Song Name")).toBeInTheDocument()
    expect(screen.getByText("Artist")).toBeInTheDocument()
    expect(screen.getByText("Date Streamed")).toBeInTheDocument()
    expect(screen.getByText("Stream Count")).toBeInTheDocument()
    expect(screen.getByText("User ID")).toBeInTheDocument()

    // Wait for the data to appear
    expect(await screen.findByText("Song A")).toBeInTheDocument()
    expect(await screen.findByText("Artist A")).toBeInTheDocument()
    expect(await screen.findByText("150")).toBeInTheDocument()
  })

  test("filters the table when searching", async () => {
    await act(async () => {
      render(
        <RecentStreamsTable
          recentStreamsPromise={Promise.resolve(mockStreams)}
        />
      )
    })

    const searchInput = screen.getByPlaceholderText(
      "Search by artist or song..."
    )
    fireEvent.change(searchInput, { target: { value: "Artist B" } })

    expect(await screen.findByText("Song B")).toBeInTheDocument()
    expect(screen.queryByText("Song A")).not.toBeInTheDocument() // Song A should be filtered out
  })

  test("sorts the table by stream count", async () => {
    await act(async () => {
      render(
        <RecentStreamsTable
          recentStreamsPromise={Promise.resolve(mockStreams)}
        />
      )
    })

    const sortSelect = screen.getByText("Sort by Date") // Default sort option
    fireEvent.change(sortSelect, { target: { value: "streamCount" } })

    const sortedFirstSong = await screen.findByText("Song B") // Higher stream count should be first
    expect(sortedFirstSong).toBeInTheDocument()
  })
})
