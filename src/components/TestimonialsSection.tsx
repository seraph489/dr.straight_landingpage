"use client"

import { StarRating } from "@/components/ui/star-rating"
import { TESTIMONIALS, STATS, DOCTOR_INFO } from "@/constants"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            고객들의 생생한 후기
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Dr.Straight에서 교정 치료를 받은 고객들의 실제 경험담을 들어보세요
          </p>
        </div>

        {/* 의료진 소개 */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  교정과 전문의가 직접 진료합니다
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  풍부한 임상 경험과 해외 연수를 통한 최신 교정 기술로 정확한 진단과 개인 맞춤 치료를 제공합니다. 
                  대학병원급 시설과 최신 3D 디지털 장비로 안전하고 효과적인 교정 치료를 받으실 수 있습니다.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600">15년+</div>
                    <div className="text-sm text-neutral-600">교정 전문 경력</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-600">1,200+</div>
                    <div className="text-sm text-neutral-600">교정 치료 완료</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center space-y-6">
                  {/* 개인 프로필 사진 */}
                  <div className="relative">
                    <img 
                      src={DOCTOR_INFO.profileImage}
                      alt={`${DOCTOR_INFO.name} 프로필`}
                      className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      원장
                    </div>
                  </div>
                  
                  {/* 의료진 정보 */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">{DOCTOR_INFO.name}</h4>
                    <p className="text-neutral-600 mb-3">{DOCTOR_INFO.englishName}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm text-neutral-500 text-left max-w-2xl">
                      {DOCTOR_INFO.credentials.map((credential, index) => (
                        <p key={index} className="text-xs leading-relaxed">• {credential}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 고객 후기 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.age}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.treatment}
                </span>
              </div>
              
              <p className="text-neutral-700 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 