import { ThemeProvider } from '@/contexts/ThemeContext'
import { useLenis } from '@/hooks/useLenis'

import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { NoiseOverlay } from '@/components/layout/NoiseOverlay'
import { PageLoader } from '@/components/layout/PageLoader'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FooterSection } from '@/components/sections/FooterSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { MoodboardSection } from '@/components/sections/MoodboardSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

function Shell() {
  useLenis()

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <AmbientBackground />
      <NoiseOverlay />
      <Navbar />
      <main className="relative z-20 isolate">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <MoodboardSection />
        <LocationSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}
