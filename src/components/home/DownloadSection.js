import React from 'react'
import { AppStore, PlayStore } from '../../assets/images/Index'
import { useMediaQuery } from 'react-responsive'

const DownloadSection = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return (
        <section className={'downloadSection'}>
            <h2 className={'boldText f40 pb48'} style={{ color: '#F5F5F5', width: isDesktopOrLaptop ? '600px' : '100%' }}>
                Download the Inspiration App
                for a better experience
            </h2>
            <p className={'semiBoldText f16 pb48'} style={{ color: '#EEEEEE', width: isDesktopOrLaptop ? '600px' : '100%' }}>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
                taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh
                tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil
            </p>
            <div className={'flexRow alignCenter flexWrap'} style={{ gap: '30px' }}>
                <img src={PlayStore} />
                <img src={AppStore} />
            </div>
        </section>
    )
}

export default DownloadSection