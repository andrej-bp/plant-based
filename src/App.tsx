import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CareGuidesPage from './pages/CareGuidesPage'
import FaqPage from './pages/FaqPage'
import LightGuidePage from './pages/LightGuidePage'
import NewArrivalsPage from './pages/NewArrivalsPage'
import RepottingGuidePage from './pages/RepottingGuidePage'
import ShopPage from './pages/ShopPage'
import WateringGuidePage from './pages/WateringGuidePage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/care-guides" element={<CareGuidesPage />} />
        <Route path="/care-guides/watering" element={<WateringGuidePage />} />
        <Route path="/care-guides/light" element={<LightGuidePage />} />
        <Route path="/care-guides/repotting" element={<RepottingGuidePage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
