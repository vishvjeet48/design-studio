import type {
  MoodTile,
  PortfolioProject,
  ProcessStep,
  ServiceItem,
  Testimonial,
} from '@/types'

export const SITE = {
  name: 'The Design Story',
  tagline: 'Every Space Has A Story.',
  philosophy:
    'We compose calm interiors where light, texture, and proportion speak softly — curated like a living moodboard, built like architecture.',
} as const

export const NAV_LINKS = [
  { href: '#about', label: 'Studio' },
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#location', label: 'Visit' },
  { href: '#contact', label: 'Consult' },
] as const

/** Pune studio — map centres on Koregaon Park (by appointment). */
export const STUDIO_LOCATION = {
  name: 'The Design Story — Studio',
  line1: 'Zala Complex',
  area: 'Vastunagar, Bibwewadi',
  city: 'Pune',
  state: 'Maharashtra',
  pin: '411001',
  phoneDisplay: '+91 98601 81918',
  phoneHref: 'tel:+912026100000',
  email: 'hello@thedesignstory.in',
  /** Google Maps embed (no API key) — Koregaon Park, Pune */
  mapEmbedSrc:
    'https://www.google.com/maps?q=Koregaon+Park,+Pune,+Maharashtra+411001&hl=en&z=14&output=embed',
  mapOpenHref:
    'https://www.google.com/maps/search/?api=1&query=Koregaon+Park+Pune+Maharashtra+411001',
} as const

/** Neighbourhoods & corridors we routinely work across in Pune. */
export const PUNE_PROJECT_AREAS = [
  'Koregaon Park',
  'Baner',
  'Aundh',
  'Kalyani Nagar',
  'Boat Club Road',
  'Camp',
  'Wakad',
  'Hinjewadi',
  'Kharadi',
  'Bavdhan',
  'Viman Nagar',
  'Sopan Baug',
] as const

/** Tall narrow slice — texture, not a billboard hero. */
export const HERO_SLICE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80'

/** Offset editorial frames (right column). */
export const HERO_FRAMES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80',
] as const

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Riverstone Living',
    location: 'Koregaon Park, Pune',
    category: 'living',
    description: 'Layered neutrals, sculptural seating, and a gallery wall washed in northern light.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
  },
  {
    id: 'p2',
    title: 'Kin Kitchen',
    location: 'Baner, Pune',
    category: 'kitchen',
    description: 'Warm stone, oak grain, and quiet hardware for a tactile culinary studio.',
    image:
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80',
    aspect: 'wide',
    beforeImage:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'p3',
    title: 'Haven Suite',
    location: 'Kalyani Nagar, Pune',
    category: 'bedroom',
    description: 'Linen volumes, paper light, and a palette drawn from garden shadows.',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'p4',
    title: 'Atelier Office',
    location: 'Hinjewadi, Pune',
    category: 'office',
    description: 'Focused workstations framed by tactile partitions and soft daylight.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
  },
  {
    id: 'p5',
    title: 'Still Café',
    location: 'Camp, Pune',
    category: 'cafe',
    description: 'Monolithic counter, ceramic warmth, and seating that encourages lingering.',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
    aspect: 'wide',
  },
  {
    id: 'p6',
    title: 'Linea Home',
    location: 'Aundh, Pune',
    category: 'minimal',
    description: 'Essential forms, curated voids, and a single sculptural focal point per room.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
  },
  {
    id: 'p7',
    title: 'Ember Lounge',
    location: 'Boat Club Road, Pune',
    category: 'living',
    description: 'Low profiles, terracotta undertones, and drapery that moves like tide.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'p8',
    title: 'Nordic Pantry',
    location: 'Wakad, Pune',
    category: 'kitchen',
    description: 'Matte cabinetry, open shelving, and porcelain that catches morning light.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    aspect: 'wide',
  },
  {
    id: 'p9',
    title: 'Cloud Bedroom',
    location: 'Bavdhan, Pune',
    category: 'bedroom',
    description: 'A study in chalk tones, curved headboard, and whisper-quiet textiles.',
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
  },
  {
    id: 'p10',
    title: 'Frame Studio',
    location: 'Kharadi, Pune',
    category: 'office',
    description: 'Creative loft with modular zones and acoustic softness overhead.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'p11',
    title: 'Grain House',
    location: 'Sopan Baug, Pune',
    category: 'minimal',
    description: 'A restrained material triad: lime plaster, white oak, brushed steel.',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    aspect: 'wide',
  },
  {
    id: 'p12',
    title: 'Solstice Café',
    location: 'Viman Nagar, Pune',
    category: 'cafe',
    description: 'Terrazzo underfoot, linen canopies, and a slow pour of afternoon sun.',
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
    beforeImage:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
  },
]

export const FILTER_TABS: { id: import('@/types').ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'living', label: 'Living' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'office', label: 'Offices' },
  { id: 'cafe', label: 'Cafés' },
  { id: 'minimal', label: 'Minimal Homes' },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Interior Design',
    description: 'Holistic concepts balancing atmosphere, function, and bespoke detailing.',
    icon: 'layout',
  },
  {
    id: 's2',
    title: 'Space Planning',
    description: 'Flow studies, zoning, and furniture layouts tuned to daily rituals.',
    icon: 'ruler',
  },
  {
    id: 's3',
    title: 'Furniture Styling',
    description: 'Curated pieces, art placement, and tactile layers that age beautifully.',
    icon: 'sofa',
  },
  {
    id: 's4',
    title: 'Renovation',
    description: 'Measured transformations with craftspeople aligned to our vision.',
    icon: 'hammer',
  },
  {
    id: 's5',
    title: 'Lighting Design',
    description: 'Layered luminance — ambient, task, and accent — sculpted for mood.',
    icon: 'lamp',
  },
  {
    id: 's6',
    title: 'Commercial Design',
    description: 'Hospitality and workspaces that feel residential yet perform commercially.',
    icon: 'building',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { id: '1', title: 'Consultation', detail: 'Listening session, site walk, aspirations mapped.' },
  { id: '2', title: 'Moodboarding', detail: 'Material stories, light studies, and tonal direction.' },
  { id: '3', title: 'Planning', detail: 'Layouts, schedules, and investment clarity.' },
  { id: '4', title: '3D Visualization', detail: 'Quietly cinematic previews — enough to feel, not overwhelm.' },
  { id: '5', title: 'Execution', detail: 'On-site rhythm with trusted makers and artisans.' },
  { id: '6', title: 'Final Styling', detail: 'The last ten percent: objects, blooms, and breath.' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Deshpande',
    role: 'Residence, Koregaon Park',
    quote:
      'They choreographed our home like a slow film — every corner feels intentional yet effortless.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't2',
    name: 'Rahul Kulkarni',
    role: 'Founder, Kalyani Nagar workspace',
    quote:
      'Our workspace now breathes. Clients linger without knowing exactly why — it is the calm.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't3',
    name: 'Meera Iyer',
    role: 'Boutique, Camp',
    quote:
      'The moodboard became reality: tactility, scent of timber, light that flatters every hour.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]

export const MOOD_TILES: MoodTile[] = [
  { id: 'm1', label: 'Linen weave', image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=600&q=80', span: 'md' },
  { id: 'm2', label: 'Sand palette', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=80', span: 'sm' },
  { id: 'm3', label: 'Arches', image: 'https://images.unsplash.com/photo-1501183638710-e3f43a5b4d22?auto=format&fit=crop&w=800&q=80', span: 'lg' },
  { id: 'm4', label: 'Ceramic', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80', span: 'sm' },
  { id: 'm5', label: 'Soft light', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80', span: 'md' },
  { id: 'm6', label: 'Oak grain', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80', span: 'sm' },
  { id: 'm7', label: 'Objects', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80', span: 'md' },
  { id: 'm8', label: 'Plaster', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80', span: 'lg' },
]

export const ABOUT_COLLAGE = [
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80',
]
