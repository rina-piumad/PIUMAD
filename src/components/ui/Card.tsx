// UI Components - Card
// 카드 컴포넌트

import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

export default function Card({
    children,
    className = '',
    onClick,
    hoverable = false
}: CardProps) {
    return (
        <div
            className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

// Card 하위 컴포넌트들
Card.Image = function CardImage({
    src,
    alt,
    aspectRatio = '4/3'
}: {
    src: string;
    alt: string;
    aspectRatio?: string;
}) {
    return (
        <div className={styles.imageWrapper} style={{ aspectRatio }}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
    return <div className={styles.body}>{children}</div>;
};

Card.Title = function CardTitle({ children }: { children: React.ReactNode }) {
    return <h3 className={styles.title}>{children}</h3>;
};

Card.Description = function CardDescription({ children }: { children: React.ReactNode }) {
    return <p className={styles.description}>{children}</p>;
};
