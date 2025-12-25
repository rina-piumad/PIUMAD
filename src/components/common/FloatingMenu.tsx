// Common Components - FloatingMenu
// 플로팅 퀵 메뉴 컴포넌트

'use client';

import { useState } from 'react';
import styles from './FloatingMenu.module.css';

interface FloatingMenuProps {
    phone?: string;
    kakao?: string;
    instagram?: string;
}

export default function FloatingMenu({ phone, kakao, instagram }: FloatingMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            {/* Quick Actions */}
            <div className={`${styles.actions} ${isOpen ? styles.open : ''}`}>
                {phone && (
                    <a href={`tel:${phone}`} className={styles.action} title="전화">
                        📞
                    </a>
                )}
                {kakao && (
                    <a href={kakao} target="_blank" rel="noopener noreferrer" className={styles.action} title="카카오톡">
                        💬
                    </a>
                )}
                {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className={styles.action} title="인스타그램">
                        📷
                    </a>
                )}
            </div>

            {/* Toggle Button */}
            <button
                className={`${styles.toggle} ${isOpen ? styles.active : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="퀵 메뉴"
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
}
