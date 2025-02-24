import SideNavbar from "./Navbar"

import navLinks from "../data/navLinks.json"
import { ReactNode } from "react"

export default function DashboardLayout({
  children,
}: {
  children?: ReactNode | ReactNode[]
}) {
  return (
    <>
      <div>
        <div className="fixed md:sticky md:my-[1dvh] md:ml-[1dvh] h-screen md:h-[98dvh] bg-card-light dark:bg-card-dark rounded-md w-[90dvw] md:w-[30dvw] max-w-[360px] md:max-w-[320px] shadow-md">
          <SideNavbar links={navLinks} showLogo />
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
