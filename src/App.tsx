import { useKV } from '@github/spark/hooks'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { NewsGrid, type NewsItem } from '@/components/NewsGrid'
import { WhatYouCanDo } from '@/components/WhatYouCanDo'
import { Acknowledgments } from '@/components/Acknowledgments'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [news] = useKV<NewsItem[]>('xarela-news', [])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <NewsGrid news={news || []} />
      <WhatYouCanDo />
      <Acknowledgments />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App