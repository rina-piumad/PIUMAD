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
                    {/* Left Section (Logo) */}
                    <div className={styles.leftSection}>
                        <a href="/" className={styles.logo}>
                            <img src="/image/pium-logo.png" alt="피움디자인 PIUM DESIGN" />
                            <span>피움디자인</span>
                        </a>
                    </div>

                    <div className={styles.rightGroup}>
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

                        {/* User Login Icon */}
                        <div className={styles.iconGroup}>
                            <div className={styles.userMenuContainer}>
                                <a href="/login" className={styles.iconButton} aria-label="로그인">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </a>
                                <div className={styles.userDropdown}>
                                    <div className={styles.dropdownHeader}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <div className={styles.greeting}>
                                            <span className={styles.hello}>Hello :D</span>
                                            <span className={styles.welcome}>Welcome!</span>
                                        </div>
                                    </div>
                                    <ul className={styles.dropdownList}>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">주문조회</a></li>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">관심상품(0)</a></li>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">최근 본 상품</a></li>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">적립금</a></li>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">예치금</a></li>
                                        <li><a href="https://pf.kakao.com/_PrxjdG" target="_blank" rel="noopener noreferrer">나의정보</a></li>
                                    </ul>
                                    <div className={styles.dropdownActions}>
                                        <a href="/login" className={styles.loginBtn}>로그인</a>
                                        <a href="/login" className={styles.signupBtn}>회원가입</a>
                                    </div>
                                </div>
                            </div>
                        </div>

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
            </div>
        </header>
    );
}
