// UI Components - Input
// 입력 필드 컴포넌트

import styles from './Input.module.css';

interface InputProps {
    type?: 'text' | 'email' | 'tel' | 'password' | 'number';
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
}

export default function Input({
    type = 'text',
    name,
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    disabled = false,
}: InputProps) {
    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`${styles.input} ${error ? styles.error : ''}`}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
