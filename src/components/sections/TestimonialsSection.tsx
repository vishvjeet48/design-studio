import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { TESTIMONIALS } from '@/constants/site'
import { easeLux } from '@/lib/motion'

import 'swiper/css'
import 'swiper/css/effect-fade'

export function TestimonialsSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden border-t border-charcoal/5 bg-gradient-to-b from-ivory/80 via-canvas to-canvas py-24 dark:from-canvas-dark dark:via-canvas-dark dark:to-canvas-dark md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,122,98,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Testimonials</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Trusted quiet.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12" delay={0.05}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={900}
            autoplay={{ delay: 5200, disableOnInteraction: false }}
            className="min-h-[320px] overflow-visible pb-4 md:min-h-[280px]"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <motion.figure
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: easeLux }}
                  className="mx-auto flex max-w-3xl flex-col gap-8 rounded-2xl border border-charcoal/5 bg-white/60 p-10 text-center shadow-card backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center md:text-left"
                >
                  <Quote className="mx-auto size-10 text-olive/70 md:mx-0" />
                  <div className="flex-1 space-y-4">
                    <blockquote className="font-serif text-2xl leading-snug text-charcoal dark:text-ivory md:text-3xl">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="flex items-center justify-center gap-4 md:justify-start">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="size-12 rounded-full object-cover ring-2 ring-olive/30"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-sm font-medium text-charcoal dark:text-ivory">{t.name}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-muted-brown dark:text-warm-stone">
                          {t.role}
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </motion.figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealOnScroll>
      </div>
    </section>
  )
}
