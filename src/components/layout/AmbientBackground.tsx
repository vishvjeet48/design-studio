import { motion } from 'framer-motion'

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 top-0 h-[55vh] w-[70vw] rounded-full bg-gradient-to-br from-sand/80 via-ivory to-transparent blur-3xl dark:from-olive/20 dark:via-charcoal dark:to-transparent"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[50vh] w-[65vw] rounded-full bg-gradient-to-tl from-warm-stone/50 via-transparent to-olive-soft blur-3xl dark:from-muted-brown/20 dark:to-transparent"
        animate={{ x: [0, -30, 0], y: [0, -24, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
