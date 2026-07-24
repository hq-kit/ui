import type { ImageProps } from "next/image"
import Image from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "priority"> {
  priority?: boolean
  isLazy?: boolean
}

/**
 * OptimizedImage - Wrapper for Next.js Image with sensible defaults
 * - Lazy loading by default
 * - Responsive sizing
 * - WebP format with fallback
 */
export function OptimizedImage({ priority = false, isLazy = true, ...props }: OptimizedImageProps) {
  return (
    <Image
      {...props}
      loading={isLazy ? "lazy" : "eager"}
      priority={priority}
      sizes={props.sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px"}
      // Add custom styles if needed
      style={{
        maxWidth: "100%",
        height: "auto",
        ...props.style
      }}
    />
  )
}

export default OptimizedImage
