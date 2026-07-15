import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
import { ScrollProgressLine } from './components/PageLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Lime scroll-progress bar — fixed left edge, visible on every page */}
      <ScrollProgressLine />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about"       element={<About />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
