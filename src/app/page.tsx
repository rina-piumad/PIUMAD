// Next.js Homepage
// 메인 페이지 (100gomidesign.com 스타일)

import { Layout } from '@/components/layout';
import { HeroSlider, CategoryIcons, PortfolioGrid } from '@/components/sections';
import { FloatingMenu, ScrollToTop } from '@/components/common';
import { getLatestPortfolioItems } from '@/data/portfolioData';

// 히어로 슬라이더 데이터
const heroSlides = [
    {
        id: '1',
        title: 'SIGN 디자인',
        image: '/main-slides/sign-01.jpg',
        badge: 'Since 2018',
    },
    {
        id: '2',
        title: 'SIGN 디자인',
        image: '/main-slides/sign-02.jpg',
    },
    {
        id: '3',
        title: 'SIGN 디자인',
        image: '/main-slides/sign-03.jpg',
    },
    {
        id: '4',
        title: 'SIGN 디자인',
        image: '/main-slides/sign-04.jpg',
    },
];

// 카테고리 아이콘 데이터 (포트폴리오 메뉴와 동일)
const categories = [
    { id: 'logo', label: 'LOGO', icon: '🎨', href: '/portfolio?category=logo' },
    { id: 'sign', label: 'SIGN 디자인', icon: '🪧', href: '/portfolio?category=sign' },
    { id: 'banner', label: '현수막', icon: '🎌', href: '/portfolio?category=banner' },
    { id: 'catalog', label: '카탈로그 • 책자', icon: '📖', href: '/portfolio?category=catalog' },
    { id: 'leaflet', label: '리플렛', icon: '📄', href: '/portfolio?category=leaflet' },
    { id: 'flyer', label: '전단지 • 포스터', icon: '📃', href: '/portfolio?category=flyer' },
    { id: 'cardnews', label: '카드뉴스 • SNS', icon: '📱', href: '/portfolio?category=cardnews' },
    { id: 'namecard', label: '명함', icon: '💳', href: '/portfolio?category=namecard' },
    { id: 'plaque', label: '상패', icon: '🏆', href: '/portfolio?category=plaque' },
    { id: 'goods', label: '홍보 물품', icon: '🛍️', href: '/portfolio?category=goods' },
];

// 최신 포트폴리오 6개 가져오기
// 카테고리 ID를 한글 이름으로 매핑
const categoryNameMap: { [key: string]: string } = {
    'logo': 'LOGO',
    'namecard': '명함',
    'goods': '홍보 물품',
    'flyer': '전단지',
    'leaflet': '리플렛',
    'cardnews': '카드뉴스 • SNS',
    'catalog': '카탈로그 • 책자',
    'sign': 'SIGN 디자인',
    'banner': '현수막',
    'plaque': '상패',
};

const latestItems = getLatestPortfolioItems(6);
const portfolioItems = latestItems.map(item => ({
    ...item,
    category: categoryNameMap[item.category] || item.category,
}));


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
