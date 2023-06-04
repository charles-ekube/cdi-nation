import React from 'react'
import { Cell, Prayer, Worship } from '../../assets/images/Index'
import { useMediaQuery } from 'react-responsive'

const DiscoverSection = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <>
            <section className={'discoveryContainer'}>
                <div className={'textCenter'}>
                    <h2 className={isTabletOrMobile ? 'boldText f28' : 'boldText f50'}>Discover friends, family, and purpose</h2>
                    <p className={'regularText f16'}>Check out the different ways to get involved at BACC</p>
                </div>
                <div>
                    <img src={Worship} />
                    <img src={Cell} />
                    <img src={Prayer} />
                </div>
            </section>
        </>
    )
}

export default DiscoverSection