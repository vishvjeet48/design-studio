import { motion } from 'framer-motion'
import { Building2, Hammer, Lamp, LayoutTemplate, Ruler, Sofa } from 'lucide-react'
import type { ComponentType } from 'react'
import Tilt from 'react-parallax-tilt'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SERVICES } from '@/constants/site'
import { easeLux, staggerContainer } from '@/lib/motion'
import type { ServiceItem } from '@/types'

const iconMap: Record<ServiceItem['icon'], ComponentType<{ className?: string }>> = {
  layout: LayoutTemplate,
  ruler: Ruler,
  sofa: Sofa,
  hammer: Hammer,
  lamp: Lamp,
  building: Building2,
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 border-t border-charcoal/5 bg-ivory/70 py-24 dark:border-white/10 dark:bg-canvas-dark/30 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Services</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Composed end-to-end.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            From first sketch to final vignette, we guide spaces with the same editorial eye as a luxury moodboard.
          </p>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12%' }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeLux, delay: i * 0.06 } },
                }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={900} scale={1.01} transitionSpeed={1600}>
                  <Card className="h-full border-charcoal/5 bg-white/55 transition-shadow duration-700 hover:shadow-soft dark:border-white/10 dark:bg-white/5">
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-charcoal/10 bg-sand/40 text-charcoal dark:border-white/10 dark:bg-white/10 dark:text-ivory">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
