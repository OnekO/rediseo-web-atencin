import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import logo from '@/assets/images/logo.png'

const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Labor social', href: '#labor-social' },
  { label: 'Novas', href: '#novas' },
  { label: '¿Qué podes facer?', href: '#que-podes-facer' },
  { label: 'Agradecementos', href: '#agradecementos' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio') }} className="flex items-center space-x-2">
              <img src={logo} alt="Xarela" className="h-10 w-auto" />
            </a>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          )}

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-card"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-primary hover:text-primary hover:bg-primary/10 justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
