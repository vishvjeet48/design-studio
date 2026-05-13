import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'

import { NAV_LINKS, SITE, STUDIO_LOCATION } from '@/constants/site'

export function FooterSection() {
  return (
    <footer className="border-t border-charcoal/5 bg-charcoal text-ivory dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-md space-y-4">
          <p className="font-serif text-2xl tracking-[0.08em]">{SITE.name}</p>
          <p className="text-sm leading-relaxed text-ivory/70">
            “We believe rooms should exhale — soft geometry, honest materials, and light that flatters life.”
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-10 text-sm md:max-w-lg">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-ivory/50">Explore</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/80 transition hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-ivory/50">Connect</p>
            <ul className="mt-4 flex gap-4">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-ivory/15 p-2 transition hover:border-ivory/40"
                  aria-label="Instagram"
                >
                  <Sparkles className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-ivory/15 p-2 transition hover:border-ivory/40"
                  aria-label="LinkedIn"
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_LOCATION.email}`}
                  className="inline-flex rounded-full border border-ivory/15 p-2 transition hover:border-ivory/40"
                  aria-label="Email"
                >
                  <Mail className="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-[11px] uppercase tracking-[0.3em] text-ivory/45">
        © {new Date().getFullYear()} {SITE.name} · Crafted with restraint
      </div>
    </footer>
  )
}
