// Common types for the Signs and Graphics Company website

export interface Service {
  id: string
  title: string
  description: string
  image?: string
  icon?: string
  features?: string[]
  price?: {
    starting: number
    currency: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  images: string[]
  client?: string
  completedAt: Date
  tags: string[]
  featured?: boolean
}

export type ProjectCategory = 
  | 'signage'
  | 'graphics'
  | 'installation'
  | 'repair'
  | 'digital'
  | 'print'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface ContactInfo {
  name: string
  email: string
  phone: string
  company?: string
  message: string
  serviceType?: ProjectCategory
  budget?: BudgetRange
}

export type BudgetRange = 
  | 'under-1000'
  | '1000-5000'
  | '5000-10000'
  | '10000-25000'
  | 'over-25000'

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  established: number
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  contact: {
    phone: string
    email: string
    website: string
  }
  social: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
  stats: {
    projectsCompleted: number
    yearsInBusiness: number
    happyClients: number
    teamMembers: number
  }
}

// Animation related types
export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string
  trigger?: string
  start?: string
  end?: string
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: boolean
  hover?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Form related types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: RegExp
    min?: number
    max?: number
    message?: string
  }
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Theme related types
export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  systemTheme: 'light' | 'dark'
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  external?: boolean
}

export interface Breadcrumb {
  label: string
  href?: string
  current?: boolean
} 