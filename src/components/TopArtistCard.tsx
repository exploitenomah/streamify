import { ReactNode, use } from "react"
import { MetricsInterface } from "../types/DashboardDataTypes"
import { numberToText } from "../utils"

export default function TopArtistCard({
  metricsPromise,
}: {
  metricsPromise: Promise<MetricsInterface>
}) {
  const metrics = use(metricsPromise)

  return (
    <article className="h-full flex flex-col gap-3 bg-card-light dark:bg-card-dark shadow-sm rounded-md p-6 text-muted-light dark:text-muted-dark ">
      <h3 className="text-2xl text-text-light dark:text-text-dark">
        Top Artist
      </h3>
      <figure className="flex gap-6 items-center mb-3 justify-between text-right">
        <img
          src={metrics.topArtist.image_url}
          alt={metrics.topArtist.name}
          className="w-15 h-15 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full border border-primary/20 object-cover object-center"
        />
        <figcaption className="flex flex-col">
          <span className="text-text-light dark:text-text-dark">
            {metrics.topArtist.name} | {metrics.topArtist.country}
          </span>
          <span>{metrics.topArtist.genre}</span>
        </figcaption>
      </figure>
      <ul className="flex flex-col gap-2">
        <KeyValueListItem
          keyName={"Streams"}
          value={numberToText(metrics.topArtist.streams)}
        />
        <KeyValueListItem
          keyName={"Monthly listeners"}
          value={numberToText(metrics.topArtist.monthly_listeners)}
        />
        <KeyValueListItem
          keyName={"Top song"}
          value={metrics.topArtist.top_song}
        />
        <KeyValueListItem
          keyName={"Country"}
          value={metrics.topArtist.country}
        />
      </ul>
    </article>
  )
}

function KeyValueListItem({
  keyName,
  value,
}: {
  keyName: ReactNode
  value: ReactNode
}) {
  return (
    <li className="flex justify-between">
      <span>{keyName}</span>
      <span className="text-text-light/80 dark:text-text-dark/70 font-semibold">
        {value}
      </span>
    </li>
  )
}
