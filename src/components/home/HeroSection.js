import React from 'react';
import HeroCarousel from './HeroCarousel';
import CustomInput from '../../utils/CustomInput';
import Button from '../../utils/CustomButton';


const HeroSection = () => {
    // const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })

    // const text = 'Welcome to The CDI Church';
    // const delay = 200;
    // const infinite = true;

    // const [currentText, setCurrentText] = useState('');
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     let timeout;

    //     if (currentIndex <= text.length) {
    //         timeout = setTimeout(() => {
    //             setCurrentText(prevText => prevText + text[currentIndex]);
    //             setCurrentIndex(prevIndex => prevIndex + 1);
    //         }, delay);

    //     } else if (infinite) { // ADD THIS CHECK
    //         setCurrentIndex(0);
    //         setCurrentText('');
    //     }

    //     return () => clearTimeout(timeout);
    // }, [currentIndex, delay, infinite, text]);



    return (
        <section className={'heroSection'}>
            <header>
                <div>
                    <h2 className={`boldText`}>Welcome to  <span>the Cdi Church</span></h2>
                    <p className={'semiBoldText'}>
                        We are the inspiration people who are been raised by God to take over nations, cities, territories etc.
                    </p>
                </div>
            </header>
            <HeroCarousel />
        </section>
    )
}

export default HeroSection;

