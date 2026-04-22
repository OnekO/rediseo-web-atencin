import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const supporters = [
  {
    id: 'xunta',
    name: 'Xunta de Galicia',
    description: 'Consellería de Política Social',
  },
  {
    id: 'concello',
    name: 'Concello de Ourense',
    description: 'Servizos Sociais Comunitarios',
  },
  {
    id: 'deputacion',
    name: 'Deputación de Ourense',
    description: 'Área de Benestar Social',
  },
  {
    id: 'socios',
    name: 'Socios e Socias',
    description: 'Persoas que apoian día a día o noso traballo',
  },
  {
    id: 'voluntarios',
    name: 'Voluntarios e Voluntarias',
    description: 'Persoas que dedican o seu tempo e esforzo',
  },
  {
    id: 'colaboradores',
    name: 'Entidades Colaboradoras',
    description: 'Organismos e empresas privadas que nos apoian',
  },
]

export function Acknowledgments() {
  return (
    <section id="agradecementos" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Agradecementos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unha labor imposible sen o apoio de moitas persoas e institucións que fan posible o noso traballo desde o ano 1999
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {supporter.description}
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground italic">
            "Grazas a todas as persoas e entidades que fan posible que Xarela siga traballando por un futuro máis xusto e inclusivo."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
