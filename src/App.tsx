import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { HomePage } from '@/pages/HomePage'
import { LaborSocialPage } from '@/pages/LaborSocialPage'
import { NovasPage } from '@/pages/NovasPage'
import { QuePodesPage } from '@/pages/QuePodesPage'
import { AgradecementosPage } from '@/pages/AgradecementosPage'
import { ContactoPage } from '@/pages/ContactoPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/labor-social" element={<LaborSocialPage />} />
          <Route path="/novas" element={<NovasPage />} />
          <Route path="/que-podes-facer" element={<QuePodesPage />} />
          <Route path="/agradecementos" element={<AgradecementosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App