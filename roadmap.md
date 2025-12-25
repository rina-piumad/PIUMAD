# 🗺️ PIUM 디자인 에이전시 홈페이지 로드맵

## 📋 개요

| 항목 | 내용 |
|------|------|
| 업종 | 디자인 에이전시 (개인사업자) |
| 기술 | Next.js 14 + TypeScript + Sanity CMS |
| 기간 | 총 8~10주 |

---

## Phase 1-2: 기획 & 프로젝트 셋업 (5일) ✅ 완료

- [x] Next.js 프로젝트 초기화
- [x] 디렉토리 구조 구성
- [x] 글로벌 스타일 (CSS Variables)
- [x] 폰트 설정 (Pretendard)

---

## Phase 3: 레이아웃 (5일) ✅ 완료

- [x] `Sidebar` - 좌측 고정 사이드바
- [x] `Header` - 모바일 헤더
- [x] `MobileMenu` - 모바일 메뉴
- [x] `Footer` - 푸터
- [x] `Layout` - 전체 래퍼

---

## Phase 4: 메인 페이지 (7일) ✅ 완료

- [x] `HeroSlider` - 히어로 슬라이더
- [x] `PortfolioGrid` - 포트폴리오 그리드
- [x] `PortfolioCard` - 포트폴리오 카드
- [x] `CategoryIcons` - 카테고리 아이콘 (서비스 카드 대체)
- [x] `ContactForm` - 문의 폼 (메인에 포함)
- [ ] `ClientLogos` - 클라이언트 로고
- [ ] `CTABanner` - CTA 배너

---

## Phase 5: 서브 페이지 (10일) 🔄 진행중

- [x] 포트폴리오 목록 페이지 (`/portfolio`)
- [x] 포트폴리오 상세 페이지 (`/portfolio/[id]`)
- [x] `CategoryFilter` - 카테고리 필터 (점 스타일 탭)
- [x] `ImageGallery` - 이미지 갤러리
- [ ] 회사 소개 페이지 (`/about`)
- [ ] 서비스 페이지 (`/services`)
- [ ] 서비스 상세 페이지 (`/services/[id]`)

---

## Phase 6: 인터랙션 (3일) ⏳ 대기

- [ ] 스크롤 애니메이션 (Framer Motion)
- [ ] `FloatingMenu` - 플로팅 퀵 메뉴
- [ ] `ScrollToTop` - 맨 위로 버튼
- [ ] 호버 마이크로 인터랙션

---

## Phase 7: 백엔드 & CMS (7일) ⏳ 대기

- [ ] Sanity 프로젝트 생성
- [ ] 포트폴리오 스키마
- [ ] 카테고리 스키마
- [ ] 서비스 스키마
- [ ] 사이트 설정 스키마
- [ ] Next.js + Sanity 연동
- [ ] 문의 폼 이메일 연동

---

## Phase 8: 배포 (3일) ⏳ 대기

- [ ] Vercel 배포
- [ ] 도메인 연결
- [ ] SSL 설정
- [ ] `SEO` 컴포넌트
- [ ] 사이트맵 생성
- [ ] Google Analytics

---

## Phase 9: 결제 시스템 (추후, 2주) ⏳ 대기

- [ ] PG사 가입 (Toss Payments)
- [ ] 상품 스키마
- [ ] 주문 스키마
- [ ] `/shop` - 상품 목록
- [ ] `/cart` - 장바구니
- [ ] `/checkout` - 결제 페이지
- [ ] 결제 API 연동
- [ ] 웹훅 처리

---

## 🎯 마일스톤

```
Week 1   : [██████████] Phase 1-2 완료 ✅
Week 2   : [██████████] Phase 3 완료 ✅
Week 3-4 : [████████░░] Phase 4-5 진행중 🔄
Week 5   : [░░░░░░░░░░] Phase 6 대기
Week 6   : [░░░░░░░░░░] Phase 7 대기
Week 7   : [░░░░░░░░░░] Phase 8 완료 → 🚀 1차 런칭
Week 8-10: [░░░░░░░░░░] Phase 9 완료 → 💳 결제 오픈
```

---

## 📊 현재 진행률

| Phase | 상태 | 완료율 |
|-------|------|--------|
| Phase 1-2 | ✅ 완료 | 100% |
| Phase 3 | ✅ 완료 | 100% |
| Phase 4 | ✅ 거의 완료 | 85% |
| Phase 5 | 🔄 진행중 | 60% |
| Phase 6 | ⏳ 대기 | 0% |
| Phase 7 | ⏳ 대기 | 0% |
| Phase 8 | ⏳ 대기 | 0% |
| Phase 9 | ⏳ 대기 | 0% |

**전체 진행률: 약 45%**

---

## 🔜 다음 작업

1. 회사 소개 페이지 (`/about`)
2. 서비스 페이지 (`/services`)
3. 클라이언트 로고 섹션
4. CTA 배너
