"use client"

import { useState, useCallback } from "react"
import { isValidContact } from "@/lib/utils"

export interface FormData {
  name: string
  contact: string
  interests: string
  message: string
  privacyConsent: boolean
}

export interface FormErrors {
  name?: string
  contact?: string
  interests?: string
  message?: string
  privacyConsent?: string
}

export function useFormValidation(initialData: FormData) {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})

  const updateField = useCallback((field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // 해당 필드의 에러 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.'
    }

    // 연락처 검증
    if (!formData.contact.trim()) {
      newErrors.contact = '연락처를 입력해주세요.'
    } else if (!isValidContact(formData.contact)) {
      newErrors.contact = '올바른 이메일 또는 전화번호를 입력해주세요.'
    }

    // 관심사 검증
    if (!formData.interests.trim()) {
      newErrors.interests = '관심 있는 교정 종류를 선택해주세요.'
    }

    // 개인정보 동의 검증
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = '개인정보 수집 및 이용에 동의해주세요.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const resetForm = useCallback(() => {
    setFormData(initialData)
    setErrors({})
  }, [initialData])

  return {
    formData,
    errors,
    updateField,
    validateForm,
    resetForm
  }
} 