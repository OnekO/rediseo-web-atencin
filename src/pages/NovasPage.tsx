import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarBlank } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import type { NewsItem } from '@/components/NewsGrid'

export function NovasPage() {
  const [news] = useKV<NewsItem[]>('xarela-news', [])
  const newsList = news || []

  return (
    <div className="min-h-screen">
      <section className="relative bg-primary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 70px)`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
              Novas e Actividades
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Mantente informado das nosas iniciativas, programas e eventos recentes
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {newsList.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="bg-muted/50 rounded-2xl p-12 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Próximamente
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Non hai novas dispoñibles neste momento. Volve pronto para coñecer as nosas últimas actividades e iniciativas.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsList.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23E8E9ED' width='400' height='250'/%3E%3Ctext fill='%233D4B6B' font-family='Work Sans, sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EXarela%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CalendarBlank size={16} />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mantente Conectado
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Síguenos nas nosas redes sociais para non perderte ningunha das nosas actividades, eventos e iniciativas.
            </p>
            <p className="text-sm text-muted-foreground">
              Compartimos actualizacións regulares sobre os nosos programas, historias de éxito dos participantes e oportunidades de colaboración.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
