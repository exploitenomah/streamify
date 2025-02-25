import {
  ChevronDoubleRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"

export default function UserProfileSummary() {
  return (
    <div className="flex items-center gap-3 mt-auto px-4 md:px-6 text-text-light dark:text-text-dark">
      <UserCircleIcon width={60} height={60} />
      <span className="flex flex-col">
        <span>Atelier James</span>
        <span className="text-[#a3a3a3] dark:text-muted-dark text-sm">Admin</span>
      </span>
      <span className="ml-auto">
        <ChevronDoubleRightIcon width={20} height={20} />
      </span>
    </div>
  )
}
