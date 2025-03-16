import "./globals.css"
import { Playfair_Display, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Hotel Patito - Su paraíso en la playa",
  description: "Disfrute de nuestras instalaciones de lujo y la mejor vista al mar en Hotel Patito.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'