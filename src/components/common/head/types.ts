export interface HeadProps {
  title: string
  description?: string
  image?: string
  og?: {
    description?: string
    title?: string
    image?: string
  }
  twitter?: {
    description?: string
    title?: string
    image?: string
  }
  ogCustom?: {
    name?: string
    jobTitle?: string
    city?: string
    country?: string
    avatar?: string
  }
}