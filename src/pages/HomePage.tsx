import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Users, GameController, Heart, HandHeart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 70px)`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
              Xarela Formación-Animación
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ten como finalidade social a formación, promoción e animación dos sectores de poboación máis desfavorecidos e en risco de exclusión social da Comunidade Autónoma de Galicia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/labor-social">
                  Coñecer máis
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contacto">
                  Contactar
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
              Quen Somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Xarela é unha entidade sen ánimo de lucro que traballa desde 1999 pola inclusión social e o benestar dos colectivos máis vulnerables de Galicia. A nosa misión é proporcionar oportunidades de formación, desenvolvemento persoal e participación social a persoas en risco de exclusión.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: 'Inclusión Social',
                description: 'Traballamos polo dereito de todas as persoas a participar plenamente na sociedade',
                color: 'bg-secondary'
              },
              {
                icon: GameController,
                title: 'Ocio e Tempo Libre',
                description: 'Ofrecemos espazos lúdicos e educativos que fomentan a creatividade e o benestar',
                color: 'bg-accent'
              },
              {
                icon: Heart,
                title: 'Acompañamento',
                description: 'Apoio personalizado para o desenvolvemento de habilidades e competencias',
                color: 'bg-primary'
              },
              {
                icon: HandHeart,
                title: 'Compromiso Social',
                description: 'Máis de 20 anos traballando por unha sociedade máis xusta e inclusiva',
                color: 'bg-accent'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                        <item.icon className={item.color === 'bg-primary' ? 'text-primary-foreground' : 'text-accent-foreground'} size={32} weight="duotone" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
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
            transition={{ duration: 0.5 }}
            className="bg-muted/50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              A Nosa Historia
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Desde 1999, Xarela vén desenvolvendo unha intensa labor social na Comunidade Autónoma de Galicia. 
              Nacimos co obxectivo de dar resposta ás necesidades dos colectivos máis desfavorecidos, ofrecendo 
              programas de formación, orientación sociolaboral e actividades de ocio educativo. Ao longo destes 
              anos, coa colaboración das administracións públicas, entidades privadas, socios, voluntarios e o 
              equipo profesional, puidemos acompañar a miles de persoas no seu camiño cara á inclusión social e 
              laboral.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Descubre como podemos axudarche
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explora os nosos servizos e programas deseñados para apoiar a inclusión social e o desenvolvemento persoal
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/labor-social">
                Ver servizos
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
