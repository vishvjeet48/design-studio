import { motion, type HTMLMotionProps } from 'framer-motion'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { easeLux } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface RevealOnScrollProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  delay?: number
}

export function RevealOnScroll({ children, className, delay = 0, ...rest }: RevealOnScrollProps) {
  // Positive bottom rootMargin: intersect slightly earlier (helps Lenis + smooth scroll).
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px 12% 0px' })

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: easeLux, delay },
      },
    }),
    [delay],
  )

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
