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

export function StatCardSkeleton() {
  return (
    <div className="min-w-max bg-card-light dark:bg-card-dark shadow-sm rounded-md p-6 grow text-left">
      <div className="w-32 h-5 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md mb-2"></div>
      <div className="w-24 h-8 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
    </div>
  )
}
