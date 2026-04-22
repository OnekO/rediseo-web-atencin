import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  GameController, 
  GraduationCap, 
  Handshake, 
  Target, 
  ChartBar,
  Lightbulb,
  UsersThree
} from '@phosphor-icons/react'

const services = [
  {
    id: 'inclusion',
    title: 'Inclusión Social',
    description: 'Acompañamento das persoas potenciando as súas competencias e habilidades persoais, ofertando diversos recursos e estratexias que permitan a toma de decisións.',
    icon: Users,
    color: 'bg-secondary',
    details: [
      'Orientación sociolaboral personalizada',
      'Desenvolvemento de habilidades sociais',
      'Apoio na búsqueda de emprego',
      'Programas de inserción laboral',
      'Titorías individualizadas'
    ]
  },
  {
    id: 'ocio',
    title: 'Ocio e Animación',
    description: 'Empregando como ferramentas o xogo e a animación lúdica, estimulamos a imaxinación, as emocións, os sentidos, a creatividade... buscando ofertar un espazo lúdico e educativo.',
    icon: GameController,
    color: 'bg-accent',
    details: [
      'Actividades de tempo libre',
      'Talleres creativos e artísticos',
      'Excursións e saídas culturais',
      'Xogos educativos e recreativos',
      'Eventos e celebracións comunitarias'
    ]
  },
  {
    id: 'formacion',
    title: 'Formación',
    description: 'Programas formativos adaptados ás necesidades dos participantes, centrados en competencias básicas, habilidades sociais e formación prelaboral.',
    icon: GraduationCap,
    color: 'bg-primary',
    details: [
      'Competencias básicas (lectura, escritura, cálculo)',
      'Alfabetización dixital e tecnolóxica',
      'Formación en habilidades transversais',
      'Preparación para o mercado laboral',
      'Certificación de competencias'
    ]
  },
  {
    id: 'orientacion',
    title: 'Orientación Sociolaboral',
    description: 'Servizo de asesoramento e acompañamento no proceso de inserción laboral, identificando capacidades e deseñando itinerarios personalizados.',
    icon: Handshake,
    color: 'bg-accent',
    details: [
      'Diagnóstico de necesidades formativas',
      'Deseño de itinerarios personalizados',
      'Intermediación laboral',
      'Seguimento e titoría',
      'Bolsa de emprego'
    ]
  }
]

const objectives = [
  {
    icon: Target,
    title: 'Promover a Autonomía',
    description: 'Fomentar a autonomía persoal e a toma de decisións informadas'
  },
  {
    icon: ChartBar,
    title: 'Mellorar Empregabilidade',
    description: 'Aumentar as competencias e habilidades para a inserción laboral'
  },
  {
    icon: Lightbulb,
    title: 'Desenvolver Capacidades',
    description: 'Potenciar as capacidades persoais e sociais dos participantes'
  },
  {
    icon: UsersThree,
    title: 'Favorecer Inclusión',
    description: 'Crear oportunidades de participación plena na sociedade'
  }
]

export function LaborSocialPage() {
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
              Labor Social
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Traballamos de forma integral co colectivo, atendendo as súas necesidades específicas en diferentes áreas
            </p>
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
              Áreas de Intervención
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servizos especializados en diferentes ámbitos do desenvolvemento persoal e social
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-border/50">
                  <CardHeader>
                    <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <service.icon 
                        className={service.color === 'bg-primary' ? 'text-primary-foreground' : 'text-accent-foreground'} 
                        size={32} 
                        weight="duotone" 
                      />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Actividades principais:</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Os Nosos Obxectivos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center">
                          <objective.icon className="text-accent-foreground" size={28} weight="duotone" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {objective.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {objective.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Metodoloxía de Traballo
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Enfoque Personalizado</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cada persoa é única e ten necesidades específicas. Por iso, deseñamos itinerarios personalizados 
                  que se adaptan ás circunstancias, capacidades e obxectivos de cada participante.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O noso equipo multidisciplinar traballa de forma coordinada para ofrecer un acompañamento integral 
                  que facilite o desenvolvemento persoal e social.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Traballo en Rede</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Colaboramos activamente con outras entidades, administracións públicas e axentes sociais para 
                  crear sinerxías e ampliar as oportunidades dos nosos participantes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A coordinación con servizos sociais, empresas e outras organizacións permite ofrecer unha 
                  resposta máis completa e eficaz ás necesidades do colectivo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
