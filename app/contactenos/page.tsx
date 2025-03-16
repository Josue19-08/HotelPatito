import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactenosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="Logo Hotel Patito"
                className="object-contain h-full w-full"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-teal-600">Hotel Patito</h1>
          </Link>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-teal-50 to-amber-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Contáctenos</h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-teal-100">
              <CardHeader>
                <CardTitle>Envíenos un mensaje</CardTitle>
                <CardDescription>Estaremos encantados de responder a sus consultas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Su nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="su@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Asunto de su mensaje" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Escriba su mensaje aquí..."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Enviar Mensaje</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-md overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-teal-800">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-700">Dirección</h3>
                      <p className="text-sm text-teal-600">Av. Playa Hermosa 123, Costa del Sol</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-700">Teléfono</h3>
                      <p className="text-sm text-teal-600">+1 234 567 890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-700">Email</h3>
                      <p className="text-sm text-teal-600">info@hotelpatito.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-700">Horario de Recepción</h3>
                      <p className="text-sm text-teal-600">24 horas, 7 días a la semana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md overflow-hidden h-[300px]">
                <div className="h-full w-full bg-teal-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="font-medium text-teal-700 mb-2">Mapa de Ubicación</h3>
                    <p className="text-sm text-teal-600">Aquí se mostraría un mapa interactivo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">Copyright © Hotel Patito {new Date().getFullYear()}</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/politica-privacidad" className="text-sm hover:underline">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-sm hover:underline">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

