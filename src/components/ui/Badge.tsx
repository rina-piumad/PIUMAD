// UI Components - Badge
// 배지/태그 컴포넌트

import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {children}
        </span>
    );
}
