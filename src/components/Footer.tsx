import { Separator } from '@/components/ui/separator'
import { Envelope, Phone, WhatsappLogo, FacebookLogo, TwitterLogo, MapPin } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.png'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Xarela" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Unha labor imposible sen o apoio das administracións públicas, organismos e entidades privadas, os socios e socias, o equipo de voluntarios e de traballo, e persoas coas que traballamos desde o ano 1999.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@xarela.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Envelope size={18} weight="duotone" />
                <span>info@xarela.com</span>
              </a>
              <a href="tel:988250847" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone size={18} weight="duotone" />
                <span>988 25 08 47</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={18} weight="duotone" className="mt-1 flex-shrink-0" />
                <span>Localízanos no enderezo</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/labor-social" className="text-primary-foreground/80 hover:text-accent transition-colors">Labor social</Link>
              </li>
              <li>
                <Link to="/novas" className="text-primary-foreground/80 hover:text-accent transition-colors">Novas</Link>
              </li>
              <li>
                <Link to="/que-podes-facer" className="text-primary-foreground/80 hover:text-accent transition-colors">¿Qué podes facer?</Link>
              </li>
              <li>
                <Link to="/agradecementos" className="text-primary-foreground/80 hover:text-accent transition-colors">Agradecementos</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/80 hover:text-accent transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Apoio Institucional</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Xunta de Galicia<br />
              Consellería de Política Social
            </p>
            <h3 className="text-lg font-semibold mb-4 mt-6">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#whatsapp" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <WhatsappLogo size={24} weight="duotone" />
              </a>
              <a href="#facebook" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <FacebookLogo size={24} weight="duotone" />
              </a>
              <a href="#twitter" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <TwitterLogo size={24} weight="duotone" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="text-center text-sm text-primary-foreground/60">
          <p>Páxina feita con ❤️ por BoNeko</p>
        </div>
      </div>
    </footer>
  )
}
