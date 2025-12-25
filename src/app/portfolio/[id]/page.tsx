// Portfolio Detail Page
// 포트폴리오 상세 페이지 (100gomidesign.com 스타일)

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Layout } from '@/components/layout';
import styles from './page.module.css';

// 포트폴리오 데이터 (추후 실제 API로 대체)
const portfolioData: Record<string, {
    id: string;
    title: string;
    images: string[];
    workType: string;
    client: string;
    designer: string;
    description: string;
    processSteps: string[];
}> = {
    '1': {
        id: '1',
        title: '프리미엄 명함 디자인',
        images: ['/portfolio/namecard/무제-4-01.jpg'],
        workType: '명함 디자인',
        client: '기업 클라이언트',
        designer: 'PIUM',
        description: '고급스러운 느낌의 프리미엄 명함 디자인입니다. 심플하면서도 세련된 디자인으로 비즈니스에 신뢰감을 더해드립니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '2': {
        id: '2',
        title: '미니멀 명함 디자인',
        images: ['/portfolio/namecard/무제-4-02.jpg'],
        workType: '명함 디자인',
        client: '스타트업',
        designer: 'PIUM',
        description: '미니멀한 디자인으로 깔끔한 인상을 주는 명함입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '3': {
        id: '3',
        title: '모던 명함 디자인',
        images: ['/portfolio/namecard/무제-4-03.jpg'],
        workType: '명함 디자인',
        client: '프리랜서',
        designer: 'PIUM',
        description: '모던하고 트렌디한 디자인의 명함입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '4': {
        id: '4',
        title: '클래식 명함 디자인',
        images: ['/portfolio/namecard/무제-4-04.jpg'],
        workType: '명함 디자인',
        client: '법률사무소',
        designer: 'PIUM',
        description: '클래식하고 격조있는 디자인의 명함입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '5': {
        id: '5',
        title: '세련된 명함 디자인',
        images: ['/portfolio/namecard/무제-4-05.jpg'],
        workType: '명함 디자인',
        client: '건축사무소',
        designer: 'PIUM',
        description: '세련되고 전문적인 느낌의 명함입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '6': {
        id: '6',
        title: '심플 명함 디자인',
        images: ['/portfolio/namecard/무제-4-06.jpg'],
        workType: '명함 디자인',
        client: '컨설팅',
        designer: 'PIUM',
        description: '심플하면서도 인상적인 명함 디자인입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
    '7': {
        id: '7',
        title: '엘레강스 명함 디자인',
        images: ['/portfolio/namecard/무제-4-07.jpg'],
        workType: '명함 디자인',
        client: '웨딩플래너',
        designer: 'PIUM',
        description: '우아하고 여성스러운 느낌의 명함입니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행'],
    },
};

// 관련 포트폴리오
const relatedItems = [
    { id: '2', title: '미니멀 명함 디자인', thumbnail: '/portfolio/namecard/무제-4-02.jpg' },
    { id: '3', title: '모던 명함 디자인', thumbnail: '/portfolio/namecard/무제-4-03.jpg' },
    { id: '4', title: '클래식 명함 디자인', thumbnail: '/portfolio/namecard/무제-4-04.jpg' },
    { id: '5', title: '세련된 명함 디자인', thumbnail: '/portfolio/namecard/무제-4-05.jpg' },
];

export default function PortfolioDetailPage() {
    const params = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('info');

    const id = params.id as string;
    const portfolio = portfolioData[id] || portfolioData['1'];

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === portfolio.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? portfolio.images.length - 1 : prev - 1
        );
    };

    return (
        <Layout>
            <div className={styles.container}>
                {/* 상단 제품 영역 */}
                <div className={styles.productTop}>
                    {/* 이미지 갤러리 */}
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <button className={styles.navButton} onClick={prevImage}>‹</button>
                            <img
                                src={portfolio.images[currentImageIndex]}
                                alt={portfolio.title}
                                className={styles.productImage}
                            />
                            <button className={styles.navButton} onClick={nextImage}>›</button>
                            <div className={styles.imageCounter}>
                                {currentImageIndex + 1} / {portfolio.images.length}
                            </div>
                        </div>
                    </div>

                    {/* 제품 정보 */}
                    <div className={styles.productInfo}>
                        <h1 className={styles.productTitle}>{portfolio.title}</h1>

                        <ul className={styles.metaList}>
                            <li>
                                <span className={styles.metaLabel}>○ WORK</span>
                                <span className={styles.metaValue}>{portfolio.workType}</span>
                            </li>
                            <li>
                                <span className={styles.metaLabel}>○ 클라이언트</span>
                                <span className={styles.metaValue}>{portfolio.client}</span>
                            </li>
                            <li>
                                <span className={styles.metaLabel}>○ 디자이너</span>
                                <span className={styles.metaValue}>{portfolio.designer}</span>
                            </li>
                        </ul>

                        <div className={styles.processSection}>
                            <h3 className={styles.processTitle}>제작 STEP</h3>
                            <div className={styles.processSteps}>
                                {portfolio.processSteps.map((step, index) => (
                                    <span key={index} className={styles.step}>
                                        {step}
                                        {index < portfolio.processSteps.length - 1 && ' → '}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <button className={styles.cartButton}>장바구니</button>
                            <button className={styles.orderButton}>제작 의뢰하기</button>
                        </div>
                    </div>
                </div>

                {/* 관련 포트폴리오 */}
                <section className={styles.relatedSection}>
                    <h2 className={styles.relatedTitle}>다른 포트폴리오도 살펴보세요</h2>
                    <div className={styles.relatedGrid}>
                        {relatedItems.map((item) => (
                            <a key={item.id} href={`/portfolio/${item.id}`} className={styles.relatedCard}>
                                <img src={item.thumbnail} alt={item.title} className={styles.relatedImage} />
                                <p className={styles.relatedCardTitle}>{item.title}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 상세 탭 */}
                <div className={styles.detailTabs}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'info' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        디자인 정보
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'guide' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('guide')}
                    >
                        제작 안내
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'chat' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('chat')}
                    >
                        카카오톡 상담
                    </button>
                </div>

                {/* 탭 콘텐츠 */}
                <div className={styles.tabContent}>
                    {activeTab === 'info' && (
                        <div className={styles.infoContent}>
                            <h3>디자인 소개</h3>
                            <p>{portfolio.description}</p>
                            <div className={styles.detailImageWrapper}>
                                <img
                                    src={portfolio.images[0]}
                                    alt={portfolio.title}
                                    className={styles.detailImage}
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === 'guide' && (
                        <div className={styles.guideContent}>
                            <h3>제작 안내</h3>
                            <p>명함 제작 과정을 안내해드립니다.</p>
                            <ol>
                                {portfolio.processSteps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                    {activeTab === 'chat' && (
                        <div className={styles.chatContent}>
                            <h3>카카오톡 상담</h3>
                            <p>카카오톡으로 편하게 문의해주세요!</p>
                            <a
                                href="https://pf.kakao.com/_example"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.kakaoButton}
                            >
                                💬 카카오톡 상담하기
                            </a>
                        </div>
                    )}
                </div>

                {/* 하단 네비게이션 */}
                <div className={styles.bottomNav}>
                    <a href="/portfolio" className={styles.listButton}>목록으로</a>
                </div>
            </div>
        </Layout>
    );
}
