// Layout Components - Layout
// 전체 레이아웃 래퍼 (100gomidesign.com 스타일 - 상단 헤더)

'use client';

import { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const navigation = [
    { label: '홈', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: '포트폴리오 •', href: '/portfolio' },
    { label: '실시간 상담', href: '/chat' },
    { label: '인쇄가이드', href: '/print-guide' },
    { label: '고객센터', href: '/support' },
];

const siteInfo = {
    phone: '1588-0000',
    email: 'hello@pium.design',
    kakao: 'https://pf.kakao.com/_example',
    businessInfo: {
        company: '피움디자인',
        ceo: '홍길동',
        businessNumber: '000-00-00000',
        address: '서울시 강남구 테헤란로 123',
    },
    bankInfo: {
        bank: '국민은행',
        account: '000-000-00000',
        holder: '피움디자인',
    },
    notices: [
        { text: '2024년 연말 휴무 안내', date: '2024.12.20' },
        { text: '새로운 포트폴리오 업데이트', date: '2024.12.15' },
    ]
};

export default function Layout({ children }: LayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className={styles.layout}>
            {/* Header with Navigation */}
            <Header
                navigation={navigation}
                announcement="가장빠른 실시간 상담 피움디자인 카카오톡 오픈톡!!"
                onMenuClick={() => setIsMobileMenuOpen(true)}
            />

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigation={navigation}
                phone={siteInfo.phone}
                email={siteInfo.email}
            />

            {/* Main Content */}
            <main className={styles.main}>
                {children}
            </main>

            {/* Footer */}
            <Footer
                phone={siteInfo.phone}
                email={siteInfo.email}
                kakao={siteInfo.kakao}
                businessInfo={siteInfo.businessInfo}
                bankInfo={siteInfo.bankInfo}
                notices={siteInfo.notices}
            />
        </div>
    );
}
