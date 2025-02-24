import { NavLink } from "../types/UIDataTypes"
import { Link, useLocation } from "react-router"
import * as HeroIcons from "@heroicons/react/24/outline"

export default function SideNavbar({
  links,
}: {
  links: NavLink[]
  showLogo: boolean
}) {
  const location = useLocation()

  return (
    <>
      <nav className="py-8">
        <div className="ml-4 flex items-end justify-between">
          <Link to="/">
            <span className="sr-only">Streamify</span>
            <img
              src="/logo.svg"
              width="180"
              height="72"
              className="object-contain"
            />
          </Link>
          <button className="mr-2 text-text-light dark:text-text-dark hover:text-primary cursor-pointer mb-[4px] opacity-80">
            <HeroIcons.ChevronDoubleRightIcon width={30} height={30} />
          </button>
        </div>
        <ul className="mt-16 flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLinkComponent
                link={link}
                isActive={location.pathname === link.href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export function NavLinkComponent({
  link,
  isActive,
}: {
  link: NavLink
  isActive: boolean
}) {
  const Icon = HeroIcons[link.icon as keyof typeof HeroIcons]
  return (
    <>
      <Link
        to={link.href}
        className={`${
          isActive
            ? "text-primary bg-muted-light dark:bg-muted-dark"
            : "text-text-light dark:text-text-dark"
        } px-4 py-2 md:px-6 flex gap-3 items-center hover:text-primary hover:bg-muted-light dark:hover:bg-muted-dark cursor-pointer text-base`}
      >
        <span>
          <Icon width={30} height={30} />
        </span>
        <span>{link.name}</span>
      </Link>
    </>
  )
}
