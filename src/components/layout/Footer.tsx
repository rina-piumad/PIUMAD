// Layout Components - Footer
// 상세 푸터 컴포넌트 (100gomidesign.com 스타일)

import styles from './Footer.module.css';

interface BusinessInfo {
    company: string;
    ceo: string;
    businessNumber: string;
    address: string;
    telecom?: string;
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
                        {notices && notices.length > 0 ? (
                            notices.map((notice, index) => (
                                <li key={index} className={styles.noticeItem}>
                                    <span className={styles.noticeText}>{notice.text}</span>
                                    <span className={styles.noticeDate}>{notice.date}</span>
                                </li>
                            ))
                        ) : (
                            <li className={styles.noticeItem}>
                                <span className={styles.noticeText}>등록된 공지사항이 없습니다.</span>
                            </li>
                        )}
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
                            {businessInfo.address} | <strong className={styles.dimmed}>대표:</strong> {businessInfo.ceo} | <strong className={styles.dimmed}>전화:</strong> {phone}<br />
                            <strong className={styles.dimmed}>상호:</strong> {businessInfo.company} | <strong className={styles.dimmed}>사업자등록번호:</strong> {businessInfo.businessNumber} | <strong className={styles.dimmed}>통신판매업신고:</strong> {businessInfo.telecom}<br />
                            <strong className={styles.dimmed}>E-mail:</strong> {email}
                        </div>
                    )}
                    <div className={styles.copyright}>
                        Copyright © PIUM Design Agency. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
