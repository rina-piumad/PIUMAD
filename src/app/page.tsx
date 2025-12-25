// Next.js Homepage
// 메인 페이지 (100gomidesign.com 스타일)

import { Layout } from '@/components/layout';
import { HeroSlider, CategoryIcons, PortfolioGrid } from '@/components/sections';
import { FloatingMenu, ScrollToTop } from '@/components/common';

// 히어로 슬라이더 데이터
const heroSlides = [
    {
        id: '1',
        title: '브랜딩 디자인',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
        badge: 'Since 2018',
    },
    {
        id: '2',
        title: '로고 디자인',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&q=80',
        badge: 'NEW',
    },
    {
        id: '3',
        title: '패키지 디자인',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1920&q=80',
    },
];

// 카테고리 아이콘 데이터
const categories = [
    { id: 'branding', label: '브랜딩', icon: '🎨' },
    { id: 'logo', label: '로고', icon: '✨' },
    { id: 'leaflet', label: '리플렛', icon: '📄' },
    { id: 'catalog', label: '카탈로그', icon: '📖' },
    { id: 'package', label: '패키지', icon: '📦' },
    { id: 'namecard', label: '명함', icon: '💳' },
    { id: 'signage', label: '간판', icon: '🏪' },
    { id: 'banner', label: '배너', icon: '🖼️' },
];

// 포트폴리오 데이터
const portfolioItems = [
    {
        id: '1',
        title: '카페 브랜드 리뉴얼',
        category: '브랜딩',
        thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80',
        slug: 'cafe-brand-renewal',
        workType: '브랜드 리뉴얼',
        client: '스타벅스 코리아',
        designer: 'PIUM',
    },
    {
        id: '2',
        title: '화장품 패키지 디자인',
        category: '패키지',
        thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
        slug: 'cosmetic-package',
        workType: '패키지 디자인',
        client: '아모레퍼시픽',
        designer: 'PIUM',
    },
    {
        id: '3',
        title: '테크 스타트업 로고',
        category: '로고',
        thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
        slug: 'tech-startup-logo',
        workType: '로고 제작',
        client: '토스',
        designer: 'PIUM',
    },
    {
        id: '4',
        title: '호텔 브랜드 아이덴티티',
        category: '브랜딩',
        thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80',
        slug: 'hotel-brand-identity',
        workType: '브랜드 아이덴티티',
        client: '신라호텔',
        designer: 'PIUM',
    },
    {
        id: '5',
        title: '패션 브랜드 리플렛',
        category: '리플렛',
        thumbnail: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80',
        slug: 'fashion-brand-leaflet',
        workType: '리플렛 디자인',
        client: '무신사',
        designer: 'PIUM',
    },
    {
        id: '6',
        title: '식품 회사 카탈로그',
        category: '카탈로그',
        thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
        slug: 'food-company-catalog',
        workType: '카탈로그 제작',
        client: 'CJ제일제당',
        designer: 'PIUM',
    },
];

export default function Home() {
    return (
        <Layout>
            {/* 히어로 슬라이더 */}
            <HeroSlider slides={heroSlides} />

            {/* 카테고리 아이콘 */}
            <CategoryIcons categories={categories} />

            {/* 포트폴리오 섹션 */}
            <section style={{
                padding: '48px 24px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '24px',
                    textAlign: 'center',
                    letterSpacing: '-0.02em'
                }}>
                    NEW PORTFOLIO
                </h2>
                <PortfolioGrid
                    items={portfolioItems}
                    columns={3}
                    showFilter={true}
                />
            </section>

            {/* 플로팅 메뉴 */}
            <FloatingMenu
                phone="1588-0000"
                kakao="https://pf.kakao.com/_example"
                instagram="https://instagram.com/pium_design"
            />

            {/* 맨 위로 버튼 */}
            <ScrollToTop />
        </Layout>
    );
}
