import { Link } from "react-router";

export default function AppLogo() {
  return (
    <Link to="/">
      <span className="sr-only">Streamify</span>
      <img src="/logo.svg" width="180" height="72" className="object-contain" />
    </Link>
  )
}
