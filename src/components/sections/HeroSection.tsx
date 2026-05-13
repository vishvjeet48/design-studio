import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HERO_FRAMES, HERO_SLICE, SITE } from '@/constants/site'
import { easeLux, fadeIn, staggerContainer } from '@/lib/motion'

const line = { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1.2, ease: easeLux } } }

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-charcoal/5 bg-[#f3ece4] pt-28 dark:border-white/10 dark:bg-[#141210]">
      {/* Soft architectural field — not a single full-bleed interior photo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(232,223,210,0.55),transparent_55%),radial-gradient(ellipse_50%_45%_at_10%_90%,rgba(122,122,98,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_75%_15%,rgba(122,122,98,0.14),transparent_55%),radial-gradient(ellipse_45%_40%_at_5%_85%,rgba(212,196,176,0.08),transparent_50%)]" />
        <div className="absolute -right-8 top-24 hidden h-[min(78vh,640px)] w-[min(38vw,420px)] overflow-hidden rounded-[2.5rem] border border-charcoal/10 shadow-[0_40px_100px_rgba(42,38,34,0.12)] dark:border-white/10 dark:shadow-[0_40px_100px_rgba(0,0,0,0.45)] md:block">
          <img
            src={HERO_SLICE}
            alt=""
            className="size-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f3ece4]/90 via-transparent to-transparent dark:from-[#141210]/85" />
        </div>
        <span className="pointer-events-none absolute bottom-[12%] left-[4%] select-none font-serif text-[clamp(5rem,18vw,14rem)] font-medium leading-none tracking-tight text-charcoal/[0.04] dark:text-ivory/[0.05]">
          TDS
        </span>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] max-w-6xl grid-cols-1 items-end gap-12 px-5 pb-16 pt-8 md:grid-cols-12 md:gap-10 md:px-8 md:pb-24 md:pt-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 md:row-span-1 md:pb-4"
        >
          <div className="flex gap-6">
            <motion.div
              variants={line}
              className="mt-1 hidden w-px origin-top bg-gradient-to-b from-olive via-charcoal/25 to-transparent dark:from-olive dark:via-ivory/25 md:block"
            />
            <div className="space-y-8">
              <motion.h1
                variants={fadeIn}
                className="max-w-[14ch] font-serif text-[clamp(2.75rem,7vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-charcoal dark:text-ivory"
              >
                <span className="block text-balance">Every space</span>
                <span className="mt-1 block italic text-muted-brown dark:text-warm-stone">holds a</span>
                <span className="mt-1 block">story worth slowing for.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="max-w-md border-l border-olive/40 pl-6 text-sm leading-[1.75] text-charcoal/75 dark:border-olive/50 dark:text-ivory/75 md:text-base"
              >
                {SITE.philosophy}
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="group rounded-full px-8">
                  <a href="#work" className="gap-2">
                    View projects
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border-b border-charcoal/25 pb-0.5 text-sm font-medium text-charcoal transition hover:border-olive hover:text-olive dark:border-ivory/30 dark:text-ivory dark:hover:border-olive dark:hover:text-olive"
                >
                  Book a consultation
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile: horizontal film strip instead of empty right column */}
        <div className="relative flex gap-3 overflow-x-auto pb-2 md:col-span-5 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {HERO_FRAMES.map((src, i) => (
            <div
              key={src}
              className="relative h-40 w-[42%] shrink-0 overflow-hidden rounded-2xl border border-charcoal/10 dark:border-white/10"
              style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 2}deg)` }}
            >
              <img src={src} alt="" className="size-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative hidden min-h-[320px] md:col-span-5 md:block"
        >
          {HERO_FRAMES.map((src, i) => (
            <motion.div
              key={src}
              variants={fadeIn}
              style={{
                top: `${8 + i * 18}%`,
                left: `${i * 6}%`,
                zIndex: 3 - i,
                rotate: i === 0 ? -2.2 : i === 1 ? 1.8 : -1,
              }}
              className="absolute w-[58%] overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory/40 shadow-soft backdrop-blur-[2px] dark:border-white/10 dark:bg-charcoal/30"
            >
              <div className="aspect-[4/5]">
                <img src={src} alt="" className="size-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/40 to-transparent px-3 py-2 dark:from-black/50">
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/90">
                  Ref. 0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1, ease: easeLux }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-brown dark:text-warm-stone">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-olive/60 via-charcoal/20 to-transparent dark:via-ivory/25" />
        </div>
      </motion.div>
    </section>
  )
}
