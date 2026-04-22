import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Envelope, Phone, WhatsappLogo, FacebookLogo, TwitterLogo, MapPin } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { useState } from 'react'

export function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Mensaxe enviada correctamente', {
      description: 'Contactaremos contigo o antes posible'
    })
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              Contacto
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para axudarche. Ponte en contacto connosco para calquera consulta ou colaboración
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Envíanos unha Mensaxe
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Completa o formulario e contactaremos contigo o antes posible. Todos os campos son obrigatorios.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O teu nome"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="teu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="600 000 000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaxe</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe a túa mensaxe aquí..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Enviar Mensaxe
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Envelope size={24} weight="duotone" className="text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Correo Electrónico</h3>
                        <a href="mailto:info@xarela.com" className="text-muted-foreground hover:text-accent transition-colors">
                          info@xarela.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={24} weight="duotone" className="text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                        <a href="tel:988250847" className="text-muted-foreground hover:text-accent transition-colors">
                          988 25 08 47
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} weight="duotone" className="text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Enderezo</h3>
                        <p className="text-muted-foreground">
                          Ourense, Galicia<br />
                          España
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Síguenos nas Redes</h3>
                <div className="flex gap-4">
                  <a 
                    href="#whatsapp" 
                    className="bg-muted hover:bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsappLogo size={24} weight="duotone" />
                  </a>
                  <a 
                    href="#facebook" 
                    className="bg-muted hover:bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookLogo size={24} weight="duotone" />
                  </a>
                  <a 
                    href="#twitter" 
                    className="bg-muted hover:bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogo size={24} weight="duotone" />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-muted/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Horario de Atención</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Luns a Venres:</span>
                    <span className="font-medium">9:00 - 14:00 | 16:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados e Domingos:</span>
                    <span className="font-medium">Pechado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              ¿Necesitas Máis Información?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Se tes calquera dúbida sobre os nosos servizos, programas ou formas de colaborar, 
              non dubides en contactar connosco. Estaremos encantados de atenderte e proporcionarche 
              toda a información que necesites.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
