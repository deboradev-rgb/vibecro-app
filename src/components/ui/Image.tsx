import { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  priority?: boolean
  fill?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  objectPosition?: string
}

/**
 * Composant Image optimisé pour Vite
 * Remplace next/image avec une approche simple
 */
export default function Image({
  src,
  alt,
  width,
  height,
  priority,
  fill,
  objectFit = 'cover',
  objectPosition = 'center',
  className,
  style,
  ...props
}: OptimizedImageProps) {
  const computedStyle = {
    objectFit,
    objectPosition,
    width: fill ? '100%' : width,
    height: fill ? '100%' : height,
    ...style
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      style={computedStyle}
      {...props}
    />
  )
}
