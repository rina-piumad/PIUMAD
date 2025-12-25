// UI Components - Spinner
// 로딩 스피너 컴포넌트

import styles from './Spinner.module.css';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
}

export default function Spinner({ size = 'md' }: SpinnerProps) {
    return <div className={`${styles.spinner} ${styles[size]}`}></div>;
}
