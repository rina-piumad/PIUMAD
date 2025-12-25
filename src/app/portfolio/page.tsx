// Portfolio Page
// 포트폴리오 목록 페이지 (100gomidesign.com 스타일)

'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout';
import styles from './page.module.css';

// 포트폴리오 데이터 (명함 카테고리)
const allPortfolioItems = [
    {
        id: '1',
        title: '프리미엄 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-01.jpg',
        workType: '명함 디자인',
        client: '기업 클라이언트',
        designer: 'PIUM',
        isBest: true,
        bestRank: 1,
        isNew: false,
    },
    {
        id: '2',
        title: '미니멀 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-02.jpg',
        workType: '명함 디자인',
        client: '스타트업',
        designer: 'PIUM',
        isBest: true,
        bestRank: 2,
        isNew: false,
    },
    {
        id: '3',
        title: '모던 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-03.jpg',
        workType: '명함 디자인',
        client: '프리랜서',
        designer: 'PIUM',
        isBest: true,
        bestRank: 3,
        isNew: false,
    },
    {
        id: '4',
        title: '클래식 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-04.jpg',
        workType: '명함 디자인',
        client: '법률사무소',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
    },
    {
        id: '5',
        title: '세련된 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-05.jpg',
        workType: '명함 디자인',
        client: '건축사무소',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
    },
    {
        id: '6',
        title: '심플 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-06.jpg',
        workType: '명함 디자인',
        client: '컨설팅',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '7',
        title: '엘레강스 명함 디자인',
        thumbnail: '/portfolio/namecard/무제-4-07.jpg',
        workType: '명함 디자인',
        client: '웨딩플래너',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '8',
        title: '문해교실 명함',
        thumbnail: '/portfolio/namecard/스크린샷 2023-09-21 154631.png',
        workType: '명함 디자인',
        client: '문해교실',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '9',
        title: '마사지샵 명함',
        thumbnail: '/portfolio/namecard/스크린샷 2023-09-21 154722.png',
        workType: '명함 디자인',
        client: '야미마사지',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '10',
        title: '심플 비즈니스 명함',
        thumbnail: '/portfolio/namecard/스크린샷 2023-09-21 154730.png',
        workType: '명함 디자인',
        client: '비즈니스',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '11',
        title: '모던 기업 명함',
        thumbnail: '/portfolio/namecard/스크린샷 2023-09-21 154737.png',
        workType: '명함 디자인',
        client: '기업',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
    {
        id: '12',
        title: '스타일리시 명함',
        thumbnail: '/portfolio/namecard/스크린샷 2023-09-21 154749.png',
        workType: '명함 디자인',
        client: '개인 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
    },
];

// 카테고리 필터 (점 포함 스타일)
// 카테고리 필터 (점 포함 스타일)
const categories = [
    { id: 'sign', label: 'SIGN 디자인', hasDot: true },
    { id: 'catalog', label: '카탈로그 • 브로슈어', hasDot: true },
    { id: 'leaflet', label: '리플렛 • 전단지', hasDot: true },
    { id: 'poster', label: '포스터', hasDot: true },
    { id: 'cardnews', label: '카드뉴스 • SNS', hasDot: true },
    { id: 'namecard', label: '명함', hasDot: true, active: true },
    { id: 'plaque', label: '상패', hasDot: true },
    { id: 'goods', label: '홍보 물품', hasDot: false },
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('namecard');

    const bestItems = allPortfolioItems.filter(item => item.isBest);
    const regularItems = allPortfolioItems.filter(item => !item.isBest);

    // 페이지네이션 계산
    const totalPages = Math.ceil(regularItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = regularItems.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }
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
                            onClick={() => setActiveCategory(cat.id)}
                            className={`${styles.categoryTab} ${cat.active ? styles.activeTab : ''}`}
                        >
                            {cat.label}
                            {cat.hasDot && <span className={styles.dot}>•</span>}
                        </button>
                    ))}
                </div>

                {/* BEST 섹션 */}
                {bestItems.length > 0 && (
                    <section className={styles.bestSection}>
                        <h2 className={styles.sectionTitle}>BEST</h2>
                        <div className={styles.bestGrid}>
                            {bestItems.map((item) => (
                                <a key={item.id} href={`/portfolio/${item.id}`} className={styles.bestCard}>
                                    <div className={styles.bestImageWrapper}>
                                        <span className={styles.bestBadge}>BEST {item.bestRank}</span>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className={styles.cardImage}
                                        />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <ul className={styles.cardMeta}>
                                            <li><strong>WORK</strong> {item.workType}</li>
                                            <li><strong>클라이언트</strong> {item.client}</li>
                                            <li><strong>디자이너</strong> {item.designer}</li>
                                        </ul>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

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
                                        <li><strong>WORK</strong> {item.workType}</li>
                                        <li><strong>클라이언트</strong> {item.client}</li>
                                        <li><strong>디자이너</strong> {item.designer}</li>
                                    </ul>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 페이지네이션 */}
                <div className={styles.pagination}>
                    <button
                        className={styles.pageButton}
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                    >
                        ‹‹ 처음
                    </button>
                    <button
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ‹ 이전
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        다음 ›
                    </button>
                    <button
                        className={styles.pageButton}
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        끝 ››
                    </button>
                </div>
            </div>
        </Layout>
    );
}
