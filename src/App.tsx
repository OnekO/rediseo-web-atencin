import { useKV } from '@github/spark/hooks'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { NewsGrid, type NewsItem } from '@/components/NewsGrid'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [news] = useKV<NewsItem[]>('xarela-news', [])

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <NewsGrid news={news || []} />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App