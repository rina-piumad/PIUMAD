// Section Components - HeroSlider
// 카드형 히어로 슬라이더 (100gomidesign.com 스타일)

'use client';

import { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    link?: string;
    badge?: string;
    color?: string;
}

interface HeroSliderProps {
    slides: Slide[];
    autoPlay?: boolean;
    interval?: number;
}

export default function HeroSlider({
    slides,
    autoPlay = true,
    interval = 5000,
}: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 자동 슬라이드
    useEffect(() => {
        if (!autoPlay || slides.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    if (slides.length === 0) return null;

    return (
        <section className={styles.sliderSection}>
            <div className={styles.sliderContainer}>
                {slides.length > 1 && (
                    <>
                        <button className={styles.prevButton} onClick={goToPrev}>‹</button>
                        <button className={styles.nextButton} onClick={goToNext}>›</button>
                    </>
                )}
                {/* Slides */}
                <div className={styles.slidesWrapper} style={{ '--current-index': currentIndex } as React.CSSProperties}>
                    <div className={styles.slides}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}>
                                <div className={`${styles.slideContent} ${!slide.title ? styles.imageOnlySlide : ''}`} style={{ background: slide.color || '#F8F8F8' }}>
                                    {slide.title && (
                                        <div className={styles.textContent}>
                                            {slide.badge && <span className={styles.badge}>{slide.badge}</span>}
                                            <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
                                            <h2 className={styles.slideTitle}>{slide.title}</h2>
                                            <p className={styles.slideDescription}>{slide.description}</p>
                                            {slide.link && (
                                                <a href={slide.link} className={styles.moreButton}>
                                                    보러가기
                                                </a>
                                            )}
                                        </div>
                                    )}
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={slide.image}
                                            alt={slide.title || 'Slide Image'}
                                            className={styles.slideImage}
                                            loading="eager"
                                        />
                                    </div>
                                    <div className={styles.fractionPagination}>
                                        {index + 1} / {slides.length}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
