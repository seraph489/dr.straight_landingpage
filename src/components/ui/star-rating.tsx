"use client"

import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = "md",
  className = "" 
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  }

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxRating }, (_, index) => (
        <svg 
          key={index} 
          className={cn(
            sizeClasses[size], 
            "text-yellow-400 fill-current",
            index < rating ? "opacity-100" : "opacity-30"
          )}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  )
} 