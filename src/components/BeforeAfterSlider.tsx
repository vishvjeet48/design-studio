import { motion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  alt: string
  className?: string
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, alt, className }: BeforeAfterSliderProps) {
  const [split, setSplit] = useState(52)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSplit = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setSplit(Math.min(92, Math.max(8, pct)))
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-xl bg-sand/40 touch-none', className)}
      onPointerDown={(e) => {
        dragging.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        updateSplit(e.clientX)
      }}
      onPointerUp={(e) => {
        dragging.current = false
        e.currentTarget.releasePointerCapture(e.pointerId)
      }}
      onPointerCancel={() => {
        dragging.current = false
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateSplit(e.clientX)
      }}
    >
      <img src={afterSrc} alt={`${alt} after`} className="absolute inset-0 size-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
      >
        <img src={beforeSrc} alt={`${alt} before`} className="absolute inset-0 size-full object-cover" loading="lazy" />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory/90 shadow-[0_0_24px_rgba(0,0,0,0.25)]"
        style={{ left: `${split}%` }}
        layout
      />
      <div
        className="pointer-events-none absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-charcoal/70 text-[10px] font-medium uppercase tracking-widest text-ivory backdrop-blur-md"
        style={{ left: `${split}%`, transform: 'translate(-50%, -50%)' }}
      >
        drag
      </div>
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
        Before
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
        After
      </div>
    </div>
  )
}
