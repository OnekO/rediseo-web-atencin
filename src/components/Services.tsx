import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, GameController } from '@phosphor-icons/react'

const services = [
  {
    id: 'ocio',
    title: 'Ocio',
    description: 'Empregando como ferramentas o xogo e a animación lúdica, estimulamos a imaxinación, as emocións, os sentidos, a creatividades... buscando ofertar un espazo lúdico e educativo.',
    icon: GameController,
    color: 'bg-accent'
  },
  {
    id: 'inclusion',
    title: 'Inclusión social',
    description: 'Acompañamento das persoas potenciando as súas competencias e habilidades persoais, ofertando diversos recursos e estratexias que permitan a toma de decisións.',
    icon: Users,
    color: 'bg-secondary'
  }
]

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Áreas de Servizo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traballamos en dúas áreas principais enfocadas ao apoio integral das persoas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <service.icon className="text-primary-foreground" size={32} weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
