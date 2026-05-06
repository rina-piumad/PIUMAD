'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout';
import styles from './page.module.css';

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<'member' | 'non-member'>('member');
    const [saveId, setSaveId] = useState(false);
    const [secureLogin, setSecureLogin] = useState(true);

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>로그인</h1>

                <div className={styles.tabs}>
                    <button 
                        className={`${styles.tabButton} ${activeTab === 'member' ? styles.active : ''}`}
                        onClick={() => setActiveTab('member')}
                    >
                        회원
                    </button>
                    <button 
                        className={`${styles.tabButton} ${activeTab === 'non-member' ? styles.active : ''}`}
                        onClick={() => setActiveTab('non-member')}
                    >
                        비회원(주문조회)
                    </button>
                </div>

                {activeTab === 'member' && (
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>회원로그인</h2>
                        
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="아이디" className={styles.input} />
                            <input type="password" placeholder="패스워드" className={styles.input} />
                        </div>

                        <div className={styles.options}>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    className={styles.checkbox}
                                    checked={saveId}
                                    onChange={(e) => setSaveId(e.target.checked)}
                                />
                                아이디 저장
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    className={styles.checkbox}
                                    checked={secureLogin}
                                    onChange={(e) => setSecureLogin(e.target.checked)}
                                />
                                <span className={styles.lockIcon}>🔒</span>
                                보안접속
                            </label>
                        </div>

                        <button className={styles.loginButton}>로그인</button>

                        <div className={styles.links}>
                            <a href="#" className={styles.link}>아이디 찾기</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.link}>비밀번호 찾기</a>
                            <span className={styles.divider}>|</span>
                            <a href="#" className={styles.link}>회원 가입</a>
                        </div>

                        <div className={styles.nonMemberSection}>
                            <p className={styles.nonMemberText}>
                                비회원님도 상품구매가 가능하나 다양한<br />
                                회원혜택에서 제외됩니다.
                            </p>
                            <button className={styles.nonMemberButton}>비회원 구매하기</button>
                        </div>
                    </div>
                )}

                {activeTab === 'non-member' && (
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>비회원(주문조회)</h2>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="주문자명" className={styles.input} />
                            <input type="text" placeholder="주문번호" className={styles.input} />
                        </div>
                        <button className={styles.loginButton}>주문조회</button>
                    </div>
                )}
            </div>
        </Layout>
    );
}
