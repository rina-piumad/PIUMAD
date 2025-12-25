// UI Components - Textarea
// 텍스트 영역 컴포넌트

import styles from './Textarea.module.css';

interface TextareaProps {
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
}

export default function Textarea({
    name,
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    disabled = false,
    rows = 4,
}: TextareaProps) {
    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                rows={rows}
                className={`${styles.textarea} ${error ? styles.error : ''}`}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
