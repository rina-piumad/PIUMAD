// Layout Components - Header
// 상단 네비게이션 헤더 (100gomidesign.com 스타일)

'use client';

import { useState } from 'react';
import styles from './Header.module.css';

interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    logo?: string;
    navigation?: NavItem[];
    announcement?: string;
    onMenuClick?: () => void;
}

export default function Header({
    logo,
    navigation = [],
    announcement,
    onMenuClick
}: HeaderProps) {
    return (
        <header className={styles.headerWrapper}>
            {/* 공지사항 바 */}
            {announcement && (
                <div className={styles.announcementBar}>
                    <span className={styles.announcementText}>{announcement}</span>
                </div>
            )}

            {/* 메인 헤더 */}
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    {/* Logo */}
                    <a href="/" className={styles.logo}>
                        <img src="/image/pium_log.jpg" alt="PIUM Logo" />
                        <span>PIUM</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={onMenuClick}
                        aria-label="메뉴 열기"
                    >
                        <span className={styles.menuIcon}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
