# UI/UX 디자인 가이드

## 목차
1. [디자인 시스템 개요](#디자인-시스템-개요)
2. [TailwindCSS용 컬러 팔레트](#tailwindcss용-컬러-팔레트)
3. [주요 페이지별 설계](#주요-페이지별-설계)
4. [레이아웃 컴포넌트 설명](#레이아웃-컴포넌트-설명)
5. [인터랙션 패턴 정의](#인터랙션-패턴-정의)
6. [TailwindCSS 브레이크포인트](#tailwindcss-브레이크포인트)
7. [WCAG 2.2 접근성 가이드라인](#wcag-22-접근성-가이드라인)

---

## 디자인 시스템 개요

### 디자인 철학
현대적이고 신뢰할 수 있는 웰니스 중심의 미니멀 디자인을 추구합니다. 사용자에게 평온함과 깔끔함을 전달하며, 제품 중심의 레이아웃으로 핵심 가치를 명확히 소통합니다.

### 핵심 가치
- **미니멀리즘**: 불필요한 요소를 제거하고 핵심에 집중
- **신뢰성**: 일관성 있는 디자인 언어로 브랜드 신뢰도 구축
- **웰니스**: 사용자의 심리적 안정감을 고려한 색상과 형태
- **제품 중심**: 명확한 정보 전달과 직관적인 사용자 경험

### 디자인 키워드
`modern` `calm` `clean` `trustworthy` `wellness` `curved layout` `product-centric`

### 타이포그래피
- **주 폰트**: Pretendard (웹폰트)
- **보조 폰트**: Apple SD Gothic Neo (시스템 폰트)
- **폰트 스택**: `'Pretendard', 'Apple SD Gothic Neo', sans-serif`

---

## TailwindCSS용 컬러 팔레트

### Primary Colors (주 색상)
브랜드의 핵심 색상으로 CTA 버튼, 링크, 액센트 요소에 사용됩니다.

| Color | Variable | HEX | 사용처 |
|-------|----------|-----|--------|
| primary-50 | `bg-primary-50` | #EFF6FF | 배경, 호버 상태 |
| primary-100 | `bg-primary-100` | #DBEAFE | 연한 배경 |
| primary-200 | `bg-primary-200` | #BFDBFE | 보조 요소 |
| primary-300 | `bg-primary-300` | #93C5FD | 비활성 상태 |
| primary-400 | `bg-primary-400` | #60A5FA | 보조 버튼 |
| primary-500 | `bg-primary-500` | #1E40AF | 주 브랜드 색상 |
| primary-600 | `bg-primary-600` | #1E3A8A | 호버 상태 |
| primary-700 | `bg-primary-700` | #1E3A8A | 활성 상태 |
| primary-800 | `bg-primary-800` | #1E40AF | 강조 텍스트 |
| primary-900 | `bg-primary-900` | #1E3A8A | 헤더, 제목 |

### Neutral Colors (중성 색상)
텍스트, 배경, 보더 등 기본적인 UI 요소에 사용됩니다.

| Color | Variable | HEX | 사용처 |
|-------|----------|-----|--------|
| neutral-50 | `bg-neutral-50` | #FAFAFA | 페이지 배경 |
| neutral-100 | `bg-neutral-100` | #F5F5F5 | 카드 배경 |
| neutral-200 | `bg-neutral-200` | #E5E5E5 | 구분선, 보더 |
| neutral-300 | `bg-neutral-300` | #D4D4D4 | 비활성 요소 |
| neutral-400 | `bg-neutral-400` | #A3A3A3 | 플레이스홀더 |
| neutral-500 | `bg-neutral-500` | #737373 | 보조 텍스트 |
| neutral-600 | `bg-neutral-600` | #525252 | 일반 텍스트 |
| neutral-700 | `bg-neutral-700` | #404040 | 제목 텍스트 |
| neutral-800 | `bg-neutral-800` | #262626 | 헤더 텍스트 |
| neutral-900 | `bg-neutral-900` | #171717 | 강조 제목 |

### Accent Colors (액센트 색상)
알림, 성공, 경고, 오류 상태를 나타내는 색상입니다.

| Color | Variable | HEX | 사용처 |
|-------|----------|-----|--------|
| success-500 | `bg-success-500` | #10B981 | 성공 메시지, 완료 상태 |
| warning-500 | `bg-warning-500` | #F59E0B | 경고 메시지 |
| error-500 | `bg-error-500` | #EF4444 | 오류 메시지, 삭제 버튼 |
| info-500 | `bg-info-500` | #3B82F6 | 정보 메시지, 알림 |

### Secondary Colors (보조 색상)
웰니스 테마를 강화하는 부드러운 보조 색상입니다.

| Color | Variable | HEX | 사용처 |
|-------|----------|-----|--------|
| secondary-100 | `bg-secondary-100` | #F0F8F4 | 웰니스 섹션 배경 |
| secondary-200 | `bg-secondary-200` | #E0F2E8 | 카드 배경 강조 |
| secondary-500 | `bg-secondary-500` | #6EE7B7 | 웰니스 액센트 |

---

## 주요 페이지별 설계

### 1. 메인 페이지 (홈)

**페이지 목적**: 브랜드 소개 및 주요 제품/서비스 홍보

**핵심 컴포넌트**:
- Hero Section (제품 중심 비주얼)
- 주요 기능 소개 섹션
- 고객 후기 (곡선형 레이아웃)
- CTA 섹션

**섹션별 레이아웃 구조**:
```html
<!-- Hero Section -->
<section class="bg-gradient-to-br from-neutral-50 to-secondary-100 py-20">
  <div class="container mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h1 class="text-5xl font-bold text-neutral-900">제품명</h1>
        <p class="text-xl text-neutral-600">제품 설명</p>
        <button class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl">
          지금 시작하기
        </button>
      </div>
      <div class="relative">
        <img src="https://picsum.photos/seed/product/600/400" 
             class="rounded-3xl shadow-2xl" alt="제품 이미지">
      </div>
    </div>
  </div>
</section>
```

### 2. 제품 상세 페이지

**페이지 목적**: 제품 정보 제공 및 구매 전환 유도

**핵심 컴포넌트**:
- 제품 갤러리
- 상세 정보 탭
- 비교 차트 (클리피씨 2G 스타일)
- 구매 CTA

**섹션별 레이아웃 구조**:
```html
<!-- 제품 비교 섹션 -->
<section class="py-16 bg-neutral-50">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">제품 비교</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-8 rounded-3xl shadow-lg">
        <img src="https://picsum.photos/seed/product1/400/300" 
             class="w-full rounded-2xl mb-6">
        <h3 class="text-2xl font-bold mb-4">기존 제품</h3>
        <ul class="space-y-2 text-neutral-600">
          <li>• 기능 1</li>
          <li>• 기능 2</li>
        </ul>
      </div>
      <div class="bg-primary-50 p-8 rounded-3xl shadow-lg border-2 border-primary-200">
        <img src="https://picsum.photos/seed/product2/400/300" 
             class="w-full rounded-2xl mb-6">
        <h3 class="text-2xl font-bold mb-4 text-primary-600">신제품</h3>
        <ul class="space-y-2 text-neutral-700">
          <li class="flex items-center"><span class="text-success-500 mr-2">✓</span> 향상된 기능 1</li>
          <li class="flex items-center"><span class="text-success-500 mr-2">✓</span> 새로운 기능 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### 3. 고객 후기 페이지

**페이지 목적**: 사회적 증명을 통한 신뢰도 구축

**핵심 컴포넌트**:
- 곡선형 후기 카드 레이아웃
- 평점 시스템
- 필터링 기능

**섹션별 레이아웃 구조**:
```html
<!-- 곡선형 후기 섹션 -->
<section class="py-16 bg-gradient-to-br from-secondary-100 to-neutral-50 overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="grid lg:grid-cols-3 gap-8">
      <div class="transform rotate-3 bg-white p-6 rounded-3xl shadow-lg">
        <div class="flex items-center mb-4">
          <img src="https://picsum.photos/seed/user1/60/60" 
               class="w-12 h-12 rounded-full mr-4">
          <div>
            <h4 class="font-bold">김○○</h4>
            <div class="text-warning-500">★★★★★</div>
          </div>
        </div>
        <p class="text-neutral-600">"정말 만족스러운 제품입니다."</p>
      </div>
      <div class="transform -rotate-2 bg-white p-6 rounded-3xl shadow-lg">
        <!-- 후기 카드 2 -->
      </div>
      <div class="transform rotate-1 bg-white p-6 rounded-3xl shadow-lg">
        <!-- 후기 카드 3 -->
      </div>
    </div>
  </div>
</section>
```

---

## 레이아웃 컴포넌트 설명

### Header 컴포넌트
```html
<header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold text-primary-500">로고</div>
      <div class="hidden md:flex space-x-8">
        <a href="#" class="text-neutral-600 hover:text-primary-500 transition-colors">홈</a>
        <a href="#" class="text-neutral-600 hover:text-primary-500 transition-colors">제품</a>
        <a href="#" class="text-neutral-600 hover:text-primary-500 transition-colors">고객후기</a>
      </div>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl">
        문의하기
      </button>
    </div>
  </nav>
</header>
```

### Footer 컴포넌트
```html
<footer class="bg-neutral-900 text-neutral-300 py-12">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-white text-xl font-bold mb-4">회사명</h3>
        <p class="text-neutral-400">간단한 회사 소개</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">제품</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition-colors">제품 1</a></li>
          <li><a href="#" class="hover:text-white transition-colors">제품 2</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">지원</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition-colors">고객센터</a></li>
          <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">연락처</h4>
        <p class="text-neutral-400">contact@company.com</p>
      </div>
    </div>
  </div>
</footer>
```

### Card 컴포넌트
```html
<!-- 기본 카드 -->
<div class="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
  <img src="https://picsum.photos/seed/card/400/250" 
       class="w-full rounded-2xl mb-4" alt="카드 이미지">
  <h3 class="text-xl font-bold mb-2">카드 제목</h3>
  <p class="text-neutral-600 mb-4">카드 설명</p>
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-xl">
    자세히 보기
  </button>
</div>

<!-- 웰니스 테마 카드 -->
<div class="bg-gradient-to-br from-secondary-100 to-white rounded-3xl shadow-lg p-6">
  <div class="text-secondary-500 text-4xl mb-4">🧘‍♀️</div>
  <h3 class="text-xl font-bold mb-2">웰니스 기능</h3>
  <p class="text-neutral-600">마음의 평안을 위한 기능 설명</p>
</div>
```

### 반응형 그리드 시스템
```css
/* 모바일 우선 반응형 그리드 */
.responsive-grid {
  @apply grid grid-cols-1;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
  @apply gap-6;
}

/* 제품 중심 레이아웃 */
.product-layout {
  @apply grid grid-cols-1;
  @apply lg:grid-cols-2;
  @apply items-center;
  @apply gap-12;
}
```

---

## 인터랙션 패턴 정의

### Hover 상태
```css
/* 버튼 호버 */
.btn-primary {
  @apply bg-primary-500 text-white px-6 py-3 rounded-xl;
  @apply hover:bg-primary-600 hover:shadow-lg;
  @apply transition-all duration-300 ease-in-out;
  @apply transform hover:-translate-y-1;
}

/* 카드 호버 */
.card-hover {
  @apply transition-all duration-300 ease-in-out;
  @apply hover:shadow-xl hover:-translate-y-2;
}

/* 링크 호버 */
.link-hover {
  @apply text-neutral-600 hover:text-primary-500;
  @apply transition-colors duration-200;
  @apply relative;
}

.link-hover::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5;
  @apply bg-primary-500 transition-all duration-300;
  content: '';
}

.link-hover:hover::after {
  @apply w-full;
}
```

### Focus 상태
```css
/* 입력 필드 포커스 */
.input-focus {
  @apply border-neutral-300 focus:border-primary-500;
  @apply focus:ring-2 focus:ring-primary-100;
  @apply transition-all duration-200;
  @apply outline-none;
}

/* 버튼 포커스 */
.btn-focus {
  @apply focus:ring-4 focus:ring-primary-100;
  @apply focus:outline-none;
}
```

### Click 상태
```css
/* 버튼 클릭 */
.btn-click {
  @apply active:scale-95 active:bg-primary-700;
  @apply transition-transform duration-100;
}

/* 카드 클릭 */
.card-click {
  @apply active:scale-98;
  @apply transition-transform duration-100;
}
```

### Loading 상태
```css
/* 스피너 애니메이션 */
.loading-spinner {
  @apply animate-spin rounded-full h-8 w-8;
  @apply border-4 border-neutral-200 border-t-primary-500;
}

/* 버튼 로딩 상태 */
.btn-loading {
  @apply bg-neutral-400 cursor-not-allowed;
  @apply relative overflow-hidden;
}

.btn-loading::after {
  @apply absolute inset-0 bg-gradient-to-r;
  @apply from-transparent via-white/20 to-transparent;
  @apply animate-pulse;
  content: '';
}

/* 스켈레톤 로딩 */
.skeleton {
  @apply bg-neutral-200 animate-pulse rounded;
}
```

### 상태별 피드백
```css
/* 성공 상태 */
.state-success {
  @apply bg-success-50 border border-success-200;
  @apply text-success-700;
}

/* 경고 상태 */
.state-warning {
  @apply bg-warning-50 border border-warning-200;
  @apply text-warning-700;
}

/* 오류 상태 */
.state-error {
  @apply bg-error-50 border border-error-200;
  @apply text-error-700;
}

/* 정보 상태 */
.state-info {
  @apply bg-info-50 border border-info-200;
  @apply text-info-700;
}
```

---

## TailwindCSS 브레이크포인트

### 기본 브레이크포인트 설정
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '320px',   // 모바일
      'md': '768px',   // 태블릿
      'lg': '1024px',  // 데스크톱
      'xl': '1440px',  // 와이드 스크린
    }
  }
}
```

### 반응형 사용 가이드
```css
/* 모바일 우선 접근법 */
.responsive-text {
  @apply text-base;      /* 기본 (모바일) */
  @apply md:text-lg;     /* 태블릿 이상 */
  @apply lg:text-xl;     /* 데스크톱 이상 */
  @apply xl:text-2xl;    /* 와이드 스크린 */
}

.responsive-spacing {
  @apply p-4;            /* 모바일 */
  @apply md:p-6;         /* 태블릿 */
  @apply lg:p-8;         /* 데스크톱 */
  @apply xl:p-12;        /* 와이드 */
}

.responsive-grid {
  @apply grid-cols-1;    /* 모바일: 1열 */
  @apply md:grid-cols-2; /* 태블릿: 2열 */
  @apply lg:grid-cols-3; /* 데스크톱: 3열 */
  @apply xl:grid-cols-4; /* 와이드: 4열 */
}
```

### 컨테이너 최대 너비
```css
.container {
  @apply max-w-screen-sm mx-auto px-4;  /* 모바일 */
  @apply md:max-w-screen-md md:px-6;    /* 태블릿 */
  @apply lg:max-w-screen-lg lg:px-8;    /* 데스크톱 */
  @apply xl:max-w-screen-xl xl:px-12;   /* 와이드 */
}
```

---

## WCAG 2.2 접근성 가이드라인

### 명암비 체크리스트

#### AA 등급 (최소 기준)
| 텍스트 크기 | 배경색 | 텍스트 색상 | 명암비 | 상태 |
|-------------|--------|-------------|--------|------|
| 일반 텍스트 | `#FFFFFF` | `#404040` | 10.37:1 | ✅ 통과 |
| 일반 텍스트 | `#F5F5F5` | `#262626` | 12.63:1 | ✅ 통과 |
| 작은 텍스트 | `#FFFFFF` | `#525252` | 7.73:1 | ✅ 통과 |
| 링크 텍스트 | `#FFFFFF` | `#1E40AF` | 8.59:1 | ✅ 통과 |
| 버튼 텍스트 | `#1E40AF` | `#FFFFFF` | 8.59:1 | ✅ 통과 |

#### AAA 등급 (권장 기준)
| 텍스트 크기 | 배경색 | 텍스트 색상 | 명암비 | 상태 |
|-------------|--------|-------------|--------|------|
| 일반 텍스트 | `#FFFFFF` | `#262626` | 12.63:1 | ✅ 통과 |
| 큰 텍스트 | `#F5F5F5` | `#404040` | 9.34:1 | ✅ 통과 |

### 가독성 고려 지침

#### 1. 텍스트 가독성
```css
/* 권장 텍스트 스타일 */
.readable-text {
  @apply text-neutral-700;        /* 충분한 명암비 */
  @apply leading-relaxed;         /* 1.625 줄간격 */
  @apply tracking-normal;         /* 기본 자간 */
  @apply text-base;               /* 16px 기본 크기 */
}

/* 제목 텍스트 */
.heading-text {
  @apply text-neutral-900;        /* 높은 명암비 */
  @apply font-bold;               /* 굵은 글씨 */
  @apply leading-tight;           /* 타이트한 줄간격 */
}

/* 보조 텍스트 */
.secondary-text {
  @apply text-neutral-600;        /* 중간 명암비 */
  @apply text-sm;                 /* 작은 크기 */
  @apply leading-normal;          /* 기본 줄간격 */
}
```

#### 2. 버튼 접근성
```css
.accessible-button {
  @apply min-h-[44px] min-w-[44px];  /* 최소 터치 영역 */
  @apply focus:ring-4 focus:ring-primary-100; /* 포커스 표시 */
  @apply focus:outline-none;          /* 기본 아웃라인 제거 */
  @apply transition-all duration-200; /* 부드러운 전환 */
}

/* 텍스트와 아이콘 버튼 구분 */
.text-button {
  @apply px-6 py-3;                   /* 충분한 패딩 */
  @apply font-medium;                 /* 적절한 글씨 굵기 */
}

.icon-button {
  @apply p-3;                         /* 아이콘 주변 패딩 */
  @apply rounded-lg;                  /* 터치하기 쉬운 형태 */
}
```

#### 3. 폼 요소 접근성
```css
.accessible-input {
  @apply border-2 border-neutral-300; /* 명확한 경계 */
  @apply focus:border-primary-500;    /* 포커스 상태 표시 */
  @apply focus:ring-2 focus:ring-primary-100; /* 추가 포커스 표시 */
  @apply px-4 py-3;                   /* 충분한 패딩 */
  @apply text-neutral-700;            /* 가독성 있는 텍스트 색상 */
  @apply placeholder:text-neutral-400; /* 구분되는 플레이스홀더 */
}

/* 라벨과 입력 필드 연결 */
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply text-sm font-medium text-neutral-700;
  @apply block;                       /* 블록 레벨로 표시 */
}
```

#### 4. 색상 의존성 제거
```css
/* 상태를 색상뿐만 아니라 아이콘으로도 표시 */
.success-message {
  @apply bg-success-50 border-l-4 border-success-500;
  @apply text-success-700 p-4;
}

.success-message::before {
  content: "✓ ";                     /* 시각적 표시 추가 */
  @apply font-bold;
}

.error-message {
  @apply bg-error-50 border-l-4 border-error-500;
  @apply text-error-700 p-4;
}

.error-message::before {
  content: "⚠ ";                     /* 시각적 표시 추가 */
  @apply font-bold;
}
```

#### 5. 키보드 네비게이션
```css
/* 키보드로 접근 가능한 요소들 */
.keyboard-accessible {
  @apply focus:outline-none;
  @apply focus:ring-2 focus:ring-primary-500;
  @apply focus:ring-offset-2;
}

/* 건너뛰기 링크 */
.skip-link {
  @apply absolute -top-full left-4;
  @apply bg-primary-500 text-white px-4 py-2;
  @apply rounded-md z-50;
  @apply focus:top-4;                 /* 포커스 시 표시 */
}
```

### 접근성 체크리스트

- [ ] 모든 텍스트가 AA 등급 명암비 (4.5:1) 이상 충족
- [ ] 버튼과 링크의 최소 터치 영역 44px × 44px 확보
- [ ] 키보드만으로 모든 기능 접근 가능
- [ ] 포커스 표시가 명확하게 보임
- [ ] 색상에만 의존하지 않고 텍스트/아이콘으로 정보 전달
- [ ] 폼 라벨과 입력 필드가 적절히 연결됨
- [ ] 에러 메시지가 명확하고 이해하기 쉬움
- [ ] 이미지에 대체 텍스트(alt) 제공
- [ ] 건너뛰기 링크 제공 (헤더에서 메인 콘텐츠로)

---

### 6. 반응형 이미지 처리
```css
/* 반응형 이미지 */
.responsive-image {
  @apply w-full h-auto;
  @apply object-cover object-center;
  @apply rounded-2xl;
}

/* 제품 이미지 최적화 */
.product-image {
  @apply w-full;
  @apply aspect-video lg:aspect-square;
  @apply object-contain;
  @apply bg-neutral-50 p-4;
}

/* 아바타 이미지 */
.avatar-image {
  @apply w-12 h-12 rounded-full;
  @apply object-cover border-2 border-neutral-200;
}
```

### 스크린 리더 지원
```html
<!-- 스크린 리더를 위한 숨김 텍스트 -->
<span class="sr-only">시각적으로 숨겨진 설명 텍스트</span>

<!-- ARIA 라벨 사용 -->
<button aria-label="메뉴 열기" class="hamburger-button">
  <span class="sr-only">메뉴</span>
  <!-- 햄버거 아이콘 -->
</button>

<!-- 랜드마크 영역 정의 -->
<main role="main" aria-label="주요 콘텐츠">
  <!-- 메인 콘텐츠 -->
</main>

<aside role="complementary" aria-label="관련 정보">
  <!-- 사이드바 콘텐츠 -->
</aside>
```

---

## 사용 시 주의사항

### 성능 최적화
1. **이미지 최적화**: WebP 포맷 사용 권장, lazy loading 적용
2. **폰트 로딩**: `font-display: swap` 사용으로 FOIT 방지
3. **CSS 번들링**: 사용하지 않는 Tailwind 클래스 제거 (purge 설정)
4. **애니메이션**: `transform`과 `opacity`만 사용하여 리플로우 방지

### 브라우저 호환성
- **최소 지원**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Progressive Enhancement**: 구형 브라우저에서는 기본 스타일로 폴백
- **CSS Grid 지원**: Flexbox 폴백 제공

### 개발 가이드라인
1. **컴포넌트 재사용**: 동일한 스타일 패턴을 반복하지 말고 클래스 조합 활용
2. **네이밍 컨벤션**: BEM 방식보다는 Tailwind 유틸리티 클래스 우선
3. **커스텀 CSS 최소화**: Tailwind로 해결 가능한 스타일은 별도 CSS 작성 지양
4. **반응형 우선**: 모바일부터 설계하는 Mobile-First 접근법 준수

### 브랜드 일관성 유지
- **색상 사용**: 정의된 컬러 팔레트 외의 색상 사용 지양
- **타이포그래피**: 지정된 폰트 스택과 크기 체계 준수
- **간격 시스템**: Tailwind의 spacing scale (4px 단위) 사용
- **둥근 모서리**: 일관된 border-radius 값 사용 (xl: 12px, 2xl: 16px, 3xl: 24px)

---

## 결론

이 디자인 가이드는 미니멀하면서도 신뢰할 수 있는 웰니스 중심의 사용자 경험을 제공하기 위해 설계되었습니다. 

**핵심 원칙**:
- **사용자 중심**: 모든 디자인 결정은 사용성과 접근성을 우선으로 합니다
- **일관성**: 통일된 디자인 언어로 브랜드 신뢰성을 구축합니다
- **확장성**: 향후 기능 추가 시에도 유연하게 대응할 수 있는 시스템입니다
- **성능**: 빠른 로딩과 부드러운 인터랙션을 위한 최적화를 포함합니다

정기적인 사용성 테스트와 접근성 감사를 통해 이 가이드를 지속적으로 개선해 나가시기 바랍니다.

---

**문서 버전**: v1.0  
**최종 업데이트**: 2025년 6월  
**다음 검토 예정**: 2025년 9월