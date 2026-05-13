export type ProjectCategory =
  | 'all'
  | 'living'
  | 'kitchen'
  | 'bedroom'
  | 'office'
  | 'cafe'
  | 'minimal'

export interface PortfolioProject {
  id: string
  title: string
  location: string
  category: Exclude<ProjectCategory, 'all'>
  description: string
  image: string
  aspect: 'tall' | 'wide' | 'square'
  beforeImage?: string
  afterImage?: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: 'layout' | 'ruler' | 'sofa' | 'hammer' | 'lamp' | 'building'
}

export interface ProcessStep {
  id: string
  title: string
  detail: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image: string
}

export interface MoodTile {
  id: string
  label: string
  image: string
  span: 'sm' | 'md' | 'lg'
}
