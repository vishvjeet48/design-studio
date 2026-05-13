import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'

import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FILTER_TABS, PORTFOLIO_PROJECTS } from '@/constants/site'
import { easeLux } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { PortfolioProject, ProjectCategory } from '@/types'

function aspectClass(aspect: PortfolioProject['aspect']) {
  if (aspect === 'tall') return 'aspect-[3/4] md:aspect-[3/5]'
  if (aspect === 'wide') return 'aspect-[5/3]'
  return 'aspect-square'
}

export function PortfolioSection() {
  const [filter, setFilter] = useState<ProjectCategory>('all')
  const [active, setActive] = useState<PortfolioProject | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = useMemo(
    () => (filter === 'all' ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative scroll-mt-28 border-t border-charcoal/5 bg-canvas py-24 dark:border-white/10 dark:bg-canvas-dark md:py-32"
      onMouseMove={onMouseMove}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 hover:opacity-100"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx, 50%) var(--my, 35%), rgba(122,122,98,0.14), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Selected work</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">A living moodboard.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            Interiors composed like film stills — warm neutrals, sculptural silhouettes, and light that behaves.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 flex flex-wrap gap-2" delay={0.08}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-500',
                filter === tab.id
                  ? 'border-charcoal bg-charcoal text-ivory dark:border-ivory dark:bg-ivory dark:text-charcoal'
                  : 'border-charcoal/10 bg-white/40 text-charcoal/70 hover:border-charcoal/25 dark:border-white/10 dark:bg-white/5 dark:text-ivory/70',
              )}
            >
              {tab.label}
            </button>
          ))}
        </RevealOnScroll>

        <motion.div layout className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                layout
                type="button"
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.65, ease: easeLux }}
                onClick={() => setActive(project)}
                className="group mb-5 w-full break-inside-avoid text-left"
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  perspective={1200}
                  scale={1.02}
                  transitionSpeed={1800}
                  glareEnable={false}
                  className="rounded-2xl"
                >
                  <div className="overflow-hidden rounded-2xl border border-charcoal/5 bg-white/40 shadow-card backdrop-blur-[2px] dark:border-white/10 dark:bg-white/5">
                    <div className={cn('relative overflow-hidden', aspectClass(project.aspect))}>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="size-full object-cover transition duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                      <div className="absolute bottom-4 left-4 right-4 translate-y-3 text-ivory opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-xs uppercase tracking-[0.3em] text-ivory/80">{project.location}</p>
                        <p className="mt-1 font-serif text-2xl">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0">
          {active && (
            <>
              <DialogHeader className="p-8 pb-4">
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>
                  {active.location} · {active.category}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 px-8 pb-8">
                {active.beforeImage && active.afterImage ? (
                  <BeforeAfterSlider beforeSrc={active.beforeImage} afterSrc={active.afterImage} alt={active.title} />
                ) : (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="max-h-[420px] w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                )}
                <p className="text-sm leading-relaxed text-muted-brown dark:text-warm-stone">{active.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
