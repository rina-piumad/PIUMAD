// Section Components - HeroSlider
// 카드형 히어로 슬라이더 (100gomidesign.com 스타일)

'use client';

import { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link?: string;
    badge?: string;
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
                {/* Slides */}
                <div className={styles.slidesWrapper}>
                    <div
                        className={styles.slides}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div key={slide.id} className={styles.slide}>
                                <a href={slide.link || '#'} className={styles.slideLink}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className={styles.slideImage}
                                        />
                                        {slide.badge && (
                                            <span className={styles.badge}>{slide.badge}</span>
                                        )}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                {slides.length > 1 && (
                    <>
                        <button
                            className={styles.prevButton}
                            onClick={goToPrev}
                            aria-label="이전"
                        >
                            ‹
                        </button>
                        <button
                            className={styles.nextButton}
                            onClick={goToNext}
                            aria-label="다음"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {/* Dots */}
            {slides.length > 1 && (
                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`슬라이드 ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
