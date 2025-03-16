import Image from "next/image"
import { FeatureCard } from "@/components/ui/feature-card"
import { ParallaxSection } from "@/components/ui/parallax-section"

export function ServicesSection() {
  return (
    <>
      <ParallaxSection>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxsmWbNTJX2BwbHigcTC2hzM1sbwtt.png"
                alt="Vista de playa tropical"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold text-teal-700 mb-4">Bienvenidos al Hotel Patito</h2>
              <p className="text-gray-700 mb-4">
                Ubicado en la hermosa costa, Hotel Patito ofrece una experiencia única de hospedaje con vistas
                impresionantes al océano. Nuestras habitaciones están diseñadas para brindar el máximo confort y
                relajación durante su estadía.
              </p>
              <p className="text-gray-700 mb-4">
                Disfrute de nuestras instalaciones de primera clase, incluyendo piscina infinita, restaurante gourmet, y
                acceso directo a la playa. Nuestro personal está dedicado a hacer de su visita una experiencia
                inolvidable.
              </p>
              <p className="text-gray-700">
                Ya sea que visite por negocios o placer, Hotel Patito es su hogar lejos del hogar.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <h3 className="text-2xl font-playfair font-bold text-teal-700 text-center mb-6 animate-fade-in">
        Nuestros Servicios
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Habitaciones de Lujo"
          description="Espaciosas habitaciones con vistas al mar y todas las comodidades modernas."
          icon="luxury"
        />
        <FeatureCard
          title="Gastronomía Exquisita"
          description="Restaurante con los mejores platos locales e internacionales."
          icon="food"
        />
        <FeatureCard
          title="Actividades Acuáticas"
          description="Disfrute de deportes acuáticos y excursiones organizadas por nuestro hotel."
          icon="water"
        />
      </div>
    </>
  )
}

