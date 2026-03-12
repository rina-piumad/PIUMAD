// Portfolio Page
// 포트폴리오 목록 페이지 (100gomidesign.com 스타일)

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import styles from './page.module.css';
import { allPortfolioItems as sharedPortfolioItems, PortfolioItem } from '@/data/portfolioData';

// 카탈로그 카드 컴포넌트 (미니 슬라이더 포함)
interface CatalogItem {
    id: string;
    title: string;
    thumbnail: string;
    images?: string[];
    workType: string;
    client: string;
    designer: string;
    isBest: boolean;
    bestRank?: number;
    isNew: boolean;
    category: string;
    subCategory?: string;
}

function CatalogCard({ item, index }: { item: CatalogItem, index?: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = item.images || [item.thumbnail];

    // 자동 슬라이드 (2초 간격)
    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <Link href={`/portfolio/${item.id}`} className={styles.portfolioCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.imageWrapper}>
                <img
                    src={images[currentImageIndex]}
                    alt={item.title}
                    className={styles.cardImage}
                />
                {item.isBest && (
                    <span className={styles.bestBadge}>
                        BEST {item.bestRank || (index !== undefined ? index + 1 : '')}
                    </span>
                )}
                {item.isNew && <span className={styles.newBadge}>NEW</span>}
                {images.length > 1 && (
                    <div className={styles.miniSliderDots}>
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.miniDot} ${idx === currentImageIndex ? styles.activeMiniDot : ''}`}
                            />
                        ))}
                    </div>
                )}
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
        </Link>
    );
}

// 포트폴리오 데이터 사용 (portfolioData.ts에서 가져옴)
const allPortfolioItems = sharedPortfolioItems;

// 카테고리 필터 (점 포함 스타일)
const categories = [
    { id: 'all', label: '전체', icon: '🎨' },
    { id: 'logo', label: 'LOGO', icon: '🎨' },
    { id: 'sign', label: 'SIGN 디자인', icon: '🪧' },
    { id: 'banner', label: '현수막', icon: '🎌' },
    { id: 'catalog', label: '카탈로그 • 책자', icon: '📖' },
    { id: 'leaflet', label: '리플렛', icon: '📄' },
    { id: 'flyer', label: '전단지 • 포스터', icon: '📃' },
    { id: 'cardnews', label: '카드뉴스 • SNS', icon: '📱' },
    { id: 'namecard', label: '명함', icon: '💳' },
    { id: 'plaque', label: '상패', icon: '🏆' },
    { id: 'goods', label: '홍보 물품', icon: '🛍️' },
];

const ITEMS_PER_PAGE = 6;

// SIGN 서브 카테고리
const signSubCategories = [
    { id: 'all', label: '전체' },
    { id: 'signboard', label: '간판' },
    { id: 'neon', label: '네온' },
    { id: 'standing', label: '입간판' },
];

function PortfolioContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';

    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [activeSignSubCategory, setActiveSignSubCategory] = useState('all');

    // URL 파라미터 변경 시 카테고리 업데이트
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setActiveCategory(categoryParam);
            setCurrentPage(1);
        }
    }, [searchParams]);

    // 카테고리별 필터링
    let filteredItems = activeCategory === 'all'
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.category === activeCategory);

    // SIGN 카테고리 선택 시 서브 카테고리 필터링
    if (activeCategory === 'sign' && activeSignSubCategory !== 'all') {
        filteredItems = filteredItems.filter(item => (item as CatalogItem).subCategory === activeSignSubCategory);
    }

    const bestItems = filteredItems.filter(item => item.isBest);
    // 최신순 정렬 (ID 높은 순)
    const regularItems = filteredItems
        .filter(item => !item.isBest)
        .sort((a, b) => parseInt(b.id) - parseInt(a.id));

    // 페이지네이션 계산
    const totalPages = Math.ceil(regularItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = regularItems.slice(startIndex, endIndex);

    // 카테고리 변경 시 페이지 초기화
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setActiveSignSubCategory('all');
        setCurrentPage(1);
    };

    // 서브 카테고리 변경
    const handleSignSubCategoryChange = (subCategoryId: string) => {
        setActiveSignSubCategory(subCategoryId);
        setCurrentPage(1);
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    // 카탈로그 슬라이더 상태
    const [catalogSlideIndex, setCatalogSlideIndex] = useState(0);
    const catalogItems = allPortfolioItems.filter(item => item.category === 'catalog');

    const goToCatalogSlide = (index: number) => {
        if (index >= 0 && index < catalogItems.length) {
            setCatalogSlideIndex(index);
        }
    };


    return (
        <Layout>
            <div className={styles.container}>
                {/* 페이지 헤더 */}
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>포트폴리오 •</h1>
                </div>

                {/* 카테고리 아이콘 그리드 */}
                <div className={styles.categoryIcons}>
                    <div className={styles.categoryGrid}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`${styles.categoryIconItem} ${activeCategory === cat.id ? styles.activeIconItem : ''}`}
                            >
                                <div className={styles.iconCircle}>
                                    <span className={styles.iconEmoji}>{cat.icon}</span>
                                </div>
                                <span className={styles.iconLabel}>{cat.label}</span>
                            </button>
                        ))}
                    </div>
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

                    {/* 베스트 아이템 (상단 노출) */}
                    {currentPage === 1 && bestItems.length > 0 && (
                        <div className={styles.portfolioGrid} style={{ marginBottom: '40px' }}>
                            {bestItems.map((item, index) => (
                                <CatalogCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    )}

                    {/* 일반 아이템 그리드 */}
                    <div className={styles.portfolioGrid}>
                        {currentItems.map((item) => (
                            <CatalogCard key={item.id} item={item} />
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

export default function PortfolioPage() {
    return (
        <Suspense fallback={
            <Layout>
                <div className={styles.container}>
                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>포트폴리오 •</h1>
                    </div>
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
                        로딩 중...
                    </div>
                </div>
            </Layout>
        }>
            <PortfolioContent />
        </Suspense>
    );
}
