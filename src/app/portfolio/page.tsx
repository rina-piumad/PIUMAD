// Portfolio Page
// 포트폴리오 목록 페이지 (100gomidesign.com 스타일)

'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout';
import styles from './page.module.css';

// 포트폴리오 데이터 (명함 카테고리)
const allPortfolioItems = [
    {
        id: '1',
        title: '클래식 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-04.jpg',
        workType: '명함 디자인',
        client: '법률사무소',
        designer: 'PIUM',
        isBest: true,
        bestRank: 1,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '2',
        title: '세련된 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-05.jpg',
        workType: '명함 디자인',
        client: '건축사무소',
        designer: 'PIUM',
        isBest: true,
        bestRank: 2,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '3',
        title: '심플 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-06.jpg',
        workType: '명함 디자인',
        client: '컨설팅',
        designer: 'PIUM',
        isBest: true,
        bestRank: 3,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '4',
        title: '엘레강스 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-07.jpg',
        workType: '명함 디자인',
        client: '웨딩플래너',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '5',
        title: '마사지샵 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154722.png',
        workType: '명함 디자인',
        client: '야미마사지',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '6',
        title: '심플 비즈니스 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154730.png',
        workType: '명함 디자인',
        client: '비즈니스',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '7',
        title: '모던 기업 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154737.png',
        workType: '명함 디자인',
        client: '기업',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '8',
        title: '스타일리시 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154749.png',
        workType: '명함 디자인',
        client: '개인 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '9',
        title: '엘레강트 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154755.png',
        workType: '명함 디자인',
        client: '개인',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '10',
        title: '심플 화이트 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154801.png',
        workType: '명함 디자인',
        client: '프리랜서',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '11',
        title: '프로페셔널 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154806.png',
        workType: '명함 디자인',
        client: '컨설턴트',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '12',
        title: '클린 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154811.png',
        workType: '명함 디자인',
        client: '스타트업',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '13',
        title: 'AI 명함 디자인 A',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_3zrs5g3zrs5g3zrs.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '14',
        title: 'AI 명함 디자인 B',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_8ugzj38ugzj38ugz.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '15',
        title: 'AI 명함 디자인 C',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_9vcluc9vcluc9vcl.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '16',
        title: 'AI 명함 디자인 D',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_d0lfj7d0lfj7d0lf.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '17',
        title: 'AI 명함 디자인 E',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_eueepqeueepqeuee.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '18',
        title: 'AI 명함 디자인 F',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_77r1q777r1q777r1.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '19',
        title: 'AI 명함 디자인 G',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_m0307dm0307dm030.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '20',
        title: 'AI 명함 디자인 H',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_mfnsxlmfnsxlmfns.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '21',
        title: 'AI 명함 디자인 I',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_oeuop0oeuop0oeuo.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '22',
        title: 'AI 명함 디자인 J',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_qu3xxbqu3xxbqu3x.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '23',
        title: 'AI 명함 디자인 K',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_vq9p8avq9p8avq9p.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    // 홍보물품 - 쇼핑백
    {
        id: '24',
        title: '프리미엄 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_3rjg3b3rjg3b3rjg.png',
        workType: '홍보물품 디자인',
        client: '기업 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    {
        id: '25',
        title: '모던 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_6bmctp6bmctp6bmc.png',
        workType: '홍보물품 디자인',
        client: '브랜드 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    {
        id: '26',
        title: '클래식 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_j0mon2j0mon2j0mo.png',
        workType: '홍보물품 디자인',
        client: '리테일 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    // 전단지
    {
        id: '27',
        title: '전단지 디자인 A',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-23 111123.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '28',
        title: '전단지 디자인 B',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212137.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '29',
        title: '전단지 디자인 C',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212150.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '30',
        title: '전단지 디자인 D',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212158.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '31',
        title: '전단지 디자인 E',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212206.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '32',
        title: '전단지 디자인 F',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212222.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '33',
        title: '전단지 디자인 G',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212348.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    // 리플렛
    {
        id: '34',
        title: '리플렛 디자인 A',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-23 112740.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '35',
        title: '리플렛 디자인 B',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-23 120005.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '36',
        title: '리플렛 디자인 C',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-24 211937.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '37',
        title: '리플렛 디자인 D',
        thumbnail: '/portfolio/리플렛/Gemini_Generated_Image_3t0myp3t0myp3t0m.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '38',
        title: '리플렛 디자인 E',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-24 212024.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '39',
        title: '리플렛 디자인 F',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-24 212037.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '40',
        title: '리플렛 디자인 G',
        thumbnail: '/portfolio/리플렛/Gemini_Generated_Image_i5n7kwi5n7kwi5n7.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '41',
        title: '리플렛 디자인 H',
        thumbnail: '/portfolio/리플렛/Gemini_Generated_Image_iz7r70iz7r70iz7r.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '42',
        title: '리플렛 디자인 I',
        thumbnail: '/portfolio/리플렛/스크린샷 2025-12-26 214154.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
];

// 카테고리 필터 (점 포함 스타일)
const categories = [
    { id: 'all', label: '전체', hasDot: true },
    { id: 'sign', label: 'SIGN 디자인', hasDot: true },
    { id: 'banner', label: '현수막', hasDot: true },
    { id: 'catalog', label: '카탈로그 • 브로슈어', hasDot: true },
    { id: 'leaflet', label: '리플렛', hasDot: true },
    { id: 'flyer', label: '전단지 • 포스터', hasDot: true },
    { id: 'cardnews', label: '카드뉴스 • SNS', hasDot: true },
    { id: 'namecard', label: '명함', hasDot: true },
    { id: 'plaque', label: '상패', hasDot: true },
    { id: 'goods', label: '홍보 물품', hasDot: false },
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('all');

    // 카테고리별 필터링
    const filteredItems = activeCategory === 'all'
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.category === activeCategory);

    const bestItems = filteredItems.filter(item => item.isBest);
    const regularItems = filteredItems.filter(item => !item.isBest);

    // 페이지네이션 계산
    const totalPages = Math.ceil(regularItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = regularItems.slice(startIndex, endIndex);

    // 카테고리 변경 시 페이지 초기화
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setCurrentPage(1);
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <Layout>
            <div className={styles.container}>
                {/* 페이지 헤더 */}
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>포트폴리오 •</h1>
                </div>

                {/* 카테고리 탭 (점 포함 스타일) */}
                <div className={styles.categoryTabs}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.activeTab : ''}`}
                        >
                            {cat.label}
                            {cat.hasDot && <span className={styles.dot}>•</span>}
                        </button>
                    ))}
                </div>

                {/* 메인 포트폴리오 그리드 */}
                <section className={styles.portfolioSection}>
                    <div className={styles.sortBar}>
                        <span className={styles.itemCount}>
                            총 {regularItems.length}개 중 {startIndex + 1}-{Math.min(endIndex, regularItems.length)}개
                        </span>
                        <select className={styles.sortSelect}>
                            <option>최신순</option>
                            <option>인기순</option>
                            <option>이름순</option>
                        </select>
                    </div>

                    <div className={styles.portfolioGrid}>
                        {currentItems.map((item) => (
                            <a key={item.id} href={`/portfolio/${item.id}`} className={styles.portfolioCard}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className={styles.cardImage}
                                    />
                                    {item.isNew && <span className={styles.newBadge}>NEW</span>}
                                </div>
                                <div className={styles.cardInfo}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <ul className={styles.cardMeta}>
                                        <li>
                                            <span className={styles.metaLabel}>WORK :</span> {item.workType}
                                        </li>
                                        <li>
                                            <span className={styles.metaLabel}>클라이언트 :</span> {item.client}
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 페이지네이션 */}
                <div className={styles.pagination}>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                    >
                        ‹‹ 처음
                    </button>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ‹ 이전
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            type="button"
                            className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        다음 ›
                    </button>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        끝 ››
                    </button>
                </div>
            </div >
        </Layout >
    );
}
