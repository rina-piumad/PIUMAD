// Layout Components - Footer
// 상세 푸터 컴포넌트 (100gomidesign.com 스타일)

import styles from './Footer.module.css';

interface BusinessInfo {
    company: string;
    ceo: string;
    businessNumber: string;
    address: string;
}

interface BankInfo {
    bank: string;
    account: string;
    holder: string;
}

interface Notice {
    text: string;
    date: string;
}

interface FooterProps {
    phone?: string;
    email?: string;
    kakao?: string;
    businessInfo?: BusinessInfo;
    bankInfo?: BankInfo;
    notices?: Notice[];
}

export default function Footer({
    phone,
    email,
    kakao,
    businessInfo,
    bankInfo,
    notices = []
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* 공지사항 */}
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>공지사항</h4>
                    <ul className={styles.noticeList}>
                        {notices.map((notice, index) => (
                            <li key={index} className={styles.noticeItem}>
                                <span className={styles.noticeText}>{notice.text}</span>
                                <span className={styles.noticeDate}>{notice.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 고객센터 */}
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>고객센터</h4>
                    {phone && (
                        <a href={`tel:${phone}`} className={styles.phone}>
                            {phone}
                        </a>
                    )}
                    <p className={styles.workHours}>
                        평일 09:00 ~ 18:00<br />
                        점심 12:00 ~ 13:00<br />
                        (주말/공휴일 휴무)
                    </p>
                </div>

                {/* 입금계좌 */}
                {bankInfo && (
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>입금계좌</h4>
                        <p className={styles.bankInfo}>
                            {bankInfo.bank}<br />
                            <strong>{bankInfo.account}</strong><br />
                            예금주: {bankInfo.holder}
                        </p>
                    </div>
                )}

                {/* 빠른상담 */}
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>빠른상담</h4>
                    <div className={styles.quickContact}>
                        {kakao && (
                            <a href={kakao} className={styles.kakaoButton} target="_blank" rel="noopener noreferrer">
                                <span className={styles.kakaoIcon}>💬</span>
                                카카오톡 상담
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className={styles.emailButton}>
                                <span className={styles.emailIcon}>✉️</span>
                                이메일 문의
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* 하단 정보 */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    {businessInfo && (
                        <div className={styles.businessInfo}>
                            상호: {businessInfo.company} | 대표: {businessInfo.ceo} |
                            사업자등록번호: {businessInfo.businessNumber} |
                            주소: {businessInfo.address}
                        </div>
                    )}
                    <div className={styles.copyright}>
                        © {currentYear} PIUM Design Agency. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
