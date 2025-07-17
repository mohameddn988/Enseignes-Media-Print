import React from 'react'
import { cn } from '@/utils/cn'
import type { CardProps } from '@/types'

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  shadow = true,
  hover = false,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border border-secondary-200 transition-all duration-200'
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const shadowClasses = shadow ? 'shadow-md' : ''
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : ''
  
  return (
    <div
      className={cn(
        baseClasses,
        paddingClasses[padding],
        shadowClasses,
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card 