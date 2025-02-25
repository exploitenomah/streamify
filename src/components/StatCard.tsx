export default function StatCard({
  title,
  subtext,
}: {
  title: string
  subtext: string
}) {
  return (
    <div className="min-w-max bg-card-light dark:bg-card-dark shadow-sm rounded-md p-6 grow text-left">
      <h2 className="text-muted-light dark:text-muted-dark text-md font-normal">
        {title}
      </h2>
      <p className="text-2xl font-medium text-text-light dark:text-text-dark">
        {subtext}
      </p>
    </div>
  )
}
