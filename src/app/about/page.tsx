// About Page
// 회사 소개 페이지 - PIUM 디자인

'use client';

import { Layout } from '@/components/layout';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <Layout>
            <div className={styles.container}>
                {/* 페이지 헤더 */}
                <section className={styles.pageHeader}>
                    <div className={styles.logoArea}>
                        <img
                            src="/images/pium-logo.png"
                            alt="PIUM Design Logo"
                            className={styles.logoImage}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                    <h1 className={styles.pageTitle}>PIUM DESIGN</h1>
                    <p className={styles.pageSubtitle}>피움디자인</p>
                    <p className={styles.slogan}>💜 고객의 일을 정성스럽게!!</p>
                </section>

                {/* 회사 소개 섹션 */}
                <section className={styles.introSection}>
                    <div className={styles.introContent}>
                        <h2 className={styles.sectionTitle}>피움디자인을 소개합니다</h2>
                        <p className={styles.introText}>
                            <strong>PIUM(피움)</strong>은 "꽃이 피다"의 순우리말에서 영감을 받아,
                            고객의 브랜드가 아름답게 피어나도록 돕는 디자인 에이전시입니다.
                        </p>
                        <p className={styles.introText}>
                            로고 디자인부터 간판, 명함, 리플렛, 브로슈어, 배너까지
                            다양한 인쇄물과 디지털 디자인을 전문으로 합니다.
                        </p>
                        <p className={styles.introText}>
                            <strong>"디자인 잘해요 피움"</strong> - 고객과의 소통을 최우선으로 생각하며,
                            친절하고 전문적인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div className={styles.introImage}>
                        <div className={styles.statsCard}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>161+</span>
                                <span className={styles.statLabel}>작업물</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>276+</span>
                                <span className={styles.statLabel}>팔로워</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>3년+</span>
                                <span className={styles.statLabel}>경력</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 회사 연혁 섹션 */}
                <section className={styles.historySection}>
                    <h2 className={styles.sectionTitle}>회사 연혁</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <span className={styles.timelineYear}>2022.02</span>
                            <div className={styles.timelineContent}>
                                <h3>피움디자인 창업</h3>
                                <p>디자인 에이전시로 첫 발을 내딛다</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.timelineYear}>2022 ~</span>
                            <div className={styles.timelineContent}>
                                <h3>다양한 클라이언트와 협업</h3>
                                <p>관공서, 문화원, 중소기업 등 다양한 분야의 디자인 프로젝트 수행</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.timelineYear}>현재</span>
                            <div className={styles.timelineContent}>
                                <h3>161+ 작업물 달성</h3>
                                <p>꾸준한 성장과 고객 만족으로 신뢰를 쌓아가는 중</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 주요 클라이언트 섹션 */}
                <section className={styles.clientsSection}>
                    <h2 className={styles.sectionTitle}>주요 클라이언트</h2>
                    <div className={styles.clientsGrid}>
                        <div className={styles.clientCard}>
                            <span className={styles.clientIcon}>🏛️</span>
                            <h3>서울특별시 금천구</h3>
                            <p>시흥 5동 주민자치회</p>
                        </div>
                        <div className={styles.clientCard}>
                            <span className={styles.clientIcon}>🎭</span>
                            <h3>화성문화원</h3>
                            <p>문화 홍보물 디자인</p>
                        </div>
                        <div className={styles.clientCard}>
                            <span className={styles.clientIcon}>🎪</span>
                            <h3>봉담읍 문화원</h3>
                            <p>지역 문화 행사 디자인</p>
                        </div>
                    </div>
                </section>

                {/* 핵심 가치 섹션 */}
                <section className={styles.valuesSection}>
                    <h2 className={styles.sectionTitle}>핵심 가치</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🎨</span>
                            <h3>디자인 퀄리티</h3>
                            <p>트렌디하면서도 실용적인 디자인으로 고객의 브랜드 가치를 높입니다.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>💬</span>
                            <h3>소통</h3>
                            <p>고객과의 긴밀한 소통을 통해 원하는 결과물을 정확히 구현합니다.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>⏱️</span>
                            <h3>빠른 작업</h3>
                            <p>효율적인 프로세스로 빠르고 정확한 납품을 약속드립니다.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>💜</span>
                            <h3>정성</h3>
                            <p>고객의 일을 내 일처럼 정성스럽게 작업합니다.</p>
                        </div>
                    </div>
                </section>

                {/* 작업 프로세스 섹션 */}
                <section className={styles.processSection}>
                    <h2 className={styles.sectionTitle}>작업 프로세스</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>01</span>
                            <h3>상담 & 견적</h3>
                            <p>전화, 문자, 인스타 DM으로 상담 후 정확한 견적을 안내드립니다.</p>
                        </div>
                        <div className={styles.processArrow}>→</div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>02</span>
                            <h3>시안 제작</h3>
                            <p>결제 완료 후 1~3일 내 시안을 제작하여 전달드립니다.</p>
                        </div>
                        <div className={styles.processArrow}>→</div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>03</span>
                            <h3>수정 & 확정</h3>
                            <p>피드백을 반영하여 수정 작업을 진행합니다. (기본 2회 수정)</p>
                        </div>
                        <div className={styles.processArrow}>→</div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>04</span>
                            <h3>최종 납품</h3>
                            <p>최종 확정 후 원본 파일을 전달드립니다.</p>
                        </div>
                    </div>
                </section>

                {/* 서비스 분야 섹션 */}
                <section className={styles.servicesSection}>
                    <h2 className={styles.sectionTitle}>서비스 분야</h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>✨</span>
                            <span>로고 디자인</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>🏪</span>
                            <span>간판 디자인</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>📇</span>
                            <span>명함</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>📄</span>
                            <span>리플렛 / 브로슈어</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>🚩</span>
                            <span>배너 / 현수막</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>📖</span>
                            <span>카탈로그 / 책자</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>🖼️</span>
                            <span>포스터</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>📱</span>
                            <span>카드뉴스 / SNS</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>🎁</span>
                            <span>판촉물 / 기념품</span>
                        </div>
                        <div className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>✉️</span>
                            <span>봉투 / 스티커</span>
                        </div>
                    </div>
                </section>

                {/* 연락처 섹션 */}
                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>문의하기</h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📞</span>
                            <div>
                                <h4>전화 / 문자</h4>
                                <a href="tel:010-6314-1261">010-6314-1261</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📧</span>
                            <div>
                                <h4>이메일</h4>
                                <a href="mailto:pium0711@naver.com">pium0711@naver.com</a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>📸</span>
                            <div>
                                <h4>인스타그램</h4>
                                <a href="https://www.instagram.com/pium.design/" target="_blank" rel="noopener noreferrer">
                                    @pium.design
                                </a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>⏰</span>
                            <div>
                                <h4>운영시간</h4>
                                <p>평일 09:00 ~ 18:00</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 섹션 */}
                <section className={styles.ctaSection}>
                    <h2>프로젝트를 시작해 보세요</h2>
                    <p>편하게 문의 주시면 친절히 상담해 드리겠습니다.</p>
                    <div className={styles.ctaButtons}>
                        <a href="/portfolio" className={styles.ctaButtonSecondary}>
                            포트폴리오 보기
                        </a>
                        <a href="https://www.instagram.com/pium.design/" className={styles.ctaButtonPrimary} target="_blank" rel="noopener noreferrer">
                            📸 인스타그램 DM
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
