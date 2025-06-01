"use client"

import { ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">Dr.Straight</h3>
            <p className="text-neutral-400 mb-4 leading-relaxed">
              교정, 바르게 시작합니다.<br />
              교정과 전문의가 설계한 나만의 교정 플랜으로<br />
              완벽한 미소를 완성하세요.
            </p>
            <div className="space-y-2 text-sm mb-6">
              <p>📍 서울특별시 강남구 테헤란로 123</p>
              <p>📞 02-1234-5678</p>
              <p>📧 contact@drstraight.co.kr</p>
            </div>
            
            {/* SNS 링크 */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">SNS 팔로우</h4>
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://blog.naver.com/kst-4-everyone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-xs font-bold text-white">
                    N
                  </div>
                  <span>네이버 블로그</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.youtube.com/@Dr.%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%8A%B8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span>유튜브</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.threads.com/@dr.str8ght" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932c0 3.518-.85 6.373-2.495 8.424C18.155 22.795 15.402 23.976 11.821 24h.365zm0-21.5c-2.817.019-4.993.906-6.47 2.635C4.259 6.864 3.5 9.222 3.5 12.068c0 2.846.759 5.204 2.216 6.933 1.477 1.729 3.653 2.616 6.47 2.635 2.817-.019 4.993-.906 6.47-2.635C19.741 17.272 20.5 14.914 20.5 11.932c0-2.846-.759-5.204-2.216-6.933C16.807 3.27 14.631 2.383 11.814 2.364l.372.136z"/>
                    </svg>
                  </div>
                  <span>Threads</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  투명교정
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  일반교정
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  부분교정
                </button>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('faq')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  자주 묻는 질문
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact-form')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  상담 신청
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('testimonials')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  고객 후기
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              <p>© 2024 Dr.Straight. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-white transition-colors">
                개인정보처리방침
              </button>
              <button className="hover:text-white transition-colors">
                이용약관
              </button>
            </div>
          </div>
          
          {/* 사업자 정보 */}
          <div className="mt-4 text-xs text-neutral-500 space-y-1">
            <p>상호명: Dr.Straight 치과의원 | 대표자: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123, 4층 | 전화: 02-1234-5678</p>
            <p>의료기관명: Dr.Straight 치과의원 | 의료진: 홍길동(교정과 전문의)</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 