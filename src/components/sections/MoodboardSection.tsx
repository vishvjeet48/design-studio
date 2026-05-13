import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { MOOD_TILES } from '@/constants/site'
import { cn } from '@/lib/utils'

function spanClass(span: (typeof MOOD_TILES)[number]['span']) {
  if (span === 'lg') return 'md:col-span-2 md:row-span-2'
  if (span === 'md') return 'md:col-span-2'
  return ''
}

export function MoodboardSection() {
  return (
    <section className="scroll-mt-28 border-t border-charcoal/5 bg-ivory/80 py-24 dark:border-white/10 dark:bg-canvas-dark/40 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Inspiration</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Texture & tone.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            A tactile board of references — fabric, light, stone, and quiet architecture.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[180px] md:grid-cols-4">
          {MOOD_TILES.map((tile, i) => (
            <MoodTileCard key={tile.id} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MoodTileCard({ tile, index }: { tile: (typeof MOOD_TILES)[number]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  const shine = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgba(250,247,242,0.35), transparent 65%)`

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.85, delay: index * 0.04 }}
      onMouseMove={handleMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-charcoal/5 bg-white/40 shadow-card dark:border-white/10 dark:bg-white/5',
        spanClass(tile.span),
      )}
    >
      <img src={tile.image} alt={tile.label} className="size-full object-cover transition duration-[1.2s] group-hover:scale-[1.03]" loading="lazy" />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: shine }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 to-transparent p-4">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-ivory">{tile.label}</p>
      </div>
    </motion.div>
  )
}
