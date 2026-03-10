// Section Components - CategoryIcons
// 원형 카테고리 아이콘 그리드 (100gomidesign.com 스타일)

'use client';

import Link from 'next/link';
import styles from './CategoryIcons.module.css';

interface Category {
    id: string;
    label: string;
    icon: string;
    href?: string;
}

interface CategoryIconsProps {
    categories: Category[];
    onCategoryClick?: (categoryId: string) => void;
}

export default function CategoryIcons({ categories, onCategoryClick }: CategoryIconsProps) {
    const handleClick = (category: Category) => {
        if (onCategoryClick) {
            onCategoryClick(category.id);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href || '#'}
                            className={styles.categoryItem}
                            onClick={(e) => {
                                if (onCategoryClick) {
                                    e.preventDefault();
                                    handleClick(category);
                                }
                            }}
                        >
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{category.icon}</span>
                            </div>
                            <span className={styles.label}>{category.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
