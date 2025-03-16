import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { es } from "date-fns/locale"
import Link from "next/link"

export default function ReservarPage() {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Reservar en Línea</h1>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="md:col-span-2 bg-white/80 backdrop-blur-sm shadow-lg border-teal-100">
                <CardHeader>
                  <CardTitle>Información de Reserva</CardTitle>
                  <CardDescription>Complete los detalles para su estancia en Hotel Patito</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Fecha de llegada</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Seleccionar fecha</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" locale={es} />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Fecha de salida</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Seleccionar fecha</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" locale={es} />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adultos</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Niños</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="room-type">Tipo de Habitación</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo de habitación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Estándar</SelectItem>
                        <SelectItem value="deluxe">Deluxe</SelectItem>
                        <SelectItem value="suite">Suite</SelectItem>
                        <SelectItem value="family">Familiar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+1 234 567 890" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special-requests">Solicitudes Especiales</Label>
                    <textarea
                      id="special-requests"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Cualquier solicitud especial para su estancia..."
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Confirmar Reserva</Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-amber-800">Oferta Especial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-2">¡Reserve 3 noches y obtenga la 4ta gratis!</p>
                  <p className="text-sm text-amber-600">Válido para reservas realizadas antes del 30 de agosto.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-teal-800">Política de Cancelación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-700 mb-2">Cancelación gratuita hasta 48 horas antes de la llegada.</p>
                  <p className="text-sm text-teal-600">Consulte nuestros términos y condiciones para más detalles.</p>
                </CardContent>
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

