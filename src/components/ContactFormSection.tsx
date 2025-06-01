"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertCircle } from "lucide-react"
import { FormField } from "@/components/ui/form-field"
import { useFormValidation } from "@/hooks/use-form-validation"
import { INTEREST_OPTIONS } from "@/constants"

const INITIAL_FORM_DATA = {
  name: '',
  contact: '',
  interests: '',
  message: '',
  privacyConsent: false
}

export default function ContactFormSection() {
  const { formData, errors, updateField, validateForm, resetForm } = useFormValidation(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://hook.eu2.make.com/hotlg86opymj5fiu3goxn14bgifuswci', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          interests: formData.interests,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'Dr.Straight 랜딩페이지'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        resetForm()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              무료 상담 신청
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              교정과 전문의가 직접 상담해드립니다. 
              간단한 정보만 남겨주시면 빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 상담 신청 폼 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  id="name"
                  label="이름"
                  placeholder="이름을 입력해주세요"
                  value={formData.name}
                  onChange={(value) => updateField('name', value)}
                  error={errors.name}
                  required
                />

                <FormField
                  id="contact"
                  label="연락처 (이메일 또는 전화번호)"
                  placeholder="example@email.com 또는 010-1234-5678"
                  value={formData.contact}
                  onChange={(value) => updateField('contact', value)}
                  error={errors.contact}
                  required
                />

                <FormField
                  id="interests"
                  label="관심 있는 교정 종류"
                  type="select"
                  value={formData.interests}
                  onChange={(value) => updateField('interests', value)}
                  error={errors.interests}
                  options={INTEREST_OPTIONS}
                  required
                />

                <FormField
                  id="message"
                  label="추가 문의사항 (선택)"
                  type="textarea"
                  placeholder="궁금한 점이나 특별히 상담받고 싶은 내용이 있으시면 적어주세요"
                  value={formData.message}
                  onChange={(value) => updateField('message', value)}
                  rows={4}
                />

                {/* 개인정보 동의 */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) => updateField('privacyConsent', checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="privacy" className="text-sm text-neutral-700 cursor-pointer">
                      개인정보 수집 및 이용에 동의합니다. *
                    </label>
                    <p className="text-xs text-neutral-500 mt-1">
                      수집된 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
                    </p>
                    {errors.privacyConsent && (
                      <p className="text-error-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.privacyConsent}
                      </p>
                    )}
                  </div>
                </div>

                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg"
                >
                  {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                </Button>

                {/* 상태 메시지 */}
                {submitStatus === 'success' && (
                  <div className="bg-success-50 border border-success-200 rounded-xl p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3" />
                    <div>
                      <p className="text-success-700 font-medium">상담 신청이 완료되었습니다!</p>
                      <p className="text-success-600 text-sm">빠른 시일 내에 전문 상담원이 연락드리겠습니다.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-error-50 border border-error-200 rounded-xl p-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-error-500 mr-3" />
                    <div>
                      <p className="text-error-700 font-medium">전송 중 오류가 발생했습니다.</p>
                      <p className="text-error-600 text-sm">잠시 후 다시 시도해주세요.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* 상담 안내 정보 */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  상담 프로세스
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">상담 신청</h4>
                      <p className="text-neutral-600 text-sm">간단한 정보 입력 후 신청</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">전화 상담</h4>
                      <p className="text-neutral-600 text-sm">24시간 내 전문 상담원 연락</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">방문 예약</h4>
                      <p className="text-neutral-600 text-sm">편리한 시간에 방문 일정 조율</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">정밀 진단</h4>
                      <p className="text-neutral-600 text-sm">3D 스캔 및 전문의 진단</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-100 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  💡 상담 전 준비사항
                </h3>
                <ul className="space-y-2 text-neutral-700 text-sm">
                  <li>• 현재 치아 상태 사진 (선택사항)</li>
                  <li>• 과거 교정 경험 여부</li>
                  <li>• 희망하는 치료 기간</li>
                  <li>• 예산 범위</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 