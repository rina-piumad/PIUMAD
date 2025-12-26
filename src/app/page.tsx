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

// 카테고리 아이콘 데이터 (포트폴리오 메뉴와 동일)
const categories = [
    { id: 'sign', label: 'SIGN 디자인', icon: '🪧' },
    { id: 'banner', label: '현수막', icon: '🎌' },
    { id: 'catalog', label: '카탈로그', icon: '📖' },
    { id: 'leaflet', label: '리플렛', icon: '📄' },
    { id: 'flyer', label: '전단지 • 포스터', icon: '📃' },
    { id: 'cardnews', label: '카드뉴스', icon: '📱' },
    { id: 'namecard', label: '명함', icon: '💳' },
    { id: 'plaque', label: '상패', icon: '🏆' },
    { id: 'goods', label: '홍보 물품', icon: '🛍️' },
];

// 포트폴리오 데이터 (실제 이미지 사용)
const portfolioItems = [
    {
        id: '1',
        title: '클래식 명함 디자인',
        category: '명함',
        thumbnail: '/portfolio/명함/무제-4-04.jpg',
        slug: 'namecard-1',
        workType: '명함 디자인',
        client: '클라이언트',
        designer: 'PIUM',
    },
    {
        id: '2',
        title: 'AI 명함 디자인',
        category: '명함',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_3zrs5g3zrs5g3zrs.png',
        slug: 'namecard-2',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
    },
    {
        id: '3',
        title: '리플렛 디자인',
        category: '리플렛',
        thumbnail: '/portfolio/리플렛/Gemini_Generated_Image_3t0myp3t0myp3t0m.png',
        slug: 'leaflet-1',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
    },
    {
        id: '4',
        title: '전단지 디자인',
        category: '전단지',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212137.png',
        slug: 'flyer-1',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
    },
    {
        id: '5',
        title: '프리미엄 쇼핑백',
        category: '홍보 물품',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_3rjg3b3rjg3b3rjg.png',
        slug: 'goods-1',
        workType: '홍보물품 디자인',
        client: '기업 클라이언트',
        designer: 'PIUM',
    },
    {
        id: '6',
        title: '모던 쇼핑백',
        category: '홍보 물품',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_6bmctp6bmctp6bmc.png',
        slug: 'goods-2',
        workType: '홍보물품 디자인',
        client: '브랜드 클라이언트',
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

            {/* 새롭게 등록된 포트폴리오 */}
            <section style={{
                padding: '48px 24px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                        color: '#333'
                    }}>
                        NEW PORTFOLIO
                    </h2>
                    <p style={{ fontSize: '16px', color: '#888', margin: 0 }}>
                        새롭게 등록된 포트폴리오
                    </p>
                </div>
                <PortfolioGrid
                    items={portfolioItems}
                    columns={3}
                    showFilter={false}
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
