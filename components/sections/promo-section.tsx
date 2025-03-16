import { Button } from "@/components/ui/button"

export function PromoSection() {
  return (
    <div className="mt-12 relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-90"></div>
      <div className="relative z-10 p-8 md:p-12 text-white">
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">¿Listo para unas vacaciones inolvidables?</h3>
        <p className="mb-6 max-w-2xl">
          Reserve ahora y obtenga un 15% de descuento en su primera estancia. Oferta por tiempo limitado.
        </p>
        <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90">
          Reservar con Descuento
        </Button>

        {/* Burbujas animadas */}
        <div className="bubble-animation">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

