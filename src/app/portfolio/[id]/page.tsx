// Portfolio Detail Page
// 포트폴리오 상세 페이지 (100gomidesign.com 스타일)

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Layout } from '@/components/layout';
import styles from './page.module.css';
import { allPortfolioItems } from '@/data/portfolioData';

export default function PortfolioDetailPage() {
    const params = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('info');

    const id = params.id as string;
    
    // 가져온 공통 데이터에서 아이디로 해당 항목 찾기
    const foundItem = allPortfolioItems.find(item => item.id === id) || allPortfolioItems[0];
    
    // page.tsx에서 사용하던 형태(images 배열, 상세설명 등)로 데이터 매핑
    const portfolio = {
        ...foundItem,
        images: foundItem.images || [foundItem.thumbnail],
        description: '고급스러운 느낌의 프리미엄 디자인입니다. 심플하면서도 세련된 디자인으로 비즈니스에 신뢰감을 더해드립니다.',
        processSteps: ['디자인 상담', '시안 제작', '수정 작업', '최종 확인', '인쇄 진행']
    };

    // 관련된 항목들을 카테고리가 같은 다른 항목들로 동적 생성
    const relatedItems = allPortfolioItems
        .filter(item => item.id !== id && item.category === foundItem.category)
        .slice(0, 4);

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
                                <span className={styles.metaLabel}>○ 클라이언트</span>
                                <span className={styles.metaValue}>{portfolio.client}</span>
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
                                    src={portfolio.detailImage || portfolio.images[0]}
                                    alt={portfolio.title}
                                    className={styles.detailImage}
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === 'guide' && (
                        <div className={styles.guideContent}>
                            <h3>제작 안내</h3>
                            {/* <p>명함 제작 과정을 안내해드립니다.</p>
                            <ol>
                                {portfolio.processSteps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol> */}
                            {portfolio.guideImage && (
                                <div className={styles.detailImageWrapper} style={{ marginTop: '2rem' }}>
                                    <img
                                        src={portfolio.guideImage}
                                        alt="제작 안내"
                                        className={styles.detailImage}
                                    />
                                </div>
                            )}
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
