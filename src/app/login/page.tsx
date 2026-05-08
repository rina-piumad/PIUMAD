'use client';

import { Layout } from '@/components/layout';
import styles from './page.module.css';

export default function LoginPage() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>로그인</h1>
                
                <div className={styles.loginBox}>
                    {/* Member Login Section */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>회원 로그인</h2>
                        
                        <div className={styles.loginFormRow}>
                            <div className={styles.inputStack}>
                                <input type="text" placeholder="아이디" className={styles.input} />
                                <input type="password" placeholder="비밀번호" className={styles.input} />
                            </div>
                            <button className={styles.loginSubmitBtn}>로그인</button>
                        </div>
                        
                        <div className={styles.saveIdWrapper}>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" className={styles.checkbox} />
                                <span className={styles.checkboxText}>아이디 저장</span>
                            </label>
                        </div>

                        <div className={styles.socialLogins}>
                            <button className={styles.naverBtn}>
                                <div className={styles.socialIconWrapper}>
                                    <span className={styles.naverIcon}>N</span>
                                </div>
                                <span>네이버 아이디로 로그인</span>
                            </button>
                            <button className={styles.kakaoBtn}>
                                <div className={styles.socialIconWrapper}>
                                    <svg className={styles.kakaoIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C7.03 4 3 7.15 3 11.03c0 2.5 1.57 4.7 4 5.9l-1 3.5 4.1-2.7c.6.2 1.25.3 1.9.3 4.97 0 9-3.14 9-7.03S16.97 4 12 4z" fill="#3A1D1D"/>
                                    </svg>
                                </div>
                                <span>카카오 아이디로 로그인</span>
                            </button>
                        </div>

                        <div className={styles.actionLinks}>
                            <button className={styles.signupBtn}>회원가입</button>
                            <button className={styles.findBtn}>아이디 찾기</button>
                            <button className={styles.findBtn}>비밀번호 찾기</button>
                        </div>
                    </div>

                    {/* Non-member Section */}
                    <div className={styles.section} style={{ marginTop: '70px' }}>
                        <h2 className={styles.sectionTitle}>비회원 주문조회</h2>
                        
                        <div className={styles.loginFormRow}>
                            <div className={styles.inputStack}>
                                <input type="text" placeholder="주문자명" className={styles.input} />
                                <input type="text" placeholder="주문번호" className={styles.input} />
                            </div>
                            <button className={styles.orderInquiryBtn}>확인</button>
                        </div>
                        
                        <p className={styles.infoText}>
                            <span className={styles.infoIcon}>ⓘ</span>
                            주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
