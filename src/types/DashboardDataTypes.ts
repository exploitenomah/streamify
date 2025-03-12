export interface MetricsInterface {
  totalUsers: number
  activeUsers: number
  totalStreams: number
  revenue: number
  topArtist: {
    id: number
    name: string
    genre: string
    streams: number
    monthly_listeners: number
    top_song: string
    country: string
    image_url: string
  }
}

export interface UserGrowthStat {
  month: string
  totalUsers: number
  activeUsers: number
}

export interface RevenueDistributionStat {
  name: string
  value: number
}

export interface Song {
  song: string
  artist: string
  streams: number
}

export interface Stream {
  song: string
  artist: string
  dateStreamed: string
  streamCount: number
  userId: string
}
