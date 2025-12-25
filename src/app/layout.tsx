// Next.js App Layout
// 루트 레이아웃 - 전체 앱에 적용

import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'PIUM Design Agency',
    description: '브랜딩, 로고디자인, 네이밍 전문 디자인 에이전시',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
