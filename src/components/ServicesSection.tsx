"use client"

import { CTAButton } from "@/components/ui/cta-button"
import { SERVICES } from "@/constants"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            나에게 맞는 교정 치료
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            개인의 치아 상태와 라이프스타일에 맞는 최적의 교정 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <div key={index} className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  인기
                </div>
              )}
              
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <CTAButton variant="outline" className="w-full">
                  상담 신청하기
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              어떤 교정이 나에게 맞을까요?
            </h3>
            <p className="text-neutral-600 mb-6">
              교정과 전문의가 직접 진단하여 가장 적합한 치료 방법을 제안해드립니다
            </p>
            <CTAButton size="lg">
              무료 상담 받기
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
} 