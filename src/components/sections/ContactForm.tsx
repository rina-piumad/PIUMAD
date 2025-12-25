// Section Components - ContactForm
// 문의 폼 컴포넌트

'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Select } from '../ui';
import styles from './ContactForm.module.css';

const serviceOptions = [
    { value: 'branding', label: '브랜딩 패키지' },
    { value: 'logo', label: '로고 디자인' },
    { value: 'naming', label: '네이밍' },
    { value: 'editing', label: '편집 디자인' },
    { value: 'website', label: '홈페이지 제작' },
    { value: 'etc', label: '기타' },
];

const budgetOptions = [
    { value: 'under50', label: '50만원 미만' },
    { value: '50-100', label: '50만원 ~ 100만원' },
    { value: '100-300', label: '100만원 ~ 300만원' },
    { value: '300-500', label: '300만원 ~ 500만원' },
    { value: 'over500', label: '500만원 이상' },
    { value: 'undecided', label: '미정' },
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // API 호출
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    service: '',
                    budget: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('Submit error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.success}>
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 연락드리겠습니다.</p>
                <Button onClick={() => setIsSuccess(false)}>새 문의하기</Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <Input
                    name="name"
                    label="이름"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    name="company"
                    label="회사명"
                    value={formData.company}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.row}>
                <Input
                    type="email"
                    name="email"
                    label="이메일"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="tel"
                    name="phone"
                    label="전화번호"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.row}>
                <Select
                    name="service"
                    label="문의 서비스"
                    options={serviceOptions}
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="선택해주세요"
                    required
                />
                <Select
                    name="budget"
                    label="예산"
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="선택해주세요"
                />
            </div>

            <Textarea
                name="message"
                label="문의 내용"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
            />

            <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
                문의하기
            </Button>
        </form>
    );
}
