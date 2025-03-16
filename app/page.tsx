import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PromoSection } from "@/components/sections/promo-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Elementos flotantes decorativos */}
      <FloatingElements />

      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            <Sidebar />

            <div className="space-y-8">
              <ServicesSection />
              <PromoSection />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

