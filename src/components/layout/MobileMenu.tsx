// Layout Components - MobileMenu
// 모바일 메뉴 오버레이

'use client';

import styles from './MobileMenu.module.css';

interface NavItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navigation?: NavItem[];
    phone?: string;
    email?: string;
}

export default function MobileMenu({
    isOpen,
    onClose,
    navigation = [],
    phone,
    email
}: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
                    ✕
                </button>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <ul>
                        {navigation.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} onClick={onClose}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact */}
                <div className={styles.contact}>
                    {phone && <a href={`tel:${phone}`}>{phone}</a>}
                    {email && <a href={`mailto:${email}`}>{email}</a>}
                </div>
            </div>
        </div>
    );
}
