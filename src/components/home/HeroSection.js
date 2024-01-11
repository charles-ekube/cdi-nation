import React, { useEffect, useState } from 'react';
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {


    const text = 'Welcome to The CDI Church';
    const delay = 200;
    const infinite = true;

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);


    return (
        <section className={'heroSection'}>
            <header>
                <div>
                    <h2 className={'boldText'}>Welcome to the Cdi Church</h2>
                    <p className={'semiBoldText'}>We are the inspiration people who are been raised by God to take over nations, cities, territories etc.</p>
                </div>
                <div className={'heroInputContainer'}>
                    <input placeholder='Enter your email address' />
                    <button>Get notified</button>
                </div>
            </header>
            <HeroCarousel />
        </section>
    )
}

export default HeroSection;

