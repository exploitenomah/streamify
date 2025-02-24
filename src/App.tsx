import { Route, Routes } from "react-router"
import DashboardLayout from "./components/DashboardLayout"
import Home from "./Home/page"

function App() {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DashboardLayout>
    </>
  )
}

export default App
