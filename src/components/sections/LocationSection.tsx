import { ExternalLink, MapPin } from 'lucide-react'

import { RevealOnScroll } from '@/components/RevealOnScroll'
import { Button } from '@/components/ui/button'
import { PUNE_PROJECT_AREAS, STUDIO_LOCATION } from '@/constants/site'

export function LocationSection() {
  const { mapEmbedSrc, mapOpenHref, ...addr } = STUDIO_LOCATION

  return (
    <section
      id="location"
      className="scroll-mt-28 border-t border-charcoal/5 bg-ivory/90 py-24 dark:border-white/10 dark:bg-canvas-dark/50 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-brown">Visit · Pune</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal dark:text-ivory md:text-5xl">Rooted in the city.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-brown dark:text-warm-stone md:text-base">
            We meet by appointment at our Koregaon Park studio and work across Pune — from compact apartments to
            full-floor residences and cafés.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealOnScroll className="flex flex-col justify-between gap-10" delay={0.06}>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
                <div>
                  <p className="font-serif text-xl text-charcoal dark:text-ivory">{addr.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-brown dark:text-warm-stone">
                    {addr.line1}
                    <br />
                    {addr.area}, {addr.city} {addr.pin}
                    <br />
                    {addr.state}, India
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href={addr.phoneHref} className="text-charcoal underline-offset-4 hover:underline dark:text-ivory">
                  {addr.phoneDisplay}
                </a>
                <span className="text-charcoal/25 dark:text-ivory/25" aria-hidden>
                  ·
                </span>
                <a
                  href={`mailto:${addr.email}`}
                  className="text-charcoal underline-offset-4 hover:underline dark:text-ivory"
                >
                  {addr.email}
                </a>
              </div>
              <Button asChild variant="outline" className="w-fit gap-2">
                <a href={mapOpenHref} target="_blank" rel="noreferrer">
                  Open in Google Maps
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-brown dark:text-warm-stone">
                Recent project corridors
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {PUNE_PROJECT_AREAS.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-charcoal/10 bg-white/50 px-3 py-1.5 text-xs text-charcoal/80 dark:border-white/10 dark:bg-white/5 dark:text-ivory/85"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-sand/30 shadow-soft dark:border-white/10 dark:bg-charcoal/40">
              <div className="aspect-[4/3] w-full min-h-[280px] lg:aspect-auto lg:min-h-[420px]">
                <iframe
                  title="Map — The Design Story, Koregaon Park, Pune"
                  src={mapEmbedSrc}
                  className="size-full border-0 grayscale-[20%] contrast-[1.02] dark:grayscale-[35%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
