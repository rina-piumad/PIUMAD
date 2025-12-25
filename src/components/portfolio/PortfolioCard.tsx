// Portfolio Components - PortfolioCard
// 포트폴리오 카드 컴포넌트 (100gomidesign.com 스타일)

import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
    title: string;
    category: string;
    thumbnail: string;
    slug: string;
    client?: string;
    designer?: string;
    workType?: string;
    aspectRatio?: string;
}

export default function PortfolioCard({
    title,
    category,
    thumbnail,
    slug,
    client,
    designer,
    workType,
    aspectRatio = '4/3',
}: PortfolioCardProps) {
    return (
        <a href={`/portfolio/${slug}`} className={styles.card}>
            <div className={styles.imageWrapper} style={{ aspectRatio }}>
                <img src={thumbnail} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.metaList}>
                    {workType && (
                        <li className={styles.metaItem}>
                            <span className={styles.bullet}>ㅇ</span>
                            <span className={styles.metaLabel}>WORK</span>
                            <span className={styles.metaValue}>{workType}</span>
                        </li>
                    )}
                    {category && (
                        <li className={styles.metaItem}>
                            <span className={styles.bullet}>ㅇ</span>
                            <span className={styles.metaLabel}>카테고리</span>
                            <span className={styles.metaValue}>{category}</span>
                        </li>
                    )}
                    {client && (
                        <li className={styles.metaItem}>
                            <span className={styles.bullet}>ㅇ</span>
                            <span className={styles.metaLabel}>클라이언트</span>
                            <span className={styles.metaValue}>{client}</span>
                        </li>
                    )}
                    {designer && (
                        <li className={styles.metaItem}>
                            <span className={styles.bullet}>ㅇ</span>
                            <span className={styles.metaLabel}>디자이너</span>
                            <span className={styles.metaValue}>{designer}</span>
                        </li>
                    )}
                </ul>
            </div>
        </a>
    );
}
