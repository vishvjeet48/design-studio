import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { easeLux } from '@/lib/motion'
import { cn } from '@/lib/utils'

const projectTypes = ['Residential', 'Hospitality', 'Retail', 'Workspace', 'Other']
const budgets = ['Under €25k', '€25k – €75k', '€75k – €150k', '€150k+', 'Prefer to discuss']

function Field({
  id,
  label,
  children,
  className,
}: {
  id: string
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('group relative', className)}>
      {children}
      <Label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 text-[10px] text-muted-brown transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[10px] dark:text-warm-stone"
      >
        {label}
      </Label>
    </div>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 border-t border-charcoal/5 bg-gradient-to-b from-canvas via-ivory/70 to-ivory py-24 dark:from-canvas-dark dark:via-canvas-dark dark:to-canvas-dark md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,223,210,0.55),transparent_55%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(122,122,98,0.18),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Consultation</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Begin quietly.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            Share the contours of your project — we reply with a calm, considered next step within two studio days.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06}>
          <motion.form
            className="space-y-5 rounded-2xl border border-charcoal/5 bg-white/70 p-8 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            onSubmit={(e) => {
              e.preventDefault()
              if (!projectType || !budget) return
              setSubmitted(true)
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeLux }}
          >
            <input type="hidden" name="projectType" value={projectType} />
            <input type="hidden" name="budget" value={budget} />

            <div className="grid gap-5 md:grid-cols-2">
              <Field id="name" label="Name">
                <Input id="name" name="name" required placeholder=" " className="peer pt-7" autoComplete="name" />
              </Field>
              <Field id="email" label="Email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  className="peer pt-7"
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="project-type" className="text-[10px]">
                  Project type
                </Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger id="project-type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-[10px]">
                  Budget
                </Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Field id="message" label="Message">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder=" "
                className="peer w-full rounded-xl border border-charcoal/10 bg-white/50 px-4 pb-3 pt-7 text-sm text-charcoal outline-none transition focus:border-olive/50 focus:ring-1 focus:ring-olive/30 dark:border-white/10 dark:bg-white/5 dark:text-ivory"
              />
            </Field>

            <Button type="submit" className="w-full md:w-auto" disabled={submitted}>
              {submitted ? 'Sent — we will be in touch' : 'Send inquiry'}
            </Button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </section>
  )
}
