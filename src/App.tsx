import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CareGuidesPage from './pages/CareGuidesPage'
import FaqPage from './pages/FaqPage'
import NewArrivalsPage from './pages/NewArrivalsPage'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/care-guides" element={<CareGuidesPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
