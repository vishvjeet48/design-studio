import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { PROCESS_STEPS } from '@/constants/site'
import { easeLux } from '@/lib/motion'

export function ProcessSection() {
  const railRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-20% 0px' })

  useLayoutEffect(() => {
    if (!inView || !railRef.current) return
    gsap.fromTo(
      railRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.45, ease: 'power3.out', transformOrigin: 'left center' },
    )
  }, [inView])

  return (
    <section id="process" className="scroll-mt-28 border-t border-charcoal/5 bg-canvas py-24 dark:border-white/10 dark:bg-canvas-dark md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Process</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Measured rhythm.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            A calm cadence from first conversation to final styling — transparent, tactile, and unhurried.
          </p>
        </RevealOnScroll>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-px w-[calc(100%-2rem)] overflow-hidden rounded-full bg-charcoal/10 dark:bg-white/10 md:block">
            <div ref={railRef} className="h-full origin-left bg-gradient-to-r from-olive via-muted-brown to-olive" />
          </div>

          <div className="grid gap-10 md:grid-cols-6 md:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.85, ease: easeLux, delay: i * 0.08 }}
                className="relative rounded-2xl border border-charcoal/5 bg-white/50 p-6 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-olive">0{step.id}</span>
                <h3 className="mt-3 font-serif text-xl text-charcoal dark:text-ivory">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-brown dark:text-warm-stone">{step.detail}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-full mt-4 h-8 w-px bg-charcoal/10 dark:bg-white/10 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
