"use client"

import { AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  id: string
  label: string
  type?: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  rows?: number
  options?: readonly string[]
  className?: string
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  options = [],
  className
}: FormFieldProps) {
  const baseInputClasses = cn(
    "flex h-12 w-full rounded-xl border-2 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-100 transition-all duration-200",
    error ? "border-error-500" : "border-neutral-300",
    className
  )

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            className={cn(baseInputClasses, "h-auto min-h-[100px]")}
          />
        )
      case "select":
        return (
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
          >
            <option value="">선택해주세요</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )
      default:
        return (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={error ? "border-error-500" : ""}
          />
        )
    }
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-2">
        {label} {required && "*"}
      </label>
      {renderInput()}
      {error && (
        <p className="text-error-500 text-sm mt-1 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  )
} 