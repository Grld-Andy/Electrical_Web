import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import About from "./pages/About"
import Contactus from "./pages/Contactus"
import NoPage from "./pages/NoPage"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Leadership from "./pages/Leadership"
import Disclaimer from "./pages/Disclaimer"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import ScrollToTop from "./components/Layout/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="services" element={<Services />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
