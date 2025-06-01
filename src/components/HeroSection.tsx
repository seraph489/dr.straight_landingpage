"use client"

import { useState, useEffect, useMemo } from "react"
import { CTAButton } from "@/components/ui/cta-button"
import { HERO_IMAGES } from "@/constants"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [])

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? HERO_IMAGES.length - 1 : currentImageIndex - 1)
  }

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex === HERO_IMAGES.length - 1 ? 0 : currentImageIndex + 1)
  }

  // 인라인 스타일을 Tailwind 클래스로 변환
  const sliderTransform = useMemo(() => ({
    transform: `translateX(-${currentImageIndex * 100}%)`
  }), [currentImageIndex])

  return (
    <section id="hero" className="bg-gradient-to-br from-neutral-50 to-secondary-100 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                치아가 바르면<br />
                <span className="text-primary-500">인상이 달라집니다</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                교정과 전문의가 설계한 나만의 교정 플랜<br />
                3D 디지털 기술로 예측 가능한 교정
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="text-lg">
                무료 상담 신청하기
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg"
                targetId="services"
                className="text-lg"
              >
                서비스 알아보기
              </CTAButton>
            </div>

            <div className="flex items-center space-x-8 text-sm text-neutral-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span>교정과 전문의 직접 진단</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span>3D 시뮬레이션 제공</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* 이미지 슬라이더 컨테이너 */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative w-full aspect-[16/10]">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={sliderTransform}
                >
                  {HERO_IMAGES.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                    >
                      <img 
                        src={image.src}
                        className="w-full h-full object-cover" 
                        alt={image.alt}
                      />
                      {/* 이미지 오버레이 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 이미지 인디케이터 */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-110",
                      index === currentImageIndex 
                        ? "bg-white shadow-lg scale-110" 
                        : "bg-white/60 hover:bg-white/80"
                    )}
                  />
                ))}
              </div>

              {/* 네비게이션 화살표 */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* 배경 장식 요소 */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 