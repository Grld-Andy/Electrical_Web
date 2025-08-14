import { Home } from "lucide-react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import About from "./pages/About"
import Contactus from "./pages/Contactus"
import NoPage from "./pages/NoPage"
import Services from "./pages/Services"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default App