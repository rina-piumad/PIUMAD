// UI Components - Button
// 버튼 컴포넌트

import styles from './Button.module.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    disabled = false,
    loading = false,
    fullWidth = false,
    href,
    type = 'button',
    className = '',
}: ButtonProps) {
    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        loading ? styles.loading : '',
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <a href={href} className={classNames}>
                {loading ? <span className={styles.spinner}></span> : children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classNames}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? <span className={styles.spinner}></span> : children}
        </button>
    );
}
