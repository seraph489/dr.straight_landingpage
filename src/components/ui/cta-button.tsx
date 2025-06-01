"use client"

import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
  targetId?: string
}

export function CTAButton({ 
  children, 
  variant = "default", 
  size = "default",
  className,
  targetId = "contact-form"
}: CTAButtonProps) {
  const handleClick = () => {
    scrollToElement(targetId)
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(className)}
    >
      {children}
    </Button>
  )
} 