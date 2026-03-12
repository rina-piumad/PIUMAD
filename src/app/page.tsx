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
        subtitle: 'LEAFLET DESIGN',
        title: '한장! 가장 효율적인 홍보\n리플렛 디자인',
        description: '다양한 내용을 가장 효율적으로 홍보할 수 있는 리플렛 디자인을 만나보세요.',
        image: '/portfolio/리플렛/함께 줍깅.png',
        badge: 'NEW',
        color: '#F9F9F9',
        link: '/portfolio?category=leaflet'
    },
    {
        id: '2',
        subtitle: 'LOGO DESIGN',
        title: '브랜드 가치를 담은\n로고 디자인',
        description: '기업의 아이덴티티를 가장 잘 나타낼 수 있는 감각적인 로고를 제안합니다.',
        image: '/portfolio/LOGO/라움뮤직/라움뮤직-01.jpg',
        badge: 'BEST',
        color: '#F4F4F4',
        link: '/portfolio?category=logo'
    },
    {
        id: '3',
        subtitle: 'SIGN DESIGN',
        title: '시선을 사로잡는\n간판 • 사인 디자인',
        description: '공간의 분위기를 결정하는 중요한 요소, 최적의 사인 디자인을 제공합니다.',
        image: '/portfolio/SIGN/소담김밥네온.png',
        color: '#FFFFFF',
        link: '/portfolio?category=sign'
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
