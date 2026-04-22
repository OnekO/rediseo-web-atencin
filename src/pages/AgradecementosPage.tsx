import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const supporters = [
  {
    id: 'xunta',
    name: 'Xunta de Galicia',
    description: 'Consellería de Política Social e Xuventude',
    details: 'Apoio institucional nos programas de inclusión social e formación para colectivos vulnerables'
  },
  {
    id: 'concello',
    name: 'Concello de Ourense',
    description: 'Servizos Sociais Comunitarios',
    details: 'Colaboración en programas locais de atención social e desenvolvemento comunitario'
  },
  {
    id: 'deputacion',
    name: 'Deputación de Ourense',
    description: 'Área de Benestar Social',
    details: 'Financiamento e apoio en proxectos de promoción da autonomía persoal'
  },
  {
    id: 'socios',
    name: 'Socios e Socias',
    description: 'Persoas que apoian día a día o noso traballo',
    details: 'Máis de 100 socios e socias que sostén economicamente a entidade e participan activamente na súa xestión'
  },
  {
    id: 'voluntarios',
    name: 'Voluntarios e Voluntarias',
    description: 'Persoas que dedican o seu tempo e esforzo',
    details: 'Equipo de voluntariado que fai posible ampliar os nosos servizos e actividades'
  },
  {
    id: 'colaboradores',
    name: 'Entidades Colaboradoras',
    description: 'Organismos e empresas privadas que nos apoian',
    details: 'Rede de entidades sociais, empresas e organizacións que colaboran en proxectos específicos'
  },
  {
    id: 'equipo',
    name: 'Equipo Profesional',
    description: 'Profesionais comprometidos coa misión social',
    details: 'Equipo multidisciplinar de profesionais da educación social, psicoloxía e animación sociocultural'
  },
  {
    id: 'participantes',
    name: 'Persoas Participantes',
    description: 'O corazón da nosa labor',
    details: 'Todas as persoas que confían en Xarela para o seu desenvolvemento persoal e social'
  }
]

export function AgradecementosPage() {
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
              Agradecementos
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Unha labor imposible sen o apoio de moitas persoas e institucións que fan posible o noso traballo desde o ano 1999
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Grazas a Todos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O traballo de Xarela sería imposible sen a colaboración e o apoio de múltiples axentes sociais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {supporters.map((supporter, index) => (
              <motion.div
                key={supporter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {supporter.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {supporter.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {supporter.details}
                    </p>
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                "Grazas a todas as persoas e entidades que fan posible que Xarela siga traballando por un futuro máis xusto e inclusivo."
              </p>
              <p className="text-base text-muted-foreground">
                Cada achega, cada hora de voluntariado, cada palabra de apoio e cada persoa que confía en nós 
                é fundamental para continuar coa nosa misión de construír unha sociedade máis inclusiva.
              </p>
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
              Máis de 20 Anos de Colaboración
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Impacto Colectivo</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desde 1999, a colaboración entre administracións públicas, entidades privadas, persoas voluntarias 
                  e o equipo profesional permitiu atender a miles de persoas en situación de vulnerabilidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Esta rede de apoio é fundamental para ofrecer un servizo de calidade e adaptado ás necesidades 
                  cambiantes da nosa sociedade.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Compromiso Compartido</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O éxito dos nosos programas baséase no compromiso compartido de todas as partes involucradas: 
                  institucións que apostan pola inclusión, persoas que donan o seu tempo e recursos, e profesionais 
                  que traballan con vocación.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Xuntos construímos oportunidades e acompañamos ás persoas no seu camiño cara á autonomía e a 
                  participación plena na sociedade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
