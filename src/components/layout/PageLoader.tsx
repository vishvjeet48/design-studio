import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { SITE } from '@/constants/site'
import { easeLux } from '@/lib/motion'

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas dark:bg-canvas-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: easeLux }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeLux }}
          >
            <span className="font-serif text-3xl tracking-[0.08em] text-charcoal dark:text-ivory md:text-4xl">
              {SITE.name}
            </span>
            <motion.span
              className="h-px w-24 origin-center bg-gradient-to-r from-transparent via-olive to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: easeLux, delay: 0.15 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
