import React from 'react'
import { MissionImg } from '../../assets/images/Index'
import { useMediaQuery } from 'react-responsive'


const MissionSection = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <>
            <section className={'missionContainer'}>
                <div className='coloredContainer'>
                    <p className={'semiBoldText f18'}>What is our mission?</p>
                    <p className={isTabletOrMobile ? 'semiBoldText f28' : 'semiBoldText f40'}>We are the inspiration
                        people called by God to
                        inspire and help our world.
                    </p>
                    <p className={'regularText f16 pb10'}>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
                        taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh
                        tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil
                        kumpulan teks dan mengacaknya untuk
                    </p>
                    <p className={'regularText f16'}>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
                        taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh
                        tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil
                        kumpulan teks dan mengacaknya untuk
                    </p>
                </div>
                <div style={{ padding: isTabletOrMobile ? '0' : '68px 0' }}>
                    <img src={MissionImg} style={{ left: isTabletOrMobile ? '0' : '-90px', width: '100%', height: '100%' }} />
                </div>
            </section>
            <section className={'missionContainer'} >
                <div style={{ order: isTabletOrMobile ? '2' : '1', padding: isTabletOrMobile ? '0' : '68px 0' }}>
                    <img src={MissionImg} style={{ right: isTabletOrMobile ? '0' : '-90px', width: '100%', height: '100%' }} />
                </div>
                <div className='coloredContainer' style={{ order: isTabletOrMobile ? '1' : '2' }}>
                    <p className={'semiBoldText f18'}>What is our mission?</p>
                    <p className={isTabletOrMobile ? 'semiBoldText f28' : 'semiBoldText f40'}>We are the inspiration
                        people called by God to
                        inspire and help our world.
                    </p>
                    <p className={'regularText f16 pb10'}>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
                        taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh
                        tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil
                        kumpulan teks dan mengacaknya untuk
                    </p>
                    <p className={'regularText f16'}>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
                        taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh
                        tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil
                        kumpulan teks dan mengacaknya untuk
                    </p>
                </div>
            </section>
        </>
    )
}

export default MissionSection