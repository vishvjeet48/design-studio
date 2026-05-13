import { motion } from 'framer-motion'
import { Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE } from '@/constants/site'
import { useTheme } from '@/contexts/ThemeContext'
import { easeLux } from '@/lib/motion'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: easeLux, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-[70] border-b border-charcoal/5 bg-ivory/70 backdrop-blur-xl dark:border-white/10 dark:bg-canvas-dark/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a href="#top" className="group flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-[0.12em] text-charcoal transition group-hover:text-olive dark:text-ivory">
            {SITE.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-brown dark:text-warm-stone">
            Interior Atelier
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 dark:text-ivory/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-olive after:transition-all after:duration-500 hover:after:w-full dark:hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href="#contact">Book Consultation</a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: easeLux }}
        className="overflow-hidden border-t border-charcoal/5 bg-ivory/95 dark:border-white/10 dark:bg-canvas-dark/95 md:hidden"
      >
        <div className="flex flex-col gap-4 px-5 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal dark:text-ivory"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="default" className="w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Book Consultation
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.header>
  )
}
