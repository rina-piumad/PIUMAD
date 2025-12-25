// UI Components - Select
// 셀렉트 박스 컴포넌트

import styles from './Select.module.css';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    name: string;
    label?: string;
    options: Option[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
}

export default function Select({
    name,
    label,
    options,
    value,
    onChange,
    placeholder,
    error,
    required = false,
    disabled = false,
}: SelectProps) {
    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`${styles.select} ${error ? styles.error : ''}`}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
