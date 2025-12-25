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
    phone: '010-6314-1261',
    email: 'pium0711@naver.com',
    kakao: 'https://pf.kakao.com/_example',
    businessInfo: {
        company: '피움디자인',
        ceo: '최성희',
        businessNumber: '278-75-00348',
        address: '경기도 화성시 장조4로13',
        telecom: '2023-경기화성',
    },
    bankInfo: {
        bank: '기업은행',
        account: '079-145136-01-015',
        holder: 'CHOI SUNG HEE',
    },
    notices: []
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
