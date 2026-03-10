// Portfolio Page
// 포트폴리오 목록 페이지 (100gomidesign.com 스타일)

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import styles from './page.module.css';
import { allPortfolioItems as sharedPortfolioItems, PortfolioItem } from '@/data/portfolioData';

// 카탈로그 카드 컴포넌트 (미니 슬라이더 포함)
interface CatalogItem {
    id: string;
    title: string;
    thumbnail: string;
    images?: string[];
    workType: string;
    client: string;
    designer: string;
    isBest: boolean;
    isNew: boolean;
    category: string;
    subCategory?: string;
}

function CatalogCard({ item }: { item: CatalogItem }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = item.images || [item.thumbnail];

    // 자동 슬라이드 (2초 간격)
    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <Link href={`/portfolio/${item.id}`} className={styles.portfolioCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.imageWrapper}>
                <img
                    src={images[currentImageIndex]}
                    alt={item.title}
                    className={styles.cardImage}
                />
                {item.isNew && <span className={styles.newBadge}>NEW</span>}
                {images.length > 1 && (
                    <div className={styles.miniSliderDots}>
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.miniDot} ${idx === currentImageIndex ? styles.activeMiniDot : ''}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <ul className={styles.cardMeta}>
                    <li>
                        <span className={styles.metaLabel}>WORK :</span> {item.workType}
                    </li>
                    <li>
                        <span className={styles.metaLabel}>클라이언트 :</span> {item.client}
                    </li>
                </ul>
            </div>
        </Link>
    );
}

// 포트폴리오 데이터 (명함 카테고리)
const allPortfolioItems = [
    {
        id: '1',
        title: '클래식 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-04.jpg',
        workType: '명함 디자인',
        client: '법률사무소',
        designer: 'PIUM',
        isBest: true,
        bestRank: 1,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '2',
        title: '세련된 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-05.jpg',
        workType: '명함 디자인',
        client: '건축사무소',
        designer: 'PIUM',
        isBest: true,
        bestRank: 2,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '3',
        title: '심플 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-06.jpg',
        workType: '명함 디자인',
        client: '컨설팅',
        designer: 'PIUM',
        isBest: true,
        bestRank: 3,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '4',
        title: '엘레강스 명함 디자인',
        thumbnail: '/portfolio/명함/무제-4-07.jpg',
        workType: '명함 디자인',
        client: '웨딩플래너',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '5',
        title: '마사지샵 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154722.png',
        workType: '명함 디자인',
        client: '야미마사지',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '6',
        title: '심플 비즈니스 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154730.png',
        workType: '명함 디자인',
        client: '비즈니스',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '7',
        title: '모던 기업 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154737.png',
        workType: '명함 디자인',
        client: '기업',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '8',
        title: '스타일리시 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154749.png',
        workType: '명함 디자인',
        client: '개인 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '9',
        title: '엘레강트 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154755.png',
        workType: '명함 디자인',
        client: '개인',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '10',
        title: '심플 화이트 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154801.png',
        workType: '명함 디자인',
        client: '프리랜서',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '11',
        title: '프로페셔널 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154806.png',
        workType: '명함 디자인',
        client: '컨설턴트',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '12',
        title: '클린 명함',
        thumbnail: '/portfolio/명함/스크린샷 2023-09-21 154811.png',
        workType: '명함 디자인',
        client: '스타트업',
        designer: 'PIUM',
        isBest: false,
        isNew: false,
        category: 'namecard',
    },
    {
        id: '13',
        title: 'AI 명함 디자인 A',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_3zrs5g3zrs5g3zrs.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '14',
        title: 'AI 명함 디자인 B',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_8ugzj38ugzj38ugz.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '15',
        title: 'AI 명함 디자인 C',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_9vcluc9vcluc9vcl.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '16',
        title: 'AI 명함 디자인 D',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_d0lfj7d0lfj7d0lf.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '17',
        title: 'AI 명함 디자인 E',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_eueepqeueepqeuee.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '18',
        title: 'AI 명함 디자인 F',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_77r1q777r1q777r1.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '19',
        title: 'AI 명함 디자인 G',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_m0307dm0307dm030.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '20',
        title: 'AI 명함 디자인 H',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_mfnsxlmfnsxlmfns.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '21',
        title: 'AI 명함 디자인 I',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_oeuop0oeuop0oeuo.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '22',
        title: 'AI 명함 디자인 J',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_qu3xxbqu3xxbqu3x.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    {
        id: '23',
        title: 'AI 명함 디자인 K',
        thumbnail: '/portfolio/명함/Gemini_Generated_Image_vq9p8avq9p8avq9p.png',
        workType: '명함 디자인',
        client: 'AI 프로젝트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'namecard',
    },
    // 홍보물품 - 쇼핑백
    {
        id: '24',
        title: '프리미엄 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_3rjg3b3rjg3b3rjg.png',
        workType: '홍보물품 디자인',
        client: '기업 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    {
        id: '25',
        title: '모던 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_6bmctp6bmctp6bmc.png',
        workType: '홍보물품 디자인',
        client: '브랜드 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    {
        id: '26',
        title: '클래식 쇼핑백 디자인',
        thumbnail: '/portfolio/쇼핑백/Gemini_Generated_Image_j0mon2j0mon2j0mo.png',
        workType: '홍보물품 디자인',
        client: '리테일 클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'goods',
    },
    // 전단지
    {
        id: '27',
        title: '전단지 디자인 A',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-23 111123.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '28',
        title: '전단지 디자인 B',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212137.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '29',
        title: '전단지 디자인 C',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212150.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '30',
        title: '전단지 디자인 D',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212158.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '31',
        title: '전단지 디자인 E',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212206.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '32',
        title: '전단지 디자인 F',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212222.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    {
        id: '33',
        title: '전단지 디자인 G',
        thumbnail: '/portfolio/전단지/스크린샷 2025-12-24 212348.png',
        workType: '전단지 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'flyer',
    },
    // 리플렛
    {
        id: '34',
        title: '감정노동자 보호 리플렛',
        thumbnail: '/portfolio/리플렛/감정노동자 보호.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '35',
        title: '깨끗하고 안전한 수돗물 리플렛',
        thumbnail: '/portfolio/리플렛/깨끗하고 안전한 수돗물.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '36',
        title: '녹용 사슴의 신비 리플렛',
        thumbnail: '/portfolio/리플렛/녹용 사슴의 신비.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '37',
        title: '늘봄오는날 리플렛',
        thumbnail: '/portfolio/리플렛/늘봄오는날.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '38',
        title: '다사랑 장애인 거주시설 이용안내',
        thumbnail: '/portfolio/리플렛/다사랑 장애인 거주시설 이용안내.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '39',
        title: '봉담읍둘레길 스토리 발굴',
        thumbnail: '/portfolio/리플렛/봉담읍둘레길 스토리 발굴.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '40',
        title: '실감미디어 체험교실 리플렛',
        thumbnail: '/portfolio/리플렛/실감미디어 체험교실.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '41',
        title: '일미 급식 리플렛',
        thumbnail: '/portfolio/리플렛/일미 급식 리플렛.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '42',
        title: '전주기전대학 일자리플러스센터',
        thumbnail: '/portfolio/리플렛/전주기전대학 일자리플러스센터.png',
        workType: '리플렛 디자인',
        client: '전주기전대학',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '43',
        title: '전주기전대학 혁신역량캠퍼스',
        thumbnail: '/portfolio/리플렛/전주기전대학 혁신역량캠퍼스.png',
        workType: '리플렛 디자인',
        client: '전주기전대학',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '44',
        title: '창립70주년 리플렛',
        thumbnail: '/portfolio/리플렛/창립70주년.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    {
        id: '58',
        title: '함께 줍깅 리플렛',
        thumbnail: '/portfolio/리플렛/함꼐 줍깅.png',
        workType: '리플렛 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'leaflet',
    },
    // 카드뉴스 • SNS
    {
        id: '45',
        title: '카드뉴스 디자인 A',
        thumbnail: '/portfolio/카드뉴스/스크린샷 2026-01-05 173250.png',
        workType: '카드뉴스 디자인',
        client: '클라이언트',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'cardnews',
    },
    // 카탈로그 • 책자 - 금천구아동친화예산서
    {
        id: '46',
        title: '금천구 아동친화 예산서',
        thumbnail: '/portfolio/카탈로그/금천구아동친화예산서/스크린샷 2026-01-06 143340.png',
        images: [
            '/portfolio/카탈로그/금천구아동친화예산서/스크린샷 2026-01-06 143340.png',
        ],
        workType: '카탈로그 디자인',
        client: '금천구',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'catalog',
    },
    // 카탈로그 • 책자 - 기배동 주민총회 (슬라이드)
    {
        id: '47',
        title: '기배동 주민총회',
        thumbnail: '/portfolio/카탈로그/기배동 주민총회/기배동주민총회.png',
        images: [
            '/portfolio/카탈로그/기배동 주민총회/기배동주민총회.png',
            '/portfolio/카탈로그/기배동 주민총회/기배동주민총회1.jpg',
            '/portfolio/카탈로그/기배동 주민총회/기배동주민총회2.jpg',
            '/portfolio/카탈로그/기배동 주민총회/기배동주민총회3.jpg',
            '/portfolio/카탈로그/기배동 주민총회/기배동주민총회4.jpg',
        ],
        workType: '카탈로그 디자인',
        client: '기배동',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'catalog',
    },
    // 카탈로그 • 책자 - 전주동초
    {
        id: '48',
        title: '전주동초 카탈로그',
        thumbnail: '/portfolio/카탈로그/전주동초/스크린샷 2026-01-06 115819.png',
        images: [
            '/portfolio/카탈로그/전주동초/스크린샷 2026-01-06 115819.png',
        ],
        workType: '카탈로그 디자인',
        client: '전주동초',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'catalog',
    },
    // 상패
    {
        id: '57',
        title: '63골프친구들 상패',
        thumbnail: '/portfolio/상패/63골프친구들/화면 캡처 2026-01-08 134204.png',
        workType: '상패 디자인',
        client: '63골프친구들',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'plaque',
    },
    // LOGO 디자인
    {
        id: '55',
        title: '라움뮤직 로고',
        thumbnail: '/portfolio/logo/라움뮤직/라움뮤직-01.jpg',
        images: [
            '/portfolio/logo/라움뮤직/라움뮤직-01.jpg',
            '/portfolio/logo/라움뮤직/라움뮤직-02.jpg',
        ],
        workType: 'LOGO 디자인',
        client: '라움뮤직',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'logo',
    },
    {
        id: '56',
        title: '하이안코리아 로고',
        thumbnail: '/portfolio/logo/하이안코리아/하이안코리아-02.jpg',
        workType: 'LOGO 디자인',
        client: '하이안코리아',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'logo',
    },
    // SIGN 디자인 - 새 이미지
    {
        id: '49',
        title: '소담김밥 네온사인',
        thumbnail: '/portfolio/sign/소담김밥네온.png',
        images: [
            '/portfolio/sign/소담김밥네온.png',
            '/portfolio/sign/소담김밥네온1.png',
        ],
        workType: 'SIGN 디자인',
        client: '소담김밥',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'neon',
    },
    {
        id: '50',
        title: '용당2동 사인',
        thumbnail: '/portfolio/sign/용당2동.png',
        images: [
            '/portfolio/sign/용당2동.png',
            '/portfolio/sign/용당2동1.png',
        ],
        workType: 'SIGN 디자인',
        client: '용당2동',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'signboard',
    },
    {
        id: '51',
        title: '청라김밥 사인',
        thumbnail: '/portfolio/sign/청라김밥.png',
        images: [
            '/portfolio/sign/청라김밥.png',
            '/portfolio/sign/청라김밥1.png',
        ],
        workType: 'SIGN 디자인',
        client: '청라김밥',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'signboard',
    },
    {
        id: '52',
        title: '청춘과일 사인',
        thumbnail: '/portfolio/sign/청춘과일.png',
        workType: 'SIGN 디자인',
        client: '청춘과일',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'signboard',
    },
    {
        id: '53',
        title: '통뼈감자탕 사인',
        thumbnail: '/portfolio/sign/통뼈감자탕.png',
        images: [
            '/portfolio/sign/통뼈감자탕.png',
            '/portfolio/sign/통뼈감자탕1.png',
        ],
        workType: 'SIGN 디자인',
        client: '통뼈감자탕',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'signboard',
    },
    {
        id: '54',
        title: '풍금식당 사인',
        thumbnail: '/portfolio/sign/풍금식당.png',
        workType: 'SIGN 디자인',
        client: '풍금식당',
        designer: 'PIUM',
        isBest: false,
        isNew: true,
        category: 'sign',
        subCategory: 'signboard',
    },
];

// 카테고리 필터 (점 포함 스타일)
const categories = [
    { id: 'all', label: '전체', hasDot: true },
    { id: 'logo', label: 'LOGO', hasDot: true },
    { id: 'sign', label: 'SIGN 디자인', hasDot: true },
    { id: 'banner', label: '현수막', hasDot: true },
    { id: 'catalog', label: '카탈로그 • 책자', hasDot: true },
    { id: 'leaflet', label: '리플렛', hasDot: true },
    { id: 'flyer', label: '전단지 • 포스터', hasDot: true },
    { id: 'cardnews', label: '카드뉴스 • SNS', hasDot: true },
    { id: 'namecard', label: '명함', hasDot: true },
    { id: 'plaque', label: '상패', hasDot: true },
    { id: 'goods', label: '홍보 물품', hasDot: false },
];

const ITEMS_PER_PAGE = 6;

// SIGN 서브 카테고리
const signSubCategories = [
    { id: 'all', label: '전체' },
    { id: 'signboard', label: '간판' },
    { id: 'neon', label: '네온' },
    { id: 'standing', label: '입간판' },
];

function PortfolioContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';

    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [activeSignSubCategory, setActiveSignSubCategory] = useState('all');

    // URL 파라미터 변경 시 카테고리 업데이트
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setActiveCategory(categoryParam);
            setCurrentPage(1);
        }
    }, [searchParams]);

    // 카테고리별 필터링
    let filteredItems = activeCategory === 'all'
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.category === activeCategory);

    // SIGN 카테고리 선택 시 서브 카테고리 필터링
    if (activeCategory === 'sign' && activeSignSubCategory !== 'all') {
        filteredItems = filteredItems.filter(item => (item as CatalogItem).subCategory === activeSignSubCategory);
    }

    const bestItems = filteredItems.filter(item => item.isBest);
    // 최신순 정렬 (ID 높은 순)
    const regularItems = filteredItems
        .filter(item => !item.isBest)
        .sort((a, b) => parseInt(b.id) - parseInt(a.id));

    // 페이지네이션 계산
    const totalPages = Math.ceil(regularItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = regularItems.slice(startIndex, endIndex);

    // 카테고리 변경 시 페이지 초기화
    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setActiveSignSubCategory('all');
        setCurrentPage(1);
    };

    // 서브 카테고리 변경
    const handleSignSubCategoryChange = (subCategoryId: string) => {
        setActiveSignSubCategory(subCategoryId);
        setCurrentPage(1);
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    // 카탈로그 슬라이더 상태
    const [catalogSlideIndex, setCatalogSlideIndex] = useState(0);
    const catalogItems = allPortfolioItems.filter(item => item.category === 'catalog');

    const goToCatalogSlide = (index: number) => {
        if (index >= 0 && index < catalogItems.length) {
            setCatalogSlideIndex(index);
        }
    };


    return (
        <Layout>
            <div className={styles.container}>
                {/* 페이지 헤더 */}
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>포트폴리오 •</h1>
                </div>

                {/* 카테고리 탭 (점 포함 스타일) */}
                <div className={styles.categoryTabs}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.activeTab : ''}`}
                        >
                            {cat.label}
                            {cat.hasDot && <span className={styles.dot}>•</span>}
                        </button>
                    ))}
                </div>

                {/* SIGN 서브 카테고리 탭 */}
                {activeCategory === 'sign' && (
                    <div className={styles.subCategoryTabs}>
                        {signSubCategories.map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => handleSignSubCategoryChange(sub.id)}
                                className={`${styles.subCategoryTab} ${activeSignSubCategory === sub.id ? styles.activeSubTab : ''}`}
                            >
                                {sub.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* 메인 포트폴리오 그리드 */}
                <section className={styles.portfolioSection}>
                    <div className={styles.sortBar}>
                        <span className={styles.itemCount}>
                            총 {regularItems.length}개 중 {startIndex + 1}-{Math.min(endIndex, regularItems.length)}개
                        </span>
                        <select className={styles.sortSelect}>
                            <option>최신순</option>
                            <option>인기순</option>
                            <option>이름순</option>
                        </select>
                    </div>

                    {/* 모든 카테고리 그리드 */}
                    <div className={styles.portfolioGrid}>
                        {currentItems.map((item) => (
                            <CatalogCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

                {/* 페이지네이션 */}
                <div className={styles.pagination}>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                    >
                        ‹‹ 처음
                    </button>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ‹ 이전
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            type="button"
                            className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        다음 ›
                    </button>
                    <button
                        type="button"
                        className={styles.pageButton}
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        끝 ››
                    </button>
                </div>
            </div >
        </Layout >
    );
}

export default function PortfolioPage() {
    return (
        <Suspense fallback={
            <Layout>
                <div className={styles.container}>
                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>포트폴리오 •</h1>
                    </div>
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#888' }}>
                        로딩 중...
                    </div>
                </div>
            </Layout>
        }>
            <PortfolioContent />
        </Suspense>
    );
}
