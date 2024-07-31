import React from 'react';
import NavBar from '../../widgets/NavBar';
import HeroSection from '../../components/home/HeroSection';
import RegistrationSection from '../../components/home/RegistrationSection';


const Home = () => {
    return (
            <>
                <NavBar/>
                <HeroSection/>
                <RegistrationSection/>
            </>
    )
}

export default Home
