## 교정 치료 리드 수집 랜딩 페이지 정보 아키텍처 (IA) 문서

**문서 버전:** 1.0
**최종 수정일:** 2025년 6월 1일
**작성자:** AI Assistant (Google Gemini)
**검토자:** CTO, UX Designer

-----

### 목차

1.  [사이트 맵](https://www.google.com/search?q=%231-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%B5)
2.  [사용자 흐름](https://www.google.com/search?q=%232-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%9D%90%EB%A6%84)
3.  [네비게이션 구조](https://www.google.com/search?q=%233-%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98-%EA%B5%AC%EC%A1%B0)
4.  [페이지 계층 구조](https://www.google.com/search?q=%234-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0)
5.  [콘텐츠 조직화](https://www.google.com/search?q=%235-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%A1%B0%EC%A7%81%ED%99%94)
6.  [인터랙션 패턴](https://www.google.com/search?q=%236-%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98-%ED%8C%A8%ED%84%B4)
7.  [구조](https://www.google.com/search?q=%237-URL-%EA%B5%AC%EC%A1%B0)
8.  [컴포넌트 계층 구조](https://www.google.com/search?q=%238-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0)

-----

### 1\. 사이트 맵

본 랜딩 페이지는 단일 페이지 애플리케이션(SPA)으로 구성되므로, 전통적인 다중 페이지 사이트 맵과는 다릅니다. 주요 콘텐츠 섹션들이 하나의 페이지 내에 순차적으로 배치되며, 네비게이션은 페이지 내 해당 섹션으로 이동하는 앵커 링크 방식입니다.

```
메인 랜딩 페이지 (/)
  ├── Hero 섹션 (#hero)
  ├── 서비스 소개 (#services)
  │   └── 교정 치료의 장점
  │   └── 제공되는 치료 옵션 (예: 투명교정, 일반교정, 부분교정)
  ├── 고객 후기 (#testimonials)
  ├── 자주 묻는 질문 (FAQ) (#faq)
  ├── 상담 신청 폼 (#contact-form)
  └── 푸터 (Footer)
      ├── 개인정보처리방침 (별도 페이지 링크 또는 모달)
      └── 이용약관 (선택사항, 별도 페이지 링크 또는 모달)
```

`sitemap.xml` 파일은 검색 엔진 최적화(SEO)를 위해 다음과 같이 구성됩니다:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  </urlset>
```

### 2\. 사용자 흐름

사용자는 주로 검색 엔진, 온라인 광고, 또는 소셜 미디어를 통해 랜딩 페이지에 유입됩니다. 목표는 사용자가 페이지 내 정보를 탐색하고 최종적으로 상담 신청 폼을 작성하여 제출하는 것입니다.

```mermaid
graph TD
    A[사용자 유입] --> B{랜딩 페이지 로드};
    B --> C[Hero 섹션 확인: 핵심 메시지 및 CTA 인지];
    C --> D{네비게이션 또는 스크롤};
    D --> E[서비스 소개 탐색];
    D --> F[고객 후기 확인];
    D --> G[FAQ 확인];
    D --> H[상담 신청 폼으로 이동];
    E --> H;
    F --> H;
    G --> H;
    H --> I{폼 작성};
    I -- 유효성 검사 실패 --> J[오류 메시지 확인 및 수정];
    J --> I;
    I -- 유효성 검사 성공 --> K[폼 제출 (Make.com 웹훅으로 데이터 전송)];
    K --> L[성공 메시지 확인 / 감사 페이지 (또는 모달)];
    K -- 전송 실패 (네트워크 등) --> M[오류 메시지 (재시도 안내)];
    M --> K;
```

**주요 시나리오:**

1.  **직접 방문/광고 클릭:** 사용자가 URL을 직접 입력하거나 광고를 클릭하여 페이지에 접속, 주요 정보 확인 후 상담 신청.
2.  **검색 엔진 유입:** 특정 교정 관련 키워드로 검색 후 페이지에 유입, 콘텐츠를 탐색하며 신뢰를 얻고 상담 신청.
3.  **정보 탐색 후 이탈:** 사용자가 정보를 탐색하지만, 폼을 작성하지 않고 이탈. (이탈 원인 분석 필요)

### 3\. 네비게이션 구조

단일 페이지 내 섹션 이동을 위한 탑바(Topbar) 네비게이션을 사용합니다. 모바일에서는 공간 효율성을 위해 햄버거 메뉴 또는 유사한 형태로 제공됩니다.

**Desktop:**

```
+---------------------------------------------------------------------------------+
| 로고 (좌측)                 | 소개 | 서비스 | 후기 | FAQ | 상담 신청 (우측 CTA 버튼) |
+---------------------------------------------------------------------------------+
```

  * **로고:** 클릭 시 페이지 최상단(\#hero)으로 이동.
  * **메뉴 항목 (소개, 서비스, 후기, FAQ):** 각 해당 섹션으로 부드럽게 스크롤 이동 (앵커 링크).
  * **상담 신청 (CTA 버튼):** 클릭 시 상담 신청 폼(\#contact-form) 섹션으로 바로 이동.

**Mobile:**

```
+---------------------------------------------+
| 로고 (좌측)                 | 메뉴 아이콘 (우측) |
+---------------------------------------------+

// 메뉴 아이콘 클릭 시 (오버레이 또는 드롭다운 형태)
+-------------------+
| (X 닫기 버튼)     |
+-------------------+
| 소개              |
| 서비스            |
| 후기              |
| FAQ               |
| 상담 신청 (CTA)   |
+-------------------+
```

  * 모바일에서는 가시적인 CTA 버튼이 네비게이션 외에 Hero 섹션 등 주요 위치에 반복적으로 노출될 수 있습니다.

### 4\. 페이지 계층 구조

단일 페이지이므로 전통적인 의미의 페이지 계층은 없습니다. 대신 콘텐츠 섹션의 논리적 흐름이 중요합니다.

```
0단계: 랜딩 페이지 (Homepage - /)
  └ 1단계: Hero 섹션 (#hero)
  └ 1단계: 서비스 소개 섹션 (#services)
  └ 1단계: 고객 후기 섹션 (#testimonials)
  └ 1단계: FAQ 섹션 (#faq)
  └ 1단계: 상담 신청 폼 섹션 (#contact-form)
  └ 1단계: 푸터 (Footer)
      └ 2단계: 개인정보처리방침 (필요시 별도 페이지 또는 모달)
      └ 2단계: 이용약관 (필요시 별도 페이지 또는 모달)
```

### 5\. 콘텐츠 조직화

각 섹션은 사용자의 정보 습득 및 의사 결정 흐름에 맞춰 구성되며, SEO 키워드를 자연스럽게 포함합니다.

| 섹션명 (ID)         | 주요 콘텐츠                                                                                                | CTA (Call To Action)             | SEO 고려사항                                                                  |
| :------------------ | :------------------------------------------------------------------------------------------------------- | :------------------------------- | :---------------------------------------------------------------------------- |
| **Hero (`#hero`)** | - 매력적인 헤드라인 (예: "자신감 있는 미소를 되찾으세요")\<br\>- 간결한 부가 설명 (교정 치료의 핵심 가치)\<br\>- 시각적 요소 (고품질 이미지/일러스트) | "무료 상담 신청하기" (폼으로 이동) | 타겟 키워드 (예: 교정치과, 치아교정) 포함, H1 태그 사용                               |
| **서비스 소개 (`#services`)** | - 교정 치료의 전반적인 장점 및 필요성\<br\>- 제공하는 교정 치료 종류 (투명교정, 일반교정, 부분교정) 와 각 특징\<br\>- 간략한 치료 과정 소개 | "나에게 맞는 치료법은?" (폼으로 이동 유도) | 관련 키워드 (예: 투명교정 비용, 교정 기간) 자연스럽게 녹이기, H2/H3 태그 사용        |
| **고객 후기 (`#testimonials`)** | - 실제 고객의 긍정적인 경험담 (사진 포함 시 신뢰도 향상)\<br\>- 이름 (이니셜 처리 가능), 치료 종류 명시 | "나도 경험하기" (폼으로 이동)       | "교정 후기", "만족도" 등 긍정적 감성 키워드 연관                                  |
| **FAQ (`#faq`)** | - 예상 비용, 치료 기간, 통증, 관리 방법 등 자주 묻는 질문과 답변\<br\>- 아코디언 형태로 구성하여 가독성 증진    | "더 궁금한 점 문의하기" (폼으로 이동) | 사용자들이 실제로 검색하는 질문 형식의 키워드 활용 (Long-tail keywords)             |
| **상담 신청 폼 (`#contact-form`)** | - 이름, 연락처, 상담 희망 시간 등 최소한의 정보 입력 필드\<br\>- 개인정보 수집 및 이용 동의 체크박스\<br\>- 신청 완료 시 감사 메시지 | "상담 신청 완료하기" (폼 제출)    | 폼 주변에 신뢰를 줄 수 있는 문구 (예: "빠른 시간 내 연락드리겠습니다")                |
| **푸터 (Footer)** | - 병원/회사 정보 (상호명, 대표자, 사업자등록번호, 주소, 연락처)\<br\>- Copyright\<br\>- 개인정보처리방침 링크\<br\>- (선택) 이용약관 링크 | 없음                             | 지역명 + 병원명 키워드 포함 가능                                                     |

**개인정보처리방침/이용약관:**

  * 필수적인 법적 고지 사항입니다.
  * 별도의 간단한 페이지로 구성하거나, 모달 창으로 표시할 수 있습니다.
  * SEO 우선순위는 낮지만, `noindex` 처리하지 않고 검색 엔진이 크롤링할 수 있도록 합니다.

### 6\. 인터랙션 패턴

**공통:**

  * **스크롤 스파이 (Scroll Spy):** 스크롤에 따라 현재 보이는 섹션에 해당하는 네비게이션 메뉴 활성화.
  * **부드러운 스크롤 (Smooth Scroll):** 네비게이션 메뉴 클릭 시 해당 섹션으로 부드럽게 이동.
  * **반응형 디자인:** 모든 인터랙션은 모바일 환경에 최적화 (터치 영역, 가독성 등).

**섹션별 주요 인터랙션:**

  * **Hero 섹션:**
      * CTA 버튼 클릭: `#contact-form`으로 스크롤.
  * **네비게이션:**
      * **Desktop:** 메뉴 항목 호버 시 약간의 시각적 피드백, 클릭 시 해당 섹션으로 스크롤.
      * **Mobile:** 햄버거 아이콘 클릭 시 메뉴 펼쳐짐/닫힘. 메뉴 항목 클릭 시 해당 섹션으로 스크롤 후 메뉴 자동 닫힘.
  * **FAQ 섹션:**
      * 질문 클릭/탭 시 답변 영역 펼쳐짐/닫힘 (아코디언 UI).
  * **상담 신청 폼:**
      * **입력 필드 포커스:** 포커스 시 시각적 강조 (예: 테두리 색상 변경).
      * **실시간 유효성 검사 (Client-side validation):** 필수 입력 누락, 형식 오류(이메일, 전화번호) 시 즉각적인 피드백.
      * **제출 버튼:** 클릭 시 데이터 Make.com 웹훅으로 전송.
          * **성공 시:** "신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다."와 같은 성공 메시지 표시.
          * **실패 시:** "오류가 발생했습니다. 다시 시도해주세요."와 같은 오류 메시지 표시.
      * **개인정보 동의:** 체크박스 클릭 인터랙션.

**내부/외부 링크 전략:**

  * **내부 링크 (Internal Linking):**
      * 모든 네비게이션 링크는 페이지 내부의 특정 섹션 ID를 가리키는 앵커 링크 (`#section-id`)입니다.
      * 콘텐츠 내에서 관련 있는 다른 섹션으로 이동을 유도하는 텍스트 링크 사용 가능 (예: 서비스 소개에서 "자세한 비용은 FAQ를 참고하세요").
      * 푸터의 개인정보처리방침/이용약관 링크 (만약 모달이 아닌 별도 페이지로 구성 시).
  * **외부 링크 (External Linking):**
      * **Make.com 웹훅:** 상담 신청 폼 데이터 전송 시 사용되는 유일한 주요 외부 API 호출입니다. 사용자에게 직접 노출되는 링크는 아닙니다.
      * (선택사항) 병원의 소셜 미디어 채널 링크 (푸터 등에 아이콘 형태로 배치).
      * (선택사항) 지도 서비스 링크 (병원 위치 안내 시).

### 7\. URL 구조

단일 페이지이므로 기본 URL은 루트(`/`) 또는 지정된 경로를 사용합니다.

  * **메인 페이지 URL:** `https://yourdomain.com/`
      * 만약 특정 캠페인을 위한 랜딩페이지라면: `https://yourdomain.com/ortho-campaign/`
  * **섹션 앵커 URL:**
      * `https://yourdomain.com/#hero`
      * `https://yourdomain.com/#services`
      * `https://yourdomain.com/#testimonials`
      * `https://yourdomain.com/#faq`
      * `https://yourdomain.com/#contact-form`
  * **SEO 파일 URL:**
      * `https://yourdomain.com/sitemap.xml`
      * `https://yourdomain.com/robots.txt`
  * **법적 고지 페이지 (별도 페이지로 존재 시):**
      * `https://yourdomain.com/privacy`
      * `https://yourdomain.com/terms`

`robots.txt` 예시:

```
User-agent: *
Allow: /
Disallow: /cgi-bin/ # 예시: 불필요한 경로 차단
Sitemap: https://yourdomain.com/sitemap.xml
```

### 8\. 컴포넌트 계층 구조

재사용 가능한 UI 컴포넌트 기반으로 페이지를 구성하여 개발 효율성과 유지보수성을 높입니다. (React, Vue, Angular 등 컴포넌트 기반 프레임워크 사용 가정)

```
App (최상위 컴포넌트)
  ├── HeaderComponent
  │   ├── LogoImage
  │   └── NavigationComponent
  │       ├── NavLinkItem (반복) (Desktop)
  │       └── HamburgerMenuComponent (Mobile)
  │           └── NavLinkItem (반복)
  ├── MainContentComponent
  │   ├── HeroSectionComponent
  │   │   ├── HeadlineText
  │   │   ├── SubtitleText
  │   │   └── CTAButtonComponent
  │   ├── ServicesSectionComponent
  │   │   ├── SectionTitleComponent
  │   │   └── ServiceItemComponent (반복)
  │   │       ├── ServiceIcon
  │   │       ├── ServiceTitle
  │   │       └── ServiceDescription
  │   ├── TestimonialsSectionComponent
  │   │   ├── SectionTitleComponent
  │   │   └── TestimonialCardComponent (반복)
  │   │       ├── TestimonialImage (선택)
  │   │       ├── TestimonialQuote
  │   │       └── TestimonialAuthor
  │   ├── FAQSectionComponent
  │   │   ├── SectionTitleComponent
  │   │   └── AccordionComponent
  │   │       └── AccordionItemComponent (반복)
  │   │           ├── AccordionQuestion
  │   │           └── AccordionAnswer
  │   ├── ContactFormSectionComponent
  │   │   ├── SectionTitleComponent
  │   │   └── LeadFormComponent
  │   │       ├── InputFieldComponent (이름, 연락처 등 반복)
  │   │       │   ├── InputLabel
  │   │       │   └── TextInput / SelectInput
  │   │       ├── CheckboxComponent (개인정보 동의)
  │   │       └── SubmitButtonComponent
  ├── FooterComponent
  │   ├── CompanyInfoText
  │   ├── CopyrightText
  │   └── LegalLink (개인정보처리방침 등)
  └── (선택) ModalComponent (개인정보처리방침 등 팝업으로 처리 시)
```

이 컴포넌트 구조는 예시이며, 실제 개발 시 더 세분화되거나 통합될 수 있습니다. 각 컴포넌트는 자체적인 스타일과 로직을 가질 수 있으며, 반응형 처리를 내부에 포함합니다.

-----

**문서 종료**