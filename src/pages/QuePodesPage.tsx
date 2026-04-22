import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HandCoins, Heart, UsersThree, ChalkboardTeacher, Coins, Bank, Users } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const ways = [
  {
    id: 'socio',
    title: 'Facerse Socio/Socia',
    description: 'Únete á nosa comunidade e apoia directamente o noso traballo. Os socios e socias son fundamentais para manter a nosa labor.',
    icon: Heart,
    color: 'bg-accent',
    details: [
      'Recibe información periódica das nosas actividades',
      'Participa nas asembleas e na toma de decisións',
      'Contribúe de forma regular ao sostemento da entidade',
      'Forma parte dunha comunidade comprometida',
      'Accede a eventos exclusivos para socios'
    ]
  },
  {
    id: 'donativo',
    title: 'Facer un Donativo',
    description: 'Cada achega conta para seguir coa nosa labor social. Podes facer doazóns puntuais ou regulares segundo as túas posibilidades.',
    icon: HandCoins,
    color: 'bg-secondary',
    details: [
      'Doazóns puntuais ou periódicas',
      'Doazóns en especie (materiais, equipamentos)',
      'Todas as doazóns teñen beneficios fiscais',
      'Transparencia total no uso dos fondos',
      'Certificación para deducións fiscais'
    ]
  },
  {
    id: 'voluntario',
    title: 'Ser Voluntario/a',
    description: 'Dedica o teu tempo e talento para axudar aos demais. O voluntariado é esencial para ampliar o alcance dos nosos programas.',
    icon: UsersThree,
    color: 'bg-primary',
    details: [
      'Participa nas actividades de ocio e tempo libre',
      'Colabora en talleres e programas formativos',
      'Axuda no acompañamento e apoio persoal',
      'Aporta as túas habilidades e coñecementos',
      'Formación e apoio continuo'
    ]
  },
  {
    id: 'difusion',
    title: 'Difunde o Noso Traballo',
    description: 'Axúdanos a chegar a máis persoas compartindo a nosa misión. A difusión é fundamental para ampliar o noso impacto.',
    icon: ChalkboardTeacher,
    color: 'bg-accent',
    details: [
      'Comparte as nosas publicacións nas redes sociais',
      'Fala de Xarela no teu entorno',
      'Organiza eventos de sensibilización',
      'Conecta con persoas que poidan necesitar os nosos servizos',
      'Promove a inclusión social no teu ámbito'
    ]
  }
]

const collaborationTypes = [
  {
    icon: Coins,
    title: 'Colaboración Económica',
    description: 'Apoio financeiro puntual ou periódico para o sostemento das actividades'
  },
  {
    icon: Bank,
    title: 'Colaboración Institucional',
    description: 'Alianzas con empresas e entidades para programas específicos'
  },
  {
    icon: Users,
    title: 'Colaboración Activa',
    description: 'Participación directa en actividades, talleres e programas'
  }
]

export function QuePodesPage() {
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
              ¿Qué Podes Facer?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Hai moitas formas de colaborar co noso traballo e facer unha diferenza na vida das persoas
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
              Formas de Colaborar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada persoa pode aportar de forma diferente. Descubre como podes contribuír á nosa causa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {ways.map((way, index) => (
              <motion.div
                key={way.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`${way.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <way.icon 
                          className={way.color === 'bg-primary' ? 'text-primary-foreground' : 'text-accent-foreground'} 
                          size={32} 
                          weight="duotone" 
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{way.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {way.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Que inclúe:</p>
                      <ul className="space-y-2">
                        {way.details.map((detail, idx) => (
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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
              Tipos de Colaboración
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 text-center">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="bg-accent/20 w-14 h-14 rounded-full flex items-center justify-center">
                          <type.icon className="text-accent-foreground" size={28} weight="duotone" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {type.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {type.description}
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
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Comeza Hoxe a Colaborar
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Se estás interesado en colaborar con Xarela de calquera forma, non dubides en contactar connosco. 
              Estaremos encantados de explicarche como podes formar parte desta causa.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contacto">
                Contacta Connosco
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
