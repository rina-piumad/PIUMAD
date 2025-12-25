// Section Components - PortfolioGrid
// 포트폴리오 그리드 컴포넌트 (100gomidesign.com 스타일)

'use client';

import { useState } from 'react';
import PortfolioCard from '../portfolio/PortfolioCard';
import styles from './PortfolioGrid.module.css';

interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    thumbnail: string;
    slug: string;
    client?: string;
    designer?: string;
    workType?: string;
}

interface PortfolioGridProps {
    items: PortfolioItem[];
    columns?: 2 | 3 | 4;
    showFilter?: boolean;
    categories?: string[];
}

export default function PortfolioGrid({
    items,
    columns = 3,
    showFilter = true,
    categories = [],
}: PortfolioGridProps) {
    const [activeCategory, setActiveCategory] = useState<string>('전체');

    // 카테고리 목록 생성 (전체 + 고유 카테고리)
    const allCategories = ['전체', ...new Set(categories.length > 0 ? categories : items.map(item => item.category))];

    // 필터된 아이템
    const filteredItems = activeCategory === '전체'
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <section className={styles.section}>
            {/* 카테고리 필터 */}
            {showFilter && (
                <div className={styles.filterContainer}>
                    <nav className={styles.categoryFilter}>
                        {allCategories.map((category, index) => (
                            <button
                                key={category}
                                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                                {index < allCategories.length - 1 && (
                                    <span className={styles.separator}>•</span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            {/* 포트폴리오 그리드 */}
            <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
                {filteredItems.map((item) => (
                    <PortfolioCard
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        thumbnail={item.thumbnail}
                        slug={item.slug}
                        client={item.client}
                        designer={item.designer}
                        workType={item.workType}
                    />
                ))}
            </div>
        </section>
    );
}
