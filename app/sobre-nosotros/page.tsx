import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Sidebar } from "@/components/sidebar"
import { FloatingElements } from "@/components/ui/floating-elements"
import { ImageGallery } from "@/components/image-gallery"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UIVjQAYIcDqbijURTiJ5XBu34lZwru.png",
    alt: "Bungalows sobre el agua al atardecer con iluminación cálida",
    width: 1366,
    height: 768,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tfqvvtOajV5I4tOy2MKgkmZI9VvhyG.png",
    alt: "Atardecer en la playa con gaviotas volando sobre el horizonte",
    width: 800,
    height: 533,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8aaf01820cf45b71e631ae11d3f9ae76.jpg-HZY2G8mGMMPMoZfp3T8oMtRCjL103K.jpeg",
    alt: "Isla tropical paradisíaca con palmeras y canoa tradicional en aguas cristalinas",
    width: 1024,
    height: 768,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-89Q8k9DUDknUeJ7HCgXIYlJPl2mtgS.png",
    alt: "Puesta de sol espectacular en la playa con palmeras y olas suaves",
    width: 736,
    height: 1308,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxsmWbNTJX2BwbHigcTC2hzM1sbwtt.png",
    alt: "Playa tropical con aguas turquesas y arena blanca",
    width: 800,
    height: 600,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1920x1080-hd-beach-khfbqt2io95uf0zy.jpg-necezoLBqssVM6PdsQcaHnGmxbIau9.jpeg",
    alt: "Vista panorámica de bungalows sobre el agua cristalina",
    width: 1920,
    height: 1080,
  },
]

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Elementos flotantes decorativos */}
      <FloatingElements />

      <SiteHeader />

      <main className="flex-1 bg-gradient-to-b from-teal-50 to-amber-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            <Sidebar />

            <div className="space-y-12">
              <section>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-teal-700 mb-6">Sobre Nosotros</h1>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 mb-8">
                  <p className="text-gray-700 mb-4">
                    Hotel Patito nació en 2005 con la visión de crear un paraíso tropical donde nuestros huéspedes
                    pudieran experimentar la belleza natural de las playas más hermosas del mundo, combinada con el lujo
                    y la comodidad de instalaciones de primera clase.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Ubicado en una exclusiva zona costera, nuestro hotel ha sido diseñado para integrarse armoniosamente
                    con el entorno natural, respetando el ecosistema y promoviendo prácticas sostenibles. Cada rincón de
                    nuestras instalaciones ha sido cuidadosamente pensado para ofrecer una experiencia inolvidable.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nuestro equipo está formado por profesionales apasionados por la hospitalidad, dedicados a hacer de
                    su estancia una experiencia excepcional. Desde nuestro chef ejecutivo hasta nuestro personal de
                    limpieza, todos compartimos el mismo compromiso con la excelencia y la atención personalizada.
                  </p>
                  <p className="text-gray-700">
                    En Hotel Patito, no solo ofrecemos alojamiento, sino una experiencia completa que combina la belleza
                    natural, la gastronomía local e internacional, actividades recreativas y el más alto nivel de
                    servicio. Le invitamos a descubrir por qué somos el destino preferido de viajeros exigentes de todo
                    el mundo.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-bold text-teal-700 mb-6">Nuestra Galería</h2>

                <ImageGallery images={galleryImages} />
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-playfair font-bold text-teal-700 mb-4">Nuestra Misión</h2>
                <p className="text-gray-700 mb-6">
                  Proporcionar experiencias vacacionales excepcionales en un entorno paradisíaco, donde cada huésped se
                  sienta especial y cada momento sea memorable, manteniendo siempre un compromiso con la sostenibilidad
                  y el respeto por nuestro entorno natural.
                </p>

                <h2 className="text-2xl font-playfair font-bold text-teal-700 mb-4">Nuestra Visión</h2>
                <p className="text-gray-700">
                  Ser reconocidos como el destino de playa más exclusivo y sostenible, estableciendo nuevos estándares
                  en la industria hotelera a través de la innovación, el servicio personalizado y el compromiso con la
                  conservación del medio ambiente.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

