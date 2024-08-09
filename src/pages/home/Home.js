import React, { useRef } from 'react';
import NavBar from '../../widgets/NavBar';
import HeroSection from '../../components/home/HeroSection';
import RegistrationSection from '../../components/home/RegistrationSection';


const Home = () => {

    const registrationSectionRef = useRef(null);

    const scrollToRegistrationSection = () => {
        registrationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
            <>
                <NavBar show register={scrollToRegistrationSection}/>
                <HeroSection/>
                <RegistrationSection scroll={registrationSectionRef}/>
            </>
    )
}

export default Home
