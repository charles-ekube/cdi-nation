import React, { useEffect, useState } from 'react';

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
            <div>
                <div>
                    <h2 className={'boldText'}>{currentText}!</h2>
                    <p className={'semiBoldText'}>We are the inspiration people who are been raised by God to take over nations, cities, territories etc.</p>
                </div>
                <div className={'heroInputContainer'}>
                    <input placeholder='Enter your email address' />
                    <button>Get notified</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;

