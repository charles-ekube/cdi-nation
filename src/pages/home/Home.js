import React from 'react';
import '../../assets/styles/textStyles.css';
import '../../assets/styles/fontStyles.css';
import '../../assets/styles/generalStyles.css';
import '../../assets/styles/homeStyles.css';
import NavBar from '../../widgets/NavBar';
import Footer from '../../widgets/Footer';
import HeroSection from '../../components/home/HeroSection';
import MissionSection from '../../components/home/MissionSection';
import DiscoverSection from '../../components/home/DiscoverSection';
import TeachingsSection from '../../components/home/TeachingsSection';
import ActivitiesSection from '../../components/home/ActivitiesSection';
import DownloadSection from '../../components/home/DownloadSection';
import GetStartedSection from '../../components/home/GetStartedSection';


const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            {/* <MissionSection /> */}
            {/*
           
            <DiscoverSection />
            <TeachingsSection />
            <ActivitiesSection />
            <DownloadSection />
            <GetStartedSection />
            <Footer /> */}
        </>
    )
}

export default Home