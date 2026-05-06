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
                    {/* Left Section (Icons, Logo, Hamburger) */}
                    <div className={styles.leftSection}>
                        <div className={styles.iconGroup}>
                            <a href="/login" className={styles.iconButton} aria-label="로그인">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </a>
                            <a href="/cart" className={styles.iconButton} aria-label="장바구니">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                <span className={styles.cartBadge}>0</span>
                            </a>
                            <button className={styles.iconButton} aria-label="검색">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                        
                        <a href="/" className={styles.logo}>
                            <img src="/image/pium-logo.png" alt="피움디자인 PIUM DESIGN" />
                            <span>백고미디자인</span>
                        </a>

                        <button
                            className={styles.desktopMenuButton}
                            onClick={onMenuClick}
                            aria-label="메뉴 열기"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>

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
                        className={styles.mobileMenuButton}
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
