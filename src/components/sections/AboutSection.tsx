import { animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { ABOUT_COLLAGE, SITE } from '@/constants/site'
import { easeLux, staggerContainer } from '@/lib/motion'

const stats = [
  { label: 'Projects Completed', value: 128, suffix: '+' },
  { label: 'Happy Clients', value: 94, suffix: '' },
  { label: 'Years Experience', value: 14, suffix: '' },
]

function StatNumber({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(mv, 'change', (v) => {
    setDisplay(Math.round(v))
  })

  useEffect(() => {
    if (!active) return
    const controls = animate(mv, end, { duration: 2.2, ease: easeLux })
    return () => controls.stop()
  }, [active, end, mv])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px 15% 0px' })

  return (
    <section id="about" className="relative scroll-mt-28 border-t border-charcoal/5 bg-ivory/60 py-24 dark:border-white/10 dark:bg-canvas-dark/40 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-2 md:items-center md:gap-20 md:px-8">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">About the studio</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Quiet rooms, loud craft.</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            {SITE.name} is an interior atelier shaped by Nordic restraint and Japanese negative space. We design
            environments that feel editorial yet livable — layered like a Pinterest board, disciplined like
            architecture.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            Each project begins as a storyboard of light and texture, then resolves into bespoke joinery, curated
            furnishings, and tactile calm.
          </p>
        </RevealOnScroll>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-4"
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08 } },
                }}
                className="rounded-2xl border border-charcoal/5 bg-white/60 p-5 text-center shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="font-serif text-3xl text-charcoal dark:text-ivory">
                  <StatNumber end={s.value} suffix={s.suffix} active={inView} />
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-brown dark:text-warm-stone">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
              }}
              className="overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={ABOUT_COLLAGE[0]}
                alt="Interior vignette"
                className="h-52 w-full object-cover md:h-64"
                loading="lazy"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 } },
                }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={ABOUT_COLLAGE[1]}
                  alt="Material detail"
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.18 } },
                }}
                className="flex-1 overflow-hidden rounded-2xl"
              >
                <img
                  src={ABOUT_COLLAGE[2]}
                  alt="Living space"
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
