import { ReactNode } from "react"

export default function TopArtistCard() {
  return (
    <article className="flex flex-col gap-3 bg-card-light dark:bg-card-dark shadow-sm rounded-md p-6 text-muted-light dark:text-muted-dark ">
      <h3 className="text-2xl text-text-light dark:text-text-dark">
        Top Artist
      </h3>
      <figure className="flex gap-6 items-center mb-3">
        <img src="/favicon.ico" alt={""} className="w-15 rounded-full border border-primary/20" />
        <figcaption className="flex flex-col">
          <span className="text-text-light dark:text-text-dark">
            Drake | Canada
          </span>
          <span>Hip-Hop / R&B</span>
        </figcaption>
      </figure>
      <ul>
        <KeyValueListItem keyName={"Streams"} value={"800K"} />
        <KeyValueListItem keyName={"Monthly listeners"} value={"60k"} />
        <KeyValueListItem keyName={"Top song"} value={"God's plan"} />
        <KeyValueListItem keyName={"Country"} value={"Canada"} />
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
