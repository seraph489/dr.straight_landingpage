"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <div 
            className="text-2xl font-bold text-primary-500 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Dr.Straight
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-neutral-600 hover:text-primary-500 transition-colors"
            >
              서비스
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-600 hover:text-primary-500 transition-colors"
            >
              고객후기
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-neutral-600 hover:text-primary-500 transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA 버튼 */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact-form')}
              size="default"
            >
              무료 상담 신청
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-neutral-600 hover:text-primary-500 transition-colors"
              >
                서비스
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-neutral-600 hover:text-primary-500 transition-colors"
              >
                고객후기
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-neutral-600 hover:text-primary-500 transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact-form')}
                size="default"
                className="w-full"
              >
                무료 상담 신청
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 