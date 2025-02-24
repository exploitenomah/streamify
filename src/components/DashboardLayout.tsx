import SideNavbar from "./Navbar"
import * as HeroIcons from "@heroicons/react/24/outline"
import navLinks from "../data/navLinks.json"
import { ReactNode, useCallback, useEffect, useState } from "react"
import AppLogo from "./AppLogo"

const HTMLElement = document.querySelector("html")

export default function DashboardLayout({
  children,
}: {
  children?: ReactNode | ReactNode[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = useCallback(() => {
    if (HTMLElement?.classList.contains("dark")) {
      HTMLElement.classList.remove("dark")
      localStorage.setItem("mode", "light")
      setIsDarkMode(false)
    } else {
      HTMLElement?.classList.add("dark")
      localStorage.setItem("mode", "dark")
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("mode") === "dark")
    localStorage.getItem("mode") === "dark"
      ? HTMLElement?.classList.add("dark")
      : HTMLElement?.classList.remove("dark")
  }, [])
  return (
    <>
      <div className="relative flex">
        <div
          className={`${
            isOpen
              ? "fixed md:sticky translate-x-0"
              : "absolute md:sticky translate-x-[-100%] md:translate-x-0"
          } transition ease-linear duration-300 md:my-[1dvh] md:ml-[1dvh] h-screen md:h-[98dvh] bg-card-light dark:bg-card-dark rounded-md w-[90dvw] md:w-[30dvw] max-w-[360px] md:max-w-[320px] shadow-md`}
        >
          <SideNavbar
            isOpen={isOpen}
            toggleOpen={(state: boolean) => setIsOpen(state)}
            links={navLinks}
            showLogo
          />
        </div>
        <div className="grow">
          <header className="flex items-end px-6 md:py-12 py-4 gap-2">
            <div className="md:hidden">
              <AppLogo />
            </div>
            <div className="ml-auto flex items-end gap-6 mb-2">
              <button onClick={toggleMode}>
                {isDarkMode ? (
                  <HeroIcons.SunIcon
                    width={30}
                    height={30}
                    className="text-text-light dark:text-text-dark"
                  />
                ) : (
                  <HeroIcons.MoonIcon
                    width={30}
                    height={30}
                    className="text-text-light dark:text-text-dark"
                  />
                )}
              </button>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden "
              >
                <span className="sr-only">Open navigation</span>
                <span className="flex flex-col gap-2 text-red-50">
                  <span className="block w-[28px] h-[2px] bg-text-light dark:bg-text-dark" />
                  <span className="block w-[28px] h-[2px] bg-text-light dark:bg-text-dark" />
                  <span className="block w-[28px] h-[2px] bg-text-light dark:bg-text-dark" />
                </span>
              </button>
            </div>
          </header>
          {children}
        </div>
      </div>
    </>
  )
}
