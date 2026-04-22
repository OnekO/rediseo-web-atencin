import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HandCoins, Heart, UsersThree, ChalkboardTeacher } from '@phosphor-icons/react'

const ways = [
  {
    id: 'socio',
    title: 'Facerse socio/socia',
    description: 'Únete á nosa comunidade e apoia directamente o noso traballo.',
    icon: Heart,
  },
  {
    id: 'donativo',
    title: 'Facer un donativo',
    description: 'Cada achega conta para seguir coa nosa labor social.',
    icon: HandCoins,
  },
  {
    id: 'voluntario',
    title: 'Ser voluntario/a',
    description: 'Dedica o teu tempo e talento para axudar aos demais.',
    icon: UsersThree,
  },
  {
    id: 'difusion',
    title: 'Difunde o noso traballo',
    description: 'Axúdanos a chegar a máis persoas compartindo a nosa misión.',
    icon: ChalkboardTeacher,
  },
]

export function WhatYouCanDo() {
  return (
    <section id="que-podes-facer" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Qué podes facer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hai moitas formas de colaborar co noso traballo e facer unha diferenza
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <motion.div
              key={way.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center">
                      <way.icon className="text-accent-foreground" size={32} weight="duotone" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {way.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contacta connosco
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
