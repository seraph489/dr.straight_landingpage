"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTAButton } from "@/components/ui/cta-button"
import { FAQS } from "@/constants"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            교정 치료에 대해 궁금한 점들을 미리 확인해보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-50 rounded-2xl border-none px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-neutral-900 hover:text-primary-500 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                더 궁금한 점이 있으신가요?
              </h3>
              <p className="text-neutral-600 mb-6">
                교정과 전문의가 직접 상담해드립니다
              </p>
              <CTAButton className="bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-200">
                무료 상담 신청하기
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 