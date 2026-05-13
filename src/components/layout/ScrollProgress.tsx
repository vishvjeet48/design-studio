import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 32, mass: 0.2 })

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-olive via-muted-brown to-olive"
      style={{ scaleX }}
    />
  )
}
